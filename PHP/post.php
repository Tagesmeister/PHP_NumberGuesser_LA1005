<?php

$title = $_POST['title'];
$content = $_POST['content'];
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

$sqlquery = "INSERT INTO notes (title, content, modificationDate) VALUES ('$title', '$content', '$date')";

if ($conn->query($sqlquery) === TRUE) {
    echo "Record inserted successfully";
} else {
    echo "Error: " . $sqlquery . "<br>" . $conn->error;
}

$conn->close();
