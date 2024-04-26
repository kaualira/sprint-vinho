import React from 'react';
import ReactDOM from 'react-dom/client';
import './produtos.css';
import Prod from './Prod';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Prod />
  </BrowserRouter>
);