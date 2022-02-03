import React, { useState } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import axios from '../util/axios';

const initialForm = {
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
};

const Register = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-type" : "application/json; charset=utf-8"
                },
                data: JSON.stringify({
                    name: form.name,
                    username: form.username,
                    password: form.password,
                    confirmPassword: form.confirmPassword,
                })
            };

            const res = await axios('/addUser', options);
            toast.success(res.data.message);
            history.push('/login');
            setForm(initialForm);
        } catch (err) {
            setErrors(err.response.data.error);
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className='h-screen bg-black flex flex-col items-center'>
            <div className='mt-4 w-80 p-4 bg-black'>
                <h2 className='text-white mb-3'>Únete a Twitter Clone</h2>
                <form className='flex flex-col ' onSubmit={handleSubmit} autoComplete='off'>
                    <input
                        className='mb-3 p-3 outline-none border rounded-md border-white bg-black text-white'
                        type="text" 
                        placeholder='Nombres'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                    />
                    <input
                        className='mb-3 p-3 outline-none border rounded-md border-white bg-black text-white'
                        type="text" 
                        placeholder='Username'
                        name='username'
                        value={form.username}
                        onChange={handleChange}
                    />
                    <input
                        className='mb-3 p-3 outline-none border rounded-md border-white bg-black text-white'
                        type="password"
                        placeholder='Contraseña'
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                    />
                    <input
                        className='mb-3 p-3 outline-none border rounded-md border-white bg-black text-white'
                        type="password"
                        placeholder='Confirma contraseña'
                        name='confirmPassword'
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />
                    <button
                        className='bg-gray-300 p-2 rounded-3xl outline-none text-black disabled:bg-gray-500'
                        type='submit'
                        disabled={!(form.name && form.username && form.password && form.confirmPassword)? true : false}
                    >
                        Regístrate
                    </button>
                </form>
                <p className='text-white mt-3'>
                    ¿Ya tienes una cuenta?
                    <Link className='text-cyan-500 ml-1' to="/login">Iniciar sesión</Link>
                </p>
                {
                    loading && (
                        <div className='text-center mt-2'>
                            <p className='text-white'>Cargando ...</p>
                        </div>
                    )
                }
                {
                    errors && <ul className=' mt-5'>
                        {
                            Object.values(errors).map((value, index) => (
                                <li
                                    className='text-gray-300'
                                    key={index}
                                >
                                    {value}
                                </li>
                            ))
                        }
                    </ul>
                }
            </div>
        </div>
    )
};

export default Register;