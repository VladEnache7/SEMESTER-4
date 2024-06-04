USE homework3

--DELETE FROM Movies WHERE MovieId=20
--DELETE FROM Actors WHERE ActorId=6

--INSERT INTO Movies VALUES (20, 'Finding Nemo', 'Deeesscriiiptiooon')
--INSERT INTO Actors VALUES (6, 'Petre Ispirescu')


-- transaction 1
begin tran
update Movies set MovieTitle='Cenusareasa transaction 1' where MovieId=20
-- this transaction has exclusively lock on table Movies
waitfor delay '00:00:05'
update Actors set ActorName='Angelina Jolie transaction 1' where ActorId=6
-- this transaction will be blocked because transaction 2 has already blocked our lock on table Actors
commit tran

SELECT * FROM Movies
SELECT * FROM Actors
