import React from 'react';
import './logine.css';
import Cabecalho from './components/Cabecalho';
import BlocoLoginP from './components/BlocoLoginP';
import { Routes, Route } from 'react-router-dom';

function LogE() {
    return (
      <div>
          <Cabecalho />
          <BlocoLoginP />
      </div>
    );
  }
  
  export default LogE;