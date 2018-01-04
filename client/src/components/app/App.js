import React, {Component} from 'react';
import './App.css';
import './Grid.css';

// Helpers
import removeNullDevs from './Helpers/remove_null_devs';
import formatQuery from './Helpers/format_query';
import updateRotaObject from './Helpers/update_rota';


import Rota from './Rota/rota.js';
import Wheel from './Wheel/wheel.js';
import StaffList from './StaffList/staff_list.js';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectionIsReady: false,
      currentDayID: 1,
      yesterdaysDevs: [],
      wheelSelection: {
        "selectionAM": null,
        "selectionPM": null
      },
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

    this.selectTwoDevelopers = this.selectTwoDevelopers.bind(this);
  }

  confirmSelection() {
    const dayID = this.state.currentDayID;
    const rota = this.state.rotaAllocations;
    const selection = this.state.wheelSelection;

    const selectionIsReady = this.state.selectionIsReady;

    // update rota if selection is ready
    if (selectionIsReady) {
      const newRota = updateRotaObject(dayID,rota,selection);

      this.setState({
        rotaAllocations: newRota
      })

      // increment currenDayID
      this.setState({
        currentDayID: this.state.currentDayID + 1
      })
      this.setState({
        selectionIsReady: false
      })
    }

    // set selectionIsReady to false again
  }
  updateWheelSelection(selection) {
    const wheelSelection = this.state.wheelSelection;

    wheelSelection.selectionAM = selection.morning;
    wheelSelection.selectionPM = selection.afternoon;

    this.setState({wheelSelection})
    this.setState({selectionIsReady: true})
  }

  selectTwoDevelopers(queryString) {
    fetch('/api/select/'+queryString)
    .then(res => res.json())
    .then(res => this.updateWheelSelection(res))
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

  selectDevs(rota, devList) {
    const currentDayID = this.state.currentDayID;
    // return list of devs eligible to work today
    const eligibleDevs = removeNullDevs(currentDayID,rota,devList);

    // randomize order of eligible devList
    // --format query string
    const ajaxQuery = formatQuery(eligibleDevs);

    // --send ajax request to server
    this.selectTwoDevelopers(ajaxQuery);
  }


  render() {
    console.log('new state: ', this.state);

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
            <Wheel
              selectionIsReady={this.state.selectionIsReady}
              selections={this.state.wheelSelection}
              onWheelSelect={() => {
              this.selectDevs(this.state.rotaAllocations, this.state.devList)}}
              onConfirmSelection={() => {this.confirmSelection()}}
          />
          </section>

          <section className="section-staff-list large-2 border">
            <StaffList developers={this.state.devList} onDevNameChange={(devKey, newDevName) => {
              this.editDevName(devKey, newDevName)
            }}/>
          </section>

        </div>

      </div>
    );
  }
}
