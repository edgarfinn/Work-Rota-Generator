import React, {Component} from 'react';
import './App.css';
import './Grid.css';

import Rota from './Rota/rota.js';
import Wheel from './Wheel/wheel.js';
import StaffList from './StaffList/staff_list.js';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      rotaAllocations: [
        {
          "weekNumber": "One",
          "schedule": [
            {
              "dayTitle": "Monday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": "Developer One"
                }, {
                  "periodTitle": "PM",
                  "allocation": "Developer Two"
                }
              ]
            },
            {
              "dayTitle": "Tuesday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": "Developer Three"
                }, {
                  "periodTitle": "PM",
                  "allocation": "Developer Four"
                }
              ]
            },
            {
              "dayTitle": "Wednesday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": "Developer Five"
                }, {
                  "periodTitle": "PM",
                  "allocation": "Developer Six"
                }
              ]
            },
            {
              "dayTitle": "Thursday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": "Developer Seven"
                }, {
                  "periodTitle": "PM",
                  "allocation": "Developer Eight"
                }
              ]
            },
            {
              "dayTitle": "Friday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": "Developer Nine"
                }, {
                  "periodTitle": "PM",
                  "allocation": "Developer Ten"
                }
              ]
            }
          ]
        },
        {
          "weekNumber": "Two",
          "schedule": [
            {
              "dayTitle": "Monday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": "Developer 1"
                }, {
                  "periodTitle": "PM",
                  "allocation": "Developer 2"
                }
              ]
            },
            {
              "dayTitle": "Tuesday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": "Developer 3"
                }, {
                  "periodTitle": "PM",
                  "allocation": "Developer 4"
                }
              ]
            },
            {
              "dayTitle": "Wednesday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": "Developer 5"
                }, {
                  "periodTitle": "PM",
                  "allocation": "Developer 6"
                }
              ]
            },
            {
              "dayTitle": "Thursday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": "Developer 7"
                }, {
                  "periodTitle": "PM",
                  "allocation": "Developer 8"
                }
              ]
            },
            {
              "dayTitle": "Friday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": "Developer 9"
                }, {
                  "periodTitle": "PM",
                  "allocation": "Developer 10"
                }
              ]
            }
          ]
        }
      ]
    }

    this.contactApi = this.contactApi.bind(this);

  }

  contactApi() {
    fetch('/api').then(res => res.json()).then(message => this.setState({message})
    // console.log(this)
    );
  }

  render() {

    return (
      <div className="App">

        <header>
          <h1 className="page-title">BAU Rota Generator</h1>
        </header>

        <div className="app-content">

          <section className="section-rota large-3 large-offset-0 border">
            <Rota rota={this.state.rotaAllocations}/>
          </section>

          <section className="section-wheel large-show-inlineblock large-4 yellow">
            <Wheel/>
          </section>

          <section className="section-staff-list large-show-inlineblock large-3 blue">
            <StaffList/>
          </section>

        </div>

      </div>
    );
  }
}
