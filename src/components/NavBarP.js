import { Link } from 'react-router-dom';


function NavBarP () {
    return (
        <>
            <nav>
                <img src='Imagens/NavBar pessoa/Site.jpg' alt='#' className='logonav'/>
                <p>HOME</p>
                <p>NOSSOS SERVIÇOS</p>
                <p>SOBRE NÓS</p>
                <p>CONTATO DA EMPRESA</p>
                <Link to="/"><img src='Imagens/NavBar pessoa/carrinhonav.png' alt="#"></img></Link>
                <Link to="/"><img src='Imagens/NavBar pessoa/usuarionav.png' alt="#" width={50}></img></Link>
                <div className="botoesnav">
                <img src='Imagens/NavBar pessoa/carrinhonav.png' alt="#"></img>
                <img src='Imagens/NavBar pessoa/usuarionav.png' alt="#" width={50}></img>
                </div>
            </nav>
        </>
    )
}

export default NavBarP;