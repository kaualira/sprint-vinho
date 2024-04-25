import './index1.css';
import React from 'react';
import Cabecalho from './components/Cabecalho';
import TextoAbertura from './components/TextoAbertura';
import Botoes from './components/Botoes';
import { Routes, Route } from 'react-router-dom';
import LogE from './LogE';
import LogP from './LogP';
import LogF from './LogF';
import HoP from './HoP';
import Vin from './Vin';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<><Cabecalho /><TextoAbertura/><Botoes/></>}/>
          <Route path="/Login" element={<><LogE /></>}/>
          <Route path="/LoginP" element={<><LogP /></>}/>
          <Route path="/LoginF" element={<><LogF /></>}/>
          <Route path="/HomeP" element={<><HoP /></>}/>
          <Route path="/Homep"> element={<><LogP/></>}</Route>
          <Route path="/Vinhos" element={<><Vin /></>}/>
        </Routes>
    </div>
  );
}

export default App;
