import React, { Component } from "react";
import Slider from 'react-animated-slider';
import '../files/horizontal.css';
import deliver from '../files/deliver.png';
import manufacture from '../files/deliver.png';



export class features extends Component {
  
  render() {
    const slides = [
      { title: 'Your Rough Idea', description: 'Our custom pos cardboard style options allow you to customize your pos cardboard and even develop new style',img:require('../files/ideas.svg')},
      { title: 'We Design', description: 'Samples come out to let the customer to confirm, when will be allowed after Impact batch production',img:require('../files/design.svg')},
      { title: 'Manufacturing', description: 'Impact handles the entire manufacturing and printing process which is done by our local in-house service',img:require('../files/manufacture.svg')},
      { title: 'Delivery', description: 'Your custom printed packaging delivers within 15 days, fully ready to ship your product out to customers.',img:require('../files/deliver.svg')},
    ];
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title nocap">
            <h2 style={{textTransform:"capitalize"} }>How <span style={{textTransform:"lowercase"}}> we</span> <span style={{textTransform:"uppercase"}}>craft ?</span></h2>
          </div>
          {/* <div className="row">
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div> */}
          <Slider autoplay = {3000}>
            {slides.map((slide, index) => 
            <div key={index} >
              <img src={slide.img} style={{width:200,height:200}} />
              <h2>{slide.title}</h2>
              <div>{slide.description}</div>
              </div>)}
          </Slider>
        </div>
        </div>
    );
  }
}

export default features;
