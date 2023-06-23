// import logo from './logo.svg';
import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import { LandingPage } from './components/LandingPage';
import { SecondPage } from './components/SecondPage';
import { ThirdPage } from './components/ThirdPage';
import { ForthPage } from './components/ForthPage';
import { FifthPage } from './components/FifthPage';

function App() {
  return (
    <div className="h-100 container">
      <LandingPage />
      <SecondPage />
      <ThirdPage />
      <ForthPage />
      <FifthPage />
    </div>
  );
}

export default App;
