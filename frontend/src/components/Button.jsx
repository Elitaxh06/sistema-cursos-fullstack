import React from "react";
import { Link } from "react-router-dom";

function ButtonAdd() {
  return (
    <>
        <Link
            className='w-40 h-12 border cursor-pointer text-green-400 text-xl font-semibold drop-shadow-[0_0_5px_#00ff00] bg-[#121a10] hover:scale-110 hover:font-bold transition-transform duration-300 rounded-xl flex items-center justify-center'
            to="/agregar"
        >
            Agregar Curso
        </Link>
    </>
  );
}

export { ButtonAdd };