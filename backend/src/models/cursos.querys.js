export const querys = {
  // CRUD

  // CREATE
  "Insertar" : "SP_CURSOS_INSERTAR @nombreRecibido, @descripcionRecibida, @creditosRecibidos, @codigoRecibido, @estadoRecibido;",
  
  // READ SIMPLE
  "listarCursos" : "EXEC SP_CURSOS_LISTAR",
  
  // READ CON PARAMETRO
  "listarPorId" : "EXEC SP_CURSOS_LISTAR_POR_ID @idCursoRecibido",
  // ALL UPsDATE 

  actualizacionTotal: "SP_CURSOS_ACTUALIZACION_TOTAL @idCursoRecibido, @nombreRecibido, @descripcionRecibida, @creditosRecibidos, @codigoRecibido, @estadoRecibido",
  // ONLY ONE THING UPDATE

  actualizarLogico: 'SP_CURSOS_ACTIVAR_DESACTIVAR @cursoRecibido, @estadoRecibido',
  //DELETE 
}