import React from 'react';
import './control_panel.css';

export default(props) => {

  const Button = (props) => {
    return (
      <div className="button-wrapper">
        <div className={"button " + props.name + " large-centered"} onClick={props.callBack}>
          <p>{props.text}</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="control-panel">

      {props.dayID <= 10 &&
        <Button
          name="select"
          callBack={props.onWheelSelect}
          text="Select Two Developers"/>
      }

        {props.dayID > 1 &&
          <Button
            name="refresh"
            callBack={props.onRefresh}
            text="Refresh Rota"/>
        }
    </div>
  )
}
