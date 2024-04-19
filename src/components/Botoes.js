import React from 'react';
import { Link } from 'react-router-dom';

function Botoes () {
    return (
        <>
        <div className="blocobotoes">
            <Link to="/Login">
            <div className="botao1">
                <img src='imgs/Empresa.png' alt='empresa' className='empresa'/>
            </div>
            </Link>
            <Link to="/LoginP">
            <div className="botao2">
                <img src='imgs/Pessoa.png' alt='pessoa' className='pessoa'/>
            </div>
            </Link>
        </div>
        </>
    )
}

export default Botoes;