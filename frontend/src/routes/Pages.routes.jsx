import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Error404 } from "../pages/Error404"
import { AgregarCurso } from "../pages/AgregarCurso/AgregarCurso";
import { EditarCurso } from "../pages/EditarCurso/EditarCurso";
function RoutesPages() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agregar" element={<AgregarCurso />} />
            <Route path="/editarCurso" element={<EditarCurso /> } />


          
            <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export { RoutesPages };