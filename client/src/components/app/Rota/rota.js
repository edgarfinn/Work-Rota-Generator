import React from 'react';
import './rota.css';
import Week from './Week/week';

export default (props) => {
  const fullRota = props.rota;

  return (
    <div className="rota fill-height">
      <header className="section-header">
        <h2>Work Rota</h2>
      </header>
      <div className="weeks-wrapper">
        <Week
          weekRota={fullRota[0]}
          devList={props.devList}
        />
        <Week
          weekRota={fullRota[1]}
          devList={props.devList}
        />
      </div>
    </div>
  )
}
