import React from 'react';

import './selection_wheel.css';

export default(props) => {
  console.log('SW props', props);
  const selectionAM = props.selections.selectionAM;
  const selectionPM = props.selections.selectionPM;

  const selectionsEmpty = selectionAM === null && selectionPM === null;

  if (!selectionsEmpty) {
    const morningDevTitle = selectionAM.devName || selectionAM.devKey
    const afternoonDevTitle = selectionPM.devName || selectionPM.devKey
  }


  console.log('selectionsEmpty', selectionsEmpty);
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
