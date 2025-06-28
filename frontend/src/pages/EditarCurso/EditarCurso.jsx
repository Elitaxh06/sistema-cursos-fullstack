import React from "react";
import { MainTitle } from "../../components/Titulo";
import { FormEditarCurso } from "./FormEditarCurso";
import { Subtitulo } from "../../components/Subtitulo";

function EditarCurso() {
  return (
    <>
        <div className="flex flex-col items-center justify-center gap-4 mt-3 mb-5">
            <MainTitle text="Editar Curso" />
            <Subtitulo text="Por favor ingrese los siguientes datos: " />
        </div>
        <FormEditarCurso />
    </>
  );
}

export { EditarCurso };