
<nav>
        <a href="#home"><img src='../imgs/SiteLogo.jpg' alt='#' className='logonav' width="130px"/></a>
        <a href="http://localhost:3000/HomeP"><p>HOME</p></a>
        <a href="#nossosservicos"><p>NOSSOS SERVIÇOS</p></a>
        <a href="#sobrenos"><p>SOBRE NÓS</p></a>
        <a href="#nossocontato"><p>CONTATO DA EMPRESA</p></a>
        
        <img src='../imgs/carrinhonav.png' alt="#" class="carrinho" width="40px"></img>
        <a href="dadospessoais.php">
        <img src='usuarionav.png' alt="#"  width="40px"></img> </a>
        
    </nav>
<style>
    * {
    margin: 0;
    padding: 0;
  }
    a{
        text-decoration: none;
    }
    
nav {
    width: 100%;
    height: 60px;
    background-color: #442C0F;
    position: fixed;
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.logonav {
    width: 50px;
    height: 60px;

}

nav p {
    color: white;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 14px; 
}

nav p:hover {
    color: gray;
    transition: all 1s;
}

.botoesnav {
    display: flex;
    width: 150px;
    flex-direction: row;
    justify-content: space-around;
}

  </style>
