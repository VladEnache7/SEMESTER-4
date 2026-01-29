use WineStore
--Dirty Reads: transaction 2 start this one LAST
--A dirty read occurs when a transaction reads data that has not yet been committed.


SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED -- to allow dirty read
-- solution: 
-- SET TRANSACTION ISOLATION LEVEL READ COMMITTED -- to fix dirty read

BEGIN TRAN
	PRINT 'dirty read - before first select'
	SELECT * FROM Varieties
	PRINT 'dirty read - after second select'

	WAITFOR DELAY '00:00:05'

	PRINT 'dirty read - before second select'
	SELECT * FROM Varieties
	PRINT 'dirty read - after second select'
COMMIT TRAN