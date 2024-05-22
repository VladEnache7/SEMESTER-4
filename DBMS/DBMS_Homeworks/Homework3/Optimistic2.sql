--transaction 2
Use homework3
go
--SET TRANSACTION ISOLATION LEVEL SNAPSHOT
-- solution ALTER DATABASE DBMS_Lab3 SET ALLOW_SNAPSHOT_ISOLATION OFF

BEGIN TRAN
Select * from Movies where MovieId=33
-- Wish – 'Disney Movies about wishes' – the value from the beginning of the transaction
Waitfor delay '00:00:10'
--select * from Movies where MovieId=4
-- the value from the beginning of the transaction – Panda-English
Update Movies set MovieDescription='TRAN2 Disney Movies about wishes' where MovieId=33
-- process will block
-- Process will receive Error 3960.
COMMIT TRAN
