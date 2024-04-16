<?php

session_start();

// If the user is not logged in, redirect them to the login page.
if (!isset($_SESSION['username'])) {
    header('Location: ../Users/login.php');
}
// If the user clicks the view all button, redirect them to the view all news page.
if (isset($_POST['viewAllButton'])) {
    header('Location: viewAllNews.php');
}
// If the user clicks the return button, redirect them to the profile page.
if (isset($_POST['returnButton'])) {
    header('Location: ../Users/profile.php');
}

$username = $_SESSION['username'];

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
    <title>Add news</title>
</head>
<body>
<div class="container" id="addFormDiv">
    <div class="row">
        <div class="col-sm">
            <div class="container" id="showLogs">
                <h3>You have added the following news:</h3>
                <table class="newsTable table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Content</th>
                        <th>Producer</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <button type="button" id="previousButton" class="btn btn-info mb-1" style="margin: 10px">Previous
                </button>
                <button id="nextButton" type="button" class="btn btn-info mb-1" style="margin: 10px">Next</button>
            </div>
        </div>
        <div class="col-sm">
            <div id="addForm" class="container text-left">
                <h3>Enter the details for the news: </h3>
                <div class="mb-1"><label for="typeField" class="form-label">Title: </label><label
                            for="titleField"></label><input type="text"
                                                            id="titleField"
                                                            style="width: 100%; max-width: 500px"
                                                            class="form-control">
                </div>
                <div class="mb-1"><label for="severityField" class="form-label">Category: </label><label
                            for="categoryField"></label><input type="text"
                                                               id="categoryField"
                                                               class="form-control"
                                                               style="width: 100%; max-width: 500px">
                </div>
                <div class="mb-1"><label for="dateField" class="form-label">Content: </label><label
                            for="contentField"></label>
                    <textarea id="contentField" class="form-control" rows="5"></textarea>
                </div>

                <button id="insertNewsButton" type="button" class="btn btn-success mb-1"
                        style="display: block; margin: auto; margin-top: 15px; width: 100%;">Add the News
                </button>
                <hr>
                <form method="post">
                    <input type="submit" class="btn btn-info mb-1" name="viewAllButton" value="View all news"
                           style="margin: auto; margin-top: 10px">
                    <input type="submit" class="btn btn-secondary mb-1" name="returnButton"
                           value="Return to your profile" style="margin: auto; margin-top: 10px">
                </form>
            </div>
        </div>
    </div>
</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="JavaScript/addNews.js"></script>
</html>