import React, { useState, useEffect } from 'react'
import { getCursoById, getCursos, inactivarActivarCurso,  } from '../services/Cursos.Services'
import { useDispatch} from 'react-redux'
import { Grid } from 'gridjs-react'
import { useNavigate } from 'react-router-dom'
import 'gridjs/dist/theme/mermaid.css'
import Swal from 'sweetalert2'
import { h } from 'gridjs'
import { MainTitle } from './Titulo'
import { ButtonAdd } from './Button'
import { setCurso } from '../store'

export default function ListaCursos() {
    const [dataCursos, setDataCursos] = useState([])
    const [showCursos, setShowCursos] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getInitialData = async () => {
        const result = await getCursos()
        if(result) {
            setDataCursos(result)
        }
    }

    const inactivarCurso = async (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción se puede revertir",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Actualizar"
        }).then((result) => {
          if (result.isConfirmed) {
            accionInactivar(id)
          }
        });
    }

    const accionInactivar = async (id) => {
        const result = await inactivarActivarCurso(id, 0)
        if(result) {
            getInitialData()
        }
    }
    
    const activarCurso = async (id) => {2
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción se puede revertir",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Actualizar"
        }).then((result) => {
          if (result.isConfirmed) {
            accionActivar(id)
          }
        });
    }
    const accionActivar = async (id) => {
        const result = await inactivarActivarCurso(id, 1)
        if(result) {
            getInitialData()
        }
    }

    const editarCurso = async (id) => {
        const result = await getCursoById(id)
        if(result){
            dispatch(setCurso(result))
            navigate('/editarCurso')
        }
    }

    useEffect(() => {
        getInitialData()
    }, [])
    return (
    <section>
        <article className='flex flex-col items-center justify-center gap-12 mt-3'>
        <MainTitle text='Lista de Cursos' />
        <ButtonAdd />
        <div className='w-full max-w-7xl'>
            <div className='flex items-center justify-start w-full rounded-lg h-18 gap-4'>
                
                <button disabled={showCursos} className={`${showCursos ? "border-slate-300 border-l-2 rounded-t-lg border-t-2 border-r-2 text-white hover:scale-105 transition-transform duration-150 hover:text-blue-400 hover:font-bold w-xs h-10 font-semibold" : "border-slate-300 border-l-2 rounded-t-lg border-t-2 border-r-2 text-white cursor-pointer hover:scale-105 transition-transform duration-150 hover:text-blue-400 hover:font-bold w-xs h-10 font-semibold"}  `} onClick={() => setShowCursos(true)}>                   
                    Ver Cursos Activos
                </button>
                <button disabled={!showCursos}  className={`${!showCursos ? "border-slate-300 border-l-2 rounded-t-lg border-t-2 border-r-2 text-white hover:scale-105 transition-transform duration-150 hover:text-blue-400 hover:font-bold w-xs h-10 font-semibold" : "border-slate-300 border-l-2 rounded-t-lg border-t-2 border-r-2 text-white cursor-pointer hover:scale-105 transition-transform duration-150 hover:text-blue-400 hover:font-bold w-xs h-10 font-semibold"}  `} onClick={() => setShowCursos(false)}>                   
                    Ver Cursos Inactivos
                </button>
            </div>
            <hr />
            {showCursos && (
                <>
                <h1 className='text-center text-2xl font-bold mt-2'>Cursos Activos</h1>
                <Grid 
                data={dataCursos.activos || []}
                columns={[
                    { id: 'CursoID', name: 'ID' },
                    { id: 'Nombre', name: 'Nombre'},
                    { id: 'Descripcion', name: 'Descripción'},
                    { id: 'Creditos', name: 'Creditos'},
                    { id: 'Codigo', name: 'Codigo'},
                    { id: 'FechaCreacion', name: 'FechaCreacion'},
                    // { id: 'Estado', name: 'Estado'},
                    {
                        name: 'Editar',
                        formatter: (cell, row) => {
                            return h('button', {
                                className: 'bg-yellow-500 text-white font-bold py-2 px-3 rounded-md cursor-pointer hover:bg-yellow-600    hover:scale-105 transition-transform duration-300',
                                onClick: ()=> editarCurso(`${row.cells[0].data}`)
                            }, 'Editar')
                        }
                    },
                    {
                        name: 'Desactivar',
                        formatter: (cell, row) => {
                            return h('button', {
                                className: 'bg-red-500 text-white font-bold py-2 px-3 rounded-md cursor-pointer hover:bg-red-600 hover:scale-105 transition-transform duration-300',
                                onClick: () => inactivarCurso(`${row.cells[0].data}`)
                            }, 'Inactivar')
                        }
                    }
                ]}
                sort={true}
                resizable={true}
                language={{
                    search: {
                        placeholder: 'Escribe para buscar...'
                    },
                    sort: {
                        sortAsc: 'Orden de columna ascendente',
                        sortDesc: 'Orden de columna descendente'
                    },
                    pagination: {
                        previous: 'Anterior',
                        next: 'Siguiente',
                        navigate: (page, pages) => `Pagina ${page} de ${pages}`,
                        page: (page) => `Pagina ${page}`,
                        showing: 'Mostrando',
                        of: 'de',
                        to: 'al',
                        results: 'registros'
                    },
                    loading: 'Cargando...',
                    noRecordsFound: 'No hay cursos disponibles ',
                    error: 'Error al cargar los datos',
                }}
                className={{
                    search: 'font-bold'
                }}
                search={true}
                pagination={{
                    enabled: true,
                    limit: 5,
                }}
                />
                </>

            )}
            {/* Cursos inactivos */}
            {!showCursos && (
            <>
                <h1 className='text-center text-2xl font-bold mt-2'>Cursos Inactivos</h1>
                <Grid 
                
                data={dataCursos.inactivos || []}
                columns={[
                    { id: 'CursoID', name: 'ID' },
                    { id: 'Nombre', name: 'Nombre'},
                    { id: 'Descripcion', name: 'Descripción'},
                    { id: 'Creditos', name: 'Creditos'},
                    { id: 'Codigo', name: 'Codigo'},
                    { id: 'FechaCreacion', name: 'FechaCreacion'},
                    // { id: 'Estado', name: 'Estado'},
                    {
                        name: 'Activar',
                        formatter: (cell, row) => {
                            return h('button', {
                                className: 'bg-green-500 text-white font-bold py-2 px-3 rounded-md cursor-pointer hover:bg-green-600    hover:scale-105 transition-transform duration-300',
                                onClick: () => activarCurso(`${row.cells[0].data}`)
                            }, 'Activar')
                        }
                    }
                ]}
                sort={true}
                resizable={true}
                language={{
                    search: {
                        placeholder: 'Escribe para buscar...'
                    },
                    sort: {
                        sortAsc: 'Orden de columna ascendente',
                        sortDesc: 'Orden de columna descendente'
                    },
                    pagination: {
                        previous: 'Anterior',
                        next: 'Siguiente',
                        navigate: (page, pages) => `Pagina ${page} de ${pages}`,
                        page: (page) => `Pagina ${page}`,
                        showing: 'Mostrando',
                        of: 'de',
                        to: 'al',
                        results: 'registros'
                    },
                    loading: 'Cargando...',
                    noRecordsFound: 'No hay cursos disponibles',
                    error: 'Error al cargar los datos',
                }}
                className={{
                    search: 'font-bold',
                    noRecordsFound: 'font-bold text-red-400'
                }}
                search={true}
                pagination={{
                    enabled: true,
                    limit: 5,
                }}

                />
            </>
            )}

        </div>
        </article>
    </section>
  ) 
}
