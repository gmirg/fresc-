# #DROP DATABASE frescoo_users;

CREATE DATABASE frescoo_users;

USE frescoo_users;

CREATE TABLE users( 
    id_user INT AUTO_INCREMENT,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    pass VARCHAR(50) NOT NULL,	
    avatar VARCHAR(100),
    created DATE # link con una imagen predeterminada que el usuario puede cambiar
    PRIMARY KEY(id_user)
);
CREATE TABLE user_fridge (
	id_fridge INT AUTO_INCREMENT UNIQUE, 
    id_food VARCHAR(24) NOT NULL, # ids de alimentos de la DATABASE de mongo
    fk_id_user INT,
    FOREIGN KEY(fk_id_user) REFERENCES users(id_user)
);
CREATE TABLE users_old ( 
    id_user INT AUTO_INCREMENT UNIQUE,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,	
    avatar VARCHAR(100), # link con una imagen predeterminada que el usuario puede cambiar
    PRIMARY KEY(id)
);
DELIMITER //
CREATE TRIGGER users_old
BEFORE DELETE ON users
FOR EACH ROW 
BEGIN
	INSERT INTO user_old SELECT FROM users WHERE id_user = old.id_user;
END //
DELIMITER ;