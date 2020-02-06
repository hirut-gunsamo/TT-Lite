//import features displayed on graph
import React from "react";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import { Line } from "react-chartjs-2";

//Line chart
let lineData = {
  labels: [1, 5, 24,29, 30, 16, 20, 30],
  datasets: [
    {
      label: "triggered",
      borderWidth: 1,
      backgroundColor: "rgba(94,114,228,.1)",
      borderColor: "rgb(94,114,228)",
      pointBorderColor: "rgb(94,114,228)",
      pointBackgroundColor: "rgb(94,114,228)",
      data: [1, 3, 9, 28, 12, 6, 28, 10]
    },
    {
      label: "not triggered",
      borderWidth: 1,
      backgroundColor: "rgba(79,195,247,.1)",
      borderColor: "rgb(79,195,247)",
      pointBorderColor: "rgb(79,195,247)",
      pointBackgroundColor: "rgb(79,195,247)",
      data: [0, 7, 24, 30, 20, 28, 35, 30]
    }
  ]
};

/*! *************
   * sample graph section...card used for title and list to list sensor 
     datas that are triggered and not triggered*
   ************** */
class SensorSummary extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <div className="d-flex align-items-center">
            <div>
              <CardTitle>Sensors Summery</CardTitle>
            </div>
            <div className="ml-auto d-flex align-items-center">
              <ul className="list-inline font-12 dl mr-3 mb-0">
                <li className="border-0 p-0 text-info list-inline-item">
                  <i className="fa fa-circle"></i> triggered
                </li>
                <br />
                <li className="border-0 p-0 text-primary list-inline-item">
                  <i className="fa fa-circle"></i> Not triggered
                </li>
              </ul>
            </div>
          </div>
          <Row>
            <Col lg="12">
              <div className="campaign ct-charts">
                <div
                  className="chart-wrapper"
                  style={{ width: "100%", margin: "0 auto", height: 250 }}
                >
                  <Line
                    data={lineData}
                    options={{
                      maintainAspectRatio: false,
                      legend: {
                        display: false,
                        labels: { fontFamily: "Nunito Sans" }
                      },
                      scales: {
                        yAxes: [
                          {
                            stacked: true,
                            gridLines: { display: false },
                            ticks: { fontFamily: "Nunito Sans" }
                          }
                        ],
                        xAxes: [
                          {
                            gridLines: { display: false },
                            ticks: { fontFamily: "Nunito Sans" }
                          }
                        ]
                      }
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
      /*! *************
       *End of sample graph section*
       ************** */
    );
  }
}

export default SensorSummary;
