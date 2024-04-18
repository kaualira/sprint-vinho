import React from 'react';
import { Link } from 'react-router-dom';

function BlocoLoginE () {
    return (
        <div className='blocofundo'>
            <div className='blocologin'>
                <div className='facacadastro'>
                    <img src='Imagens/Pagina_2/predio.png' alt='' className='prediozinho'/>
                    <p className='p1'>Faça o cadastro de </p>
                    <p className='p1'>sua empresa</p>
                    <p className='p2'>Já está cadastrado em</p>
                    <p className='p2'>nosso sistema?</p>
                    <Link to="/Home"><p className='p1'>Entrar</p></Link>
                </div>
                <div className='dados'>

                </div>
            </div>
        </div>
    )
}

export default BlocoLoginE;