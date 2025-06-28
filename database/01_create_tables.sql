CREATE DATABASE REGISTROS_1

USE REGISTROS_1

CREATE TABLE Alumnos(
	AlumnoID INT IDENTITY(1,1) NOT NULL,
	Nombre NVARCHAR(100) NOT NULL,
	Apellido NVARCHAR(100) NOT NULL,
	FechaNacimiento DATE,
	Email NVARCHAR(150),
	Telefono NVARCHAR(20),
	Direccion NVARCHAR(200),
	FechaRegistro DATETIME NOT NULL,
	Estado BIT NOT NULL,
	PRIMARY KEY(AlumnoID)
)

CREATE TABLE Cursos(
	CursoID INT IDENTITY(1,1) NOT NULL,
	Nombre NVARCHAR(100) NOT NULL,
	Descripcion NVARCHAR(500) NULL,
	Creditos INT NULL,
	Codigo NVARCHAR(20) NULL,
	FechaCreacion DATETIME NULL,
	Estado BIT NOT NULL,
	PRIMARY KEY(CursoID)
)

SELECT * FROM Alumnos
SELECT * FROM Cursos




INSERT INTO Cursos
VALUES
(
	'React', 'Libreria de JS', 1, 'RJS-1', GETDATE(), 1
),
(
	'Angular', 'Framework de JS', 1, 'AJS-1', GETDATE(), 1
)

SELECT * FROM Cursos






