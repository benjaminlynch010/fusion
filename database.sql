
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE personas (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR,
"cardlvl" INTEGER,
"heart" VARCHAR,
"inherits" VARCHAR,
"lvl" INTEGER,
"race" VARCHAR,
"resists" VARCHAR,
"skills" VARCHAR,
"stats" VARCHAR,
"image" VARCHAR
);
    
CREATE TABLE party (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR,
"persona_id" INTEGER,
"party_name" VARCHAR DEFAULT 'Unnamed Party'
);
