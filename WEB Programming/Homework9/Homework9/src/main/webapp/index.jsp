<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>ULRs App</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="./scripts/home.js"></script>
</head>
<body>
<p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">URLs App</p>
<div class="d-flex justify-content-center mx-6 mb-3 mb-lg-4">
    <button type="button" data-mdb-button-init data-mdb-ripple-init
            class="btn btn-primary btn-lg" id="loginButton" style="width: 200px;">Login
    </button>
    <script>
        document.getElementById('loginButton').addEventListener('click', function () {
            window.location.href = './pages/login.jsp';
        });
    </script>
</div>
<p class="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">Top 10 URLs</p>
<div class="row justify-content-center mt-3">

    <div id="URLsList" class="col-md-10">
    </div>
</div>
</body>
</html>