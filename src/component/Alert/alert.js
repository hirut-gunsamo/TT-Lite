//import features displayed on alert page
import React from "react";
import { UncontrolledAlert, Row, Col } from "reactstrap";
import "../../index.css";

class AlertMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle10 = this.toggle10.bind(this);
    this.toggle20 = this.toggle20.bind(this);
    this.toggle30 = this.toggle30.bind(this);
    this.toggle40 = this.toggle40.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.state = {
      tooltipOpen10: false,
      tooltipOpen20: false,
      tooltipOpen30: false,
      tooltipOpen40: false,
      visible: true
    };
  }

  onDismiss() {
    this.setState({
      visible: false
    });
  }
  toggle10() {
    this.setState({
      tooltipOpen10: !this.state.tooltipOpen10
    });
  }

  toggle20() {
    this.setState({
      tooltipOpen20: !this.state.tooltipOpen20
    });
  }

  toggle30() {
    this.setState({
      tooltipOpen30: !this.state.tooltipOpen30
    });
  }

  toggle40() {
    this.setState({
      tooltipOpen40: !this.state.tooltipOpen40
    });
  }

  render() {
    return (
      /*--------------------------------------------------------------------------------*/
      /* this alert section include notification that is, which alert was triggered and at what time                                                    */
      /*--------------------------------------------------------------------------------*/
      <div>
        <Row>
          <Col sm="12">
            <div>
              <UncontrolledAlert color="danger" fade={false}>
                <h6>Sensor 2</h6>
                <p>
                  triggered <br />
                  march 5, 2019 at 12:09am
                </p>
              </UncontrolledAlert>
            </div>
            <div>
              <UncontrolledAlert color="primary" fade={false}>
                <h6>Sensor 7</h6>
                <p>
                  {" "}
                  triggered <br /> feb 8, 2019 at 6:09pm
                </p>
              </UncontrolledAlert>

              <UncontrolledAlert color="warning" fade={false}>
                <h6>Sensor 8</h6>
                <p>
                  triggered <br /> dec 7, 2019 at 7:49pm
                </p>
              </UncontrolledAlert>

              <UncontrolledAlert color="success" fade={false}>
                <h6>Sensor 4</h6>
                <p>
                  triggered
                  <br /> sep 8, 2019 at 9:00am
                </p>
              </UncontrolledAlert>
            </div>
          </Col>
        </Row>
      </div>
      /*-------------------------------------*/
      /* End of alert section */
      /*-------------------------------------*/
    );
  }
}

export default AlertMain;
