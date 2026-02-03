--practice task

-- -- -- 1. What is a Table?
-- -- -- Definition:
-- -- -- A table is a structure that stores data in rows and columns.
-- -- -- Key Points:

-- -- -- Each row = one record

-- -- -- Each column = one field

-- -- -- Structure defined before data insertion


-- -- 
-- -- Difference between NOT NULL and UNIQUE in SQL

-- -- NOT NULL:
-- -- - Does not allow NULL values
-- -- - Ensures a value is always present
-- -- - Duplicate values are allowed
-- -- - Used when data is mandatory

-- -- UNIQUE:
-- -- - Does not allow duplicate values
-- -- - Allows NULL value (usually only one NULL)
-- -- - Ensures data uniqueness
-- -- - Automatically creates an index (in most DBMS)
-- -- 


-- -- 
-- -- Why PRIMARY KEY is important in SQL

-- -- 1. Uniquely identifies each record in a table
-- -- 2. Does not allow NULL values
-- -- 3. Does not allow duplicate values
-- -- 4. Helps maintain data integrity
-- -- 5. Improves performance using indexing
-- -- 6. Used to create relationships between tables (Foreign Key)
-- -- */


-- -- 
-- -- SYNTAX for DEFAULT in SQL
-- -- DEFAULT is used to assign a default value to a column
-- -- when no value is provided during INSERT.
-- -- */

-- -- // Column-level DEFAULT
-- -- /*
-- -- CREATE TABLE employees (
-- --   emp_id INT PRIMARY KEY,
-- --   status VARCHAR(20) DEFAULT 'Active',
-- --   salary INT DEFAULT 10000
-- -- );
-- -- 

-- -- // Insert without DEFAULT column
-- -- 
-- -- INSERT INTO employees (emp_id) VALUES (1);
-- -- -- status → 'Active'
-- -- -- salary → 10000
-- -- 

-- -- 
-- -- ----------------------------------------------------
-- -- What is FOREIGN KEY?
-- -- ----------------------------------------------------
-- -- A FOREIGN KEY is a column (or group of columns) that
-- -- creates a relationship between two tables.

-- -- - It refers to the PRIMARY KEY of another table
-- -- - Prevents invalid data
-- -- - Maintains referential integrity
-- -- - Child table depends on parent table
-- -- 

-- -- // Example
-- -- 
-- -- CREATE TABLE department (
-- --   dept_id INT PRIMARY KEY,
-- --   dept_name VARCHAR(50)
-- -- );

-- -- CREATE TABLE employee (
-- --   emp_id INT PRIMARY KEY,
-- --   name VARCHAR(50),
-- --   dept_id INT,
-- --   FOREIGN KEY (dept_id) REFERENCES department(dept_id)
-- -- );
-- -- 

-- -- // One-line answers (for exam / interview)
-- -- // DEFAULT → assigns a value automatically if no value is given
-- -- // FOREIGN KEY → links two tables and ensures valid data


-- -- Practical Task

-- use school;


-- create table courses (Coruse_name varchar(30) not null, course_id int primary key, fees int check (fees>4000));



-- INSERT INTO courses (Coruse_name, course_id, fees) VALUES
-- ('Java', 101, 5000),
-- ('Python', 102, 6000),
-- ('Web Development', 103, 7000),
-- ('Data Science', 104, 12000),
-- ('Machine Learning', 105, 15000),
-- ('React JS', 106, 8000),
-- ('SQL', 107, 4500),
-- ('Cloud Computing', 108, 20000);


-- create table students (std_id int auto_increment primary key, std_name varchar(50) not null, age int ,email varchar(20) unique , course_id int, foreign key(course_id) references courses(course_id)); 


-- INSERT INTO students (std_name, age, email, course_id) VALUES
-- ('Arun', 20, 'arun@gmail.com', 101),
-- ('Divya', 21, 'divya@gmail.com', 102),
-- ('Karthik', 22, 'karthik@gmail.com', 103),
-- ('Meena', 20, 'meena@gmail.com', 104),
-- ('Rahul', 23, 'rahul@gmail.com', 105),
-- ('Priya', 21, 'priya@gmail.com', 106),
-- ('Suresh', 24, 'suresh@gmail.com', 107),
-- ('Anitha', 22, 'anitha@gmail.com', 108);



 
-- ✅ Mock Interview – Quick SQL Questions & Answers

-- 1) Can a table have multiple PRIMARY KEYs?
-- - No.
-- - A table can have only ONE PRIMARY KEY.
-- - But that PRIMARY KEY can consist of multiple columns (composite key).

-- Example:
-- PRIMARY KEY (order_id, product_id)


-- 2) Difference between UNIQUE & PRIMARY KEY

-- PRIMARY KEY:
-- - Does NOT allow NULL
-- - Does NOT allow duplicate values
-- - Only ONE primary key per table
-- - Used to uniquely identify each row

-- UNIQUE:
-- - Allows NULL values (usually one)
-- - Does NOT allow duplicate values
-- - Multiple UNIQUE constraints allowed per table
-- - Used to ensure uniqueness


-- 3) Why FOREIGN KEY is used?
-- - To create a relationship between two tables
-- - To maintain referential integrity
-- - To prevent invalid data in child table
-- - Ensures referenced data exists in parent table


-- 4) What happens if CHECK fails?
-- - INSERT or UPDATE operation is rejected
-- - Data is NOT stored
-- - Database throws an error

-- Example:
-- fees INT CHECK (fees > 4000)


-- 5) Can DEFAULT be overridden?
-- - Yes
-- - If a value is provided during INSERT, it overrides DEFAULT

-- Example:
-- status VARCHAR(20) DEFAULT 'Active';
-- INSERT INTO users (status) VALUES ('Inactive');


-- 🔹 One-line Rapid Recap:
-- PRIMARY KEY → unique + not null
-- UNIQUE → unique, null allowed
-- FOREIGN KEY → links tables
-- CHECK → validates condition
-- DEFAULT → can be overridden

