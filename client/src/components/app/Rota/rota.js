import React from 'react';
import './rota.css';
import Week from './Week/week';

export default (props) => {
  const fullRota = props.rota;
  // console.log(fullRota);

  return (
    <div className="rota fill-height">
      <header className="section-header">
        <h2>Work Rota</h2>
      </header>
      <div className="weeks-wrapper">
        <Week
          weekRota={fullRota[0]}
        />
        <Week
          weekRota={fullRota[1]}
        />
      </div>
    </div>
  )

}
