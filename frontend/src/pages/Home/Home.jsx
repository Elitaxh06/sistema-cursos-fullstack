import React, { useEffect, useState } from 'react'
import { getCursos } from '../../services/Cursos.Services'
import ListaCursos from '../../components/ListaCursos'
function Home() {
  return (
    <main>
        <ListaCursos />
    </main>
  ) 
}

export { Home } 
