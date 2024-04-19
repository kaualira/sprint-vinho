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
                    <Link to="/LoginF"><p className='p3'>ENTRE AQUI!</p></Link>
                </div>
                <div className='dados'>
                    <div className='dados1'>

                    </div>
                    <div className='dados2'>

                    </div>
                    <div className='dados3'>
                        <Link to="/HomeP"><p className='p3'>ENTRAR</p></Link>
                        <div className='linhadourada'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlocoLoginE;