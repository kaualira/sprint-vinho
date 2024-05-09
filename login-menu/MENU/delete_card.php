<?php
// Verifica se o número do cartão foi recebido
if(isset($_POST['card_number'])) {
    // Obtém o número do cartão
    $cardNumber = $_POST['card_number'];

    // Conectar-se ao banco de dados SQLite
    $db = new SQLite3('cartao.db');

    // Prepara a consulta para deletar o cartão
    $stmt = $db->prepare('DELETE FROM cart WHERE card_number = :cardNumber');
    $stmt->bindValue(':cardNumber', $cardNumber, SQLITE3_TEXT);
    
    // Executa a consulta
    $stmt->execute();

    // Fecha a conexão com o banco de dados
    $db->close();
}
?>
