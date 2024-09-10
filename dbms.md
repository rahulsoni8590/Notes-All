# Prisma ORM

npm install prisma --save
npx prisma init

datasource db {
  provider = "mysql"
  url      = "mysql://USER:PASSWORD@HOST:PORT/DATABASE"
}

npx prisma generate
npx prisma migrate dev (ask for name of model provide it and it will create the sql file in both the side)

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // Create a new user
  const user = await prisma.user.create({
    data: {
      name: 'Moise',
      email: 'moise.rush@example.com',
    },
  })
  console.log(`Created user: ${user.name} (ID: ${user.id})`)

  // Get all users
  const allUsers = await prisma.user.findMany()
  console.log(`All users: ${JSON.stringify(allUsers)}`)

  // Get a user by ID

  const userById = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  })
  console.log(`User by ID: ${JSON.stringify(userById)}`)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

```javascript
import { PrismaClient } from '@prisma/client'
import { ErrorMiddleware } from '../middleware/errorHandler.js';
import sendEmail from '../../utils/mailer.js';
const prisma = new PrismaClient()


export async function add(req, res, next) {
    try {
        const { email, name } = req.body;
        console.log(req.body)
        const newUser = await prisma.referralCode.create({data:{name, email}
        })
        console.log(newUser)
        await sendEmail(email,newUser.code)
        res.json({ success: true, user: newUser })
    } catch (err) {
        console.error(err)
        await prisma.$disconnect()
        next(new ErrorMiddleware("User Already Subscribed"))
    } finally {
        await prisma.$disconnect()
    }
}
```

# Creating Database
- SYNTAX = CREATE DATABASE IF NOT EXIST DATABASE_NAME

## Switching operations
- USE DBNAME
- DROP DATABASE IF EXIST DBNAME

## using MYSQL using CLI 

- cann use in Command prompt as well as in mysql workbench

- SHOW DATABASES = list all the databases
- CREATE DATABASE DB_NAME = to create db
- USE DB_NAME = to switch b/w dbs
- DROP DATABASE DB_NAME = to delet db
- SHOW TABLES = to list of all table of db
- CREATE TABLE TABLE_NAME(
  ID INT,
  NAME VARCHAR(12)
  ) = to create table in the db
- DROP TABLE TABLE_NAME = to delet table

# SQL DATATYPES

## DATA TYPES [FIXED, VARIABLE]

- FIXED - KNOW LENGTH
- VARIABLE - UNKNOWN LENGHT
- major DT = [numeric, string, date & time, boolean]
- advanced DT = [spatial dt, json dt]

STRING[
- CHAR  225
- VARCHAR 255 
- TINY/NORMAL/MEDIUM/LONG TEXT  
- NORMAL/MEDIUM/LONG BLOB
]

INTEGER[
- TINY/SMALL/MEDIUM/NORMAL/BIG INT
- FLOAT = PRECISE TO 23 DIGIT
- DOUBLE = PRECISE TO 24 TO 53 DIGIT
- DECIMAL = "DOUBLE" STORED AS STRING
]

DATe and Time[
- DATE = YYYY-MM-DD 
- DATETIME = YYYY-MM-DD HH:MM:SS
- TIMESTAMP = YYYY-MM-DDHH:MM:SS
- TIME = HH:MM:SS
]

- ENUM = one of preset option
- SET
- BOOLEAN = TINYINT(1)

## Numeric DATA TYPES

- SIGNED AND UNSIGNED VALUE CAN BE INSERTED IN ANY NUMERICAL DATATYPE
- SIGNED IS BYDEFALUL AND UNSIGNED HAS TO  BE MENTIONED
- Type        memory consumption(bytes)

- tinyINT  =  1
- smallINT  =  2
- mediumINT  =  3
- int  =   4
- bigINT  =  8
---------------
- Decimal =  eg Decimal(n,m) ie  decimal(4,2) = 1456.99
- float = 
- double =
- bit = 0 or 1 

- EG: CREATE TABLE TABLENAME(
        COLNAME DATATYPE
        ID BIT (1)
        NAME VAR
        AGE INT
        SALARY DECIMAL(6,3)
        TEMPERATURE INT UNSIGNED
        COL6 INT SIGNED
    )

## DATE AND TIME DATATYPES 

- DATE = YYYY-MM-DD = 3 BYTES = RANGE[1000-01-01 TO 9999-12-31]
- TIME = HH:MM:SS = 3 BYTES = RANGE[-838:59:59 TO 838:59:59]
- DATETIME = YYYY-MM-DD HH:MM:SS = 5 BYTES 
- TIMESTAMP = YYYY-MM-DDHH:MM:SS = 4 BYTES = RANGE[1970-01-01 00:00:01 UTC TO 2038-01-19 03:14:07 UTC]
- YEAR = YYYY

- EG: CREATE TABLE TABLENAME(
        COLNAME DATATYPE
        TRANSACTIO-DATE  DATE NOT NULL
        SERVER-DATE TIMESTAMPE NOT NULL
    )
## STRING DATATYPES

- RECOMMENDED TO GO WITH VARIABLE LENGTH

- CHAR  = FIXED-LENGTH = VARCHAR = NON-BINARY-STRING
- VARCHAR = VARIABLE-LENGTH

- TEXT  = FIXED-LENGTH = NON-BINARY-STRING
- TINY/MEDIUM/LONG TEXT = VARIABLE-LENGTH = NON-BINARY-STRING

- BINARY = FIXED-LENGTH = BINARY-STRING = IN-CHAR-BLOG-FORMAT
- VARBINARY = VARIABLE-LENGTH = BINARY-STRING = IN-BYTES-BLOB FORMAT

- FOR AUDIO/IMAGE/VIDEO (BLOB - BINARY LARGE OBJECT)
- BLOB  = FIXED-LENGTH = MEDIUM/LONG = BINARY-STRING
- TINY/MEDIUM/LONG BLOB = VARIABLE-LENGTH = BINARY-STRING

EG: CREATE TABLE TABLENAME(
    COLNAME VARCHAR(30)
    LASTNAME VARCHAR(6)
    SONGNAME BLOB
    COL4 TEXT

    COL5 CHAR
    COL6 BINARY(50)
    COL5 VARBINARY(50)

)

## BOOLEAN DATATYPES

- MYSQL doenot have any boolean datatype it is derived from already existing ABOVE data type.
- 1 is for true and 0 is for false

- BOOLEAN = TINYINT(1) = TRUE
- BOOLEAN = TINYINT(0) = FALSE


EG: CREATE TABLE TABLENAME(
    status BOOLEAN
    COL2 JSON
)

## ADVANCED DATATYPES

- spatial DT = geometrical/geographical values
    - POINT = MULTIPOINTS
    - POLYGON = MULTIPOINTS
    - GEOMERTY 
    - MANY MORE

- json (JS OBJECT NOTATION)
    - KEY-VALUE PAIRS EG {K1:{K1:V1,K2:V2},K2:{K1:V1,K2:V2}}
    EG COLNAME JSON

# SQL COMMANDS

- Types of DDL, DML, DQL/DRL, DCL, TCL
- Data Definition/Manipulation/Query-Retrieval/Control Language, Transaction Control Language


- Definition Language
    CREATE
    ALTER
    DROP
    TRUNCATE
    RENAME

- Query OR Retrieval Language
    SELECT FROM

- Manipulation Language
    INSERT
    UPDATE
    DELETE

- Transaction Control Language
    START TRANSACTION
    COMMIT (save the transaction state till the point of completion successfull operation)
    SET COMMIT = 0/1 FALSE/TRUE OR "Autocommit"
    SAVEPOINT = Add more operation in between to already started transaction.
    ROLLBACK = to get back to any of the state of the "SAVEPOINT".


    eg:
   T0(initial state) now T1 [CREATE, INSERT, UPDATE, DELETE, RENAME, DISPLAY] Tn

- from t1 to tn there are n number of operations, so there will be n number of states in between.

- If any of the operation failed b/w t1 to tn then all the operation will get cancelled and the data will be restored to T0 state ie the initial state.



# SQL Queries implementation


### Dual Tables = are duplicate tables ie automatically created by MYSQL.
  - SELECT 100+69
  - SELECT ucase("rahul")
  - SELECT NOW() //no decimal seconds
  - SELECT current_timestamp(n) //result same as NOW() but after decimal n digits will be displayed


## Selecting Columns

- "*" denotes ALL
- Order of Execution = 
  [FROM <tableName> > SELECT <columnName> > ]

- syntax: SELECT <column names separated by comma> FROM <table name>
  eg SELECT ID,NAME,Gender FROM CUSTOMER = = will display only 3 specified columns columns
  eg SELECT * FROM CUSTOMER = will display all columns

## Filtering data

- perform below two operation before using filtering and soring
- use dbName
- select * from tableName; (this can be modified) 

### WHERE
- EG
  - (STRING) SELECT * from tableName WHERE ID=8
  - (NUMBER) SELECT * from tableName WHERE CITY="SAGAR"

### WHERE, AND , OR, (>=, <=, >, <)operators

- SELECT 	* FROM 	PRODUCTS WHERE 	productLine = "Motorcycles" AND quantityInStock>=500
- SELECT 	* FROM 	PRODUCTS WHERE 	productLine = "Motorcycles" OR quantityInStock>=500

### BETWEEN num AND num2 (AND here refers "to")
- SELECT * FROM PRODUCTS WHERE productLine = "Motorcycles" OR quantityInStock BETWEEN 5000 AND 10000
 
### IN, NOT IN and IS NULL
- (select all from products(table name) where productLine(column name) in/except (attrName1, attrName2))
- SELECT * FROM PRODUCTS WHERE productLine IN ("vintage cars",  "trains")
- SELECT * FROM PRODUCTS WHERE productLine NOT IN ("vintage cars",  "trains")
- SELECT customerNumber, contactLastName, state FROM customers WHERE state IS NULL

### Wildcards = find pattern, somepart of string, group of string

- % (percentage) refers to zero or more occurence 
    --prefix--% pa %--sufix-- (pa in between the word)
    --prefix--% --pa-- (ends with pa)
    --pa-- % --suffix-- (starts with pa)

- _ (underscore) refers to only one character
    _pa ()

        eg 
    select * from employees where firstName like "%n_"
    select * from employees where firstName like "%n"
    select * from employees where firstName like "n%"

## Sorting data

### ORDER BY

- ASC (default) and DWSC

- select * from employees order by employeeNumber (by default asc)
- select * from employees order by employeeNumber desc 
- select * from employees order by employeeNumber desc, firstName asc

## Grouping data

### GROUP BY

- it is applied after (select > from > where > group by)
- SYNTAX = SELECT c1,c2,c3 FROM employees WHERE c1=8 GROUP BY c1,c2,c3
- c1,c2,c3 of select must be similar to groupby
EG
- SELECT PRODUCTLINE FROM PRODUCTS GROUP BY PRODUCTLINE

### DISTINCT [is used inPlace of GROUP BY in case of fetching the unique value]
- FETCH THE DISTINCT VALUE 
EG
- SELECT DISTINCT PRODUCTLINE FROM PRODUCTS

### Aggregate

- Aggregate functions name 
  COUNT() 
  SUM()
  AVG() 
  MIN() 
  MAX()

- SELECT COL1, COUNT(COL) FROM TABLENAME GROUP BY COL1,COL2 ORDER BY MAX/MIN/COUNT(COLNAME)
EG
- SELECT PRODUCTSTATUS,count(PRODUCTSTATUS) FROM ORDERS group by PRODUCTSTATUS
- SELECT CUSTOMERNUMBER,AMOUNT,COUNT(CUSTOMERNUMBER) FROM PAYMENTS GROUP BY CUSTOMERNUMBER,AMOUNT;
- SELECT CUSTOMERNUMBER,COUNT(CUSTOMERNUMBER) FROM PAYMENTS GROUP BY CUSTOMERNUMBER;
- SELECT CUSTOMERNUMBER,COUNT(CUSTOMERNUMBER),MIN(AMOUNT) FROM PAYMENTS GROUP BY CUSTOMERNUMBER;
- SELECT CUSTOMERNUMBER,AMOUNT,COUNT(CUSTOMERNUMBER) FROM PAYMENTS GROUP BY CUSTOMERNUMBER,AMOUNT;
- SELECT CUSTOMERNUMBER,COUNT(CUSTOMERNUMBER),MIN(AMOUNT), MAX(AMOUNT),AVG(AMOUNT), SUM(AMOUNT) FROM PAYMENTS GROUP BY CUSTOMERNUMBER;
- SELECT CUSTOMERNUMBER,COUNT(CUSTOMERNUMBER),MIN(AMOUNT), MAX(AMOUNT),AVG(AMOUNT), SUM(AMOUNT) FROM PAYMENTS GROUP BY CUSTOMERNUMBER ORDER BY MAX(AMOUNT);

### HAVING (only works after GROUP BY) 

- becoz HAVING works on groups and WHERE wroks on columns
- syntax = SELECT * FROM TABLENAME WHERE COLUMNNAME="SOMEVALUE" GROUP BY COLUMNNAME HAVING KEY=VALUE
- SELECT CUSTOMERNUMBER,amount FROM PAYMENTS GROUP BY CUSTOMERNUMBER,amount having amount>10000
- SELECT CUSTOMERNUMBER,amount FROM PAYMENTS GROUP BY CUSTOMERNUMBER,amount having customernumber = 103;
- SELECT CUSTOMERNUMBER,amount FROM PAYMENTS GROUP BY CUSTOMERNUMBER,amount having customernumber IN (128, 131, 171);

# Contraints

- Always put "NOT NULL" before marking the below five constraint

## Primary Key [PK = column based]

- It cannot be null
- each column value Unique  pk
- Each table/schema has only one PK
- PK as "integer" will work faster as compare to "string".

EG

- CREATE TABLE TABLE_NAME(
  ID INT PRIMARY KEY,
      OR
  ID INT
  PRIMARY KEY (ID)

  BRANCH-ID INT,
  LASTNAME-ID CHAR(50),
  DOB DATE
  GENDER CHAR(6)
)

## Foreign Key [FK]

- Each FK must refer to PK of other table
- Each table can any only one PK 
- can have Multiple FK

- CREATE TABLE TABLE_NAME(
  ID INT,
  CUSTOMER-ID INT,
  BRANCH-ID INT,
  PRIMARY KEY (ID),
  FOREIGN KEY (CUSTOMER-ID) REFERENCES TABLE_NAME(ID),
  FOREIGN KEY (BRANCH-ID) REFERENCES TABLE_NAME(ID)
  )

## Unique
- To make column value unique
- It can be null
- Can have any number of unique contrain in the schema

## Check
- syntax = CONTRAINT CONTRAINT_nAME CHECK(EXPRESSION)
- Used to verify/check enforced certain condition.eg min_balance

- CREATE TABLE CUSTOMER(
  ACCOUNT_ID INT,
  ACCOUNT_BALANCE DOUBLE,
  CONSTRAINT ACC_BALANCE CHECK(ACCOUNT_BALANCE>2000)
)

## Default
- If any value is not explicitly defined then it will assign some default value to the attribute.

EG

- CREATE TABLE CUSTOMER(
  LOAN_ID INT,
  LOAN_INTEREST_RATE DOUBLE NOT NULL DEFAULT 6.2,
  LOAN_TYPEiD INT
  )

## ALTER [ADD, MODIFY, CHANGE, DROP, RENAME](DDL)

- alter is to change the structure of the data or table inside the db
- helps avoid dropping or truncating the table and then create it again
- new created table has version-0 and altering table n times has version-n
- to add col  =  ADD 
- to change col name = CHANGE 
- to change datatype of col = MODIFY 
- to remove/drop col = DROP 
- to rename the table name = RENAME

### ADD 

- syntax = 
  1. to add one column = ALTER TABLE TABLE_NAME ADD NEW-COL-NAME DATATYPE
  2. to add two or more column = ALTER TABLE TABLE_NAME ADD NEW-COL-NAME DATATYPE, ADD NEW-COL-NAME2 DATATYPE
  3. to add col in between = 
    FIRST [TO ADD BEFORE FIRST COL ONLY]
    AFTER [AFTER THE ANY COL]
    = ALTER TABLE TABLE_NAME ADD NEW-COL-NAME DATATYPE FIRST
    = ALTER TABLE TABLE_NAME ADD NEW-COL-NAME DATATYPE AFTER COLnAME

EG
- ALTER TABLE EMPLOYEES ADD NEWCOL INT;
- ALTER TABLE EMPLOYEES ADD NEWCOL2 INT AFTER REPORTSTO;
- ALTER TABLE EMPLOYEES ADD ABC INT FIRST;

#### DESC TABLEnAME

- TO SEE THE STRUCTURE AND PROPERTIES OF TABLE
- DESC TABLEname

### MODIFY

- syntax =  ALTER TABLE TABLE_NAME MODIFY COL-NAME DATATYPE

EG-

- ALTER TABLE EMPLOYEES MODIFY employees NEWCOL2 VARCHAR(12)

### [Change] RENAME COLUMN NAME AND CHANGE DATATYPE

- SYNTAX = ALTER TABLE TABLENAME CHANGE COLUMN OLD-COLUMN-NAME NEW-COLUMN-NAME DATATYPE

EG 

- ALTER TABLE EMPLOYEES CHANGE COLUMN NEWCOL2 ABC2 INT;

### DROP

- SYNTAX = ALTER TABLE TABLENAME DROP COLUMN COLUMN-NAME

EG 

- ALTER TABLE employees DROP COLUMN NEWCOL;
- ALTER TABLE employees DROP COLUMN ABC2;

### RENAME TABLE NAME

- SYNTAX = ALTER TABLE TABLENAME RENAME TO NEW-TABLE-NAME

EG

- ALTER TABLE employees RENAME TO EMPLOYEESS


## MODIFYING [CRUD] (DML)

- MANIPULATION =[INSERT, RENAME, UPDATE, DELETE]

### INSERT

- ORDER OF COLUMN AND VALUE IS IMPORTANT
- SYNTAX = 
  single-row = INSERT INTO TABLE-NAME (COL1,..COL-N) VALUES (VAL1,...VAL-N)
  multiple-row = INSERT INTO TABLE-NAME (COL1,..COL-N) VALUES (VAL1,...VAL-N),(VAL1,...VAL-N)


EG 

- insert into productlines (productline, textdescription, htmlDescription,image) values("car","soni", null, null)
- insert into productlines (productline, textdescription, htmlDescription,image) values("car","soni", null, null),("rahul","s0ni",null,null)

### UPDATE (IMP)

- REF SHOULD BE UNIQUE

- SYNTAX =  
  UPDATE TABLE-NAME SET COL-NAME = "VALUE" WHERE COL-NAME(SOME REF) = "ID"
  UPDATE TABLE-NAME SET COL-NAME1 = "VALUE", COL-NAME2 = "VALUE" WHERE COL-NAME(SOME REF) = "ID"

EG

- UPDATE PRODUCTLINES SET PRODUCTLINE = "BIKE" where TEXTDESCRIPTION = "S0NI";
- UPDATE PRODUCTLINES SET PRODUCTLINE = "TRUCK", HTMLDESCRIPTION="SOME VALUE" WHERE TEXTDESCRIPTION = "S0NI"


### DELETE

- SYNTAX = 
  - one-row = DELETE FROM TABLE-NAME WHERE COL-NAME = "VALUE"
  - all-rows = DELETE FROM TABLE-NAME 

eg

- DELETE FROM PRODUCTLINES WHERE PRODUCTLINE ="CAR";
- DELETE FROM PRODUCTLINES WHERE PRODUCTLINE ="tRUCK"
- DELETE FROM PRODUCTLINES


#### SAFE DELETE

- BYdefaul safe mode in ON so we have disable it

- syntax = 
  disable = SET SQL_SAFE_UPDATES = 0;
  enable = SET SQL_SAFE_UPDATES = 1;

- delete syntax is same

#### DELETE and UPDATE CASCADE [used with PK and FK]

- PK is the parent and FK is called the child.
- This one time process during table creation
-  after the foreign key with out comma
- so now any update/delete in the parent will get reflect in child as well

- syntax = 
  ON DELETE CASCADE
  ON DELETE SET NULL

- CREATE TABLE PARENT(
	  ID INT,
    F_ID INT,
    NAME VARCHAR(10),
    PRIMARY KEY (ID),
    FOREIGN KEY(F_ID) REFERENCES CHILD (CHILD_ID)
      ON UPDATE CASCADE
      ON DELETE CASCADE
  );
 
- CREATE TABLE CHILD(
	  CHILD_ID INT,
    AGE VARCHAR(10),
    PRIMARY KEY (CHILD_ID)
    );

### REPLACE

- it is similar to INSERT but based on some condition
- In case PK, if any column id matched it will replace the row with the new data else insert the new data
- In case !PK if any column id matched it will only insert the row with the new data i.e duplicasey

- USED WHEN
  - insert a new row in the column when duplicate key is there
  - ie insertion fails due to dupliate key error

- syntax = 
  - REPLACE INTO TABLE_NAME (COL-1, COL-1) VALUES ("VALUE1", "VALUE2")

#### updating using REPLACE

- syntax = WITH PK IF ID MATCHER OTHER COL VALUE ARE NOT MENTION THEN SET TO NULL AUTOMATICALLY
  - REPLACE INTO TABLE_NAME SET ID = 6, NAME = "RAJ"


# Joins

- "AS" ACRONYM FOR ALIAS

## Types of joins:

- inner join = ONLY THE COMMON CONDITION 
- left join = COMMON CONDITION + LEFT TABLE REST OF THE ITEMS
- right join = COMMON CONDITION + RIGHT TABLE REST OF THE ITEMS
- outer join
- self join

### INNER JOIN [common codition]

- syntax 
  - SELECT TABLENAME_1.COLNAME (COLUMNS_Names), TABLENAME_2.COLNAME (COLUMNS_Names) FROM TABLENAME_1 INNER JOIN TABLENAME_2 ON TABLENAME_1.PK = TABLENAME_2.FK
  - using alias = SELECT T1.COLNAME (COLUMNS_Names), T2.COLNAME (COLUMNS_Names) FROM T1 AS TABLENAME_1 INNER JOIN T2 AS TABLENAME_2 ON T1.PK = T2.FK
  - using * = SELECT T1.*, T2.COLNAME (COLUMNS_Names) FROM T1 AS TABLENAME_1 INNER JOIN T2 AS TABLENAME_2 ON T1.PK = T2.FK
EG:

- SELECT p.id, p.name, p.age, p.dob, college_name, c.course_name, c.branch_name FROM parent AS p INNER JOIN child AS c  ON P.ID = C.PARENT_ID;
- SELECT p.*, college_name, c.course_name, c.branch_name FROM parent AS p INNER JOIN child AS c  ON P.ID = C.PARENT_ID WHERE C.branch_name = "CIVIL"
- SELECT p.*,c.branch_name FROM parent AS p INNER JOIN child AS c  ON P.ID = C.PARENT_ID WHERE P.AGE >= 25;

### LEFT JOIN [common codition + left table]

- we can skip "AS" of alias and write "Parent P" instead of "Parent AS P";
EG
- SELECT P.*, C.* FROM PARENT P LEFT JOIN CHILD C ON P.ID = C.PARENT_ID;
- SELECT P.*, C.* FROM PARENT P LEFT JOIN CHILD C ON P.ID = C.PARENT_ID WHERE P.DOB BETWEEN "1997-01-01" AND "2000-01-01";

### RIGHT JOIN [common codition + right table]

EG

- SELECT P.*, C.* FROM PARENT P RIGHT JOIN CHILD C ON P.ID = C.PARENT_ID WHERE P.DOB BETWEEN "1997-01-01" AND "2000-01-01";
- SELECT P.*, C.* FROM PARENT P RIGHT JOIN CHILD C ON P.ID = C.PARENT_ID WHERE AGE IN (26,27,28);


### CROSS JOIN 

- CARTESION PRODUCT TYPE
- NOT USED MUCH becoz no such codition is used to join the tables

EG
- SELECT P.*, C.* FROM PARENT P CROSS JOIN CHILD C;

### SELF JOIN 

- is done using INNER JOIN
- JOIN WITH ITSELF
eg
- select p1.name, p2.age from parent as p1 inner join parent as p2 on p1.id = p2.id;

### FULL OUTER JOIN

- Is done using LEFT or RIGHT JOIN 

eg 

- SELECT P.*, C.* FROM PARENT P left JOIN CHILD C on p.id = c.PARENT_id UNION SELECT P.*, C.* FROM PARENT P Right JOIN CHILD C on p.id = c.PARENT_id

# Week-5

# SET Operation

- Why SET if JOIN is there
  - No duplicate in the resultant data
  - distinct rows
  - Join doex not necessarilily required matching but SET Requries matching
  - JOIN can create new columns But SET doesnot create new Columns.

1. UNION / UNION ALL = T1+T2+common
2. INTERSECTION = COMMON
3. MINUS

- EG t1 = [1,2,3]  and t2 = [1,4,3] 
  MINUS = [2] T1-T2 OR [4] T2-T1
  INTERSECTION = [1,3] COMMON
  Union = [1,2,3,4] ALL
  Union ALl = [1,2,3,1,4,3] ALL + REPEATED
  JOIN = [1,3]

## UNION Operation

- Difference b/w UNION and JOIN is former appends in vertical direction and later appends in horizontal direction.
- EG t1 = [1,2,3]  and t2 = [1,4,3] 
  Union = [1,2,3,4]
  Union ALl = [1,2,3,1,4,3]
  Join = [1,3]

- Rules
  - Number & Order of column of both table should be equal and follow same order.
  
- Syntax - SELECT * FROM table_1 UNION SELECT * FROM table_2
 EG - SELECT * FROM TABLE1 UNION SELECT * FROM TABLE2;

## INTERSECT using [DISTINCT,INNER JOIN & USING]

- There is not INTERSECT in sql so we have todo it using these 3 keywords => DISTINCT,INNER JOIN & USING
- EG t1 = [1,2,3]  and t2 = [1,4,3] 
  INTERSECTION = [1,3]
  Union = [1,2,3,4]
  Union ALl = [1,2,3,1,4,3]
  Join = [1,3]

- Syntax - SELECT DISTINCT COLnAME FROM TABLE_NAME INNER JOIN TABLE_NAME USING (COLnAME);
 EG 
- SELECT DISTINCT ID FROM TABLE1 INNER JOIN TABLE2 USING (ID);


## MINUS using [DISTINCT,INNER JOIN & USING]

- There is not INTERSECT in sql so we have todo it using these 3 keywords => DISTINCT,INNER JOIN & USING
- EG t1 = [1,2,3]  and t2 = [1,4,3] 
  MINUS = [2] T1-T2 OR [4] T2-T1
  INTERSECTION = [1,3] COMMON
  Union = [1,2,3,4] ALL
  Union ALl = [1,2,3,1,4,3] ALL + REPEATED
  JOIN = [1,3]

- SYNTAX = SELECT id FROM tableName1 LEFT JOIN tableName2 USING (ID) WHERE tableName2.ID IS NULL;

## Sub-Queries:

- query1 - SELECT * FROM TABLE1
- query2 - SELECT * FROM TABLE2

- SUB-QUERY = query1(query2)
  - here query1 is OUter query and query2 inner/SUB is query
  - used if any value calculated by q2 is used by q1
  - inner/sub query can perform UPDATE,DELETE,SELECT but not INSERT
  - inner/sub query can be used with these clauses:- WHERE, HAVING, FROM
  - inner/sub query can have one more inner/sub query eg q1(q2(q3))

## Types of Sub-queries 
  - Based on clauses
  - Based on Result of Inner query [WHERE Clause]


## WHERE CLAUSE 

### On same Table using WHERE,IN and NOT IN
- Q1 SELECT firstName,lastName from employees;
- Q1 SELECT employeeNumber from employees where officecode = 1; 

- combined = SELECT firstName,lastName from employees WHERE employeeNumber IN (SELECT employeeNumber from employees where officecode = 1)
- combined = SELECT firstName,lastName from employees WHERE employeeNumber NOT IN (SELECT employeeNumber from employees where officecode = 1)
  - here subquery return employessnumber like (1,1,45,8,9,55,4) ie why using IN and NOT IN operator.

### On Different Table using WHERE,IN and NOT IN
- here id is PK of branch table and branch_id is FK of customer table
- SELECT * from customer WHERE branch_id IN (SELECT id from branch where address = "sagar")
- SELECT * from customer WHERE branch_id NOT IN (SELECT id from branch where address = "sagar")
  - here subquery return the set of id whose adresss is sagar


# IN clause is used with set of values eg IN (abc, edf, apr), IN (2,6,8,9,2,5)


### To find the account whose account balance is greater/less/equal than the average balance of all the account from single table?

- SELECT * FROM payments WHERE amount>(SELECT AVG(amount) FROM payments);
- SELECT * FROM payments WHERE amount<(SELECT AVG(amount) FROM payments);
- SELECT * FROM payments WHERE amount=(SELECT AVG(amount) FROM payments);

### to find A/C balance of unblock cards in the bank from 2 different tables
- here id is PK of card table and card_id is FK of account table

- SELECT balance FROM account WHERE card_id = (SELECT id FROM CARD WHERE is_blocked=0)
- SELECT balance FROM account WHERE card_id != (SELECT id FROM CARD WHERE is_blocked=0)

  - we are using EQUALTO(=) // NOTEQUALTO (!= or <>)operator so in subquery we have to return only ONE ROW + ONe column ie a single cell

## FROM Clause

### Derived Table [temporary table]
  - These are temporary table generated from subquery using FROM
  - The temprory table must be given some name using ALIAS "AS"

eg Find the maximum value health insurance provided by the bank
  - SELECT MAX(priceEach) FROM (SELECT * FROM orderdetails WHERE quantityOrdered = 45) AS temp_orderdetails;

### CO-RELATED SUBQUERIES

- INNER-QUERY is dependent on OUTER-QUERY


Eg:

  - SELECT productCode,priceEach FROM orderdetails o1
		WHERE priceEach > (SELECT AVG(priceEach) FROM orderdetails WHERE quantityOrdered=o1.quantityOrdered);

      - here the subquery is running separately for every row create from outer query;

### Subqueries VS JOIN
  - JOIN
    - Easy
    - MYSQL has to do a lot of work
    - Time take to execute the query is more
    - choosing corrent joins for the correct useCase is difficult
    - ie JOIN are complext to read, apply.

  - SUB-QUERY
    - Difficult
    - 

    - Less time required as compare to JOIN


# IMPORT

- To import data from external source from different files [CSV (comma separated value), txt file, JSON file]
- show global variables like 'local_infile'; 
  - SET GLOBAL local_infile=1;

- Rules:
  1. data schema should be created first in mysql WB.
  2. CSV file should be present in system directory
  3. We have to use LOCAL keyword because MYSQL have access to its directory only to make use of other directory
- KEYWORDS = LOAD DATA INFILE
- KEYWORDS = LOAD DATA LOCAL INFILE


- QUERY_STRUCTURE/syntax:
    LOAD DATA LOCAL INFILE "../desktop/documents/fileName.csv" 
    INTO TABLE tableName 
    FIELDS TERMINATES BY "," 
    ENCLOSED BY '"' 
    LINES TERMINATED BY "/n" 
    IGNORE 1 ROW;

eg :
  - LOAD DATA LOCAL INFILE "Users\nancy\Desktop\2 Project-FSD\Placement Cell\public\downloads\2024-05-11T05_09_47.077Z.cvs"
    INTO TABLE interview 
    FIELDS TERMINATED BY "," 
    ENCLOSED BY '"'
    LINES TERMINATED BY "/n"
    IGNORE 1 ROWS;

## Directly Import values from CSV file

- use import records from an external file >> browse the path >> choose the tableName >> then next>next>next and then imported.

## Export

- RUles::
  - Write permission should be granted before exporting
  - Same filename must not exist on the exporting address.

- SELECT * FROM TABLEname
  INTO OUTFILE "/TMP/INSURANCE_TEMP.CSV"
  FIELDS
    ENCLOSED BY '"'
    TERMINATED BY ','
  LINES 
    TERMINATED BY '\n'

- SELECT * FROM TABLEname
  INTO OUTFILE "/TMP/INSURANCE_TEMP.CSV"
  FIELDS
    ENCLOSED BY '"'
    TERMINATED BY ';'
    ESCAPED BY '"'
  LINES 
    TERMINATED BY '\r\n'

## Directly export values directly from GUI

- run SELECT satement >> click on export statement >> make the changes >> export


# Normalization

- It is a way to optimise the data by reducing the redundancy[redundant data].
- Take a bigger table and breakdown in smaller tables

## Functional Dependancy

- It is a relationship b/w the PK (Determinant) and Non-PK/normal attribute(Dependent).
- These are kind of  mathmatical equation. x+y=n;
- Functional Dependancy relates to two attribute one being dependent(NON-PK) and another being determinant (PK)

- If B is a subset of A ie A has (B,C)
  Trivially Functionally Dependent as below
    - a>>b 
    - a>>a 
    - b>>b

- If B is not a subset of A ie A has (C,D)
  Non Trivially Functionally Dependent as below
  - if intersection of A, B is null

## Anomalies
  - Update (updation) Anomaly [changes in (whole column) all attr of certain employee ie attendance table]
  - Insert (Insertion) Anomaly [column only need just once ie date of termination]
  - Delete (Deletion) Anomaly [deletetion if any department name with only one employee termination]

- These three anomalies are rectified using normalization.


## Normalization

- It removes the anomalies so that there is no redundant data in the table and the data is only related to eachother.
- Normal Form [NF] are used to do so.
  There are four type of NF: all are interrelated
    - 1NF = Not multivalued attribute
    - 2NF = No Partial dependency + 1NF
    - 3NF = No Transitive Dependency + 1NF + 2NF
    - Boyce Codd [BCNF or 3.5NF]

### 1 Normal Form [1NF]
  -  If a relation contains multivalued attribute, it violates the first normal form ie the a cell have two value instead of just one.


### 2 Normal Form [2NF]

- Relation must be a 1NF ie no multi-value attribute
- There should NOT be any Partial Dependency. eg it is in case of composite key [PK is combination of two ID] i.e the data required depends of two attributes(key)

### 3 Normal Form [3NF]
- Must satisfy 2NF conditions
- There should NOT be any transitive dependency
  eg: If B dependes on A and C depends of B >>> then A depends on C. 
 - How to find :: If a attribute is depends on non-PK attribute

### Boyce Codd [BCNF] or [3.5NF]

- 3NF
- A>>B, A should be a super key
  PK cannot be determined from Non-PK   

# Transaction:

- Defi = It is a unit of work done in a logical sequence./It is the propogation from one state to another state of the database
  It can be done manually using(Delete,update) or automated with the scripting languages (python,java)

- Transaction should follow ACID Rule.
- ACID:
  - Atomicity = Either Entire steps of transation is completed or NONE.
  - Consistency - Data should be consistent before and after the transaction
  - Isolation - Multiple trasaction running simultaneously then they must be independent of eachother
  - Durability = A complete transaction in case of system failure should persist. ie system failure must not effect the transaction.

## ATOMICITY:
  -  If the trasaction is completed the we commit it, else if any of the steps fails then it is aborted.

## Consistency:
  - Is is the integrity constraints of a db should be maintained before and after the transaction.
  Before || After
  a = 500 || a = 400    
    [transfered 100]
  b = 500 || b = 600
  total = 1000 || total = 1000 
  - Before and after transaction total is 1000 that means integrity is maintained.

## ISOLATION:
  - Multiple transactions are performed independently without any interference.

  - If no islotion then :
    eg if two trasaction started from a same account simultaneouly one after other and one is yet to hit the completion and started another then both the transaction will have similar state which would cause inconsistency.

## Durability:
  -  That a complete and successfull transaction shoud be recorded evenin case of system failure.
  - To permanently store a commited transaction in a database.

## States of Transactions:
  1. Active State
  2. Partially Committed
  3. Committed
  4. Failed
  5. Aborted
  6. End/Terminated

  Active >> Partially Committed >>> Failed >>{rollback stage}>> Aborted >>> End/Terminated
                                >>> Committed 

# Indexing

- Incase the API is working slowly then developer first check if the indexing is working properly.

- To locate, retrieve/fetch the data in the quicker manner.

- Indexing is done for the large amount of data.

## Types of Indexing:
  1. Primary Index:
    a. Dense Index
    b. Sparse Index
  2. Clustering Index
  3. Secondary Index
  
## Primary Index:
  - Search key is on the basis of PK
  - Data sorted on basis of PK

  - Dense Index -
    - In this each and every PK has index 
    - This type is not space friendly
    - It is fast becoz each key have index.

  -  Sparse Index - 
    - All PK doesnot have index
    - Better for space efficienty
    - slow as comparison to Dense.

## Clustering/Clustered Index:
  - Formed on ordered datatype [ie group by order by]

  - search key is neither unique identifier nor a PK, It is a candidate key
  - Data reference is not a poiner but actually the collection of other attributes, which can uniquely identify the tuple

## Secondary Index:
  - To reduce the load in Primary index.
  - PI [100,200,...1000] SI [100,110,120,...] data memory [100,101,102...]
  - It search of just smaller value then the givven.
    eg. for 212 it goes for 200 in PI and then again in SI just less value will be 210 then goes to data memory and look for 212

### cons of Indexing:
  - Space constraints
  - For searching something we have to do CUD the data so the operations will become heavy as we have lot of indexes.

# no-SQL [not only SQL]
  - nosql doesnot store data in tabular format but instead use below four data models
  1. Document Data Model 
  2. Graph Data Model
  3. Key Value Data Model
  4. Columnar Data Model

## Advantages of NOSQL

- It is horizontally Scalable.
  scalability = Once db reach its limit then to add more data we have to do expansion it is known as scalability.
    1. Verticaly scaling = Adding MORE CPU and RAM || COSTly
    2. Horizontal  = Adding More Database/SERVER || COST Effective

- Availability
- Easy insert and read of data.
- Flexible Schema
- It is easy to determine matrix, dashboard, analytics out of nosql.
- Read Entire data together so no need of JOIN.

## Disadvantages of NOSQL

- Ensures no redundancy.
- No contraints. [course only assign afte fee is true]
- No ACID Properties
- RDBMS is more efficient from frequent data updation and deletion whereas i NOSQL we have to update the entire object.


## Key Value Data Model
  - key can be an id and value can be a JSON Object
  - Easy to retrieve data.
  - If multiple updates to data then not good.
  - Inbuilt caching mechnism [eg redis]
  - simple Data structure
  - key can be any primitive datatype and value can be any data type
  - Good Scalability

  - uses ::
    - to enter big collection of data [array]
    - dictionary
    - general collection
    - E-commerece shopping cards
    - Recommendation Engines

    EG: Amazon DynamoDB, Oracle NOSQL


## Columnar Data Model

- Data is stored in cell group are in the form of column.
- In Rows in RDBMS and IN Column in NOSQL
- All read and write operation will happen on column.

- Pros:
  - Aggregation is really fast.
      eg - Apache, Hadoop, cassandra
  - compression is good, ie why used in :
      - Content management system
      - Blogging
      - Maintaining Counters

- CONS:
  - To write comples queries , avoid column DM becoz it is hard to connect different column to form row and then extract data.


## Document Data Model 

- JSON Format and XML
- It is key-value type only but without KEY and ONLY VALUE in JSON format.
- PROS:
  - Easy to comprehend.
  - Felxible schema 
  - less memory
  - Good for API developement [more prefered]
  - Easy Horizontal scalability
  - lot of database support sql or other query languages.
      eg : mongoDB and Postgre-sql
  - Also have ACID Properties.
  - DB management tools are build using Document based noSql.

- CONS:
  - cannot enforce constraint on Data.



## Graph Data Model 

  - It store semi-structured, semi-structured, non-structured
  - Graph consist node[vertices] and edges[relation]
  - Uses:
    - Social Network
    - Recommendation Engines
    - Fraud Detection

- Graph Based DB are Neo4J and Arango DB 



# Database Types based on model:
- Four more db apart from NOSQL
  - Relation database
  - Object Oriented database
  - Hierarchical database
  - Network database

## Relation database Model

- Are based on relation Data Model
- entities >> real world object >> features >> attributes
- characteristics: 
  - Entities 
  - attributes
  - Relations or tables 
  - keys [pk or fk]

## Object Oriented database/dbms/Model

- entities along with all the attributes are stored with the entire data-set.
- Characteristics:
  - OOPS properties [encapsulation, inheritance, polymorphism, object identity]
  - RDBMS properties [Transaction control, ACID]

- Pros:
  - complex data saved and retrieved
  - OOPS and RDBMS
  - Object ID assigned automatically

- Cons:
  - High complexity of data makes CRUD slow.
  - Doesnot have lot of support.

## Hierarchical database/Model

- Also called as Inverted Tree Structure. with Parent as root node and all child as leaves node.
- Eg - File-based structure in PC.
- Relations are 1 to 1 OR 1 to Many.

- Pros:
  - Fast retrieval
  - Built-in Refrential Integrity

- Cons:
  - child entry has to have a prent entry
  - cannot be used to show complex relations.

## Network database/Model

- It is a modify way of Hierarchical database,
- Relation are 1:1, 1:many, many:many

- Pros
  - Handle more complex relation than Hierarchical database.

- Cons-
  - Maintaining Network Database is very Tedious.
  - Slow Retrieval.

# week last

# Optimising Database:[4-ways]
  - Generally asked in System design 
- Concurrency control
- Clustering
- Partitioning
- Sharding

## Concurrency control:

- When we try to preform two actions together or just one after the other. then is is known as Concurrent action or transactions.
- It means control these transaction.

- Two ways :
  1. Lock based Concurrency control: 
    - entire DB-schema/system is lock for that instance until the transaction is not terminated or completed. 
    - sometimes both the transaction are kept on lock it is called as dead lock. as system is struck/jammed.

  2. Timestamp Concurrency control:
    - until and unless the transaction with the smallest timestamp is processed/terminated the second transaction does not start.
    - queue based mechanism based on timestamp


## Clustering:

- same database is stored on multiple servers.
- clustering is implemented using CDN. [content-delivery-network]

- Pros:
  - Redundancy
  - Load balancing
  - Availability

## Partitioning 

- scaling : 1. vertical(CPU) 2. Horizontal(server)
- Partitioning : 1. vertical partition 2. Horizontal partition[sharding]

- see SS

## Sharding

- 2 server are independent of each other
- data from A to J is one server and K to Z in another server.
- scaling using sharding ie the horizontal scaling


# Transaction Statement

## Transaction control Languages:
