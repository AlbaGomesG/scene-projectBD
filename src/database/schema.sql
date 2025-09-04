CREATE DATABASE scene;

\c scene;

CREATE TABLE users_scene (
    id SERIAL PRIMARY KEY,
    perfil_photo TEXT NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

INSERT INTO users_scene (perfil_photo, name, email,password) VALUES
('https://lets.events/blog/wp-content/uploads/2017/05/saiba-quais-sao-as-principais-competencias-de-um-produtor-de-eventos.jpeg', 'Lucas Pereira', 'lucas.pereira@gmail.com', '123456'),
('https://i.pinimg.com/736x/cd/e8/e0/cde8e058f48e591e1d4e8fe9c2fbc0af.jpg', 'Mariana Silva', 'mari.silvaa@gmail.com', '123456'),
('https://www.paraisodasfestas.com.br/wp-content/uploads/2024/05/gestao-de-eventos.jpg', 'Livia Angelotti', 'livia.angelotti@gmail.com', '123456'),
('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKgxiPTwU8Gn-iWoQqFRPC69O9147iukCJg', 'Gabriel Costa', 'gabriel.costa@gmail.com', '123456');
