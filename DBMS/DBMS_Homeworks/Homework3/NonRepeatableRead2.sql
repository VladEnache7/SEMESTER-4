-- transaction 2 -- start this LATER
-- A non-repeatable read is one in which data read twice inside the same transaction cannot be guaranteed 
-- to contain the same value.
-- what happens?

/*
	we first select from movies, we have for id=8 'Description of Dune' . We wait 5 seconds
	from the other transaction, we update to 'NEW Description of Dune' and we commit
	when we select here again, the Description is changed
*/

use homework3

-- solution:
 SET TRANSACTION ISOLATION LEVEL REPEATABLE READ

--SET TRANSACTION ISOLATION LEVEL READ COMMITTED
BEGIN TRAN

	EXEC addLogConcurrencyIssue 'non-repeatable read - before select'

	SELECT * FROM Movies

	EXEC addLogConcurrencyIssue 'non-repeatable read - between select'

	WAITFOR DELAY '00:00:05'

	SELECT * FROM Movies

	EXEC addLogConcurrencyIssue 'non-repeatable read - after select'

COMMIT TRAN