<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "la1305db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sqlquery = "SELECT * FROM notes";

$result = $conn->query($sqlquery);

$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode(array());
}

$conn->close();

?>
