CREATE OR ALTER   PROCEDURE SP_CURSOS_INSERTAR
(
    @nombre NVARCHAR(100),
    @descripcion NVARCHAR(500) = NULL,
    @creditos INT = NULL,
    @codigo NVARCHAR(20) = NULL,
    @estado BIT
)
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRY
        -- Validación de campos obligatorios
        IF LEN(@nombre) = 0 OR @estado IS NULL
        BEGIN
			SELECT ''
            SELECT 
                'warning' AS msj_tipo, 
                'Debes ingresar al menos el nombre y el estado del curso.' AS msj_texto;
        END
        ELSE
        BEGIN
            -- Inserción
            INSERT INTO Cursos
            VALUES (
                @nombre,
                @descripcion,
                @creditos,
                @codigo,
                GETDATE(),
                @estado
            );

			SELECT ''
            SELECT 
                'success' AS msj_tipo, 
                'Curso insertado exitosamente.' AS msj_texto;
        END

    END TRY

    BEGIN CATCH
		SELECT ''
        SELECT 
            'error' AS msj_tipo, 
            ERROR_MESSAGE() AS msj_texto;
    END CATCH
END