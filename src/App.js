import './index.css';
import React from 'react';
<<<<<<< Updated upstream
import Cabecalho from './components/Cabecalho';
import TextoAbertura from './components/TextoAbertura';
import Botoes from './components/Botoes';
import { Link } from 'react-router-dom';
=======
import Cabecalho from './components/pagina1/Cabecalho';
import TextoAbertura from './components/pagina1/TextoAbertura';
import Botoes from './components/pagina1/Botoes';
>>>>>>> Stashed changes

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
