import React from 'react';
import getDevName from '../../../Helpers/lookup_dev';

import './day.css';

export default (props) => {

  const AMDev = () => {
    if(props.periods[0].allocation !== null) {
      const AMDevKey = props.periods[0].allocation.devKey;
      return getDevName(AMDevKey, props.devList) || AMDevKey;
    }
    else {
      return "empty"
    }
  }
  const PMDev = () => {
    if(props.periods[1].allocation !== null) {
      const PMDevKey = props.periods[1].allocation.devKey;
      return getDevName(PMDevKey, props.devList) || PMDevKey;
    } else {
      return "empty"
    }
  }

  const WholeDay = () => {
    return (
      <div className="half-day-wrapper">
        <div className="period bottom-border">
          <div className="period-header AM">
            <p>AM</p>
          </div>
          <div className="period-allocation large-12 large-show-inlineblock">
            <p><AMDev /></p>
          </div>
        </div>

        <div className="period">
          <div className="period-header PM ">
            <p>PM</p>
          </div>
          <div className="period-allocation large-12 large-show-inlineblock">
            <p><PMDev /></p>
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
