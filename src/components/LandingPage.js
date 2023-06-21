import React from 'react';
import defaultImage from '../images/logo.jpeg';
import biz from '../images/biz.jpg';
import '../App.css';

export const LandingPage = () => {
  return (
    <div id="firstPage" className="h-100">
      <div className="row navbar d-flex">
        <div className="logo h-100 d-flex align-items-center fw-medium">
          <img src={defaultImage} className="img-fluid h-100 " />
          <p className="m-1">Webure</p>
        </div>

        <div className="nav-btns d-flex align-items-center fw-medium justify-content-between">
          <div className="">Home</div>
          <div className="">About Us</div>
          <div className="">Services</div>
          <div className="">Career</div>
          <div className="">Clientele</div>
        </div>

        <div className="contactus-btn">
          <button className="rounded-pill p-2">Contact Us</button>
        </div>
      </div>

      <div className="row landingpage d-flex flex-column align-items-center">
        <div className="landingpage-container d-flex flex-column align-items-center">
          <div className="content text-center">
            <h1>We esure and transfeorm business growing</h1>
          </div>
          <div className="text text-center">
            <p>
              {' '}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="btn-pills d-flex justify-content-between">
            <button className=" getstarted rounded-pill px-3 py-2">
              Get Started{' '}
            </button>
            <button className=" learnmore rounded-pill px-3 py-2">
              Learn More{' '}
            </button>
          </div>
        </div>
        <div className="image1 mt-5" style={{ height: '50%', maxWidth: '40%' }}>
          <img src={biz} className="h-100 w-100" />
        </div>
      </div>
    </div>
  );
};
