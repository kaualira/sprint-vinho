<?php include_once("navbar.php");
?>


<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="pedidos.css">
    <title>Perfil</title>
</head>
<style>

.fundo {
  margin-top: 5%;
  display: flex;
  margin-bottom: 3%;
  background-color: #AA9485;
  width: 550px;
  height: 120px;
  border-radius: 15px; /* Adiciona bordas arredondadas */
  flex-direction: column;
}

.fundo p {
  margin-right: 120px;
  color: #FFFFFF;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-decoration:none;
  font-size: 80%;

  
}
.p1{
    margin-top: -110px;
    margin-left: -20px;
    
}


.p3{
    font-size: 25px;
    color: #FFFFFF;
    margin-top: -11%;
    margin-left: 80%;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    text-decoration:none;
    

}

.visa-image {
  width: 120px; /* Defina a largura desejada */
  height: auto; /* Mantém a proporção original da imagem */
  border-radius: 10px; /* Adiciona bordas arredondadas */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra suave */
  margin-right: 20px;
 
}
.tres{
    margin-left: -5px;

}

.fundo1 {
  margin-top: 5%;
  display: flex;
  margin-bottom: 3%;
  background-color: #AA9485;
  width: 550px;
  height: 120px;
  border-radius: 15px; /* Adiciona bordas arredondadas */
  flex-direction: column;
}

.fundo1 p {
  margin-right: 120px;
  color: #FFFFFF;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-decoration:none;
  font-size: 80%;

  
}
.p11{
    margin-top: -110px;
    margin-left: 70px;
    
}


.p33{
    font-size: 25px;
    color: #FFFFFF;
    margin-top: -11%;
    margin-left: 80%;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    text-decoration:none;
    

}

.visa-image {
  width: 120px; /* Defina a largura desejada */
  height: auto; /* Mantém a proporção original da imagem */
  border-radius: 10px; /* Adiciona bordas arredondadas */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra suave */
  margin-right: 20px;
 
}
.tres{
    margin-left: -5px;

}
    </style>

<body>
    <div class="menu">
        <br>
        <br>
        <br>
        <center>
            <h2>MENU</h2>
        </center>
    </div>
    <div class="container">
        <div class="menu1">
            <ul class="coluna1">
                <li class="nav-item">
                    <a class="link" href="painel.php">Dados Pessoais</a>
                </li>
                <li class="nav-item">
                    <a class="link" href="endereco.php">Endereço</a>
                </li>
            </ul>
        </div>
        <div class="linha-branca"></div>
        <div class="menu2">
            <ul class="coluna1">
                <li class="nav-item">
                    <a class="link1" href="#">Pedidos</a>
                </li>
                <li class="nav-item">
                    <a class="link" href="MENU/formapa.php">Formas de Pagamento</a>
                </li>
                <li class="nav-item">
                    <a class="link3" href="#">Formas de Pagamento</a>
                </li>
                <li class="nav-item">
                    <a class="link3" href="#">Formas de Pagamento</a>
                </li>
                <li class="nav-item">
                    <a class="link3" href="#">Formas de Pagamento</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="dados-pessoais">
        <br>
        <br>
        <div class="linha-lateral">Pedidos</div>
    </div>
    <div class="inputs">
    <div class='fundo'>
    <img src="imgs/Garrafas.jpg" class="visa-image">
  <p class="p1"> 2X Vinho Tinto Pinotage </p> <br> <br>
  <p class="p2"> Pedido feito dia: 7/04/2024</p>
  <p class="tres">Entregue dia: 11/04/2024</p>
    </div>
    <p class="p3"> R$:152,00</p>
    

    <div class='fundo1'>
    <img src="imgs/Garrafas.jpg" class="visa-image">
  <p class="p11"> Vinho branco Vallée D’or Chardonnay </p> <br> <br>
  <p class="p22"> Pedido feito dia: 16/04/2024</p>
  <p class="tress">Entregue dia: 20/04/2024</p>
    </div>
    <p class="p33"> R$:182,00</p>
    </div>

    </div>
    <?php include_once("footer.php"); ?>
</body>

</html>