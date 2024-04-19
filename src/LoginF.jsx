import React from 'react';
import ReactDOM from 'react-dom/client';
import './loginf.css';
import LogF from './LogF';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LogF />
  </BrowserRouter>
);