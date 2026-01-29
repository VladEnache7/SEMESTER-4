-- GRADE 3;
-- create a stored procedure that inserts data in tables that are in a m:n relationship; 
-- if one insert fails, all the operations performed by the procedure must be rolled back

--CREATE DATABASE dbms;
use homework3;

CREATE TABLE Movies (
    MovieId int PRIMARY KEY,
    MovieTitle varchar(255),
    MovieDescription varchar(255)
);

CREATE TABLE Actors (
    ActorId int PRIMARY KEY,
    ActorName varchar(255),
);

CREATE TABLE MoviesActors (
	MovieId int FOREIGN KEY REFERENCES Movies(MovieId),
    ActorId int FOREIGN KEY REFERENCES Actors(ActorId),
	PRIMARY KEY (MovieId, ActorId)
);
GO

CREATE TABLE LogTable (
	info varchar(100),
	error varchar(1000),
	logTime DATETIME
)
GO


CREATE OR ALTER PROCEDURE addLog (@info VARCHAR(100), @error VARCHAR(100)) AS
	INSERT INTO LogTable VALUES (@info, @error, GETDATE())
GO


CREATE OR ALTER PROCEDURE AddActor(@ActorName varchar(255))
AS
	DECLARE @maxId INT
	-- coalesce = Return the first non-null value in a list
	SET @maxId = (SELECT COALESCE(MAX(A.ActorId), 0) + 1 FROM Actors A)

	IF (@ActorName is null)
	BEGIN
		RAISERROR('Actor name must not be null', 16, 1);
	END

	INSERT INTO Actors(ActorId, ActorName) VALUES (@maxId, @ActorName)
GO


CREATE OR ALTER PROCEDURE AddMovie(@MovieTitle varchar(255), @MovieDescription varchar(255))
AS
	DECLARE @maxId INT
	-- coalesce = Return the first non-null value in a list
	SET @maxId = (SELECT COALESCE(MAX(B.MovieId), 0) + 1 FROM Movies B)

	IF (@MovieTitle is null)
	BEGIN
		RAISERROR('Title of movie must not be null', 16, 1);
		RETURN
	END

	IF LEN(@MovieDescription) < 10
	BEGIN
		RAISERROR('The description must be at least 10 characters long!', 16, 1);
		RETURN 
	END

	INSERT INTO Movies(MovieId, MovieTitle, MovieDescription) VALUES (@maxId, @MovieTitle, @MovieDescription)
GO


CREATE OR ALTER PROCEDURE AddMoviesActors(@MovieTitle varchar(255) , @ActorName varchar(255))
AS
	DECLARE @actorId INT
	SET @actorId = (SELECT A.ActorId FROM Actors A WHERE A.ActorName = @ActorName)
	DECLARE @movieId INT
	SET @movieId = (SELECT M.MovieId FROM Movies M WHERE M.MovieTitle = @MovieTitle)

	IF (@actorId is null)
	BEGIN
		RAISERROR('Actor does not exist', 16, 1);
	END
	IF (@movieId is null)
	BEGIN
		RAISERROR('Movie does not exist', 16, 1);
	END

	INSERT INTO MoviesActors(ActorId, MovieId) VALUES (@actorId, @movieId);
GO

-- here we have the rollback
CREATE OR ALTER PROCEDURE addRollbackScenario
AS
	BEGIN TRANSACTION ROLLBACKIfError;
	BEGIN TRY
		-- incorrect example
		EXEC AddActor 'Bred Pit'
		EXEC AddMovie 'Cars', 'Descr'
		EXEC AddMoviesActors 'Cars', 'Bred Pit'

		-- good example
		--EXEC AddActor 'Bred Pit'
		--EXEC AddMovie 'Cars', 'Description that exceed 10 char long'
		--EXEC AddMoviesActors 'Cars', 'Bred Pit'
		COMMIT TRANSACTION ROLLBACKIfError;
	END TRY
	BEGIN CATCH
		PRINT 'Error at ' + ERROR_PROCEDURE() + ' ' + ERROR_MESSAGE()
		ROLLBACK TRANSACTION ROLLBACKIfError;
		EXEC addLog 'Transaction rollback', 'something went wrong'
		RETURN
	END CATCH
GO

EXEC addRollbackScenario
GO
SELECT * FROM LogTable
GO

SELECT * FROM Actors
SELECT * FROM Movies
SELECT * FROM MoviesActors

--DELETE Actors 
--DELETE Movies 
--DELETE MoviesActors 
GO


-- GRADE 5
-- create a stored procedure that inserts data in tables that are in a m:n relationship; 
-- if an insert fails, try to recover as much as possible from the entire operation: 
-- for example, if the user wants to add a book and its authors, succeeds creating the authors, 
-- but fails with the book, the authors should remain in the database

CREATE OR ALTER PROCEDURE addRecoverPossible (@ActorName VARCHAR(50), @MovieTitle VARCHAR(255), @MovieDescription varchar(255))
AS
	BEGIN TRAN

	DECLARE @error VARCHAR(100)

	BEGIN TRY
		EXEC AddActor @ActorName
		EXEC addLog 'Actor Added', '-'
	END TRY
	BEGIN CATCH
		SELECT @error = ERROR_MESSAGE()
		EXEC addLog 'Actor not added', @error
		COMMIT TRAN
		RETURN
	END CATCH

	BEGIN TRY
		EXEC AddMovie @MovieTitle, @MovieDescription
		EXEC addLog 'Movie Added', ''
	END TRY
	BEGIN CATCH
		SELECT @error = ERROR_MESSAGE()
		EXEC addLog 'Movie not added', @error
		COMMIT TRAN
		RETURN
	END CATCH

	BEGIN TRY
		EXEC AddMoviesActors @MovieTitle, @ActorName
		EXEC addLog 'MoviesActors Added', ''
	END TRY
	BEGIN CATCH
		SELECT @error = ERROR_MESSAGE()
		EXEC addLog 'MoviesActors not added', @error
		COMMIT TRAN
		RETURN
	END CATCH
	EXEC addLog 'Everything was added', ''

	COMMIT TRAN
GO


EXEC addRecoverPossible 'Tom Cruise', 'KongFu Panda 4', 'About a Panda and his journey trying to save the world'
EXEC addRecoverPossible 'Tom Cruise2', null, null
EXEC addRecoverPossible null, 'KongFu Panda 5', 'About a Panda and his journey trying to save the world'

SELECT * FROM Actors
SELECT * FROM Movies
SELECT * FROM MoviesActors

/*DELETE Authors 
DELETE Movies 
DELETE MoviesActors */
GO

SELECT * FROM LogTable