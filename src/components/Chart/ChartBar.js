import React from "react";

import "./ChartBar.css";


const ChartBar = props => {
    let barFillHeight = '0px ';
    if (props.maxValue > 0){
        barFillHeight = Math.round( (props.value / props.maxValue) * 100) + 'px';
    }
 console.log(props.lable + " -"+barFillHeight);
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style= {{height:barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.lable}</div>
        </div>
    )
}

export default ChartBar
