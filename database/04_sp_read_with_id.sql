CREATE OR ALTER PROCEDURE SP_CURSOS_LISTAR_POR_ID
(@Id_Curso INT)
AS
BEGIN
	--Comprobar que se haya recibido datos del parametro requerido
	BEGIN TRY
		IF @Id_Curso <= 0
			BEGIN
				SELECT ''
				SELECT 'warning' AS msj_tipo, 'Debes ingresar un id valido.' AS msj_texto; 
			END
		
		--Comprobar si existen registros
		ELSE IF EXISTS (SELECT 1 FROM Cursos WHERE CursoID = @Id_Curso)
			BEGIN
				--Si hay datos, devolver dicha informaci�n
				SELECT * FROM Cursos WHERE CursoID = @Id_Curso
				SELECT 'success' AS msj_tipo, 'Exito al realizar la acción.' AS msj_texto;  
			END
		ELSE
		BEGIN
			--Si no hay datos, se devuelve un mensaje indicandolo
			SELECT ''
			SELECT 'warning' AS msj_tipo, 'Actualmente, no hay datos con el id proporcionado.' AS msj_texto; 
		END	
		END TRY
		BEGIN CATCH
			SELECT ''
			SELECT 'error' AS msj_tipo, ERROR_MESSAGE() AS msj_texto; 
		END CATCH
END
