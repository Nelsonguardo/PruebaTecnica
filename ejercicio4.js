const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'tu_host_de_mysql',
  user: 'tu_usuario_de_mysql',
  password: 'tu_contraseña_de_mysql',
  database: 'tu_nombre_de_base_de_datos'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

const createTableQueries = [
  `
  CREATE TABLE IF NOT EXISTS Usuarios (
    IDUsuario INT PRIMARY KEY,
    NombreUsuario VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Contraseña VARCHAR(255) NOT NULL
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS Autores (
    IDAutor INT PRIMARY KEY,
    NombreAutor VARCHAR(100) NOT NULL,
    IDUsuario INT,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(IDUsuario)
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS Colaboradores (
    IDColaborador INT PRIMARY KEY,
    NombreColaborador VARCHAR(100) NOT NULL,
    IDUsuario INT,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(IDUsuario)
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS Videos (
    IDVideo INT PRIMARY KEY,
    Titulo VARCHAR(255) NOT NULL,
    Descripcion TEXT,
    URL VARCHAR(255) NOT NULL,
    FechaPublicacion DATE NOT NULL,
    IDAutor INT,
    FOREIGN KEY (IDAutor) REFERENCES Autores(IDAutor)
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS Comentarios (
    IDComentario INT PRIMARY KEY,
    Contenido TEXT NOT NULL,
    FechaComentario DATE NOT NULL,
    IDUsuario INT,
    IDVideo INT,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(IDUsuario),
    FOREIGN KEY (IDVideo) REFERENCES Videos(IDVideo)
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS Reviews (
    IDReview INT PRIMARY KEY,
    Puntuacion INT NOT NULL,
    Comentario TEXT,
    IDUsuario INT,
    IDVideo INT,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(IDUsuario),
    FOREIGN KEY (IDVideo) REFERENCES Videos(IDVideo)
  );
  `
];

createTableQueries.forEach((query) => {
  connection.query(query, (err) => {
    if (err) throw err;
  });
});

connection.end();