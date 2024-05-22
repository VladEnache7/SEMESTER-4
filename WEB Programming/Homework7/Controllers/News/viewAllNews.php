<?php
session_start();
//if (!isset($_SESSION['username'])) {
//    header('Location: ../Users/login.php');
//}
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
    <title>All News</title>
</head>
<body>
<div class="" id="viewNewsDiv">
    <div class="row">

        <div class="col-sm" style="flex-grow: 1; margin-top: 30px">
            <div id="buttons" class="container"
                 style="min-width: 325px; display: flex; flex-direction: column; margin: auto; align-items: center;">
                <h3>Filter news:</h3>
                <div id="filterByCategory" class="mb-1">
                    <label for="categoryInputFilter" class="form-label">By Category:</label><label
                            for="categoryInputFilter"></label><input type="text"
                                                                     id="categoryInputFilter"
                                                                     class="form-control mb-3">
                    <button id="filterByCategoryButton" type="button" class="btn btn-info" style="max-width: 300px">
                        Filter by category
                    </button>
                </div>
                <div id="filterByYear" class="mb-1">
                    <label for="yearInputFilter" class="form-label">By year: </label><label
                            for="yearInputFilter"></label><input type="number"
                                                                 id="yearInputFilter"
                                                                 class="form-control mb-3"
                                                                 value="2024">
                    <button id="filterByYearButton" type="button" class="btn btn-info mb-3" style="max-width: 300px">
                        Filter by year
                    </button>
                </div>

                <div>
                    <!--                    <button id="filterByUser" type="button" class="btn btn-info mb-1">Show my logs</button>-->
                    <button id="allNewsButton" type="button" class="btn btn-info mb-3 "
                            style="max-width: 300px; width: 300px">
                        Show all news
                    </button>
                </div>
                <div>
                    <form method="post">
                        <input id="returnButton" type="submit" class="btn btn-secondary mb-1" name="returnButton"
                               value="Return to profile">
                    </form>
                </div>
            </div>
        </div>
        <div class="col-sm" style="flex-grow: 2; margin-top: 30px">
            <div class="container" id="showNews"
                 style="min-width: 700px; display: flex; flex-direction: column; margin: auto; align-items: center;">
                <h3>All news that are currently posted:</h3>
                <table class="newsTable table" style="min-width: 700px">
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
                <div id="pagination" class="container"
                     style="min-width: 500px; display: flex; flex-direction: row; margin: auto; align-items: center;">

                    <button type="button" id="previousButton" class="btn btn-info mb-1" style="margin: 10px">Previous
                    </button>
                    <button id="nextButton" type="button" class="btn btn-info mb-1" style="margin: 10px">Next</button>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="JavaScript/viewAllNews.js"></script>
</html>
