-- transaction 2 -- start this LATER
-- A non-repeatable read is one in which data read twice inside the same transaction 
-- cannot be guaranteed to contain the same value.



use Publications

SET TRANSACTION ISOLATION LEVEL READ COMMITTED

-- solution:
--SET TRANSACTION ISOLATION LEVEL REPEATABLE READ

BEGIN TRAN

	SELECT * FROM Categories

	WAITFOR DELAY '00:00:05'

	SELECT * FROM Categories

COMMIT TRAN

