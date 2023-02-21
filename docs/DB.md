# Setting up SQL database

## Create the database

Create a free postgresql database at: `https://www.elephantsql.com/`
Grab the url of your new database. Make sure to put it in `secrets.js` (which you should have renamed from `SECRETS_EXAMPLE.js`)

## Create user table

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

## Useful SQL commands

### See tables that you created

`SELECT * FROM information_schema.tables WHERE table_schema='public' AND table_name!='pg_stat_statements'`

### Delete a table

`DROP TABLE table_name;`

### Insert row into table

INSERT INTO cards (front, back) VALUES ('hello', 'world')
