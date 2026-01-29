<?php

require_once __DIR__ . '/../../DataBase/DataBaseConnection.php';

session_start();

if (isset($_SESSION['username'])) {
    // Take the username from the session variable.
    $username = $_SESSION['username'];
} else {
    // If the user is not logged in, redirect them to the login page.
    header('Location: login.php');
    die();
}

// If the user clicks the logout button, destroy the session and redirect them to the login page.
if (isset($_POST['logoutButton'])) {
    session_unset();
    session_destroy();
    header('Location: login.php');
}

if (isset($_POST['viewAllButton'])) {
    header('Location: ../News/viewAllNews.php');
}

if (isset($_POST['addNewsButton'])) {
    header('Location: ../News/addNews.php');
}

if (isset($_POST['cancelAllReservationsButton'])) {
    $username = $_SESSION['username'];
    $sessionID = session_id();

    $databaseConnection = new DataBaseConnection();
    $databaseConnection->cancelAllReservations($username, $sessionID);
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
    <title>Reservation page</title>
</head>
<body>
<div class="container text-center">
    <h3>Welcome, <?php echo $username; ?>!</h3>
    <?php include '../partials/navbar.php'; ?>
</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</html>