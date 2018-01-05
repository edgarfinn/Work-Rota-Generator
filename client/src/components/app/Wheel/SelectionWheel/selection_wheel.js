import React from 'react';

import './selection_wheel.css';

export default(props) => {
  const selectionAM = props.selections.selectionAM;
  const selectionPM = props.selections.selectionPM;

  const selectionsEmpty = !props.selectionIsReady;

  return (
    <div className="wheel-selection-wheel">
      <p className={selectionsEmpty ? "selection morning" : "selection morning selected"}>
        {selectionsEmpty ? "Select two developers" : selectionAM.devName || selectionAM.devKey }
      </p>
      <p className={selectionsEmpty ? "selection afternoon" : "selection afternoon selected"}>
        {selectionsEmpty ? "using the buttons below" : selectionPM.devName || selectionPM.devKey }
      </p>
    </div>
  )
}
