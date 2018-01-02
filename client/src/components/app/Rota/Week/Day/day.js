import React from 'react';
import './day.css';

export default (props) => {

  const FullDay = props.periods.map((period, index) => {
    const periodIsAM = period.periodTitle === "AM";
    return (
      <div key={index} className={ periodIsAM ? "period bottom-border" : "period" }>
        <div className={ periodIsAM ? "period-header AM" : "period-header PM " } >
          <p>{period.periodTitle}</p>
        </div>
        <div className="period-allocation large-12 large-show-inlineblock">
          <p>{period.allocation}</p>
        </div>
      </div>
    )
  })

  return (
    <div className="rota-day">
      <p className="day-title bottom-border">{props.title}</p>
      <div className="half-day-wrapper">
        {FullDay}
      </div>
    </div>
  )
}
