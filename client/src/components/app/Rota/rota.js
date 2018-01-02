import React from 'react';
import './rota.css';
import Week from './Week/week';

export default () => {
  return (
    <div className="rota-contents fill-height">
      <header className="section-header">
        <h2>Work Rota</h2>
      </header>
      <div className="weeks-wrapper">
        <Week weekNumber="Week One" />
        <Week weekNumber="Week Two" />
      </div>
    </div>
  )

}
