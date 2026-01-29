USE HospitalSystem



------------------------------- DROPS -------------------------------
GO
DROP TABLE Payments
DROP TABLE Doctors_Nurses
DROP TABLE Nurses
DROP TABLE Treatments
DROP TABLE Medications
DROP TABLE Appointments
DROP TABLE Patiens
DROP TABLE Doctors

GO

------------------------------- CREATES -------------------------------
GO
CREATE TABLE Doctors (
	DID INT PRIMARY KEY IDENTITY(1, 1),
	DName VARCHAR(50),
	DDob DATE,
	DSpecs VARCHAR(50)
)

CREATE TABLE Patiens (
	PID INT PRIMARY KEY IDENTITY(1, 1),
	PName VARCHAR(50),
	PAddr VARCHAR(50),
	PPN VARCHAR(50)
)

CREATE TABLE Appointments ( 
	AID INT PRIMARY KEY IDENTITY(1, 1),
	DID INT REFERENCES Doctors(DID),
	PID INT REFERENCES Patiens(PID),
	ADate DATE,
	ATime TIME,
	AReason VARCHAR(50)
)

CREATE TABLE Medications ( 
	MID INT PRIMARY KEY IDENTITY(1, 1),
	MName VARCHAR(50),
	MInstr VARCHAR(50)
)

CREATE TABLE Treatments (
	TID INT PRIMARY KEY IDENTITY(1, 1),
	TName VARCHAR(50),
	MID INT REFERENCES Medications(MID),
	TDosage INT
)

CREATE TABLE Nurses ( 
	NID INT PRIMARY KEY IDENTITY(1, 1),
	NName VARCHAR(50),
	NDdob DATE
)

CREATE TABLE Doctors_Nurses ( 
	DID INT REFERENCES Doctors(DID),
	NID INT REFERENCES Nurses(NID),
	PRIMARY KEY(DID, NID)
)

CREATE TABLE Payments ( 
	PAID INT PRIMARY KEY IDENTITY(1, 1),
	PID INT REFERENCES Patiens(PID),
	AID INT REFERENCES Appointments(AID) NULL,
	TID INT REFERENCES Treatments(TID) NULL,
	PAMethods VARCHAR(50),
	PADate DATE,
	PAStatus VARCHAR(50)
)


------------------------------- INSERTS -------------------------------

INSERT INTO Medications(MName, MInstr) VALUES ('Med1', 'Instr'), ('Med2', 'Instr'), ('Med3', 'Instr')
INSERT INTO Treatments(TName, MID, TDosage) VALUES ('Treat1', 1, 10), ('Treat2', 1, 10), ('Treat3', 2, 10), ('Treat4', 2, 10), ('Treat5', 3, 10)



SELECT * FROM Medications
SELECT * FROM Treatments


