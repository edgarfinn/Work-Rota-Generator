import React, { Component } from 'react';
import './staff_list.css';

import StaffItem from './StaffItem/staff_item';

export default class StaffList extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const developerList = this.props.developers.map((developer, index) => {

      // console.log(developer);

      const devKey = developer.devKey;

      return (
        <StaffItem
        key={devKey}
        devKey={devKey}
        devName={developer.devName}
        onDevNameChange={this.props.onDevNameChange}
      />
      )
    })

    return (
      <div className="staff-list">
        <header className="section-header"><h2>Staff List</h2></header>
        <ul className="developer-list">
          {developerList}
        </ul>
      </div>
    )
  }
}
