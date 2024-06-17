<!-- partials/navbar.php -->
<nav class="navbar navbar-expand-lg navbar-light bg-light"
     style="border-radius: 10px; margin-left: 50px; margin-right: 50px">
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav" style="margin-left: 40px; margin-bottom: 10px">
            <li class="nav-item">
                <a class="nav-link" href="../Flights/viewAvailableFlights.php"
                   style="color: blueviolet;">Flights</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../Hotels/viewAvailableHotels.php" style="color: blueviolet;">Hotels</a>
            </li>
        </ul>
        <form method="post" action="../Users/profile.php" class="ml-auto" style="margin-left: 700px">
            <input type="hidden" name="cancelAllReservationsButton" value="1">
            <input type="submit" class="btn btn-danger" value="Cancel All Reservations">
        </form>
    </div>
</nav>
