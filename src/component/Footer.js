/*! **********************************************
 *import all features displayed on Footer section*
 ************************************************ */
import React from "react";
import { Card, CardBody } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <footer className="footer text-center">
            All Rights Reserved
            <a href="http://www.trespasstracker.com/">@trespasstracker.com</a>
          </footer>
        </CardBody>
      </Card>
    );
    /*! **********************************************
     *  End of Footer section *
     ************************************************ */
  }
}
export default Footer;
