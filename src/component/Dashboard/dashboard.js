//import features displayed on dashboard
import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
} from 'react-router-dom';
import {Row,
  Col
} from 'reactstrap';

import SideNav from "../Nav/SideNav";
import MainDashboard from "../Dashboard/MainDashboard";
import Map from "./Map";
import AlertPage from "../Alert/alert";
import DataLog from "../Datalog/datalog";
import Product from "./Product";
import Nav from '../Nav/DashboardNav'
import Member from "./Member";
import Sensor from "./Sensor";
import Footer from "../Footer";
import Payment from '../Payment';
import DashboardNav from "../Nav/DashboardNav";
import MainAlert from "../Alert/MainAlert";
import "../../Assets/css/UpperNav.css";

import logo from "../../Assets/images/logo.jpg";
import Team from "./Team";

export default function Dashboard({ history, match }) {
  const token =localStorage.getItem("token");
  if (token === 'null') {
    history.push("/sign-in");
  }

  const onSignOut = () => {
    localStorage.setItem("token", null);
    history.push("/");
  };

  console.log("match ", match);
  console.log("window", window.location);
  return (
    <div>
      <Nav />
      <div className="content-wrapper">
        <SideNav />
        <div className="main-area">
          <Switch>
            <Route exact path="/dashboard" component={MainDashboard} />
            <Route path="/dashboard/alert" component={MainAlert} />
            <Route path="/dashboard/data-log" component={DataLog} />
            <Route path="/dashboard/Map" component={Map} />
            <Route path="/dashboard/product" component={Product} />
            <Route path="/dashboard/sensor" component={Sensor} />
            <Route path="/dashboard/members" component={Team} />]
            <Route path="/dashboard/payment" component={Payment} />
            <Route
              path="*"
              render={() => <div>Oops...we couldn't find that page</div>}
            />
          </Switch>
          <Row>
            {window.location.pathname !== "/dashboard/map" && (
              <Col sm={12}>
                <Footer />
              </Col>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
 }

