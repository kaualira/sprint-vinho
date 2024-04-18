import {Link} from 'react-router-dom';
import Login1 from './Login1';
import React from 'react'


function Botoes () {
    return (
        <>
        <div className="blocobotoes">
            <div className="botao1">
                <link to='/Login1'><img src='imgs/Empresa.png' alt='empresa' className='empresa'/></link>
            </div>
            <div className="botao2">
                <img src='imgs/Pessoa.png' alt='pessoa' className='pessoa'/>
            </div>
        </div>
        </>
    )
}

export default Botoes;