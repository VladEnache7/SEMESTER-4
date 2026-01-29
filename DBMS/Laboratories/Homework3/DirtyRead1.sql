	use homework3
	--Dirty Reads: transaction 1 start this one FIRST
	--A dirty read occurs when a transaction reads data that has not yet been committed.
	SELECT * FROM Movies 
	-- make sure to have this in table
	DELETE FROM Movies WHERE MovieId = 7
	INSERT INTO Movies VALUES(7, 'DirtyRead', 'Descriptiiiiiooonnn')

	GO


	BEGIN TRANSACTION

		PRINT 'dirty read - before update' 
	

		UPDATE Movies SET MovieDescription='NEW Descriptiiiiiooonnn2'
		WHERE MovieId = 7

		PRINT 'dirty read - after update'

		WAITFOR DELAY '00:00:10'
	ROLLBACK TRANSACTION
