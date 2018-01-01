import React, { Component } from 'react';
import './App.css';
import './Grid.css';

import Rota from './Rota/rota.js';
import Wheel from './Wheel/wheel.js';
import StaffList from './StaffList/staff_list.js';

export default class App extends Component {

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
      <div className="App red">
        <header><h1 className="page-title">BAU Rota Generator</h1></header>
        <section className="section-rota large-show-inlineblock large-3 red">
          <Rota />
        </section>
        <section className="section-wheel large-show-inlineblock large-4 yellow">
          <Wheel />
        </section>
        <section class="section-staff-list large-show-inlineblock large-3 blue">
          <StaffList />
        </section>
      </div>
    );
  }
}
