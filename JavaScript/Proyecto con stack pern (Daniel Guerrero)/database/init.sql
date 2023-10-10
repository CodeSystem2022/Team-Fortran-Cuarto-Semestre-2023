CREATE TABLE tareas (
    id SERIAL PRIMARY KFY,
    titulo VARCHAR(255) UNIQUE NOT NULL, 
    descripcion TEXT, 
);