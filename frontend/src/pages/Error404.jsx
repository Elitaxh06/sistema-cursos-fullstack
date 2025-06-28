import React from 'react';
import { ButtonVolver } from '../components/ButtonVolver';
function Error404() {
  return (
    <div className='flex flex-col items-center justify-center gap-12 mt-4'>
      <h1 className='text-center text-2xl font-bold'>Error 404</h1>
      <ButtonVolver text='Volver al Inicio' />
    </div>
  );
}

export { Error404 };