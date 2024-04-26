import React from 'react';
import { Link } from 'react-router-dom';

function BlocoLoginF () {
    return (
        <>
        <div className="blocofundof">
            <div className='blocologinf'>
                <img src='Imagens/Pagina_4/pessoa1.png' alt='' className='pessoinha'/>
                <p className='p'>Faça seu Login</p>
                
                <div className='loggim'>
                <h2> Email:</h2>
                <input name='email' type='email' class='inputt'/>
                </div>
                <div className='loggin'>
                <h2> Senha:</h2>
                <input name='senha' type='text' class='inputt'/>
                </div>

                <Link to="/HomeP"><p>ENTRAR</p></Link>
                <div className='linhadourada'></div>
            </div>
        </div>
        </>
    )
}

export default BlocoLoginF;