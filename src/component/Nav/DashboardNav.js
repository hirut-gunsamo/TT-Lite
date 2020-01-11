/* ********************************************** */
//import features displayed on DashboardNav
/* ********************************************** */
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { withRouter } from "react-router-dom";
import logo from "../../Assets/images/logo.jpg";
import "../../Assets/css/UpperNav.css";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const onSignOut = () => {
    localStorage.setItem("token", 0);
    props.history.push("/");
  };
  /*! *************
   * DashboardNav section *
   ************** */
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" height="40" width="40" />
          TresPass-Tracker{" "}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <Nav navbar>
            <NavItem>
              <NavLink href="/dashboard/payment" className="member">
                Be A Member
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={onSignOut} className="member">
                Sign Out
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    /*! *************
     * End DashboardNav section *
     ************** */
  );
};

export default withRouter(Example);
