// src/App.js

import React from 'react';
import {Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import CitySelection from './Pages/CitySelection';
import VehicleSelection from './Pages/VehicleSelection';
import ResultPage from './Pages/ResultPage';
import './App.css'

function App() {
  return (
   
      <div className='App'>
        <Routes>
          <Route path="/" exact element={<LandingPage/>} />
          <Route path="/city" element={<CitySelection/>} />
          <Route path="/vehicle" element={<VehicleSelection/>} />
          <Route path="/result" element={<ResultPage/>} />
        </Routes>
      </div>
  );
}

export default App;
