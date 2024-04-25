import React from 'react';
import './logine.css';
import Cabecalho from './components/Cabecalho';
import BlocoLoginP from './components/BlocoLoginP';
import { Routes, Route } from 'react-router-dom';

function LogE() {
    return (
      <div>
        <Routes>
          <Route path="/LoginP" element={<><Cabecalho /><BlocoLoginP /></>}/>
        </Routes>
      </div>
    );
  }
  
  export default LogE;