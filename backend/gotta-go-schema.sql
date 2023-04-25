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
    street TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    longitude SERIAL NOT NULL,
    latitude SERIAL NOT NULL,
    grade TEXT,
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
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

CREATE TABLE messages (
  message_id SERIAL PRIMARY KEY,
  sender_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  receiver_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  timestamp TIMESTAMP NOT NULL,
  is_read BOOLEAN NOT NULL DEFAULT FALSE
);
