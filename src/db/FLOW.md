# Description

## This describes the database schema for DiagramQuestions

### Create the table

```
CREATE TABLE DiagramQuestions
(
_id SERIAL PRIMARY KEY,
prompt TEXT NOT NULL,
state TEXT NULL
);
```

### Create new question

`INSERT INTO DiagramQuestions (prompt) VALUES ('Design tinyUrl')`

### Select

`SELECT \* FROM diagramquestions`
