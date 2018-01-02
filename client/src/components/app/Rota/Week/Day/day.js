import React from 'react';
import './day.css';

export default (props) => {

  const HalfDay = (props) => {

    const periodIsAM = props.period === "AM";

    return (
      <div className={ periodIsAM ? "period bottom-border" : "period" }>
        <div className="period-header large-2 large-show-inlineblock">
          {props.period}
        </div>
        <div className="period-allocation large-10 large-show-inlineblock"></div>
      </div>
    )
  }


  return (
    <div className="rota-day">
      <p className="day-title bottom-border">{props.workDay}</p>
      <div className="half-day-wrapper">
        <HalfDay period="AM"/>
        <HalfDay period="PM"/>
      </div>
      <div className="half-day">

      </div>
    </div>
  )
}
