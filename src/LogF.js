import './loginf.css';
import React from 'react';
import Cabecalho from './components/Cabecalho';
// import TextoAbertura from './components/TextoAbertura';
// import Botoes from './components/Botoes';
import { Routes, Route } from 'react-router-dom';
import BlocoLoginF from './components/BlocoLoginF';


function LogF() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<><Cabecalho /><BlocoLoginF /></>}/>
        </Routes>
    </div>
  );
}

export default LogF;