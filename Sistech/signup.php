<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "SIS_TEC";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Verifica se os campos de cadastro estão preenchidos
if(isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Insere o novo usuário no banco de dados
    $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Cadastro realizado com sucesso!');</script>";
    } else {
        echo "Erro ao cadastrar usuário: " . $conn->error;
    }
}

$conn->close();
?>
