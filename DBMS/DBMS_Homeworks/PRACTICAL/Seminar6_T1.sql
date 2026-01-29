-- transaction 1 - start this FIRST
-- A non-repeatable read is one in which data read twice inside the same transaction cannot be guaranteed 
-- to contain the same value.

use MiniFacebook
DELETE FROM Users WHERE UName = 'Name 1'
INSERT INTO Users(UName, UCity, UDob) VALUES ('Name 1','City', '10-10-24')
SELECT * FROM Users

BEGIN TRAN
	PRINT 'non-repeatable read - before update'

	WAITFOR DELAY '00:00:05'
	UPDATE Users SET UName='NEW Name' WHERE UName = 'Name 1'

	PRINT  'non-repeatable read - after update'
COMMIT TRAN

