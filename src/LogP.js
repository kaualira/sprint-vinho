import React from 'react';
import './loginp.css';
import Cabecalho from './components/Cabecalho';
// import BlocoLoginE from './components/BlocoLoginE';
import { Routes, Route } from 'react-router-dom';

function LogP() {
    return (
      <div>
        <Routes>
          <Route path="/LoginP" element={<><Cabecalho /></>}/>
        </Routes>
      </div>
    );
  }
  
  export default LogP;