import React from 'react';

const login = () => {
  return (
    <div className='h-screen bg-black flex flex-col items-center'>
        <div className='mt-12 w-80 p-4 bg-black'>
            <h2 className='text-white mb-3'>Inicia sesión en Twitter Clone</h2>
            <form className='flex flex-col '>
                <input
                    className='mb-5 py-5 px-3 outline-none border rounded-md border-white bg-black text-white'
                    type="text" 
                    placeholder='Username'
                />
                <input
                    className='mb-5 py-5 px-3 outline-none border rounded-md border-white bg-black text-white'
                    type="password"
                    placeholder='Contraseña'
                />
                <button
                    className='bg-gray-300 p-4 rounded-3xl outline-none text-black'
                    type='submit'
                >
                    Iniciar sesión
                </button>
            </form>
            <p className='text-white mt-3'>
                ¿No tienes una cuenta?
                <a className='text-cyan-500 ml-1' href="index.html">Regístrate</a>
            </p>
        </div>
    </div>
  );
};

export default login;