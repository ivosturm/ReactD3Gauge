/**
 * This file was generated from ReactGauge.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export interface RangeArrayType {
    rangeStart: number;
    rangeEnd: number;
    colorSection: string;
}

export type NeedleTransitionEnum = "easeLinear" | "easeQuadInOut" | "easeCubicInOut" | "easeSinInOut" | "easeExpInOut" | "easeCircleInOut" | "easeElasticInOut" | "easeBackInOut" | "easeBounceInOut";

export interface RangeArrayPreviewType {
    rangeStart: number | null;
    rangeEnd: number | null;
    colorSection: string;
}

export interface ReactGaugeContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    width: number;
    dimensionUnit: string;
    fluidWidth: boolean;
    valueAttr: EditableValue<BigJs.Big>;
    minValueAttr: EditableValue<BigJs.Big>;
    maxValueAttr: EditableValue<BigJs.Big>;
    displayValue: boolean;
    rounding: boolean;
    textColor: string;
    currentValueText: string;
    paddingLabelVertical: number;
    arcWidth: number;
    rangeArray: RangeArrayType[];
    arcGradientColor: boolean;
    arcGradientNoOfSegments: number;
    arcGradientMaxSegmentLabels: number;
    needleColor: string;
    needleHeightRatio: number;
    needleTransition: NeedleTransitionEnum;
    needleTransitionDuration: number;
    onClickAction?: ActionValue;
}

export interface ReactGaugePreviewProps {
    class: string;
    style: string;
    width: number | null;
    dimensionUnit: string;
    fluidWidth: boolean;
    valueAttr: string;
    minValueAttr: string;
    maxValueAttr: string;
    displayValue: boolean;
    rounding: boolean;
    textColor: string;
    currentValueText: string;
    paddingLabelVertical: number | null;
    arcWidth: number | null;
    rangeArray: RangeArrayPreviewType[];
    arcGradientColor: boolean;
    arcGradientNoOfSegments: number | null;
    arcGradientMaxSegmentLabels: number | null;
    needleColor: string;
    needleHeightRatio: number | null;
    needleTransition: NeedleTransitionEnum;
    needleTransitionDuration: number | null;
    onClickAction: {} | null;
}
