import React from 'react';
import ReactDOM from 'react-dom/client';
import './logine.css';
import LogE from './LogE';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LogE />
  </BrowserRouter>
);

