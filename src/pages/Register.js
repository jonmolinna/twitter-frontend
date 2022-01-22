import React from 'react';

const Register = () => {
    return (
        <div className='h-screen bg-black flex flex-col items-center'>
            <div className='mt-7 w-80 p-4 bg-black'>
                <h2 className='text-white mb-3'>Únete a Twitter Clone</h2>
                <form className='flex flex-col '>
                    <input
                        className='mb-3 py-3 px-3 outline-none border rounded-md border-white bg-black text-white'
                        type="text" 
                        placeholder='Nombres'
                    />
                    <input
                        className='mb-3 py-3 px-3 outline-none border rounded-md border-white bg-black text-white'
                        type="text" 
                        placeholder='Username'
                    />
                    <input
                        className='mb-3 py-3 px-3 outline-none border rounded-md border-white bg-black text-white'
                        type="password"
                        placeholder='Contraseña'
                    />
                    <input
                        className='mb-3 py-3 px-3 outline-none border rounded-md border-white bg-black text-white'
                        type="password"
                        placeholder='Confirma contraseña'
                    />
                    <button
                        className='bg-gray-300 p-2 rounded-3xl outline-none text-black'
                        type='submit'
                    >
                        Regístrate
                    </button>
                </form>
                <p className='text-white mt-3'>
                    ¿Ya tienes una cuenta?
                    <a className='text-cyan-500 ml-1' href="index.html">Iniciar sesión</a>
                </p>
            </div>
        </div>
    )
};

export default Register;