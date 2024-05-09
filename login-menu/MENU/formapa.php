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
    <link rel="stylesheet" type="text/css" href="formapa.css">
    <title>Perfil</title>
</head>

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
                    <a class="link" href="../painel.php">Dados Pessoais</a>
                </li>
                <li class="nav-item">
                    <a class="link" href="../endereco.php">Endereço</a>
                </li>
            </ul>
        </div>
        <div class="linha-branca"></div>
        <div class="menu2">
            <ul class="coluna1">
                <li class="nav-item">
                    <a class="link" href="../pedidos.php">Pedidos</a>
                </li>
                <li class="nav-item">
                    <a class="link1" href="#">Formas de Pagamento</a>
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
        <div class="linha-lateral">Forma de Pagamento</div>
    </div>
    <div class="inputs">
        <?php

        session_start();

        // Verificar se o usuário está logado
        if (!isset($_SESSION['username'])) {
        }

        // Conectar-se ao banco de dados SQLite
        $db = new SQLite3('cartao.db');


        // Execute a consulta para buscar os dados
        $results = $db->query('SELECT card_name, card_number FROM cart');
        $row = $results->fetchArray();


        // Verifica se há resultados da consulta
        if ($results) {
            while ($row = $results->fetchArray()) {
                $cardName = $row['card_name'];
                $cardNumber = $row['card_number'];

                // Exibe os detalhes do cartão dentro da div "inputs"
                echo "<div class='mars'>";
                echo "<div class='d1'>";
                echo "<img src='VISA.png' class='visa-image'>";
                echo "<p> $cardName</p>";
                echo "<p> $cardNumber</p>";
                echo "</div>";
                echo "<div class='delete-container'>";
                echo "<img src='../imgs/lixeira.png' class='delete-button' onclick='deleteCard(\"$cardNumber\")' alt=''>";
                echo "</div>";
                echo "</div>";
            }
        } else {
            // Caso não haja resultados, defina valores padrão ou exiba uma mensagem informando que não há dados
            echo "Nenhum dado encontrado.";
        }
        ?>
        <button type="button" class="button" onclick="location.href='FormaDePag.php'">Adicionar Nova Forma de Pagamento</button>
    </div>
    <script>
        function deleteCard(cardNumber) {
            if (confirm("Tem certeza que deseja apagar este cartão?")) {
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "delete_card.php", true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        // Atualiza a página após apagar o cartão
                        window.location.reload();
                    }
                };
                xhr.send("card_number=" + cardNumber);
            }
        }
    </script>

    <?php include_once("../footer.php"); ?>
</body>

</html>