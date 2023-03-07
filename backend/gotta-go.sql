\echo 'DELETING and creating database gotta-go'
\prompt 'Any key for "yes", Ctrl+C for "no"' answer

DROP DATABASE gotta-go;
CREATE DATABASE gotta-go;

\connect gotta-go;

\i gotta-go-schema.sql