USE Projects


------------------------------- DROPS -------------------------------
GO
DROP TABLE Licences
DROP TABLE SoftwareTools
DROP TABLE Teams
DROP TABLE ProjectTeams
DROP TABLE Tasks
DROP TABLE Members
DROP TABLE SemesterProjects

GO

------------------------------- CREATES -------------------------------
GO
CREATE TABLE SemesterProjects (
	SPID INT PRIMARY KEY IDENTITY(1, 1),
	SPName VARCHAR(50),
)

CREATE TABLE Members ( 
	MID INT PRIMARY KEY IDENTITY(1, 1),
	MName VARCHAR(50),
	MRole VARCHAR(50)
)

CREATE TABLE Tasks ( 
	TID INT PRIMARY KEY IDENTITY(1, 1),
	TDescr VARCHAR(50),
	MID INT REFERENCES Members(MID)
)

CREATE TABLE ProjectTeams (
	PTID INT PRIMARY KEY IDENTITY(1, 1),
	PTName VARCHAR(50),
	PTNum INT,
	SPID INT REFERENCES SemesterProjects(SPID)
)

CREATE TABLE Teams ( 
	TID INT PRIMARY KEY IDENTITY(1, 1),
	PTID INT REFERENCES ProjectTeams(PTID),
	MID INT REFERENCES Members(MID),
)

CREATE TABLE SoftwareTools ( 
	STID INT PRIMARY KEY IDENTITY(1, 1),
	STName VARCHAR(50),
	STDescr VARCHAR(50)
)


CREATE TABLE Licences ( 
	STID INT REFERENCES SoftwareTools(STID),
	PTID INT REFERENCES ProjectTeams(PTID),
	PRIMARY KEY(STID, PTID)
)


------------------------------- INSERTS -------------------------------

INSERT INTO Members(MName, MRole) VALUES ('member1', 'role'), ('member2', 'role'), ('member3', 'role')
INSERT INTO Tasks(TDescr, MID) VALUES ('Task1', 1), ('Task2', 1), ('Task3', 2), ('Task4', 2), ('Task5', 3) 

SELECT * FROM Members
SELECT * FROM Tasks

