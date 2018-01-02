import React, {Component} from 'react';
import './staff_item.css';

export default class StaffItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      "editing": false,
      "developerName": this.props.developer
    }
  }
  render() {

    const NameTag = name => {
      return (
        <div className="developer-name">
          <p>{this.state.developerName}</p>
        </div>
      )
    }

    const NameInput = () => {
      return (
        <input type="text" value={this.state.developerName} />
      )
    }

    return (
      <li className="developer-list-item">
        {this.state.editing ?
          <NameInput />
          :
          <NameTag />}
      </li>
    )
  }
}
