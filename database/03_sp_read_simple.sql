CREATE OR ALTER PROCEDURE SP_CURSOS_LISTAR
AS
BEGIN
	BEGIN TRY
		IF EXISTS(SELECT 1 FROM Cursos)
		BEGIN
			-- Si hay datos devuelve la lista de todos los cursos
			SELECT * FROM Cursos
			SELECT 'success' AS msj_tipo, 'Exito al realizar la accion.' AS msj_texto
		END
		ELSE
		BEGIN
			-- Si no hay datos se devuelve un mensaje
			SELECT ''
			SELECT 'warning' AS msj_tipo, 'Actualmente, no hay registros de cursos.' AS msj_texto 
		END
		
		
	END TRY
	BEGIN CATCH
		SELECT ''
		SELECT 'error' AS msj_tipo, ERROR_MESSAGE() AS msj_texto	
	END CATCH
END

EXEC SP_CURSOS_LISTAR