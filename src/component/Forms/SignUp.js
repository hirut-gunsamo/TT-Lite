//import features displayed on signup
import React, { Component } from 'react';
import "../../index.css";
import Nav from "../Nav/FormNav";
import "../../Assets/css/UpperNav.css";
import axios from 'axios'

export default class SignUp extends Component {
  onSubmit = () => {
    //this.props.history.push("/sign-in");
    console.log("sign up submitted")
    // axios.post('http://localhost:4000/user',{
    //   username:"User firs name",
    //   email: "example@gmail.com",
    //   password:"user_password"
    // }).then((response)=>{
    //   console.log(response);
    // }).catch((error)=>{
    //   console.log(error);
    // })
    axios.get('http://localhost:4000/user/:2')
    .then((response)=>{
      console.log("This is response:",response);
    })
    .catch((err)=>{
      console.log("This is error: ",err);
    });
    
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
              <p className="forgot-password text-right">
              Already registered <a href="#">sign in?</a>
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
