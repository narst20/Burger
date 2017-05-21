/* CREATING DATABASE*/
CREATE DATABASE burgers_db;
/* SWITCH or USE DATABASE*/
USE burgers_db; 
/* CREATE TABLES*/
CREATE TABLE burgers (
    burgerid INT(10) AUTO_INCREMENT NOT NULL,
    burgername VARCHAR(50),
    devoured BOOLEAN DEFAULT FALSE,
    burgerdate TIMESTAMP,
    PRIMARY KEY (burgerid)
);