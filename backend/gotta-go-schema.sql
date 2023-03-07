/* 
    creates a table for users with entries requiring a first and last name
*/
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    gender TEXT,
    password TEXT,
    email TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE bathrooms(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    grade TEXT,
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE monsters(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    rarity TEXT,
    size INT,
    health INT,
    attack INT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
