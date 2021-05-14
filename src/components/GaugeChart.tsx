import { Component, createElement } from "react";
import ReactSpeedometer , { Transition }from "react-d3-speedometer";

export interface GaugeChartProps {
    size: number;
    dimensionUnit:string;
    fluidWidth:boolean;
    value: number;
    currentValueText: string;
    minValue: number;
    maxValue: number;
    colorArray: string[];
    arcGradientNoOfSegments: number | undefined;
    arcGradientMaxSegmentLabels: number | undefined;
    segmentArray: number[] | undefined;
    ringWidth:number;
    needleColor:string;
    needleHeightRatio:number;
    textColor:string;
    paddingLabelVertical: number;
    needleTransition:Transition;
    needleTransitionDuration:number;
}

export class GaugeChartContainer extends Component<GaugeChartProps> {
    render() {
        return (                
                <ReactSpeedometer
                    maxValue={this.props.maxValue}
                    value={this.props.value}
                    currentValueText={this.props.currentValueText}
                    paddingVertical={this.props.paddingLabelVertical}
                    fluidWidth={this.props.fluidWidth}
                    minValue={this.props.minValue}
                    textColor={this.props.textColor}
                    needleColor={this.props.needleColor}
                    height={this.props.size}
                    width={this.props.size}
                    dimensionUnit={this.props.dimensionUnit}
                    segments={this.props.arcGradientNoOfSegments}
                    maxSegmentLabels={this.props.arcGradientMaxSegmentLabels}
                    startColor={this.props.colorArray[0]}
                    endColor={this.props.colorArray[4]}
                    segmentColors={this.props.arcGradientNoOfSegments ? undefined: this.props.colorArray}
                    customSegmentStops={this.props.arcGradientNoOfSegments! ? undefined : this.props.segmentArray}
                    ringWidth={this.props.ringWidth}
                    needleHeightRatio={this.props.needleHeightRatio}
                    needleTransition={this.props.needleTransition}
                    needleTransitionDuration={this.props.needleTransitionDuration}
                />                

        )
    }
}

