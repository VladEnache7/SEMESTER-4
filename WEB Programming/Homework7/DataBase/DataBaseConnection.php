<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

class DataBaseConnection
{
    private string $host = "localhost";
    private string $databaseName = "newsdatabase";
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
     * Selects all news items from the database.
     *
     * @return array An associative array containing all news items.
     */
    public function selectAllNews(): array
    {
        $sql = "SELECT * FROM news LIMIT 10";
        $statement = $this->pdo->prepare($sql);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * Selects all news items from the database that were created by the user who is currently logged in.
     *
     * @param string $userName The username of the news producer.
     *
     * @return array An associative array containing all news items created by the user who is currently logged in.
     */
    public function selectNewsByUser(string $userName): array
    {
        $sql = "SELECT * FROM news WHERE NewsProducer = :userName";
        $statement = $this->pdo->prepare($sql);
        $statement->execute(['userName' => $userName]);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * Selects all news items from the database that belong to a specific category.
     *
     * @param string $category The category of the news items.
     *
     * @return array An associative array containing all news items that belong to the specified category.
     */
    public function selectNewsByCategory(string $category): array
    {
        $sql = "SELECT * FROM news WHERE NewsCategory = :category";
        $statement = $this->pdo->prepare($sql);
        $statement->execute(['category' => $category]);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * Selects all news items from the database that were created in a specific year.
     *
     * @param string $year The year of the news items.
     *
     * @return array An associative array containing all news items that were created in the specified year.
     */
    public function selectNewsByYear(string $year): array
    {
        $sql = "SELECT * FROM news WHERE YEAR(NewsDatePosted) = :year";
        $statement = $this->pdo->prepare($sql);
        $statement->execute(['year' => $year]);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * Inserts a new news item into the database.
     *
     * @param string $title The title of the news item.
     * @param string $content The content of the news item.
     * @param string $category The category of the news item.
     * @param string $producer The username of the news producer.
     *
     * @return bool True if the news item was successfully inserted, false otherwise.
     */
    public function insertNews(string $title, string $content, string $category, string $producer): bool
    {
        $sql = "INSERT INTO news (NewsTitle, NewsContent, NewsCategory, NewsProducer) VALUES (:title, :content, :category, :producer)";
        $statement = $this->pdo->prepare($sql);
        return $statement->execute(['title' => $title, 'content' => $content, 'category' => $category, 'producer' => $producer]);
    }


    /**
     * Updates a news item in the database only if the news item was created by the user who is currently logged in.
     *
     * @param int $id The ID of the news item to be updated.
     * @param string $username The username of the news producer.
     * @param string $title The new title of the news item.
     * @param string $content The new content of the news item.
     * @param string $category The new category of the news item.
     *
     * @return bool True if the news item was successfully updated, false otherwise.
     */
    public function updateNews(int $id, string $username, string $title, string $content, string $category): bool
    {
        $sql = "UPDATE news SET NewsTitle = :title, NewsContent = :content, NewsCategory = :category WHERE NewsID = :id AND NewsProducer = :username";
        $statement = $this->pdo->prepare($sql);
        return $statement->execute(['id' => $id, 'username' => $username, 'title' => $title, 'content' => $content, 'category' => $category]);
    }

    /**
     * Selects a user from the database by their username.
     *
     * @param string $username The username of the user.
     *
     * @return array An associative array containing the user's information.
     */
    public function selectUserByUsername(string $username): array
    {
        $sql = "SELECT * FROM users WHERE UserName = :username";
        $statement = $this->pdo->prepare($sql);
        $statement->execute(['username' => $username]);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function checkValidPassword(string $username, string $password): bool
    {
        $result = $this->selectUserByUsername($username);
        if (count($result) == 0) {
            return false;
        } else {
            if ($result[0]["UserPassword"] === $password) {
                return true;
            } else {
                return false;
            }
        }
    }

    /**
     * Selects a news item from the database by its ID.
     *
     * @param int $id The ID of the news item.
     * returns the news item with the specified ID.
     * @return array An associative array containing the news item.
     */
    public function selectNewsById(int $id): array
    {
        $sql = "SELECT * FROM news WHERE NewsID = :id";
        $statement = $this->pdo->prepare($sql);
        $statement->execute(['id' => $id]);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function show($value)
    {
        echo json_encode($value);
    }

    public function run()
    {
        if (isset($_GET['action']) && !empty($_GET['action'])) {
            switch ($_GET['action']) {
                case 'selectAllNews':
                    session_start();
                    $this->show($this->selectAllNews());
                    break;
                case 'selectNewsByUser':
                    session_start();
                    if (!isset($_SESSION['username']) && isset($_GET['username'])) {
                        $_SESSION['username'] = $_GET['username'];
                    }
                    $this->show($this->selectNewsByUser($_SESSION['username']));
                    break;
                case 'selectNewsByCategory':
                    session_start();
                    $this->show($this->selectNewsByCategory($_GET['category']));
                    break;
                case 'selectNewsByYear':
                    session_start();
                    $this->show($this->selectNewsByYear($_GET['year']));
                    break;
                case 'addNews':
                    session_start();
                    $this->insertNews($_GET['title'], $_GET['content'], $_GET['category'], $_SESSION['username']);
                    break;
                case 'updateNews':
                    session_start();
                    $this->updateNews($_GET['id'], $_SESSION['username'], $_GET['title'], $_GET['content'], $_GET['category']);
                    break;
                case 'selectNewsById':
                    session_start();
                    $this->show($this->selectNewsById($_GET['id']));
                    break;
                case 'checkValidUser':
                    session_start();
                    // TODO: Be careful here to use post instead of get !!!!!!!!!
//                    $this->show("username: " . $_POST['username'] . " password: " . $_POST['password'] . $this->checkValidPassword($_POST['username'], $_POST['password']));
                    $this->show($this->checkValidPassword($_GET['username'], $_GET['password']));
                    break;
            }
        }
    }

}


$databaseConnection = new DataBaseConnection();
$databaseConnection->run();


?>