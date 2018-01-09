import React from 'react';
import getDevName from '../../Helpers/lookup_dev'

import './selection_wheel.css';

export default(props) => {
  const selectionAM = props.selections.selectionAM;
  const selectionPM = props.selections.selectionPM;

  const selectionsEmpty = !props.selectionIsReady;

  if (props.selectionIsReady) {
    const AMDevKey = props.selections.morning.devKey;
    const PMDevKey = props.selections.afternoon.devKey;
    const AMDevName = getDevName(AMDevKey,props.devList) || AMDevKey;
    const PMDevName = getDevName(PMDevKey,props.devList) || PMDevKey;
  }

  return (
    <div className="wheel-selection-wheel">
      <p
        className={selectionsEmpty ? "selection morning" : "selection morning selected"}
        >
          {selectionsEmpty ? "Select a developer" : AMDevName }
      </p>
      <p
        className={selectionsEmpty ? "selection afternoon" : "selection afternoon selected"}
        >
          {selectionsEmpty ? "using the buttons below" : PMDevName }

      </p>
    </div>
  )
}
