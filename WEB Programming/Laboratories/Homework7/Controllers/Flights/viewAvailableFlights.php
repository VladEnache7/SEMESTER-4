<?php

session_start();

if (!isset($_SESSION['username'])) {
    // If the user is not logged in, redirect them to the login page.
    header('Location: ../Users/login.php');
    die();
}

require_once '../../DataBase/DataBaseConnection.php';

// Get the current date and city.
$date = $_SESSION['date'];
$city = $_SESSION['destinationCity'];

$databaseConnection = new DataBaseConnection();
$flights = $databaseConnection->selectAvailableFlightsByDateAndDestination($date, $city);

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['flightID'])) {
        $flightID = $_POST['flightID'];
        $username = $_SESSION['username'];
        $result = $databaseConnection->reserveFlightSeat($username, $flightID);
        if ($result) {
            echo '<script>alert("Flight reserved successfully!");</script>';
        } else {
            echo '<script>alert("Failed to reserve flight.");</script>';
        }
    }
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
    <style>
        .table {
            margin-top: 30px;
            background-color: white;
            border-radius: 10px;
        }
    </style>
</head>
<body>
<?php include '../partials/navbar.php'; ?>
<div class="container">
    <table class="table">
        <thead>
        <tr>
            <th scope="col">Flight ID</th>
            <th scope="col">Destination City</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        <?php
        // Display the flights data.
        foreach ($flights as $flight) {
            echo '<tr>';
            echo '<td>' . $flight['flightID'] . '</td>';
            echo '<td>' . $flight['destinationCity'] . '</td>';
            echo '<td>' . $flight['date'] . '</td>';
            echo '<td>';
            echo '<form method="post" action="">'; // The action is empty because the form submits to the same page
            echo '<input type="hidden" name="flightID" value="' . $flight['flightID'] . '">';
            echo '<input type="submit" class="btn btn-primary" value="Reserve">';
            echo '</form>';
            echo '</td>';
            echo '</tr>';
        }
        ?>
        </tbody>
    </table>
</div>
</body>
</html>