import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCurso } from "../../services/Cursos.Services";
import { ButtonVolver } from "../../components/ButtonVolver";
import Swal from "sweetalert2";
import { MainTitle } from "../../components/Titulo";
function FormAgregarCurso() {
  const [nombre, setNombre ] = useState('')
  const [descripcion, setDescripcion ] = useState('')
  const [creditos, setCreditos ] = useState(1)
  const [codigo, setCodigo ] = useState('')

  
  const navigate = useNavigate()

  const onchangeNombre = (e) => {
    e.preventDefault();
    setNombre(e.target.value)
  }
  const onchangeDescripcion = (e) => {
    e.preventDefault();
    setDescripcion(e.target.value)
  }
  const onchangeCreditos = (e) => {
    e.preventDefault();
    setCreditos(e.target.value)
  }
  const onchangeCodigo = (e) => {
    e.preventDefault();
    setCodigo(e.target.value.trim())
  }

  const guardarCurso = async (e) => {
    e.preventDefault()
    try{

    if(!nombre || !descripcion || !creditos || !codigo) {
      Swal.fire({
        icon: 'info',
        title: 'Campos incompletos',
        text: 'Por favor, complete todos los campos',
        confirmButtonText: 'Aceptar'
      })
      return
    }else {
      const result = await createCurso({
        nombre, 
        descripcion, 
        creditos, 
        codigo,
        estado: true
      })
      if(result){
        navigate('/')
      }
    }
    }catch(e) {
      Swal.fire({
        icon: 'info',
        title: 'Error',
        text: 'lajfaslfjalskfja;s',
      })
    }
    
  }

  
  return (
    <section>
        <article className='flex flex-col items-center justify-center gap-12 mt-3'>
            <MainTitle text='Agregar Curso' />
            <form action="" onSubmit={guardarCurso} className="flex flex-col items-center justify-center gap-2 border border-slate-500 rounded-md w-2xl p-4 shadow-[0_0_10px_#22c55e]">
              <label className="font-semibold text-xl" htmlFor="nombre">Nombre</label>
              <input 
                id="nombre"
                type="text"
                placeholder="Nombre del curso"
                value={nombre}
                onChange={onchangeNombre}
                className="w-full border border-gray-500 rounded-lg text-center p-1 text-lg bg-white text-black font-semibold mb-5"
              />
              <label className="font-semibold text-xl" htmlFor="descripcion">Descripción</label>
              <input 
                id="descripcion"
                type="text"
                placeholder="Descripción del curso"
                value={descripcion}
                onChange={onchangeDescripcion}
                className="w-full border border-gray-500 rounded-lg text-center p-1 text-lg bg-white text-black font-semibold mb-3"

                />
                <label className="font-semibold text-xl" htmlFor="creditos">Creditos</label>
                <input 
                  id="creditos"
                  type="number"
                  min="1"
                  placeholder="Creditos del curso"
                  value={creditos}
                  onChange={onchangeCreditos}
                  className="w-full border border-gray-500 rounded-lg text-center p-1 text-lg bg-white text-black font-semibold mb-3"
                  />
                  <label className="font-semibold text-xl" htmlFor="codigo">Codigo</label>
                  <input 
                    id="codigo"
                    type="text"
                    placeholder="Codigo del curso"
                    value={codigo}
                    onChange={onchangeCodigo}
                    className="w-full border border-gray-500 rounded-lg text-center p-1 text-lg bg-white text-black font-semibold mb-3"
                    />
                    <div className="flex items-center justify-around gap-5">

                    <button type="submit" className="mt-4 mb-5 w-2xs bg-sky-500 text-white font-semibold py-2 px-4 rounded-md shadow-[0_0_10px_#0ea5e9] hover:scale-105 hover:bg-sky-400  transition-transform duration-300 cursor-pointer">Guardar</button>
                    <ButtonVolver text={'Volver'} />
                    </div>
            </form>
        </article>

    </section>
  );
}

export { FormAgregarCurso };