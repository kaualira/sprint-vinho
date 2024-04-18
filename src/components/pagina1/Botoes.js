import { Link } from 'react-router-dom';

function Botoes () {
    return (
        <>
        <div className="blocobotoes">
            <div className="botao1">
                <a href='Login1.js'><img src='imgs/Empresa.png' alt='empresa' className='empresa'/></a>
            </div>
            <div className="botao2">
                <link><img src='imgs/Pessoa.png' alt='pessoa' className='pessoa'/></link>
            </div>
        </div>
        </>
    )
}

export default Botoes;