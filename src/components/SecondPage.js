import React from 'react';
import slack from '../images/slack-logo.jpeg';
import market from '../images/market-logo.jpeg';
import razorpay from '../images/razorpay-logo.jpeg';
import stripe from '../images/stripe-logo.jpeg';
import analysis from '../images/analysis.jpeg';
import digital from '../images/digital-marketing.jpeg';
import email from '../images/email-marketing.jpeg';
import '../App.css';

export const SecondPage = () => {
  return (
    <div id="secondPage" className="h-100">
      <div className="heading text-center fw-bold">
        <h4>Trust by over 20 compines</h4>
      </div>
      <div className="d-flex flex-column fw-medium ">
        <div className="w-100 imagesLogos d-flex justify-content-evenly align-items-center">
          <div>
            <img src={slack} className="img-fluid " />
          </div>
          <div>
            <img src={market} className="img-fluid " />
          </div>
          <div>
            <img src={stripe} className="img-fluid " />
          </div>
          <div>
            <img src={razorpay} className="img-fluid " />
          </div>
          <div>
            <img src={slack} className="img-fluid " />
          </div>
          <div>
            <img src={market} className="img-fluid h-100 " />
          </div>
        </div>

        <div className="long-line d-flex align-items-center"></div>
      </div>

      <div className="para d-flex justify-content-center fw-bold">
        <p>Here how its works</p>
      </div>
      <div className="tag d-flex justify-content-center fw-bold">
        <h1>Simple process to start</h1>
      </div>
      <div className="cards">
        <div>
          <div className="container d-flex flex-column fw-medium ">
            <img src={analysis} className="img-fluid" />
            <h3>Digital analysis</h3>
            <p>
              simply dummy text of the printing and typesetting industry. Lorem
              ipsum has been the indusrt's standrad dummy text ever since the
              1500s.
            </p>
          </div>
          <div>heading</div>
          <div>paragraph</div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
