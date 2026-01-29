USE Publications


------------------------------- DROPS -------------------------------
GO
DROP TABLE Reviews
DROP TABLE Reviewers
DROP TABLE Indexing
DROP TABLE ELibraries
DROP TABLE SPublications
DROP TABLE Categories

GO

------------------------------- CREATES -------------------------------
GO
CREATE TABLE Categories (
	CID INT PRIMARY KEY IDENTITY(1, 1),
	CName VARCHAR(50),
	CDescr VARCHAR(50),
)

CREATE TABLE SPublications ( 
	PID INT PRIMARY KEY IDENTITY(1, 1),
	PTitle VARCHAR(50),
	PAbs VARCHAR(50),
	PAuth VARCHAR(50),
	CID INT REFERENCES Categories(CID),
)

CREATE TABLE ELibraries ( 
	LID INT PRIMARY KEY IDENTITY(1, 1),
	LName VARCHAR(50),
	LWeb VARCHAR(50),
)

CREATE TABLE Indexing (
	PID INT REFERENCES SPublications(PID),
	LID INT REFERENCES ELibraries(LID),
	IDate DATE,
	PRIMARY KEY(PID, LID)
)

CREATE TABLE Reviewers ( 
	RID INT PRIMARY KEY IDENTITY(1, 1),
	RName VARCHAR(50)
)

CREATE TABLE Reviews ( 
	RID INT REFERENCES Reviewers(RID),
	PID INT REFERENCES SPublications(PID),
	RScore INT,
	PRIMARY KEY(RID, PID)
)

------------------------------- INSERTS -------------------------------

INSERT INTO Categories(CName, CDescr) VALUES ('Category1', 'Descr1'), ('Category2', 'Descr2'), ('Category3', 'Descr3')
INSERT INTO SPublications(PTitle, PAbs, PAuth, CID) VALUES ('Title1', 'Abs', 'Auth', 1), ('Title2', 'Abs', 'Auth', 1), ('Title3', 'Abs', 'Auth', 2), ('Title4', 'Abs', 'Auth', 2), ('Title5', 'Abs', 'Auth', 3)



SELECT * FROM Categories
SELECT * FROM SPublications


