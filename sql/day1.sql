-- structured Query language 
--used to ,store, retreive ,update, delete data , works with all databases like mysql,postgress sql,oracle ,sql server

--why need sql
--used in web apps , mobile app , banking and hospitals
--works with large amount of data 

what is databases

db is a collection of tables 

db is a organised collection of data stored electronically 
secure , fast 

-- normal form 1 enough 

atomic values no repeating values
use only one value per row

-- 2nd normal form 
must be in 1 enough ,no partial dependencies 

--3rd normal form 

must be 2 enough , no transistive dependencies


joins

joins is used to combine rows from multiple tables related column 

--Inner join 


inner join returns only matching record from both tables 

--left join
returns all records from the left table even if no match exist
--Right join

returns all records from the right table even if no match exist

-- stored procedure 
 stored procedure is a precomplied block of sql statements stored in the database 

reusability 
faster execution
less network traffic
better security
clean application code

stored procedure is stored permanently in database

--Trigger
Trigger is a special sql program that automatically executes when an event occur , which is insert ,delete , update .

types of triggers


    --Triggers type                     when its Executes
  1. before insert                 before inserting the data 
  2. after insert                  after inserting the data
  3. before update                 before update 
  4.after delete                   after delete

