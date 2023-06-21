import React from 'react';
import slack from '../images/slack-logo.jpeg';
import market from '../images/market-logo.jpeg';
import razorpay from '../images/razorpay-logo.jpeg';
import stripe from '../images/stripe-logo.jpeg';

import analysis from '../images/analysis.jpeg';
import digital from '../images/digital-marketing.jpeg';
import email from '../images/email-marketing.jpeg';
import '../App.css';
import { Card } from './Card';

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
      <div className="tag d-flex justify-content-center fw-bold mb-4">
        <h2>Simple process to start</h2>
      </div>
      <div className="cards d-flex justify-content-evenly">
        <Card photo={analysis} title="Digital analysis" />
        <Card photo={digital} title="Digital marketing" />
        <Card photo={email} title="Email marketing" />
      </div>
      <button className="allbtn px-3 py-2 fw-medium">All Features</button>
    </div>
  );
};
//
