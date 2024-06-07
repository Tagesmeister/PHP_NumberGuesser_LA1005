<?php

parse_str(file_get_contents("php://input"), $_PUT);

$id = $_PUT['id'];
$title = $_PUT['title'];
$content = $_PUT['content'];
$date = date('Y-m-d');

if ($title == null) {
    $title = 'Neue Notiz';
}

if ($content == null) {
    $content = 'Diese Notiz hat keinen Inhalt';
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "la1305db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sqlquery = "UPDATE notes SET title='$title', content='$content', modificationDate='$date' WHERE id='$id'";

if ($conn->query($sqlquery) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error: " . $sqlquery . "<br>" . $conn->error;
}

$conn->close();
?>
