//import features displayed on graph
import React from "../../../node_modules/react";
import { Card, CardBody, CardTitle, Col, Row } from "../../../node_modules/reactstrap";
import { Line } from "../../../node_modules/react-chartjs-2";

//Line chart
let lineData = {
  labels: [1, 3, 5,7, 9, 12, 15, 20],
  datasets: [
    {
      label: "triggered",
      borderWidth: 1,
      backgroundColor: "rgba(94,114,228,.1)",
      borderColor: "rgb(94,114,228)",
      pointBorderColor: "rgb(94,114,228)",
      pointBackgroundColor: "rgb(94,114,228)",
      data: [2, 3, 4, 8, 10, 12, 18, 24]
    },
    {
      label: "not triggered",
      borderWidth: 1,
      backgroundColor: "rgba(79,195,247,.1)",
      borderColor: "rgb(79,195,247)",
      pointBorderColor: "rgb(79,195,247)",
      pointBackgroundColor: "rgb(79,195,247)",
      data: [0, 8, 11, 22, 8, 10, 5, 21]
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
