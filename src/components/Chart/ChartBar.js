import React from "react";

import "./ChartBar.css";


const ChartBar = props => {
    let barFillHight = "0%";

    if (props.maxValue > 0)
        barFillHight = Math.round(props.value / props.maxValue * 100) + "%";
   
    return (
        <div className="chart-bar">
            <div className="char-bar__enner">
                <div className="chart-bar__fill" style = {{height:barFillHight}}>

                </div>
                <div className="chart-bar__lable">{props.lable}</div>
            </div>
        </div>
    )
}

export default ChartBar
