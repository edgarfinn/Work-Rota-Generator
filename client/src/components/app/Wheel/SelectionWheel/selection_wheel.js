import React from 'react';
import getDevName from '../../Helpers/lookup_dev'

import './selection_wheel.css';

export default (props) => {

  console.log(props);

  const AMDev = () => {
    if (props.selectionIsReady) {
      const AMDevKey = props.selections.morning.devKey;
      return getDevName(AMDevKey,props.devList) || AMDevKey;
    }
  }

  const PMDev = () => {
    if (props.selectionIsReady) {
      const PMDevKey = props.selections.afternoon.devKey;
      return getDevName(PMDevKey,props.devList) || PMDevKey;
    }
  }


  const selectionsEmpty = !props.selectionIsReady;
  return (
    <div className="wheel-selection-wheel">
      <p
        className={selectionsEmpty ? "selection morning" : "selection morning selected"}
        >
          {selectionsEmpty ? "Select a developer" : <AMDev />}
        </p>
        <p
          className={selectionsEmpty ? "selection afternoon" : "selection afternoon selected"}
          >
            {selectionsEmpty ? "using the buttons below" : <PMDev />}
          </p>
        </div>
      )

}
