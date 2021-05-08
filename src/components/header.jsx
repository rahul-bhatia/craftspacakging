import React, { Component } from "react";
import Typed from 'react-typed';

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <h2>Be 
                    <span>
                      {' '}
                        <Typed
                          strings={["Noticeable","Visible","Eye catching"]}
                          typeSpeed={40}
                          backSpeed={60}
                          loop={true} />  
                    
                    </span>
                    {' '}at the point of sale
                    </h2>
                  
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Dive Deep
                  </a>{" "}

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
