ALTER DATABASE homework3 SET ALLOW_SNAPSHOT_ISOLATION ON

SELECT * FROM Movies
DELETE FROM Movies WHERE MovieId=33
INSERT INTO Movies VALUES(33, 'Wish', 'Disney Movies about wishes')


waitfor delay '00:00:10'
BEGIN TRAN
UPDATE Movies SET MovieDescription = 'NEW Disney Movies about wishes' WHERE MovieId=33;
-- Description is now 'NEW Disney Movies about wishes'
waitfor delay '00:00:10'
COMMIT TRAN