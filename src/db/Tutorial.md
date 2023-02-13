# Setting up SQL database

## Setting up a database

Create a free postgresql database at:
https://www.elephantsql.com/

Grab the url of your new database so you can access it from the command line in your terminal.

create a table
Example SQL:

# Useful SQL commands

## See tables that you created

`SELECT * FROM information_schema.tables WHERE table_schema='public' AND table_name!='pg_stat_statements'`

## Delete a table

`DROP TABLE table_name;`

## Create a table

This will create a users table, which is necesssary to save information from Google Oauth

```
CREATE TABLE Users
(
_id SERIAL PRIMARY KEY,
sub TEXT NOT NULL,
picture TEXT NULL,
email TEXT NOT NULL,
email_verified BOOLEAN NULL
);
```

## Create card

INSERT INTO cards (front, back) VALUES ('hello', 'world')
