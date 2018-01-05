import React from 'react';
import './day.css';

export default (props) => {

  const generateDev = (period) => {
    if (props.periods[period].allocation === null) {
      return "empty"
    }
    else {
      if (props.periods[period].allocation.devName === null) {
        return props.periods[period].allocation.devKey
      }
      else {
        return props.periods[period].allocation.devName
      }
    }
  }

  const AMDev = generateDev(0)
  const PMDev = generateDev(1)

  const WholeDay = () => {
    return (
      <div className="half-day-wrapper">
        <div className="period bottom-border">
          <div className="period-header AM">
            <p>AM</p>
          </div>
          <div className="period-allocation large-12 large-show-inlineblock">
            <p>{AMDev}</p>
          </div>
        </div>

        <div className="period">
          <div className="period-header PM ">
            <p>PM</p>
          </div>
          <div className="period-allocation large-12 large-show-inlineblock">
            <p>{PMDev}</p>
          </div>
        </div>
      </div>
    )

  }

  return (
    <div className="rota-day">
      <p className="day-title bottom-border">{props.title}</p>
        <WholeDay />
    </div>
  )
}
