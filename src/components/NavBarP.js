import { Link } from 'react-router-dom';


function NavBarP () {
    return (
        <>
            <nav>
                <a href="#home"><img src='Imagens/NavBar pessoa/Site.jpg' alt='#' className='logonav'/></a>
                <a href="#home"><p>HOME</p></a>
                <a href="#nossosservicos"><p>NOSSOS SERVIÇOS</p></a>
                <a href="#sobrenos"><p>SOBRE NÓS</p></a>
                <a href="#nossocontato"><p>CONTATO DA EMPRESA</p></a>
                {/* <div className="botoesnav"> */}
                <Link to="/Produtos"><img src='Imagens/NavBar pessoa/carrinhonav.png' alt="#" className='linkcarrinho'></img></Link>
               <a href='http://localhost/sprint-vinho/login-menu/painel.php'>
                <img src='Imagens/NavBar pessoa/usuarionav.png' alt="#" width={150}></img> </a>
                
                {/* </div> */}
            </nav>
        </>
    )
}

export default NavBarP;