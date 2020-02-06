//import features displayed on Mainalert page
import React, { Component } from "react";
import { Card, CardBody, Table } from "reactstrap";

/*! *************
 *Main ALert section...*
 *cards and tables used for title and lists of alerts*
 ************** */
export default class MainAlert extends Component {
  render() {
    return (
      <div>
        <div>
          <h1
            style={{ textAlign: "left", marginLeft: 15, fontFamily: "Arail" }}
          >
            Alert
          </h1>
        </div>
        <Card id="Card">
          <CardBody>
            <Table className="no-wrap v-middle" responsive>
              <thead>
                <tr className="border-0">
                  <th className="border-0">Sensor</th>
                  <th className="border-0">triggered </th>
                  <th className="border-0">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="">
                      <h6
                        className="mb-0 font-16 font-medium"
                        style={{ fontFamily: "Arail", fontSize: 20 }}
                      >
                        Sensor 1
                      </h6>
                    </div>
                  </td>
                  <td>
                    <span
                      className="badge"
                      style={{
                        border: "2px solid green",
                        background: "green",
                        color: "white"
                      }}
                      tooltip="tooltip content here"
                      tooltip-position="left"
                    >
                      on
                    </span>
                  </td>

                  <td>Dec 4, 2019 11:05pm</td>
                </tr>
                <tr>
                  <td>
                    <div className="">
                      <h6
                        className="mb-0 font-16 font-medium"
                        style={{ fontFamily: "Arail", fontSize: 20 }}
                      >
                        Sensor 2
                      </h6>
                    </div>
                  </td>
                  <td>
                    <span
                      class="badge"
                      style={{
                        border: "2px solid red",
                        background: "red",
                        color: "white"
                      }}
                    >
                      Off
                    </span>
                  </td>

                  <td>Dec 6, 2019 11:08pm</td>
                </tr>
                <tr>
                  <td>
                    <div className="">
                      <h6
                        className="mb-0 font-16 font-medium"
                        style={{ fontFamily: "Arail", fontSize: 20 }}
                      >
                        Sensor 7
                      </h6>
                    </div>
                  </td>
                  <td>
                    <span
                      class="badge"
                      style={{
                        border: "2px solid green",
                        background: "green",
                        color: "white"
                      }}
                    >
                      on
                    </span>
                  </td>

                  <td>Sep 7, 2019 12:05pm</td>
                </tr>
                <tr>
                  <td>
                    <div className="">
                      <h6
                        className="mb-0 font-16 font-medium"
                        style={{ fontFamily: "Arail", fontSize: 20 }}
                      >
                        Sensor 8
                      </h6>
                    </div>
                  </td>
                  <td>
                    <span
                      class="badge"
                      style={{
                        border: "2px solid green",
                        background: "green",
                        color: "white"
                      }}
                    >
                      on
                    </span>
                  </td>

                  <td>Sep 8, 2019 10:05am</td>
                </tr>
                <tr>
                  <td>
                    <div className="">
                      <h6
                        className="mb-0 font-16 font-medium"
                        style={{ fontFamily: "Arail", fontSize: 20 }}
                      >
                        Sensor 4
                      </h6>
                    </div>
                  </td>
                  <td>
                    <span
                      class="badge"
                      style={{
                        border: "2px solid red",
                        background: "red",
                        color: "white"
                      }}
                    >
                      Off
                    </span>
                  </td>

                  <td>Aug 10, 2019 08:08am</td>
                </tr>
                <tr>
                  <td>
                    <div className="">
                      <h6
                        className="mb-0 font-16 font-medium"
                        style={{ fontFamily: "Arail", fontSize: 20 }}
                      >
                        Sensor 5
                      </h6>
                    </div>
                  </td>
                  <td>
                    <span
                      class="badge"
                      style={{
                        border: "2px solid green",
                        background: "green",
                        color: "white"
                      }}
                    >
                      Off
                    </span>
                  </td>

                  <td>June 9, 2019 09:08am</td>
                </tr>
                <tr>
                  <td>
                    <div className="">
                      <h6
                        className="mb-0 font-16 font-medium"
                        style={{ fontFamily: "Arail", fontSize: 20 }}
                      >
                        Sensor 23
                      </h6>
                    </div>
                  </td>
                  <td>
                    <span
                      class="badge"
                      style={{
                        border: "2px solid red",
                        background: "red",
                        color: "white"
                      }}
                    >
                      Off
                    </span>
                  </td>

                  <td>June 9, 2019 09:08am</td>
                </tr>
                <tr>
                  <td>
                    <div className="">
                      <h6
                        className="mb-0 font-16 font-medium"
                        style={{ fontFamily: "Arail", fontSize: 20 }}
                      >
                        Sensor 34
                      </h6>
                    </div>
                  </td>
                  <td>
                    <span
                      class="badge"
                      style={{
                        border: "2px solid red",
                        background: "red",
                        color: "white"
                      }}
                    >
                      Off
                    </span>
                  </td>

                  <td>June 9, 2019 09:08am</td>
                </tr>
                <tr>
                  <td>
                    <div className="">
                      <h6
                        className="mb-0 font-16 font-medium"
                        style={{ fontFamily: "Arail", fontSize: 20 }}
                      >
                        Sensor 10
                      </h6>
                    </div>
                  </td>
                  <td>
                    <span
                      class="badge"
                      style={{
                        border: "2px solid green",
                        background: "green",
                        color: "white"
                      }}
                    >
                      On
                    </span>
                  </td>

                  <td>June 9, 2019 09:08am</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
      /*! *************
       *End of Main Alert section*
       ************** */
    );
  }
}
