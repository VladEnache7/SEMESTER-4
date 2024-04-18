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
    <title>Edit news</title>
</head>
<body>
<div class="container" id="editFormDiv">
    <h1>Edit this news</h1>
    <div id="editForm" class="text-left" style="max-width: 380px; min-width: 380px">
        <h3>Edit the details for the news: </h3>
        <div class="mb-1"><label for="titleField" class="form-label">Title: </label><label
                    for="titleField"></label><input type="text"
                                                    id="titleField"
                                                    style="width: 100%; max-width: 450px"
                                                    class="form-control">
        </div>
        <div class="mb-1"><label for="categoryField" class="form-label">Category: </label><label
                    for="categoryField"></label><input type="text"
                                                       id="categoryField"
                                                       class="form-control"
                                                       style="width: 100%; max-width: 400px">
        </div>
        <div class="mb-1"><label for="contentField" class="form-label">Content: </label><label
                    for="contentField"></label>
            <textarea id="contentField" class="form-control" rows="5"></textarea>
        </div>

        <button id="editNewsButton" type="button" class="btn btn-success mb-1"
                style="display: block; margin: auto; margin-top: 15px; width: 100%;">Edit the News
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
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="JavaScript/updateNews.js"></script>
</html>
