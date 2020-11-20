import './Landing.css';
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Logo from '../images/icon_compass.png';
import axios from 'axios'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
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
    let cond = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let validity = cond.test(this.state.value);
    if (!(validity)) 
      alert('Your email address is in a wrong format. Please check again');
    else {
      const newSubscriber = {
        email: this.state.value
      };
      console.log(newSubscriber)
      this.sendRequest(newSubscriber);
    }

    event.preventDefault();
  }

  render() {
    return (
      <div className="Landing">
        <img src={Logo} className="logo"/ >
        <div className="title_div">
          <a>
            Pioneers 2071: <br/>
            Questioning the Next 50 Years          
          </a>
        </div>
        <div className="welcome_div">
          <a>
            Coming Soon
          </a>
        </div>
        <div className="date_div">
          <a>
            Feb, 10th, 2021 - Feb, 14th, 2021          
          </a>
        </div>
        <div className="Popup-container">
          <Popup
            trigger={<a className="btn-join">Stay Tuned</a>}
            modal
            nested
          >
          {close => (
            <div className="modal">
              <form onSubmit={this.handleSubmit}>
              <div className="modal-header"> Stay Tuned </div>
              <div className="modal-content">
                {' '}
                  <label>
                    Give us your email address so we can keep you updated!
                    <br/>
                    <input 
                      className="modal-input" 
                      type="text" 
                      value={this.state.value} 
                      onChange={this.handleChange} 
                      placeholder="example@gmail.com"
                    />
                  </label>
              </div>
              <div className="modal-actions">
                  <input className="btn-submit" type="submit" value="Subscribe" />
                  <button
                    className="btn-cancel"
                    onClick={() => {
                      close();
                    }}
                  >
                    Cancel
                  </button>
              </div>
              </form>
            </div>
          )}
          </Popup>
        </div>
      </div>
    );
  }
}

export default Landing;