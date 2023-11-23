-- Create database 'dummydb'
CREATE DATABASE IF NOT EXISTS dummydb
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;
USE dummydb;

-- Create user 'dummyuser' with necessary privileges
CREATE USER 'dummyuser'@'localhost' IDENTIFIED BY 'T8aHxrtw1DbWPxb3zbaTNuT4UicmK66K';
GRANT ALL PRIVILEGES ON dummydb.* TO 'dummyuser'@'localhost';
FLUSH PRIVILEGES;

-- Create table of users
CREATE TABLE IF NOT EXISTS users (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(32) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create table of students
CREATE TABLE IF NOT EXISTS students (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `given_name` VARCHAR(32) NOT NULL,
  `surname` VARCHAR(32) NOT NULL,
  `email` VARCHAR(40) NOT NULL,
  `phone` VARCHAR(24) NOT NULL,
  `address_1` VARCHAR(64) NOT NULL,
  `address_2` VARCHAR(64),
  `city` VARCHAR(32) NOT NULL,
  `state_code` VARCHAR(8) NOT NULL,
  `zip_code` VARCHAR(16) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Create table of students portraits
CREATE TABLE IF NOT EXISTS students_portraits (
  `id` INT PRIMARY KEY,
  `student_id` INT NOT NULL,
  `filename` VARCHAR(255) NOT NULL,
  `filepath` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`student_id`) REFERENCES students(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dummy user
INSERT INTO users (`username`, `password`)
VALUES ('dummyuser', 'dummypassword');

-- Dummy students
INSERT INTO students (
  `given_name`, `surname`,
  `email`, `phone`,
  `address_1`,
  `address_2`,
  `city`, `state_code`,
  `zip_code`
)
VALUES
  (
    'Carlos', 'Drummond de Andrade',
    'carlos.drummondandrade@email.com.br', '+55 21 9 8121 9171',
    'Rua Praça do Centenário, 137',
    'Centro',
    'Itabira', 'MG',
    '35900-051'
  ),
  (
    'Cecília', 'Benevides de Carvalho Meireles',
    'ceci.meireles@email.com.br', '+55 21 2332 9223',
    'Rua São Cláudio, 11',
    'Estácio',
    'Rio de Janeiro', 'RJ',
    '20250-060'
  ),
  (
    'Chaya Pinkhasivna', 'Lispector',
    'clarice@email.com.br', '+55 81 3355 8196',
    'Rua Praça Maciel Pinheiro, 387',
    'Boa Vista',
    'Recife', 'PE',
    '50060-160'
  ),
  (
    'João', 'Guimarães Rosa',
    'jaoguirosa@email.com.br', '+55 31 3501 5328',
    'Avenida Padre João, 744',
    'Centro',
    'Cordisburgo', 'MG',
    '35780-000'
  ),
  (
    'Jorge', 'de Lima',
    'jorgelima@email.com.br', '+55 82 3281 3005',
    'Rua Correia de Oliveira, 2',
    'Centro',
    'União dos Palmares', 'AL',
    '57800-000'
  ),
  (
    'Jorge', 'Leal Amado de Faria',
    'leal.amado.jorge@email.com.br', '+55 71 9 9626 1036',
    'Rua Alfredo Brito, 68',
    'Barra',
    'Salvador', 'BA',
    '40140-141'
  ),
  (
    'Manuel', 'Carneiro de Souza Bandeira Filho',
    'bandeira@email.com.br', '+55 21 3972 6824',
    'Rua Dias de Barros, 53',
    'Santa Teresa',
    'Rio de Janeiro', 'RJ',
    '20241-020'
  ),
  (
    'Rachel', 'de Queiroz',
    'rqueiroz@email.com.br', '+55 85 3105 1387',
    'Rua Antônio Ivo, 290',
    'Henrique Jorge',
    'Fortaleza', 'CE',
    '60521-025'
  );