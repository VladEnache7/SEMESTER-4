-- transaction 1 - start this FIRST
-- A non-repeatable read is one in which data read twice inside the same transaction cannot be guaranteed 
-- to contain the same value.

use HospitalSystem
DELETE FROM Medications WHERE MName = 'Med Rep Read'
INSERT INTO Medications(MName, MInstr) VALUES ('Med Rep Read','First Descr')

BEGIN TRAN
	PRINT 'non-repeatable read - before update'

	WAITFOR DELAY '00:00:05'
	UPDATE Medications SET MInstr = 'NEW Descr' WHERE MName = 'Med Rep Read'

	PRINT 'non-repeatable read - after update'
COMMIT TRAN

SELECT * FROM Medications