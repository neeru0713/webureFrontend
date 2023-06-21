// import logo from './logo.svg';
import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import { LandingPage } from './components/LandingPage';
import { SecondPage } from './components/SecondPage';
import { ThirdPage } from './components/ThirdPage';

function App() {
  return (
    <div className="h-100">
      <LandingPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
}

export default App;
