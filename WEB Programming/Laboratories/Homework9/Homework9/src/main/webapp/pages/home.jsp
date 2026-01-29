<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Home</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <script src="./../scripts/home.js"></script>
</head>
<body style="background-color: #eee;">
<div class="container">
    <div class="row justify-content-center mt-3">
        <button id="logoutButton" class="mb-3 col-md-9 btn btn-outline-danger">Logout</button>
        <div class="col-md-10">
            <div class="card mb-3">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="h5 m-0">Make a new URL</div>
                    </div>
                </div>
                <div class="card-body">
                    <input id="URLLink" type="text" class="form-control mb-2" placeholder="Link"/>
                    <input id="URLPopularity" type="number" class="form-control mb-2" placeholder="Popularity"/>
                </div>
                <div class="card-footer">
                    <button type="button" data-mdb-button-init data-mdb-ripple-init
                            class="btn mb-2 btn-outline-primary" id="newURLButton"
                            style="width: 200px;">
                        Create URL
                    </button>
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="h5 m-0">Top N most popular URLs</div>
                    </div>
                </div>
                <div class="card-body">
                    <input id="topN" type="text" class="form-control mb-2" placeholder="N" value="10"/>
                </div>
                <div class="card-footer">
                    <button type="button" data-mdb-button-init data-mdb-ripple-init
                            class="btn mb-2 btn-outline-primary" id="topNButton"
                            style="width: 200px;">
                        Show Top N
                    </button>
                </div>
            </div>
            <div id="URLsList" class="card mb-3">
            </div>
        </div>
    </div>
</div>
</body>
</html>
