// import { Link } from 'react-router-dom';


function NavBarP () {
    return (
        <>
            <nav>
                <img src='Imagens/NavBar pessoa/Site.jpg' alt='#' className='logonav'/>
                <a href="#home"><p>HOME</p></a>
                <a href="#nossosservicos"><p>NOSSOS SERVIÇOS</p></a>
                <a href="#sobrenos"><p>SOBRE NÓS</p></a>
                <a href="#nossocontato"><p>CONTATO DA EMPRESA</p></a>
                <div className="botoesnav">
                <img src='Imagens/NavBar pessoa/carrinhonav.png' alt="#"></img>
                <img src='Imagens/NavBar pessoa/usuarionav.png' alt="#" width={50}></img>
                </div>
            </nav>
        </>
    )
}

export default NavBarP;