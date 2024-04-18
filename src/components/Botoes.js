import React from 'react';
import { Link } from 'react-router-dom';
// import LogE from '../LogE';
// import Switch from 'react-switch';
// import Logine from './Logine';

// import './style.css';

// import { Container } from './styles';


function Botoes () {
    return (
        <>
        <div className="blocobotoes">
            <Link to="/Login">
            <div className="botao1">
                <img src='imgs/Empresa.png' alt='empresa' className='empresa'/>
            </div>
            </Link>
            <div className="botao2">
                <img src='imgs/Pessoa.png' alt='pessoa' className='pessoa'/>
            </div>
        </div>
        </>
    )
}

export default Botoes;