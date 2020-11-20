import './Register.css';
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import Logo from '../images/logo_temp.png';

class RegisterEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
    };

    this.handleIdChange = this.handleIdChange.bind(this);
    this.handlePwChange = this.handlePwChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIdChange(event) {
    this.setState({id: event.target.value});
    console.log(this.state);
  }

  handlePwChange(event) {
    this.setState({pw: event.target.value});
    console.log(this.state)
  }

  sendRequest = async (newSubscriber) => {
      try {
          const resp = await axios.post('http://aria.sparcs.org:55554/api/landing/post', newSubscriber);
          // console.log(resp.data);
          alert("Successfully Subscribed with an address : " + resp.data);
          window.location.reload(false);
      } catch (err) {
          // Handle Error Here
          alert("Unknown error has occured. Please try again.");
          // console.error(err);
      }

  };

  handleSubmit(event) {
    alert("submit!");

    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <div className="login-title-div">
          <a>
            Register
          </a>
        </div>

        <form onSubmit={this.handleSubmit}>
            <div className="input-container">
                <label for="username" className="input-label"> 
                  First Name 
                </label>
                <input 
                  type="text" 
                  name="username" 
                  className="input-text"
                  onChange={this.handleIdChange} 
                />
            </div>
            <div className="input-container">
                <label for="text" className="input-label">
                  Last Name
                </label>
                <input 
                  type="password" 
                  name="password" 
                  className="input-text"
                  onChange={this.handlePwChange} 
                />
            </div>
            <div className="btn-container">
                <input 
                  type="submit" 
                  name="submit" 
                  className="btn-join" 
                  value="register"
                />
            </div>
        </form>
      {/*
        <div className="register-container">
          <a className="register"> not yet registered? </a> 
          <a href="/register/user" className="register-link"> sign up </a>
        </div>
      */}
      </div>
    );
  }
}

export default RegisterEvent;
