
export const rutas_endpoints = {
    // CRUD
    //------------------------------------------------------------------------------

    // CREATE
    createCurso: 'http://localhost:3005/api/cursos/insertar',

    // READ
    getAllCursos : 'http://localhost:3005/api/cursos/listarCursos',

    // read curso by id
    getCursoById: "http://localhost:3005/api/cursos/listarPorId/",

    // UPDATE LOGICO
    updateEstadoCurso: 'http://localhost:3005/api/cursos/actualizarLogico',

    // DELETE

    update_Curso: "http://localhost:3005/api/cursos/actualizar/"
}