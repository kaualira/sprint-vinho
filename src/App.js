import './index1.css';
import React from 'react';
import Cabecalho from './components/Cabecalho';
import TextoAbertura from './components/TextoAbertura';
import Botoes from './components/Botoes';
import { Routes, Route } from 'react-router-dom';
import LogE from './LogE';
import LogP from './LogP';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<><Cabecalho /><TextoAbertura/><Botoes/></>}/>
          <Route path="/Login" element={<><LogE /></>}/>
          <Route path="/LoginP" element={<><LogP /></>}/>
        </Routes>
    </div>
  );
}

export default App;
