import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/JackPot" element={<App/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default RoutesApp;