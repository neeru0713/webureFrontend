// import logo from './logo.svg';
import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import { LandingPage } from './components/LandingPage';
import { SecondPage } from './components/SecondPage';

function App() {
  return (
    <div className="h-100">
      <LandingPage />
      <SecondPage />
    </div>
  );
}

export default App;
