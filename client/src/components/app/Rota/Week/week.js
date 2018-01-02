import React from 'react';
import './week.css';
import Day from './Day/day';

export default (props) => {
  return (
    <div className="rota-week large-6 large-show-inlineblock fill-height">
      <h3 className="week-header">{props.weekNumber}</h3>
      <div className="days-wrapper">
        <Day workDay="Monday"/>
        <Day workDay="Tuesday"/>
        <Day workDay="Wednesday"/>
        <Day workDay="Thursday"/>
        <Day workDay="Friday"/>
      </div>
    </div>
  )
}
