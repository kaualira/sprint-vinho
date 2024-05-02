import React from 'react';
import ReactDOM from 'react-dom/client';
import './homeE.css';
import HoE from './HoE';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <HoE />
  </BrowserRouter>
);