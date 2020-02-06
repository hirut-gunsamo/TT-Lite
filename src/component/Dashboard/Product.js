/*! **********************************************
 *import features displayed on product section*
 ************************************************ */
import React, { Component } from "react";
import trespass from "../../Assets/images/trespass.jpg";
// import trespass from "../../Assets/images/users/";

import "../../index.css";

export default class Product extends Component {
  render() {
    return <img src={trespass} alt="trespass" id="img" />;
  }
  /*! *******************
   *end of product section*
   *********************** */
}
