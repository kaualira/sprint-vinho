import './index.css';
import React from 'react';
import Cabecalho from './components/Cabecalho';
import TextoAbertura from './components/TextoAbertura';
import Botoes from './components/Botoes';
import { Route, Routes } from 'react-router-dom';
import Login1 from './Login1';


function App() {
  return (
    <div>
      <Routes>
        <Route path= "login1" element={<Login1 />} />
        <Cabecalho />
        <TextoAbertura />
        <Botoes />
      </Routes> 
    </div>
  );
}

export default App;
