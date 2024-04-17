import './App.module.css';
import React from 'react';
import Cabecalho from './components/Cabecalho';
import TextoAbertura from './components/TextoAbertura';
import Botoes from './components/Botoes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Cabecalho />
      <TextoAbertura />
      <Botoes />
    </div>
  );
}

export default App;
