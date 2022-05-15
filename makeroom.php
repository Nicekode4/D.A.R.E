<?php
$servername = "68.168.220.58";
$username = "kode4clu_dare";
$password = "tjgKpNlyY2";
$dbname = "kode4clu_dare";
$room = $_GET['cRoom'];
$theuser = $_GET['user'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO rooms (roomName,people,NumberINroom)
VALUES ('$room','$theuser',1)";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
  header("Location: welcome.php");
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>