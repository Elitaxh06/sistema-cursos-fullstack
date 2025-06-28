CREATE OR ALTER PROCEDURE SP_CURSOS_ACTIVAR_DESACTIVAR
	@CursoID INT,
	@Estado BIT
AS
BEGIN

SET NOCOUNT ON;

	 BEGIN TRY
        -- Validación de campos obligatorios
        IF @CursoID <= 0 OR @Estado IS NULL
        BEGIN
			SELECT ''
            SELECT 
                'warning' AS msj_tipo, 
                'Debes ingresar todos los datos obligatorios (Id, Estado).' AS msj_texto;
        END
        ELSE
        BEGIN
            
			UPDATE Cursos
			SET Estado = @Estado
			WHERE 
			CursoID = @CursoID

			SELECT ''

            SELECT 
                'success' AS msj_tipo, 
                'Curso actualizado correctamente.' AS msj_texto;
        END

    END TRY

    BEGIN CATCH
		SELECT ''
        SELECT 
            'error' AS msj_tipo, 
            ERROR_MESSAGE() AS msj_texto;
    END CATCH

END