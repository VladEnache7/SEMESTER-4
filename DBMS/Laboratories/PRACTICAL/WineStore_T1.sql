use WineStore
--Dirty Reads: transaction 1 start this one FIRST
--A dirty read occurs when a transaction reads data that has not yet been committed.
SELECT * FROM Varieties
-- make sure to have this in table
DELETE FROM Varieties WHERE VName = 'DirtyRead'
INSERT INTO Varieties VALUES('DirtyRead', 'First Description')

GO


BEGIN TRANSACTION

	PRINT 'dirty read - before update' 

	WAITFOR DELAY '00:00:03'

	UPDATE Varieties SET VDescr = 'UPDATED Description'
	WHERE VName = 'DirtyRead'

	PRINT 'dirty read - after update'
	WAITFOR DELAY '00:00:05'
ROLLBACK TRANSACTION
