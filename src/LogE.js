import React from 'react';
import './logine.css';
import Cabecalho from './components/Cabecalho';
import BlocoLoginE from './components/BlocoLoginE';
import { Routes, Route } from 'react-router-dom';

function LogE() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<><Cabecalho /><BlocoLoginE/></>}/>
          <Route path="/Home" element={<><Home /></>}/>
        </Routes>
      </div>
    );
  }
  
  export default LogE;