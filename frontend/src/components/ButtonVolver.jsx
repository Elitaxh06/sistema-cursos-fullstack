import React from "react";
import { Link } from "react-router-dom";
function ButtonVolver({ text }) {
  return (
    <>
        <Link className="bg-red-600 text-white hover:scale-105 transition-transform duration-300 hover:bg-red-500 cursor-pointer shadow-[0_0_15px_#f87171] w-2xs py-2 px-4 font-semibold flex items-center justify-center rounded-md mt-4 mb-5" to="/">
        
            {text}
        </Link>
    </>
  );
}

export { ButtonVolver };