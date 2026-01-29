USE MiniFacebook

-- transaction 2 -- start this LATER
-- A non-repeatable read is one in which data read twice inside the same transaction cannot be guaranteed 
-- to contain the same value.
-- what happens?

/*
	we first select from movies, we have for id=8 'Description of Dune' . We wait 5 seconds
	from the other transaction, we update to 'NEW Description of Dune' and we commit
	when we select here again, the Description is changed
*/


-- the isolation that causes the problem
SET TRANSACTION ISOLATION LEVEL READ COMMITTED

-- solution:
 --SET TRANSACTION ISOLATION LEVEL REPEATABLE READ


BEGIN TRAN

	PRINT 'non-repeatable read - before select'

	SELECT * FROM Users

	PRINT 'non-repeatable read - between select'

	WAITFOR DELAY '00:00:05'

	SELECT * FROM Users

	PRINT 'non-repeatable read - after select'

COMMIT TRAN