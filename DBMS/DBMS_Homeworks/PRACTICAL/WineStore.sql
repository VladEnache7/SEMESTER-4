USE WineStore


------------------------------- DROPS -------------------------------
GO
DROP TABLE Offers
DROP TABLE WineStores
DROP TABLE Wines
DROP TABLE Producers
DROP TABLE Varieties

GO

------------------------------- CREATES -------------------------------
GO
CREATE TABLE Varieties (
	VID INT PRIMARY KEY IDENTITY(1, 1),
	VName VARCHAR(50),
	VDescr VARCHAR(50),
)

CREATE TABLE Producers ( 
	PID INT PRIMARY KEY IDENTITY(1, 1),
	PName VARCHAR(50),
	PPN VARCHAR(50),
	PWesite VARCHAR(50),
)

CREATE TABLE Wines ( 
	WID INT PRIMARY KEY IDENTITY(1, 1),
	WName VARCHAR(50),
	WDescr VARCHAR(50),
	VID INT REFERENCES Varieties(VID),
	PID INT REFERENCES Producers(PID)
)

CREATE TABLE WineStores (
	WSID INT PRIMARY KEY IDENTITY(1, 1),
	WSName VARCHAR(50),
	WSPN VARCHAR(50),
	WSWesite VARCHAR(50),
)

CREATE TABLE Offers ( 
	WID INT REFERENCES Wines(WID),
	WSID INT REFERENCES WineStores(WSID),
	OPrice INT,
	PRIMARY KEY(WID, WSID)
)


------------------------------- INSERTS -------------------------------

INSERT INTO Varieties(VName, VDescr) VALUES ('Variety1', 'Descr1'), ('Variety2', 'Descr2'), ('Variety3', 'Descr3')
INSERT INTO Producers VALUES ('Producer1', '075555', 'website')

INSERT INTO Wines(WName, WDescr, VID, PID) VALUES ('Wine1', 'Descr', 1, 1), ('Wine2', 'Descr', 1, 1), ('Wine3', 'Descr', 2, 1), ('Wine4', 'Descr', 2, 1)


SELECT * FROM Varieties
SELECT * FROM Producers
SELECT * FROM Wines


