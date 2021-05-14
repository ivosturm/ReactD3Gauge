import { Component, createElement } from "react";
import { GaugeChartContainer } from "./components/GaugeChart";
import { ValueStatus } from "mendix";

import { RangeArrayType, ReactGaugeContainerProps } from "../typings/ReactGaugeProps";

import "./ui/ReactGauge.css";
import { Transition } from "react-d3-speedometer";

export default class ReactGauge extends Component<ReactGaugeContainerProps> {
    executeAction(){
        this.props.onClickAction ? this.props.onClickAction.execute() : null;
    }
    roundWithPrecision(value : number, precision : number){
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
    checkRangeSections(rangeArray : RangeArrayType[]){
        // check if range starts with 0 and ends with 100
        let rangeMessage = "",
        maxFound = false,
        rangeEnd = 0;

        for (var k = 0; k < rangeArray.length; k++) {

            // check if first object starts at zero
            if (k === 0) {
                if (rangeArray[k].rangeStart != 0) {
                    rangeMessage = 'The first Range should start at 0. Please correct the widget settings! ';
                }
            }
            // check if subsequent objects are joining
            else {
                if (rangeEnd != rangeArray[k].rangeStart) {
                    rangeMessage += 'Subsequent ranges should start at the end of the previous range. Please correct the widget settings! ';
                }
            }
            // store rangeEnd so can be used in next iteration to check the rangeStart;	
            rangeEnd = rangeArray[k].rangeEnd;

            if (rangeArray[k].rangeEnd == 100) {
                maxFound = true;
            }
        }

        if (maxFound == false) {
            rangeMessage += 'The last range should end at 100. Please correct the widget settings!';
        }

        return rangeMessage;
    }
    render() {
        // check if data of mendix object already available. If not, don't render...
        if (!this.props.valueAttr || this.props.valueAttr.status !== ValueStatus.Available){
            return null;
        }
        // sort range array on start
        let rangeArraySorted : RangeArrayType[] = this.props.rangeArray.sort(function (a, b) {
            return a.rangeStart - b.rangeStart;
          });
        // check if ranges start at 0 end at 100 and are adjacent 
        const rangeCheckMessage = this.checkRangeSections(rangeArraySorted); 
        if (rangeCheckMessage !== ""){
            return (
                <div
                    className={"react-gauge-chart-error-div alert alert-danger mx-validation-message"}
                    style={{width : this.props.width + 'px',height : (0.6 * this.props.width) + 'px'}}
                >Gauge could not be generated as Gauge Sections are ill formatted! Error message: {rangeCheckMessage}</div>
            )

        }
        // create color array and segment array
        let colorArray : string[] = [],
        segmentArray : number[] = [],
        max = 100,
        min = 0;
        this.props.maxValueAttr.value ? max = Number(this.props.maxValueAttr.value) : 100;
        this.props.minValueAttr.value ? min = Number(this.props.minValueAttr.value) : 0;

        segmentArray.push(((rangeArraySorted[0].rangeStart) / 100) * (max - min) + min);
        rangeArraySorted.forEach(function(entry){
            colorArray.push(entry.colorSection);
            segmentArray.push((entry.rangeEnd / 100) * (max - min) + min);
        });
        // add pointer cursor if on click behavior has been set
        let cursor = 'default';
        if (this.props.onClickAction){
            cursor='pointer';
        }
        const style = {
            cursor:cursor
        } 
        // configure label value (rounding + text)
        let value = Number(this.props.valueAttr.value);
        if (this.props.rounding) {
            value = this.roundWithPrecision(value, 0);
        }
        let currentValueText = this.props.currentValueText;
        if (!this.props.displayValue) { currentValueText = ""}; 

        // configure animation (map from XML enum to speedometer library enum)
        const enumKey = this.props.needleTransition;
        const needleTransition = Transition[enumKey];
  
        return <div
                onClick={() => this.executeAction()}
                style={style}      
                ><GaugeChartContainer 
                    width={this.props.width}
                    dimensionUnit={this.props.dimensionUnit}
                    fluidWidth={this.props.fluidWidth}
                    value={value}
                    currentValueText={currentValueText}
                    minValue={min}
                    maxValue={max}
                    colorArray={colorArray}
                    segmentArray={this.props.arcGradientColor ? undefined : segmentArray}
                    arcGradientMaxSegmentLabels={this.props.arcGradientColor ? this.props.arcGradientMaxSegmentLabels : undefined}
                    arcGradientNoOfSegments={this.props.arcGradientColor ? this.props.arcGradientNoOfSegments : undefined}
                    ringWidth={this.props.arcWidth}
                    needleColor={this.props.needleColor}
                    needleHeightRatio={this.props.needleHeightRatio / 100}
                    paddingLabelVertical={this.props.paddingLabelVertical}
                    textColor={this.props.textColor}
                    needleTransition={needleTransition}
                    needleTransitionDuration={this.props.needleTransitionDuration}
                />
                </div>
    }
}
