import React from 'react';
import './day.css';

export default (props) => {

  const HalfDay = (props) => {
    return (
      <div className="period">
        <div className="period-header large-2 large-show-inlineblock">
          {props.period}
        </div>
        <div className="period-allocation large-10 large-show-inlineblock"></div>
      </div>
    )
  }


  return (
    <div className="rota-day blue">
      <p className="day-header">{props.workDay}</p>
      <div classname="half-day">
        <HalfDay period="AM"/>
        <HalfDay period="PM"/>
      </div>
      <div classname="half-day">

      </div>
    </div>
  )
}
