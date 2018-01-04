import React from 'react';

import './selection_wheel.css';

export default(props) => {
  const selectionAM = props.selections.selectionAM;
  const selectionPM = props.selections.selectionPM;

  const selectionsEmpty = !props.selectionIsReady;
  
  return (
    <div className="wheel-selection-wheel yellow">
      <p className="selection morning">
        {selectionsEmpty ? "Select two developers" : selectionAM.devName || selectionAM.devKey }
      </p>
      <p className="selection afternoon">
        {selectionsEmpty ? "using the buttons below" : selectionPM.devName || selectionPM.devKey }
      </p>
    </div>
  )
}
