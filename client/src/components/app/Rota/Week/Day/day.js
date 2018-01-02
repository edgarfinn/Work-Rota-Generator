import React from 'react';
import './day.css';

export default (props) => {

  const FullDay = props.periods.map((period) => {
    const periodIsAM = period.periodTitle === "AM";
    console.log(period);
    return (
      <div className={ periodIsAM ? "period bottom-border" : "period" }>
        <div className={ periodIsAM ? "period-header AM" : "period-header PM " } >
          <p>{period.periodTitle}</p>
        </div>
        <div className="period-allocation large-12 large-show-inlineblock">
          <p>{period.allocation}</p>
        </div>
      </div>
    )
  })





  const HalfDay = (props) => {

    const periodIsAM = props.period === "AM";

    return (

      <div className={ periodIsAM ? "period bottom-border" : "period" }>
        <div className={ periodIsAM ? "period-header AM" : "period-header PM " }>
          {props.period}
        </div>
        <div className="period-allocation large-12 large-show-inlineblock">{props.allocatedDev}
        </div>
      </div>

    )
  }


  return (
    <div className="rota-day">
      <p className="day-title bottom-border">{props.title}</p>
      <div className="half-day-wrapper">
        {FullDay}
        {/* <HalfDay period="AM"/>
        <HalfDay period="PM"/> */}
      </div>
      <div className="half-day">

      </div>
    </div>
  )
}
