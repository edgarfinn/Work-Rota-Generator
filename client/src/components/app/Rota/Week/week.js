import React from 'react';
import './week.css';
import Day from './Day/day';

export default (props) => {
  return (
    <div className="rota-week large-6 large-show-inlineblock">
      <h3>{props.weekNumber}</h3>
      <Day workDay="Monday"/>
      <Day workDay="Tuesday"/>
      <Day workDay="Wednesday"/>
      <Day workDay="Thursday"/>
      <Day workDay="Friday"/>
    </div>
  )
}
