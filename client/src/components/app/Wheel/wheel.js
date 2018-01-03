import React, { Component } from 'react';
import './wheel.css';

import SelectionWheel from './SelectionWheel/selection_wheel';

export default class Wheel extends Component {

  render() {
    return (
      <div className="wheel fill-height red">
        <header className="section-header">
          <h2>Wheel of Fortune</h2>
        </header>
        <SelectionWheel />
      </div>
    )
  }
}
