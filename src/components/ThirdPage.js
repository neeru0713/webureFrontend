import React from 'react';
import developer from '../images/developer.jpg';
import { Box } from './Box.js';

export const ThirdPage = () => {
  return (
    <div id="ThirdPage" className="h-100 d-flex flex-column justify-content-evenly">
      <div className="d-flex flex-row w-100 justify-content-between">
        <div className="left-content">
          <div className="container-text1">
            <h5>Web Solution</h5>
          </div>
          <div className="w-75">
            <h1 className='lh-base'>Strategics experiences ad visual appeal</h1>
          </div>
          <div className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.nisi ut aliquip ex ea commodo consequat.nisi ut aliquip ex ea commodo consequat.nisi ut aliquip ex ea commodo consequat.nisi ut aliquip ex ea commodo consequat.nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <h6>Read More -></h6>
        </div>

        <div className="third-page-image">
          <img src={developer} className="h-100 w-100" />
        </div>
      </div>

      <div className="box-group d-flex justify-content-between ">
        <Box number="6" title="Years in Field" />
        <Box number="10+" title="Expertes" />
        <Box number="50+" title="Projects" />
        <Box number="20+" title="Agency Prtners" />
      </div>
    </div>
  );
};
