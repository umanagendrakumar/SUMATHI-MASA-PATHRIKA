<?php

$dbHostName = "localhost"; //bydefault name is localhost
$dbuser = "root"; //bydefault user is root
$dbpassword = ""; //bydefault password is empty
$dbname = "codevalidation"; //our database name in phpmyadmin


try {
    $conn = mysqli_connect($dbHostName, $dbuser, $dbpassword, $dbname);
    //it returns true or false
} catch (mysqli_sql_exception) {
    print_r("Server not connected");
    die();
}


if (isset($_POST["login_user"])) {
    $code_entered = $_POST["code"]; //gives user entered code in login page

    $codeFromDB = "SELECT code FROM logincode";

    $result = mysqli_query($conn, $codeFromDB);

    $codeArray = mysqli_fetch_array($result, MYSQLI_ASSOC);  //convert object into array //Array ( [code] => codevalue)

    $dbCodeVal = $codeArray['code'];

    $errors = array();
    if ($code_entered !== $dbCodeVal) {
        array_push($errors, "**invalid code");
    }

    if (count($errors) > 0) {
        foreach ($errors as $error) {
            echo "<div class='red'>$error</div>";
        }
    } else {
        header('Location: sumathi.html');
        die();
    }
}
