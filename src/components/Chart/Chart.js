import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {

    const dataPointValue = props.dataPoints.map( dataPoint => dataPoint.value);
    console.log("chart data"+ dataPointValue);
    let totalMaximum = Math.max(...dataPointValue);

    return (
        <div className="chart">
            {
                props.dataPoints.map( 
                    dataPoint => 
                    <ChartBar key={dataPoint.lable}  
                    value={dataPoint.value} 
                    valueMax={totalMaximum} 
                    lable={dataPoint.lable}/> )
            }
        </div>
    )
}

export default Chart;
