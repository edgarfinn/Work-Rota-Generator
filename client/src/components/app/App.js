import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: null
    }

    this.contactApi = this.contactApi.bind(this);

  }

  contactApi() {
    fetch('/api')
    .then(res => res.json())
    .then(
      message => this.setState({ message })
      // console.log(this)
    );
  }



  render() {

    return (
      <div className="App">
        <p>
          Welcome to client-side!
        </p>
        <button onClick={this.contactApi} >Get Message</button>
        {this.state.message &&
        <p>{this.state.message}</p>}
      </div>
    );
  }
}

export default App;
