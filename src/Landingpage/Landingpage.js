import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Landingpage.css';

    class Landingpage extends Component {
      constructor() {
        super();
        this.state = {
         
        };
      }

      onChange = (e) => {
        // event to update state when form inputs change
      }

      onSubmit = (e) => {
        e.preventDefault();
        // event to submit the data to the server
      }

      render() {
        return (
          <div>
          <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div id="content">
                      <h1>Cloud Cloux.</h1>
                      <h3>Make an implicite upload here on cloud clox....</h3>
                      <hr/>
                      <span className="first-button">
                      <Link to="/signup"><input type="submit" className="signup" value="Sign Up"/></Link>
                      </span>
                      <span className="first-button">
                      <Link  to="/login"><input type="submit" className="signup" value="Sign In"/></Link>
                      </span>
                  </div>
                  <ul className="slideshow">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                  </ul>
              </div>
          </div>
      </div>
          </div>
        );
      }
    }

    export default Landingpage;