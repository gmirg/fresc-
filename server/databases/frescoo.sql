# #DROP DATABASE frescoo_users;

CREATE DATABASE frescoo_users;

USE frescoo_users;

CREATE TABLE users( 
    id INT AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,	
    avatar VARCHAR(100), # link con una imagen predeterminada que el usuario puede cambiar
    pass VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);
#la siguiente tabla relaciona al usuario con los productos que tiene en la nevera
CREATE TABLE user_fridge ( 
	id INT AUTO_INCREMENT NOT NULL UNIQUE,
    id_food VARCHAR(24) NOT NULL, # ID de mongoDB
    qty VARCHAR(10) NOT NULL,
    best_before_date DATE,	
    estimated_value VARCHAR(10), # valor estimado del alimento para el calculo de estadisticas
    fk_id_user INT,
    FOREIGN KEY(fk_id_user) REFERENCES users(id)
);