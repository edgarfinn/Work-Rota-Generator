import React, {Component} from 'react';
import './staff_item.css';

export default class StaffItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      "editing": false,
      "developerName": '',
      "devKey": this.props.devKey
    }
  }

  onNameClick(event) {
    console.log(this.setState({editing: true}));

  }

  onInputChange(event) {
    const devKey = this.state.devKey;
    const newName = event.target.value;
    this.setState({developerName: event.target.value});
    this.props.onDevNameChange(devKey, newName);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const devKey = this.state.devKey;
    const newName = this.state.developerName;
    this.props.onDevNameChange(devKey, newName);
    this.setState({editing: false})
  }



  render() {
    const nameTag = this.props.devName || this.props.devKey;

    return (
      <li className="developer-list-item">
        <div>
          {this.state.editing ?
            <form
              className="developer-name"
              onSubmit={event => this.onFormSubmit(event)}
              >
              <input
                className="name-input"
                type="text"
                value={this.state.developerName}
                onChange={event => this.onInputChange(event)}
              />
            </form>
            :
            <div className="developer-name">
              <p onClick={event => this.onNameClick(event)}>
                {nameTag}
              </p>
            </div>}
        </div>
      </li>
    )
  }
}
