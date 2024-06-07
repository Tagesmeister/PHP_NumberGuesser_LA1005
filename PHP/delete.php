<?php

parse_str(file_get_contents("php://input"), $_DELETE);

$id = $_DELETE['id'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "la1305db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sqlquery = "DELETE FROM notes WHERE id='$id'";

if ($conn->query($sqlquery) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error: " . $sqlquery . "<br>" . $conn->error;
}

$conn->close();
?>
