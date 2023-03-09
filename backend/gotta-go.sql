\echo 'DELETING and creating database gotta-go'
\prompt 'Any key for "yes", Ctrl+C for "no"' answer

DROP DATABASE gotta_go;
CREATE DATABASE gotta_go;

\connect gotta_go;

\i gotta-go-schema.sql