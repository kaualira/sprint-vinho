import React from 'react';
import ReactDOM from 'react-dom/client';
import './vinhos.css';
import Vin from './Vin';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Vin />
  </BrowserRouter>
);