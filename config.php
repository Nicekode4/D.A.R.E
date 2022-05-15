<?php
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
define('DB_SERVER', '68.168.220.58');
define('DB_USERNAME', 'kode4clu_dare');
define('DB_PASSWORD', 'tjgKpNlyY2');
define('DB_NAME', 'kode4clu_dare');
 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>