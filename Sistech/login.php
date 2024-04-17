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

// Verifica se os campos de login estão preenchidos
if(isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Consulta SQL para verificar se as credenciais estão corretas
    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<script>alert('Login Validado');</script>";
    } else {
        echo "<script>alert('Usuário ou senha incorretos. Tente novamente.');</script>";
        header("Location: ");
        
    }
  
}

$conn->close();

?>
