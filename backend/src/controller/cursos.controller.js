import { getConnection, querys, sql} from "../models/index.js";

// create
export const Insertar = async (req, res) => {
    try{

        const { nombre, descripcion, creditos, codigo, estado } = req.body
        
        console.log('BODY RECIBIDO:', req.body);

        const pool = await getConnection()

        const resultado = await 
        pool
        .request()
        .input('nombreRecibido', sql.NVarChar, nombre)
        .input('descripcionRecibida', sql.NVarChar, descripcion)
        .input('creditosRecibidos', sql.Int, creditos)
        .input('codigoRecibido', sql.NVarChar, codigo)
        .input('estadoRecibido', sql.Bit, estado)
        .query(querys.Insertar)

        // return res.json(resultado)
        
        if(resultado.recordsets[1][0].msj_tipo === 'success'){
            const resultadoCompleto = 
            {
                "resultadoTipo" : resultado.recordsets[1][0].msj_tipo,
                "respuestaDetalle" : resultado.recordsets[1][0].msj_texto,
                "datos" : resultado.recordset,
                "descripcion" : "Endpoint que permite insertar un curso"
            }
            return res.json(resultadoCompleto)
        }else if(resultado.recordsets[1][0].msj_tipo === 'warning'){
            const resultadoCompleto = 
            {
                "resultadoTipo" : resultado.recordsets[1][0].msj_tipo,
                "respuestaDetalle" : resultado.recordsets[1][0].msj_texto,
                "datos" : "",
                "descripcion" : "Endpoint que permite insertar un curso"
            }
            return res.json(resultadoCompleto)
        }else if(resultado.recordsets[1][0].msj_tipo === 'error'){
            const resultadoCompleto = 
            {
                "resultadoTipo" : resultado.recordsets[1][0].msj_tipo,
                "respuestaDetalle" : resultado.recordsets[1][0].msj_texto,
                "datos" : "",
                "descripcion" : "Endpoint que permite insertar un curso"
            }
            return res.json(resultadoCompleto)
        }
        return res.json(resultado)
    }catch(e) {
        res.status(500).send(e.message)
    }

}
//read simple 
export const listarCursos = async (req, res) => {
    try{
        const pool = await getConnection();
        const resultado = await pool.request().query(querys.listarCursos)
        if(resultado.recordsets[1][0].msj_tipo === 'success'){
            const resultadoCompleto = 
            {
                "resultadoTipo" : resultado.recordsets[1][0].msj_tipo,
                "respuestaDetalle" : resultado.recordsets[1][0].msj_texto,
                "datos" : resultado.recordset,
                "descripcion" : "Endpoint que genera la lista de todos los cursos"
            }
            return res.json(resultadoCompleto)
        }else if(resultado.recordsets[1][0].msj_tipo === 'warning'){
            const resultadoCompleto = 
            {
                "resultadoTipo" : resultado.recordsets[1][0].msj_tipo,
                "respuestaDetalle" : resultado.recordsets[1][0].msj_texto,
                "datos" : "",
                "descripcion" : "Endpoint que genera la lista de todos los cursos"
            }
            return res.json(resultadoCompleto)
        }else if(resultado.recordsets[1][0].msj_tipo === 'error'){
            const resultadoCompleto = 
            {
                "resultadoTipo" : resultado.recordsets[1][0].msj_tipo,
                "respuestaDetalle" : resultado.recordsets[1][0].msj_texto,
                "datos" : "",
                "descripcion" : "Endpoint que genera la lista de todos los cursos"
            }
            return res.json(resultadoCompleto)
        }
        return res.json(resultado)
    }catch(e) {
        res.status(500).send(e.message)
    }
}


//read con parametro
export const listarCursosPorId = async (req, res) => {
    try{

        const idCurso = req.params.id;
        
        const pool = await getConnection();

        const resultado = await 
        pool
        .request()
        .input("idCursoRecibido", sql.Int ,idCurso)
        .query(querys.listarPorId)


        if(resultado.recordsets[1][0].msj_tipo === 'success'){
            const resultadoCompleto = 
            {
                "resultadoTipo" : resultado.recordsets[1][0].msj_tipo,
                "respuestaDetalle" : resultado.recordsets[1][0].msj_texto,
                "datos" : resultado.recordset,
                "descripcion" : "Endpoint que genera los datos de un curso filtrado por el id "
            }
            return res.json(resultadoCompleto)
        }else if(resultado.recordsets[1][0].msj_tipo === 'warning'){
            const resultadoCompleto = 
            {
                "resultadoTipo" : resultado.recordsets[1][0].msj_tipo,
                "respuestaDetalle" : resultado.recordsets[1][0].msj_texto,
                "datos" : "",
                "descripcion" : "Endpoint que genera los datos de un curso filtrado por el id"
            }
            return res.json(resultadoCompleto)
        }else if(resultado.recordsets[1][0].msj_tipo === 'error'){
            const resultadoCompleto = 
            {
                "resultadoTipo" : resultado.recordsets[1][0].msj_tipo,
                "respuestaDetalle" : resultado.recordsets[1][0].msj_texto,
                "datos" : "",
                "descripcion" : "Endpoint que genera los datos de un curso filtrado por el id"
            }
            return res.json(resultadoCompleto)
        }
        return res.json(resultado)
    }catch(e) {
        res.status(500).send(e.message)
    }
}

export const updateLogico = async (req, res) => {
    try{
        const { CursoID, Estado } = req.body
        const pool = await getConnection()

        const resultado = await
        pool
        .request()
        .input('cursoRecibido', sql.Int, CursoID)
        .input('estadoRecibido', sql.Bit, Estado)
        .query(querys. actualizarLogico)
        const ejemplo = {
            'CursoID' : 'Number',
            'Estado' : 'BIT (0 / 1)'
        }
        const descripcion = 'Endpoint que actualiza el estado de un curso'
        const resultadoTipo = resultado.recordsets[1][0].msj_tipo
        const respuestaDetalle = resultado.recordsets[1][0].msj_texto
        const fullResultado = resultado.recordset
        if(resultadoTipo === 'success'){
        const resultadoCompleto = {
            "resultadoTipo" : resultadoTipo,
            "respuestaDetalle" : respuestaDetalle,
            "datos" : fullResultado,
            "descripcion" : descripcion
        }
        return res.json(resultadoCompleto)
    }else if(resultadoTipo === 'warning'){
        const resultadoCompleto = {
            "resultadoTipo" : resultadoTipo,
            "respuestaDetalle" : respuestaDetalle,
            "datos" : "",
            "descripcion" : descripcion,
            "ejemplo" : ejemplo
        }
        return res.json(resultadoCompleto)
    }else if(resultadoTipo === 'error'){
        const resultadoCompleto = {
            "resultadoTipo" : resultadoTipo,
            "respuestaDetalle" : respuestaDetalle,
            "datos" : "",
            "descripcion" : descripcion,
            "ejemplo" : ejemplo
        }
        return res.json(resultadoCompleto)
    }
    return res.json(resultado)
    }catch(e) {
        res.status(500).send(e.message)
    }
}

// update
export const Actualizar = async (req, res) => {
    try{
        const idCurso = req.params.id;
        const { nombre, descripcion, creditos, codigo, estado } = req.body
        
        // console.log('BODY RECIBIDO:', req.body);

        const pool = await getConnection()

        const resultado = await 
        pool
        .request()
        .input('idCursoRecibido', sql.Int, idCurso)
        .input('nombreRecibido', sql.NVarChar, nombre)
        .input('descripcionRecibida', sql.NVarChar, descripcion)
        .input('creditosRecibidos', sql.Int, creditos)
        .input('codigoRecibido', sql.NVarChar, codigo)
        .input('estadoRecibido', sql.Bit, estado)
        .query(querys.actualizacionTotal)

        // return res.json(resultado)
        const mensaje = 'Enpoint que permite actualizar un curso'
        
        if(resultado.recordsets[1][0].msj_tipo === 'success'){
            const resultadoCompleto = 
            {
                "resultadoTipo" : resultado.recordsets[1][0].msj_tipo,
                "respuestaDetalle" : resultado.recordsets[1][0].msj_texto,
                "datos" : resultado.recordset,
                "descripcion" : mensaje
            }
            return res.json(resultadoCompleto)
        }else if(resultado.recordsets[1][0].msj_tipo === 'warning'){
            const resultadoCompleto = 
            {
                "resultadoTipo" : resultado.recordsets[1][0].msj_tipo,
                "respuestaDetalle" : resultado.recordsets[1][0].msj_texto,
                "datos" : "",
                "descripcion" : mensaje
            }
            return res.json(resultadoCompleto)
        }else if(resultado.recordsets[1][0].msj_tipo === 'error'){
            const resultadoCompleto = 
            {
                "resultadoTipo" : resultado.recordsets[1][0].msj_tipo,
                "respuestaDetalle" : resultado.recordsets[1][0].msj_texto,
                "datos" : "",
                "descripcion" : mensaje
            }
            return res.json(resultadoCompleto)
        }
        return res.json(resultado)
    }catch(e) {
        console.log('Error al actualizar', e)
        res.status(500).send(e.message)
    }

}

