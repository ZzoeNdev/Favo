

CREATE DATABASE IF NOT EXISTS favoAr;
USE favoAr;


CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    foto VARCHAR(255)
);


CREATE TABLE casa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_casa VARCHAR(100) NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE comodo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    id_casa INT NOT NULL,
    FOREIGN KEY (id_casa) REFERENCES casa(id)
);

CREATE TABLE inmetro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(70) NOT NULL,
    kwh DECIMAL(10,2) NOT NULL,
    marca VARCHAR(50)
);

CREATE TABLE eletro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,      
    tipo VARCHAR(70),                 
    codigo VARCHAR(50),              
    watts INT,                        
    estado VARCHAR(20) DEFAULT 'desligado',
    ligado_desde DATETIME NULL,       
    horas_uso_medio DECIMAL(4,1) default null,
    id_comodo INT NOT NULL,
    id_inmetro INT NULL,              
    FOREIGN KEY (id_comodo) REFERENCES comodo(id),
    FOREIGN KEY (id_inmetro) REFERENCES inmetro(id)
);


CREATE TABLE consumo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_eletro INT NOT NULL,
    data DATE NOT NULL,               
    inicio DATETIME NOT NULL,
    fim DATETIME NOT NULL,
    consumo_kwh DECIMAL(10,3) NOT NULL,
    FOREIGN KEY (id_eletro) REFERENCES eletro(id)
);