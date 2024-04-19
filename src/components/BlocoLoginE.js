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
                        <h2> Nome da Empresa:</h2>
                        <input name='nome' type='text' className='forms'/>

                        <h2> CNPJ:</h2>
                        <input name='cnpj' type='text' class='forms'/>

                        <h2> Número de contato:</h2>
                        <input name='contato' type='text' class='forms'/>

                        <h2> E-mail:</h2>
                        <input name='email' type='email' class='forms'/>

                    </div>
                    <div className='dados2'>
                    <h2> Rua:</h2>
                        <input name='rua' type='text' class='forms'/>
                        <div className='forms3'>
                        <h2> Número:</h2>
                        <input name='numero' type='text' class='forms2'/>

                        <h2> Complemento:</h2>
                        <input name='complemento' type='text' class='forms2'/>
                        </div>
                    </div>
                    <div className='dados3'>
                        <Link to="/"><p className='p3'>ENTRAR</p></Link>
                        <div className='linhadourada'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlocoLoginE;