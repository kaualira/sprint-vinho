import React from 'react';
import ReactDOM from 'react-dom/client';
import './loginp.css';
import LogP from './LogP';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LogP />
  </BrowserRouter>
);