import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Products</h2>
            
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{ height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#41669d',
                        }}
                      >
                        Image1
                      </FrontSide>
                      <BackSide
                        style={{ backgroundColor: '#175852'}}>
                        Descp1
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                     style={{  height: '400px' }}
                     >
                      <FrontSide
                        style={{
                          backgroundColor: '#41669d',
                        }}
                      >
                        RICK
                      </FrontSide>
                      <BackSide
                        style={{ backgroundColor: '#175852'}}>
                        Morty
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#41669d',
                        }}
                      >
                        Image3
                      </FrontSide>
                      <BackSide
                        style={{ backgroundColor: '#175852'}}>
                        Descp3
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#41669d',
                        }}
                      >
                        Image4
                      </FrontSide>
                      <BackSide
                        style={{ backgroundColor: '#175852'}}>
                        Descp4
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#41669d',
                        }}
                      >
                        Image5
                      </FrontSide>
                      <BackSide
                        style={{ backgroundColor: '#175852'}}>
                        Descp5
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#41669d',
                        }}
                      >
                        Image6
                      </FrontSide>
                      <BackSide
                        style={{ backgroundColor: '#175852'}}>
                        Descp6
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{ height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#41669d',
                        }}
                      >
                        Image7
                      </FrontSide>
                      <BackSide
                        style={{ backgroundColor: '#175852'}}>
                        Descp7
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#41669d',
                        }}
                      >
                        Image8
                      </FrontSide>
                      <BackSide
                        style={{ backgroundColor: '#175852'}}>
                        Descp8
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#41669d',
                        }}
                      >
                        Image9
                      </FrontSide>
                      <BackSide
                        style={{ backgroundColor: '#175852'}}>
                        Descp9
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#41669d',
                        }}
                      >
                        Image10
                      </FrontSide>
                      <BackSide
                        style={{ backgroundColor: '#175852'}}>
                        Descp10
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#41669d',
                        }}
                      >
                        Image11
                      </FrontSide>
                      <BackSide
                        style={{ backgroundColor: '#175852'}}>
                        Descp11
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#41669d',
                        }}
                      >
                        Image12
                      </FrontSide>
                      <BackSide
                        style={{ backgroundColor: '#175852'}}>
                        Descp12
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          {/* <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <div>
                      <a onClick={this.handleClick}
                        href="img/portfolio/01-large.jpg"
                        title="Project Title"
                        data-lightbox-gallery="gallery1"
                      >
                        <div className="hover-text">
                          <h4>Lorem Ipsum</h4>
                        </div>
                        <img
                          src="img/portfolio/01-small.jpg"
                          className="img-responsive"
                          alt="Project Title"
                        />{" "}
                      </a>{" "}
                      </div>
                      <div>
                     This is the back of the card.
                      <button onClick={this.handleClick}>Click to flip</button>
                      </div>
                  </ReactCardFlip>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <div>
                    <a onClick={this.handleClick}
                      href="img/portfolio/02-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src="img/portfolio/02-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                      </div>
                      <div>
                     This is the back of the card.
                      <button onClick={this.handleClick}>Click to flip</button>
                      </div>
                  </ReactCardFlip>
                   
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/03-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src="img/portfolio/03-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/04-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src="img/portfolio/04-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/05-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src="img/portfolio/05-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/06-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dolor Sit</h4>
                      </div>
                      <img
                        src="img/portfolio/06-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/07-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dolor Sit</h4>
                      </div>
                      <img
                        src="img/portfolio/07-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/08-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src="img/portfolio/08-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/09-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src="img/portfolio/09-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Gallery;
