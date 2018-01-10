import React, {Component} from 'react';
import './App.css';
import './Grid.css';

// Helpers
import removeNullDevs from './Helpers/remove_null_devs';
import formatQuery from './Helpers/format_query';
import updateRotaObject from './Helpers/update_rota_object';
import preventFridayRepeats from './Helpers/prevent_friday_repeats'

import Rota from './Rota/rota.js';
import Wheel from './Wheel/wheel.js';
import StaffList from './StaffList/staff_list.js';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectionIsReady: false,
      currentDayID: 1,
      fridayDevs: [],
      weekDevListOrder: [],
      todaysDevSelection: {
        "selectionAM": null,
        "selectionPM": null
      },
      rotaDefault: [
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

    this.randomiseDevListOrder = this.randomiseDevListOrder.bind(this);
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

  randomiseDevListOrder(queryString) {
    fetch('/api/randomise/' + queryString).then(res => res.json()).then(res => {
      return this.state.currentDayID > 2
        ? preventFridayRepeats(res, this.state.fridayDevs)
        : res
    }).then(res => {
      const todaysDevs = {
        morning: res[0],
        afternoon: res[1]
      }
      const newFridayDevs = [
        res[res.length - 1].devKey,
        res[res.length - 2].devKey
      ]
      const newWeekDevOrder = res.slice(2, res.length);
      const dayID = this.state.currentDayID;
      const rota = this.state.rotaAllocations;
      const newRota = updateRotaObject(dayID, rota, todaysDevs);
      this.setState((prevState, props) => ({
        todaysDevSelection: todaysDevs,
        selectionIsReady: true,
        weekDevListOrder: newWeekDevOrder,
        rotaAllocations: newRota,
        currentDayID: prevState.currentDayID + 1,
        fridayDevs: newFridayDevs
      }))
    }).catch((err) => {
      if (err) {
        console.log('randomiseDevListOrder Error: ' + err);
        return;
      }
    })
  }

  updateRota() {
    // remove first two items from weekDevListOrder
    const weekDevListOrder = this.state.weekDevListOrder;
    const newDevListOrder = weekDevListOrder.slice(2, weekDevListOrder.length);
    const dayID = this.state.currentDayID;
    const rota = this.state.rotaAllocations;
    // set todaysDevSelection to the first two devs from weekDevListOrder
    const todaysDevs = {
      morning: this.state.weekDevListOrder[0],
      afternoon: this.state.weekDevListOrder[1]
    }
    // update rota object
    const newRota = updateRotaObject(dayID, rota, todaysDevs);
    // increment currentDayID
    this.setState((prevState, props) => ({
      todaysDevSelection: {
        morning: prevState.weekDevListOrder[0],
        afternoon: prevState.weekDevListOrder[1]
      },
      weekDevListOrder: newDevListOrder,
      rotaAllocations: newRota,
      currentDayID: prevState.currentDayID + 1
    }))
  }

  selectTodaysDevs() {
    if (this.state.weekDevListOrder.length < 2) {
      const devList = this.state.devList;
      const ajaxQuery = formatQuery(devList);
      this.randomiseDevListOrder(ajaxQuery);
    } else {
      this.updateRota();
    }
  }

  refreshRota() {
    this.setState((prevState,props) => ({
      selectionIsReady: false,
      currentDayID: 1,
      fridayDevs: [],
      weekDevListOrder: [],
      todaysDevSelection: {
        "selectionAM": null,
        "selectionPM": null
      },
      rotaAllocations: prevState.rotaDefault,
    }))
  }

  render() {

    console.log('new state',this.state);
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
              selections={this.state.todaysDevSelection}
              devList={this.state.devList}
              onWheelSelect={() => {this.selectTodaysDevs()}}
              onRefresh={() => {this.refreshRota()}}
              dayID={this.state.currentDayID}
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
