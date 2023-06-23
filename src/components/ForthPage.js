import React from 'react';
// import softwaredevelopers from '../images/softwaredevelopers.jpg'

export const ForthPage = () => {
  return (
    <div id="ForthPage" className="h-100">
      <div className="container">
        <div className="text1  fw-bold">
          <p>Why us</p>
        </div>
        <div className="w-25">
          <h1>What makes us stand out</h1>
        </div>
        <div className="heading mt-5 custom-paragraph ">
          <div>
            <h5>Perfect Startegy</h5>
            <p>
              Based on reserch and analysis, we plan to introduce revolutionary
              solutions
            </p>
          </div>
          <div>
            <h5>Innovative ideas</h5>
            <p>We build electrified relations between products and humans</p>
          </div>
          <div>
            <h5>Effective solutions</h5>
            <p>
              Perfected matched activities follow us to achieve goles in short
              time
            </p>
          </div>
        </div>
        {/* <div >
                <div className= "image2 mt-5" style={{ height: '50%', maxWidth: '25%' }}>
                    <img src={softwaredevelopers} className="h-100 w-100" />
                </div>
            </div> */}
      </div>
    </div>
  );
};
