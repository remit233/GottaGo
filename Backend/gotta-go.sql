\echo 'Delete and create gotta-go db?'
\prompt 'Yes?' answer

DROP DATABASE gotta_go;
CREATE DATABASE gotta_go;

\connect gotta_go;

\i gotta-go-schema.sql