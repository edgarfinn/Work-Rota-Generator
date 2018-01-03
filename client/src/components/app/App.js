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
                  "allocation": null
                }, {
                  "periodTitle": "PM",
                  "allocation": null
                }
              ]
            }, {
              "dayTitle": "Tuesday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": null
                }, {
                  "periodTitle": "PM",
                  "allocation": null
                }
              ]
            }, {
              "dayTitle": "Wednesday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": null
                }, {
                  "periodTitle": "PM",
                  "allocation": null
                }
              ]
            }, {
              "dayTitle": "Thursday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": null
                }, {
                  "periodTitle": "PM",
                  "allocation": null
                }
              ]
            }, {
              "dayTitle": "Friday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": null
                }, {
                  "periodTitle": "PM",
                  "allocation": null
                }
              ]
            }
          ]
        }, {
          "weekNumber": "Two",
          "schedule": [
            {
              "dayTitle": "Monday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": null
                }, {
                  "periodTitle": "PM",
                  "allocation": null
                }
              ]
            }, {
              "dayTitle": "Tuesday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": null
                }, {
                  "periodTitle": "PM",
                  "allocation": null
                }
              ]
            }, {
              "dayTitle": "Wednesday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": null
                }, {
                  "periodTitle": "PM",
                  "allocation": null
                }
              ]
            }, {
              "dayTitle": "Thursday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": null
                }, {
                  "periodTitle": "PM",
                  "allocation": null
                }
              ]
            }, {
              "dayTitle": "Friday",
              "periods": [
                {
                  "periodTitle": "AM",
                  "allocation": null
                }, {
                  "periodTitle": "PM",
                  "allocation": null
                }
              ]
            }
          ]
        }
      ],
      devList: [
        {
          "devKey": "Developer One",
          "devName": null
        }, {
          "devKey": "Developer Two",
          "devName": null
        }, {
          "devKey": "Developer Three",
          "devName": null
        }, {
          "devKey": "Developer Four",
          "devName": null
        }, {
          "devKey": "Developer Five",
          "devName": null
        }, {
          "devKey": "Developer Six",
          "devName": null
        }, {
          "devKey": "Developer Seven",
          "devName": null
        }, {
          "devKey": "Developer Eight",
          "devName": null
        }, {
          "devKey": "Developer Nine",
          "devName": null
        }, {
          "devKey": "Developer Ten",
          "devName": null
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

  editDevName(devKey, newDevName) {

    const currentState = this.state;

    const newDevList = currentState.devList.map(dev => {
      const newDev = dev;

      if (devKey === dev.devKey) {
        newDev.devName = newDevName;
      }
      return (newDev)
    })

    currentState.devList = newDevList;

    this.setState({currentState});
  }

  render() {

    return (
      <div className="App">

        <header>
          <h1 className="page-title">BAU Rota Generator</h1>
        </header>

        <div className="app-content">

          <section className="section-rota large-4 large-offset-0 border">
            <Rota rota={this.state.rotaAllocations}/>
          </section>

          <section className="section-wheel large-show-inlineblock large-4 border">
            <Wheel/>
          </section>

          <section className="section-staff-list large-2 border">
            <StaffList
              developers={this.state.devList}
              onDevNameChange={(devKey,newDevName)=>{this.editDevName(devKey,newDevName)}}
            />
          </section>

        </div>

      </div>
    );
  }
}
