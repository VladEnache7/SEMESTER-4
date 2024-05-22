-- transaction 1 - start this FIRST
-- A non-repeatable read is one in which data read twice inside the same transaction cannot be guaranteed 
-- to contain the same value.

use homework3
DELETE FROM Movies WHERE MovieId = 8 
INSERT INTO Movies(MovieId,MovieTitle, MovieDescription) VALUES (8,'Dune II','Description of Dune')
SELECT * FROM Movies

BEGIN TRAN
	EXEC addLogConcurrencyIssue 'non-repeatable read - before update'

	WAITFOR DELAY '00:00:05'
	UPDATE Movies SET MovieDescription='NEW Description of Dune' WHERE MovieId = 8

	EXEC addLogConcurrencyIssue 'non-repeatable read - after update'
COMMIT TRAN

SELECT * FROM LogConcurrencyIssues