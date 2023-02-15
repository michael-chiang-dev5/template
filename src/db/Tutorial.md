# Setting up SQL database

Create a free postgresql database at:
https://www.elephantsql.com/

Grab the url of your new database so you can access it from the command line in your terminal.

create a table
Example SQL:

# draw er diagram

https://app.sqldbm.com/PostgreSQL/Edit/p243962/

# Useful SQL commands

## See tables that you created

SELECT \* FROM information_schema.tables WHERE table_schema='public' AND table_name!='pg_stat_statements'

## Delete a table

`DROP TABLE table_name;`

## Create a table

```
CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
```

## Create card

INSERT INTO cards (front, back) VALUES ('hello', 'world')
