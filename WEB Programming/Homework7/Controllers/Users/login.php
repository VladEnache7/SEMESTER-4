<?php
header('Cache-Control: no-cache, must-revalidate');

require_once '../../DataBase/DataBaseConnection.php';

session_start();

// If the user came back to the login page, they should not have any session variables.
if (isset($_SESSION['username'])) {
    unset($_SESSION['username']);
}

function checkValidPassword(string $username, string $password): bool
{
    $connection = new DataBaseConnection();
    $result = $connection->selectUserByUsername($username);
    if (count($result) == 0) {
        return false;
    } else {
        if ($result[0]["UserPassword"] === $password) {
            return true;
        } else {
            return false;
        }
    }
}

if (isset($_POST['beginReservationButton'])) {
    $errors = 0;
    if (!isset($_POST["username"]) or !isset($_POST["date"]) or !isset($_POST["destinationCity"]))
        $_SESSION['login-error'] = "You have not entered a all the fields! Try again!";
    else {
        $username = $_POST['username'];
        $date = $_POST['date'];
        $destinationCity = $_POST['destinationCity'];

        $_SESSION['username'] = $username;
        $_SESSION['date'] = $date;
        $_SESSION['destinationCity'] = $destinationCity;
        header("Location: profile.php");
    }
}

if (isset($_POST['indexPage'])) {
    header("Location: login.php");
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../../styles/style.css">
    <title>Login</title>
</head>
<body>
<div class="container">
    <h2>Planning Reservations</h2>
    <form id="login-form" method="post" action="login.php">
        <div class="mb-3 mt-3">
            <label for="username" class="form-label">Your Name:</label>
            <input type="text" class="form-control" id="username" placeholder="Enter username" name="username" required>
        </div>
        <div class="mb-3 mt-3">
            <label for="date" class="form-label">Date:</label>
            <input type="date" class="form-control" id="date" name="date" required>
        </div>
        <div class="mb-3 mt-3">
            <label for="destinationCity" class="form-label">Destination City:</label>
            <input type="text" class="form-control" id="destinationCity" placeholder="Enter destination city"
                   name="destinationCity" required>
        </div>
        <input type="submit" class="btn btn-info" name="beginReservationButton" value="Begin Reservation">
        <input type="submit" class="btn btn-secondary" name="indexPage" value="Cancel">
        <?php
        if (isset($_SESSION['login-error'])) {
            $error = $_SESSION['login-error'];
            echo '<script type="text/javascript">';
            echo 'window.alert("Please enter all the fields!")';
            echo '</script>';
        }
        ?>
    </form>
</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</html>

<?php
unset($_SESSION['login-error']);
?>

