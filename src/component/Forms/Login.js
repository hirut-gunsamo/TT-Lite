//import  features used in Sign in
import React, { Component } from 'react';
import { BrowserRouter as Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Nav from '../Nav/FormNav'
import "../../Assets/css/UpperNav.css";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };



    if (localStorage.getItem("token") !== 'null') {
      props.history.push("/dashboard");
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    // this.props.history.push("/dashboard");
    const { email, password } = this.state;
    // this.props.history.push("/sign-in");
    axios.post('http://localhost:3000/user/login', {
      email:email,
      password: password,
    })
    .then((response)=>{
      console.log(response.data);
      if (response.data.success) {
        // save the token
        localStorage.setItem('token', response.data.access_token)
        this.props.history.push('/dashboard');
      } else {
        const error = new Error(response.data.error);
        this.props.history.push('/sign-in');
        throw error;
      }
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    });
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
                  onChange={(event) => this.setState({ email: event.target.value })}
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  onChange={(event) => this.setState({ password: event.target.value })} 
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
