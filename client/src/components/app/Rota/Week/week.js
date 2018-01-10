import React from 'react';
import './week.css';
import Day from './Day/day';

export default (props) => {

  const schedule = props.weekRota.schedule;

  const DayList = schedule.map((day, index) => {
    return (
      <Day
        key={index}
        title={day.dayTitle}
        periods={day.periods}
        devList={props.devList}
      />
    )
})


  return (
    <div className={"rota-week large-6 large-show-inlineblock fill-height" + " week-"+props.weekRota.weekNumber.toLowerCase()}>
      <h3 className="week-header">{ "Week " + props.weekRota.weekNumber }</h3>
      <div className="days-wrapper">
        {DayList}
      </div>
    </div>
  )
}
