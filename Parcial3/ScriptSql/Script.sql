CREATE DATABASE L19100152
USE L19100152
CREATE TABLE Cita (
    ID INT PRIMARY KEY IDENTITY (1, 1),
	Fecha DATE NOT NULL,
    Hora TIME NOT NULL,
    Nombre VARCHAR (50) NOT NULL,
    Apellido_Paterno VARCHAR (50) NOT NULL,
    Apellido_Materno VARCHAR (50) NOT NULL,
    Direccion VARCHAR (50) NOT NULL,
	Colonia VARCHAR (20) NOT NULL,
    Codigo_Postal VARCHAR (5) NOT NULL,
    Email VARCHAR (50) NOT NULL,
    Telefono VARCHAR(50),
    Ciudad VARCHAR (50) NOT NULL,
	Estado VARCHAR (50) NOT NULL,
);

INSERT INTO "Cita" (Fecha, Hora, Nombre, Apellido_Paterno, Apellido_Materno, Direccion, Colonia, Codigo_Postal, Email, Telefono, Ciudad, Estado )
VALUES ('2022-07-24', '12:30:24','Adrian Ivan', 'Briseno', 'Torres', 'Madero 6253', 'Militar', 88140, 'adrianbriseno@gmail.com', '867 751 90 33', 'Nuevo Laredo', 'Tamaulipas' );