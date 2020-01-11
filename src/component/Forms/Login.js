//import  features used in Sign in
import React, { Component } from "react";
import { BrowserRouter as Link, withRouter } from "react-router-dom";
import Nav from '../Nav/FormNav'
import "../../Assets/css/UpperNav.css";

class Login extends Component {
  constructor(props) {
    super(props);

    if (JSON.parse(localStorage.getItem("token"))) {
      props.history.push("/dashboard");
    }
  }

  onSubmit = () => {
    localStorage.setItem("token", 1);
    this.props.history.push("/dashboard");
  };
  /*! *************
   *Nav and form section for sign in*
   ************** */
  render() {
    return (
      <div>
        <Nav />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form>
              <h3>Sign in</h3>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <button
                onClick={this.onSubmit}
                type="submit"
                className="btn btn-primary btn-block"
              >
                Submit
              </button>
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>

      /*! *************
       * end Nav and form section for sign in*
       ************** */
    );
  }
}

export default withRouter(Login);
