<?php

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
    <title>User page</title>
</head>
<body>
<div class="container text-center">
    <h3>Welcome, <?php echo $username; ?>!</h3>
    <form method="post">
        <input type="submit" class="btn btn-info" name="viewAllButton" value="View all news reports"
               style="margin: auto; margin-top: 10px">
        <input type="submit" class="btn btn-success" name="addNewsButton" value="Add a news report"
               style="margin: auto; margin-top: 10px">
        <input type="submit" class="btn btn-dark" name="logoutButton" value="Log out"
               style="margin: auto; margin-top: 10px">
    </form>
</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</html>