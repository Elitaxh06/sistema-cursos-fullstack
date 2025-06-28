import axios from "axios";
import Swal from "sweetalert2";
import { rutas_endpoints } from "../ambientes/endpoints.routes";


export const getCursos = async () => {
    try {
        const { data } = await axios.get(
            rutas_endpoints.getAllCursos,
            {},
            {
                'Content-Type': 'application/json',
            }
        )
        if(data.resultadoTipo === 'success') {
            let listCursos = data.datos
            listCursos = listCursos.map(curso => {
                return {
                    ...curso,
                    Estado: curso.Estado ? 'Activo' : 'Inactivo'
                }
            }) 
            const cursosAcitvosInactivos = listCursos.reduce((acc, curso) => {
                if(curso.Estado === 'Activo') {
                    acc.activos.push(curso)
                }else if(curso.Estado === 'Inactivo') {
                    acc.inactivos.push(curso)
                }
                return acc
            }, {
                activos: [],
                inactivos: []
            })
            return cursosAcitvosInactivos
        }else if(data.resultadoTipo === 'warning') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'No se encontraron cursos',
            })
        }else if(datos.resultadoTipo === 'error') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Error al obtener los cursos',
            })
        }

    }catch(e) {
        Swal.fire({
            icon: 'info',
            title: 'Error',
            text: e.message,
        })
    }
}

export const getCursoById = async (Id_Curso) => {
    try{
        const { data } = await axios.get(
            rutas_endpoints.getCursoById + Id_Curso,
            {},
            {
                headers: { 'Content-Type': 'application/json' },
            }
        )
        if(data.resultadoTipo === 'success'){
            return data.datos
        }else if(data.resultadoTipo === 'warning') {
            Swal.fire({
                icon: 'info',
                title: "Para su información",
                text: data.respuestaDetalle
            });
            return false
        }else if(data.resultadoTipo === 'error') {
            Swal.fire({
                icon: 'info',
                title: "Error",
                text: data.respuestaDetalle
            });
        }
        return false
        

    }catch(e) {
        Swal.fire({
            icon: 'info',
            title: 'Error',
            text: e.message,
        })
    }
}

export const inactivarActivarCurso = async (idRecibido, estado) => {
    try{
        const id = Number(idRecibido)
        const { data } = await axios.post(

            rutas_endpoints.updateEstadoCurso,
            {
                CursoID: id,
                Estado: estado
            },
            {
                headers: { 'Content-Type': 'application/json' },
            }
        )
        if(data.resultadoTipo === 'success'){
            Swal.fire({
                icon: 'success',
                title: 'Para su información',
                text: data.respuestaDetalle,
                confirmButtonText: 'Aceptar',
            })
            return true
        }else if(data.resultadoTipo === 'warning') {
            Swal.fire({
                icon: 'info',
                title: 'Advertencia',
                text: data.respuestaDetalle,
            })
            return false
        }else if(data.resultadoTipo === 'error'){
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: data.respuestaDetalle,
            })
            return false
        }
    }catch(e) {
        Swal.fire({
            icon: 'info',
            title: 'Error',
            text: e.message,
        })
    }
}

export const createCurso = async (
    {
        nombre, 
        descripcion, 
        creditos, 
        codigo, 
        estado
    }
) => {
    try{
        const { data } = await axios.post(
            rutas_endpoints.createCurso,
            {
                nombre, 
                descripcion, 
                creditos, 
                codigo,
                estado
            },
            {
                'Content-Type': 'application/json',
            }
        )
        if(data.resultadoTipo === 'success'){
            Swal.fire({
                icon: 'success',
                title: 'Curso Creado',
                text: 'El curso se ha creado correctamente',
                confirmButtonText: 'Aceptar',
            })
            return true
        }else if(data.resultadoTipo === 'warning') {
            Swal.fire({
                icon: 'info',
                title: 'Advertencia',
                text: 'El curso ya existe',
            })
            return false
        }else if(data.resultadoTipo === 'error') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al crear el curso',
            })
            return false
        }
    }catch(e) {
        Swal.fire({
            icon: 'info',
            title: 'Error',
            text: e.message,
        })
    }
}

export const updateCurso = async (
    {
        nombre,
        descripcion,
        creditos,
        codigo,
        estado,
        id
    }
) => {
    try{
        const { data } = await axios.put(
            rutas_endpoints.update_Curso + id,
        {
            nombre,
            descripcion,
            creditos,
            codigo,
            estado,
        },
        {
            'Content-Type': 'application/json'
        }
    )
    if(data.resultadoTipo === 'success'){
        Swal.fire({
            icon: 'success',
            title: 'Curso Actualizado',
            text: data.respuestaDetalle,
        })
        return true
    }else if(data.resultadoTipo === 'warning') {
        Swal.fire({
            icon: 'info',
            title: 'Advertencia',
            text: data.respuestaDetalle,
        })
        return false
    }else if(data.resultadoTipo === 'error') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: data.respuestaDetalle,
        })
        return false
    }

    }catch(e) {
        Swal.fire({
            icon: 'info',
            title: 'Error',
            text: e.message,
        })  
    }
}