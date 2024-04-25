import React from 'react';
import { Link } from 'react-router-dom';

function BlocoLoginP () {
    return (
        <div className='blocofundo'>
            <div className='blocologin'>
                <div className='facacadastro'>
                    <img src='Imagens/Pagina_3/pessoa.png' alt='' className='pessoinha'/>
                    <p className='p1'>Faça seu </p>
                    <p className='p1'>cadastro pessoal</p>
                    <p className='p2'>Já está cadastrado em</p>
                    <p className='p2'>nosso sistema?</p>
                    <Link to="/LoginF"><p className='p3'>ENTRE AQUI!</p></Link>
                </div>
                <div className='dados'>
                    <div className='dados1'>
                    <h2> Nome Completo:</h2>
                        <input name='nome' type='text' className='forms'/>

                        <h2> CPF:</h2>
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
                        <h1> Número:</h1>
                        <h1> Complemento:</h1>
                        </div>
                        <div className='forms4'>
                        <input name='numero' type='text' class='forms5'/>
                        <input name='complemento' type='text' class='forms5'/>
                        </div>
  
                        <h2> Cep:</h2>
                        <input name='cep' type='text' class='forms'/>
                        <h2> Cidade:</h2>
                        <input name='cidade' type='text' class='forms'/>

                    </div>
                    <div className='dados3'>

                    <div className='forms6' >
                        <h2> Senha:</h2>
                        <input name='senha' type='text' class='forms66'/>
                        </div>

                        <Link to="/HomeP"><p className='p3'>ENTRAR</p></Link>

                        <div className='linhadourada'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlocoLoginP;