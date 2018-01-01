import React from 'react';
import './rota.css';
import Week from './Week/week';

export default () => {
  return (
    <div className="rota-contents">
      <h2 className="rota-header">Work Rota</h2>
      <div className="weeks-wrapper">
        <Week weekNumber="Week One" />
        <Week weekNumber="Week Two" />
      </div>
    </div>
  )

}
