//import features displayed on signup
import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "../../index.css";
import Nav from "../Nav/FormNav";
import "../../Assets/css/UpperNav.css";

export default class SignUp extends Component {
  onSubmit = () => {
    this.props.history.push("/sign-in");
  };
  /*! *************
   *Nav and form section for sign up*
   ************** */
  render() {
    return (
      <div>
        <Nav />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form>
              <h3>Sign Up</h3>

              <div className="form-group">
                <label>User name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <button
                onClick={this.onSubmit}
                type="submit"
                className="btn btn-primary btn-block"
              >
                SignUp
              </button>
              <p className="">
                Already registered <Link to="/Forms/Login.js">Sign in?</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      /*! *************
       *End of Nav and form section for sign up*
       ************** */
    );
  }
}
