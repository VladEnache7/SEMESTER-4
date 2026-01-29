-- transaction 1 - start this FIRST
-- A non-repeatable read is one in which data read twice inside the same transaction cannot be guaranteed 
-- to contain the same value.

use Publications
DELETE FROM Categories WHERE CName = 'Non Rep Read'
INSERT INTO Categories(CName, CDescr) VALUES ('Non Rep Read', 'Description')


BEGIN TRAN

	WAITFOR DELAY '00:00:05'
	UPDATE Categories SET CDescr='NEW Description' WHERE CName = 'Non Rep Read'

COMMIT TRAN

SELECT * FROM Categories
