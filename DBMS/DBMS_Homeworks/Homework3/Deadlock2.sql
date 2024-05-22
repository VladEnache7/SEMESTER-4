

begin tran
update Actors set ActorName='Angelina Jolie transaction 2' where ActorId=6
-- this transaction has exclusively lock on table Actors
waitfor delay '00:00:10'
update Movies set MovieTitle='Cenusareasa transaction 2' where MovieId=20
-- this transaction will be blocked because transaction 1 has exclusively lock on table Movies, so, both of the transactions are blocked
commit tran
-- after some seconds transaction 2 will be chosen as a deadlock victim and terminates with an error
-- in tables Actors and Movies will be the values from transaction 1