/*============================================*/
//import features displayed on FormNav
/*============================================*/

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
  /*=================================================*/
  /* FormNav section include signIn and signUp*/
  /*=================================================*/
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
              <NavLink href="/sign-in" className="form">
                SignIn
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sign-up" className="form">
                SignUp
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    /*====================================*/
    /* End of FormNav section */
    /*======================================*/
  );
};

export default withRouter(Example);
