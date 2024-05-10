<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finalizar Pagamento</title>
    <link href="https://fonts.googleapis.com/css2?family=Italiana&family=Poppins:wght@100;200;300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="finalizarPag.css"> <!-- Ajuste o caminho do seu CSS se necessário -->
    <style>
        body {
            background-color: #E5D6CB;
            font-family: "Poppins", sans-serif;
        }
        
    
        
        .fundo {
            margin-bottom: 1%;
            background-color: #AA9485;
            width: 550px;
            height: 120px;
            border-radius: 15px;
            padding: 10px;
        }

        .fundo p {
            font-size: 16px;
            color: #442C0F;
            margin: 5px 0;
        }
        
        .fundo .total {
            font-weight: bold;
        }

        .forms1 {
            width: 100%;
            margin-bottom: 10px;
            padding: 5px;
            border-radius: 5px;
            border: none;
            background-color: #AA9485;
        }

        .botao {
            background-color: #442C0F;
            color: #E5D6CB;
            border: none;
            padding: 5px 20px;
            border-radius: 15px;
            cursor: pointer;
            font-size: 13px;
            cursor: pointer;

        }

        h2 {
            margin-bottom: 5px;
            font-size: 15px;
        }

        .tudo {
            margin-left: 2%;
            margin-top: -2%;
        }

        .tudaoo {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }

        .fundo12, .fundo122 {
            margin-bottom: 1%;
            background-color: #AA9485;
            width: 290px;
            height: 120px;
            border-radius: 15px;
            padding: 10px;
        }

        .fundo12 p, .fundo122 p {
            font-size: 16px;
            color: #442C0F;
            margin: 5px 0;
        }
        .tituloAss{
    display: flex; 
    /* flex-direction: row; */
    /* justify-content: center; */
    align-items: center;
 
 }
.a01{
    /* margin-top: 60px; */
    background-color: #442C0F;
    width: 20%;
    height: 2px;    
    }
    
    .a02{
    align-items: center;
    font-family: "Italiana", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 40px;
    color: #442C0F;
    /* margin-left: 10%;
    margin-right: 10%; */
    }
    
    .a03{
       /* margin-top: 60px; */
    background-color: #442C0F;
    width: 20%;
    height: 2px;
    margin-right: 10%;
    
    }
    </style>
</head>
<body>
    <div class="tituloAss">
        <div class="a01"></div>
        <div class="a02"><p>FINALIZAR PAGAMENTO</p></div>
        <div class="a03"></div>
    </div>


    </div>
    <div class="tudaoo">
        <div class="tudo">
            <form action="texts.php" method="post">
                <p>ENDEREÇOS SALVOS:</p>
                <div class="fundo">
                    <p>Ana</p>
                    <p>R. Pombeiro de Magalhães, 231</p>
                    <p>Santo André, SP</p>
                </div>
                <p>ADICIONAR ENDEREÇO:</p>
                <h2>Nome Destinatário:</h2>
                <input name="nome" type="text" class="forms1"/>
                <h2>Rua:</h2>
                <input name="rua" type="text" class="forms1"/>
                <h2>Cidade:</h2>
                <input name="cidade" type="text" class="forms1"/>
                <p>FRETE:</p>
                <div class="fund0o">
                    <p>PARA O CEP: 7 dias úteis......................................... R$ 15,98</p>
                </div>
            </form>
        </div>
        <div class="tudo2">
            <div class="a002"><p>FORMAS SALVAS DE PAGAMENTO</p></div>
            <div class="fundo12">
                <p>VISA</p>
                <p>**** **** **** 8990</p>
                <p>Ana</p>
            </div>
            <div class="fundo122">
                <p>1X Vinho rosé Vallée D’or R$ 118,70</p>
                <p>Frete R$ 15,98</p>
                <p class="total">TOTAL: R$ 134,68</p>
                <a href="obrigada.php" class="botao">Confirmar pedido</a>
            </div>
        </div>
    </div>
</body>
</html>
