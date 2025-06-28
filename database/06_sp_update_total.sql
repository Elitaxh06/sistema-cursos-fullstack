CREATE OR ALTER PROCEDURE SP_CURSOS_ACTUALIZACION_TOTAL
	@CursoID INT,
    @nombre NVARCHAR(100),
    @descripcion NVARCHAR(500) = NULL,
    @creditos INT = NULL,
    @codigo NVARCHAR(20) = NULL,
    @estado BIT
AS
BEGIN

	SET NOCOUNT ON;

	 BEGIN TRY
        -- Validación de campos obligatorios
        IF @CursoID <= 0 OR LEN(@nombre) = 0 OR @estado IS NULL
        BEGIN
			SELECT ''
            SELECT 
                'warning' AS msj_tipo, 
                'Debes ingresar todos los datos obligatorios (Id, Nombre, Estado).' AS msj_texto;
        END
        ELSE
        BEGIN
            -- Actualizar en la tabla Cursos
			UPDATE Cursos
			SET 
			Nombre = @nombre,
			Descripcion = @descripcion,
			Creditos = @creditos,
			Codigo = @codigo,
			Estado = @estado
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