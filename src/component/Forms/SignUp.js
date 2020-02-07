//import features displayed on signup
import React, { Component } from 'react';
import "../../index.css";
import Nav from "../Nav/FormNav";
import "../../Assets/css/UpperNav.css";
import axios from 'axios';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    console.log('history', props.history)
    this.state = {
      First_name: null,
      Last_name: null,
      email: null,
      password: null
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { FirstName, Last_name, email, password } = this.state;
    // this.props.history.push("/sign-in");
    axios.post('http://localhost:3000/user/signup', {
      First_name: FirstName,
      Last_name: Last_name,
      password: password,
      email:email,
    })
    .then((response)=>{
      this.props.history.push("/sign-in");
    })
    .catch((error)=>{
      console.log(error);
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
                <label>First name</label>
                <input
                  type="text"
                  onChange={(event) => this.setState({ FirstName: event.target.value})}

                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  onChange={(event) => this.setState({Last_name:event.target.value})}

                  className="form-control"
                  placeholder="Last name"
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  onChange={(event) => this.setState({ email: event.target.value })}
                  className="form-control"
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  onChange={(event) => this.setState({ password: event.target.value })}
                  className="form-control"
                  placeholder="password"
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  onChange={(event) => this.setState({ password: event.target.value })}
                  className="form-control"
                  placeholder="confirm password"
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
