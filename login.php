<!-- <?php
        include("server.php")
        ?> -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <title>Login</title>
</head>

<body>
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

    ?>
    <div class="wrapper login-wrapper">
        <div class="subscribed">
            <h1><a href="index.html">SUMATHI MASA PATHRIKA</a></h1>
            <p>Enter the subscription code of current month</p>
            <form name="form" method="post" action="login.php">
                <input class="input" id="focus" name="code" type="password" placeholder="Enter code...." required>
                <button type="submit" class="button" name="login_user">S U B M I T</button>
            </form>
        </div>

        <?php
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

        ?>

        <div><a class="not" href="subscribe.html">not yet subscribed</a></div>
    </div>



</body>

</html>