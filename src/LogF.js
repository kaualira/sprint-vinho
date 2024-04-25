import './loginf.css';
import React from 'react';
import Cabecalho from './components/Cabecalho';
import { Routes, Route } from 'react-router-dom';
import BlocoLoginF from './components/BlocoLoginF';


function LogF() {
  return (
    <div>
        <Routes>
          <Route path="/LoginF" element={<><Cabecalho /><BlocoLoginF /></>}/>
        </Routes>
    </div>
  );
}

export default LogF;