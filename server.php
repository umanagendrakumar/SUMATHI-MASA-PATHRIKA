<?php

$dbHostName = "localhost"; //bydefault name is localhost
$dbuser = "root"; //bydefault user is root
$dbpassword = ""; //bydefault password is empty
$dbname = "codevalidation"; //our database name in phpmyadmin


try {
    $conn = mysqli_connect($dbHostName, $dbuser, $dbpassword, $dbname); 
    //it returns true or false
} catch(mysqli_sql_exception) {
    print_r("Server not connected");
    die();
}

?>