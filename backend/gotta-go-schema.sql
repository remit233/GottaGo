/* 
    creates a table for users with entries requiring a first and last name
*/
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    gender TEXT,
    password TEXT NOT NULL,
    email TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE bathrooms(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    grade TEXT,
    description TEXT,
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE monsters(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    rarity TEXT NOT NULL,
    size INT,
    health INT NOT NULL,
    attack INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
