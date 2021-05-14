## ReactGauge
A fully customizable Gauge Chart / Speedometer based on D3 and React.

## Features
This Gauge chart is based on React utilizing the Mendix Pluggable widgets API and the D3 charting library for creating a fully customizable Gauge chart. 

This widget is a rewrite of the original version based on Dojo: https://marketplace.mendix.com/link/component/8677

## Usage
* Step 1: Create a non-persistent GaugeWrapper entity in which at least three Decimal type attributes should be present: Value, MinValue and MaxValue. 
* Step 2: Add a dataview to your page, populated by a datasource microflow that creates this GaugeWrapper entity. 
* Step 3: Configure the widget. 
	- Below only the settings that could need a bit more elaboration are added. 
	- For the rest the description in the widget settings should be descriptive enough.

WIDGET SETTINGS
General - Appearance
- Size: set the size of the Gauge chart. Can either be in different dimension (pixel, percentage, etc), see 'Dimension Unit';
- Dimension: determine the dimension of the size here, so typical selection would be either px (pixel) or pc (percentage);
- Fluid Width: if set to 'Yes', will take adjust itself to the full parent container width;

General - data source
- Value: select the Decimal attribute to display;
- Minimum Value: select the Decimal attribute value at which the gauge chart should start;
- Maximum Value: select the Decimal attribute value at which the gauge chart should end;

General - Label
- Label Formatting: with this setting it is possible to add text to the value displayed below the needle. The actual value is referred to as ${value}, which is also the default value. Text can be added before and after the value, i.e. 'Current Value: ${value} %'

Arc - Custom Ranges
- Color Gauge Sections: Set colors per sections of the gauge. Irrelevant of what minimum and maximum value are set, stick to a percentage from 0 to 100 here. Range Start: The starting percentage of this section of the gauge Range End: The ending percentage of this section of the gauge Color: The color for the section. Example colors: Red: #F02828, Orange: #FE6A00, Yellow: #E8DD11, Lightgreen: #82E042, Green: #089F50

Arc - Gradient
- Gradient Color: if a fluid color range is needed, set this option to 'Yes'. If set to 'Yes' the widget will also pick up the values selected at 'Gradient No of Segments' and 'Gradient Max Segment Labels'


## Demo project
[link to sandbox]

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution
This widget uses the react-d3-speedometer library, see https://www.npmjs.com/package/react-d3-speedometer for more details.
