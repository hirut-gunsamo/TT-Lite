import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap';

//import features displayed on main Dashboard;
import SimpleMap from "./Map";
import Footer from "../Footer";
import AlertMain from "../Alert/alert";
import Team from "./Team";
import DataLogMain from "../Datalog/datalog";
import { MdNotificationsNone } from "react-icons/md";
import Smart_sensor from "../../Assets/images/big/Smart_sensor-512.png";
import images from "../../Assets/images/big/imagesm.png";
import imagesp from "../../Assets/images/big/imagesp.png";
import SensorSummary from "./graph";

     /*! 
      MainDashboard section *
     */
class MainDashboard extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="12" md="4">
            {/*--------------------------------------------------------------------------------*/}
            {/*Card-1 include number of sensors*/}
            {/*--------------------------------------------------------------------------------*/}
            <Card id="Card" className>
              <CardBody>
                <img
                  src={Smart_sensor}
                  alt="Logo"
                  height="100"
                  width="180"
                  style={{ float: "left" }}
                />
                <CardTitle id="CardTitle"> 250 </CardTitle>
                <CardSubtitle id="CardSubtitle">SENSORS</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="4">
            {/*--------------------------------------------------------------------------------*/}
            {/*Card-2 include number of memberships*/}
            {/*--------------------------------------------------------------------------------*/}
            <Card id="Card">
              <CardBody>
                <img
                  src={images}
                  alt="Logo"
                  height="100"
                  width="150"
                  style={{ float: "left" }}
                />
                <CardTitle id="CardTitle"> 30 </CardTitle>
                <CardSubtitle id="CardSubtitle">MEMBERSHIPS</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="4">
            {/*--------------------------------------------------------------------------------*/}
            {/*Card-3 include number on products*/}
            {/*--------------------------------------------------------------------------------*/}
            <Card id="Card">
              <CardBody>
                <img
                  src={imagesp}
                  alt="Logo"
                  height="100"
                  width="160"
                  style={{ float: "left", borderRadius: 10 }}
                />
                <CardTitle id="CardTitle"> 2 </CardTitle>
                <CardSubtitle id="CardSubtitle">PRODUCTS</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md="8">
            <Card id="SCard">
              <CardBody>
                <SensorSummary />
              </CardBody>
            </Card>
          </Col>

          <Col sm={12} md="4">
            <Card id="Cards">
              <CardBody>
                <CardTitle id="alertcard">
                  <i className="mdi mdi-comment-processing-outline mr-2"></i>
                  <MdNotificationsNone />
                   Notifications
                </CardTitle>
                <CardText id="alertmain">
                  <AlertMain />
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md="4">
            <Team />
          </Col>

          <Col sm={12} md="">
            <Card id="mapscard">
              <CardBody>
                <CardTitle id="alertcard">
                  <i className="mdi mdi-comment-processing-outline mr-2"></i>
                  Map
                </CardTitle>
                <SimpleMap />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <DataLogMain />
          </Col>
        </Row>
      </div>
    );
  }
}
/*! 
     End of MainDashboard section *
     */

export default MainDashboard;
