<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

class DataBaseConnection
{
    private string $host = "localhost";
    private string $databaseName = "planning_db";
    private string $user = 'root';
    private string $password = '';
    private string $charset = 'UTF8';

    # used php data objects (PDO) to connect to database
    private PDO $pdo;
    private string $error;

    public function __construct()
    {
        $dsn = "mysql:host=$this->host;dbname=$this->databaseName;charset=$this->charset";
        #  array of options that configures the PDO object
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, # if a database error occurs, PDO will throw a PDOException instead of just returning false or null
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, # when you fetch rows from a query result set, PDO will return an associative array where the keys are the column names and the values are the column values
            PDO::ATTR_EMULATE_PREPARES => false, # emulation is disabled, PDO uses real prepared statements instead (no substituting parameters into the SQL statement.)
        ];
        try {
            $this->pdo = new PDO($dsn, $this->user, $this->password, $options);
        } catch (PDOException $e) {
            $this->error = $e->getMessage();
            echo "Error connecting to database: " . $this->error;
        }
    }

    /**
     * Selects available flights from the database with the specific date and destination city.
     *
     * @param string $date The date of the flights.
     * @param string $destinationCity The destination city of the flights.
     *
     * @return array An associative array containing all flights with the specific date and destination city.
     */
    public function selectAvailableFlightsByDateAndDestination(string $date, string $destinationCity): array
    {
        $sql = "SELECT * FROM flights WHERE date = :date AND destinationCity = :destination AND availableSeats > 0";
        $statement = $this->pdo->prepare($sql);
        $statement->execute(['date' => $date, 'destination' => $destinationCity]);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * Selects available hotels from the database with the specific date and destination city.
     *
     * @param string $date The date of the hotels' availability.
     * @param string $destinationCity The destination city of the hotels.
     *
     * @return array An associative array containing all hotels with the specific date and destination city.
     */
    public function selectAvailableHotelsByDateAndDestination(string $date, string $destinationCity): array
    {
        $sql = "SELECT * FROM hotels WHERE date = :date AND city = :destination AND availableRooms > 0";
        $statement = $this->pdo->prepare($sql);
        $statement->execute(['date' => $date, 'destination' => $destinationCity]);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * Reserve a flight seat for a specific user.
     *
     * @param string $username The username of the user.
     * @param int $flightId The ID of the flight.
     *
     * @return bool True if the flight seat was successfully reserved, false otherwise.
     */
//    public function reserveFlightSeat(string $username, int $flightId): bool
//    {
//        $sql = "UPDATE flights SET availableSeats = availableSeats - 1 WHERE flightID = :flightId";
//        $statement = $this->pdo->prepare($sql);
//        $statement->execute(['flightId' => $flightId]);
//
//        $sql = "INSERT INTO reservations (person, idReservedResource, type) VALUES (:username, :flightId, 'Flight')";
//        $statement = $this->pdo->prepare($sql);
//        return $statement->execute(['username' => $username, 'flightId' => $flightId]);
//    }
    public function reserveFlightSeat(string $username, int $flightId): bool
    {
        $sessionID = session_id();

        $sql = "UPDATE flights SET availableSeats = availableSeats - 1 WHERE flightID = :flightId";
        $statement = $this->pdo->prepare($sql);
        $statement->execute(['flightId' => $flightId]);

        $sql = "INSERT INTO reservations (person, idReservedResource, type, sessionID) VALUES (:username, :flightId, 'Flight', :sessionID)";
        $statement = $this->pdo->prepare($sql);
        return $statement->execute(['username' => $username, 'flightId' => $flightId, 'sessionID' => $sessionID]);
    }

    /**
     * Reserve a hotel room for a specific user.
     *
     * @param string $username The username of the user.
     * @param int $hotelId The ID of the hotel.
     *
     * @return bool True if the hotel room was successfully reserved, false otherwise.
     */
//    public function reserveHotelRoom(string $username, int $hotelId): bool
//    {
//        $sql = "UPDATE hotels SET availableRooms = availableRooms - 1 WHERE hotelID = :hotelId";
//        $statement = $this->pdo->prepare($sql);
//        $statement->execute(['hotelId' => $hotelId]);
//
//        $sql = "INSERT INTO reservations (person, idReservedResource, type) VALUES (:username, :hotelId, 'Hotel')";
//        $statement = $this->pdo->prepare($sql);
//        return $statement->execute(['username' => $username, 'hotelId' => $hotelId]);
//    }
    public function reserveHotelRoom(string $username, int $hotelId): bool
    {
        $sessionID = session_id();

        $sql = "UPDATE hotels SET availableRooms = availableRooms - 1 WHERE hotelID = :hotelId";
        $statement = $this->pdo->prepare($sql);
        $statement->execute(['hotelId' => $hotelId]);

        $sql = "INSERT INTO reservations (person, idReservedResource, type, sessionID) VALUES (:username, :hotelId, 'Hotel', :sessionID)";
        $statement = $this->pdo->prepare($sql);
        return $statement->execute(['username' => $username, 'hotelId' => $hotelId, 'sessionID' => $sessionID]);
    }

    public function cancelAllReservations($username, $sessionID)
    {
        // SQL query to select all reservations made by the user during the current session
        $sql = "SELECT * FROM Reservations WHERE person = :username AND sessionID = :sessionID";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':username', $username);
        $stmt->bindValue(':sessionID', $sessionID);
        $stmt->execute();
        $reservations = $stmt->fetchAll(PDO::FETCH_ASSOC);

        foreach ($reservations as $reservation) {
            if ($reservation['type'] == 'Flight') {
                // If the reservation is for a flight, increment the availableSeats in the flights table
                $sql = "UPDATE flights SET availableSeats = availableSeats + 1 WHERE flightID = :flightId";
                $stmt = $this->pdo->prepare($sql);
                $stmt->bindValue(':flightId', $reservation['idReservedResource']);
                $stmt->execute();
            } elseif ($reservation['type'] == 'Hotel') {
                // If the reservation is for a hotel, increment the availableRooms in the hotels table
                $sql = "UPDATE hotels SET availableRooms = availableRooms + 1 WHERE hotelID = :hotelId";
                $stmt = $this->pdo->prepare($sql);
                $stmt->bindValue(':hotelId', $reservation['idReservedResource']);
                $stmt->execute();
            }
        }

        // SQL query to delete all reservations made by the user during the current session
        $sql = "DELETE FROM Reservations WHERE person = :username AND sessionID = :sessionID";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':username', $username);
        $stmt->bindValue(':sessionID', $sessionID);
        $stmt->execute();
    }

    public function show($value)
    {
        echo json_encode($value);
    }

    public function run()
    {
        if (isset($_GET['action']) && !empty($_GET['action'])) {
            switch ($_GET['action']) {
                case 'selectAvailableFlightsByDateAndDestination':
                    if (isset($_GET['date']) && !empty($_GET['date']) && isset($_GET['destinationCity']) && !empty($_GET['destinationCity'])) {
                        $date = $_GET['date'];
                        $destinationCity = $_GET['destinationCity'];
                        $flights = $this->selectAvailableFlightsByDateAndDestination($date, $destinationCity);
                        $this->show($flights);
                    }
                    break;
                case 'selectAvailableHotelsByDateAndDestination':
                    if (isset($_GET['date']) && !empty($_GET['date']) && isset($_GET['destinationCity']) && !empty($_GET['destinationCity'])) {
                        $date = $_GET['date'];
                        $destinationCity = $_GET['destinationCity'];
                        $hotels = $this->selectAvailableHotelsByDateAndDestination($date, $destinationCity);
                        $this->show($hotels);
                    }
                    break;
                case 'reserveFlightSeat':
                    if (isset($_GET['username']) && !empty($_GET['username']) && isset($_GET['flightId']) && !empty($_GET['flightId'])) {
                        $username = $_GET['username'];
                        $flightId = $_GET['flightId'];
                        $result = $this->reserveFlightSeat($username, $flightId);
                        $this->show($result);
                    }
                    break;
                case 'reserveHotelRoom':
                    if (isset($_GET['username']) && !empty($_GET['username']) && isset($_GET['hotelId']) && !empty($_GET['hotelId'])) {
                        $username = $_GET['username'];
                        $hotelId = $_GET['hotelId'];
                        $result = $this->reserveHotelRoom($username, $hotelId);
                        $this->show($result);
                    }
                    break;


            }
        }
    }

}


$databaseConnection = new DataBaseConnection();
$databaseConnection->run();


?>