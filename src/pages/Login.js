import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from '../util/axios';
import { useAuthDispatch } from '../context/auth';

const initialForm = {
    username: "",
    password: "",
};

const Login = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    let history = useHistory();
    const dispatch = useAuthDispatch();

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
                method: 'POST',
                headers: {
                    "Content-type" : "application/json; charset=utf-8",
                },
                data: JSON.stringify({
                    username: form.username,
                    password: form.password,
                })
            };

            const res = await axios('/auth', options);
            dispatch({
                type: 'LOGIN',
                payload: res.data
            });

            setForm(initialForm);
            history.push("/");

        } catch (err) {
            // console.log(err.response);
            setErrors(err.response.data.error)
        } finally {
            setLoading(false)
        }
    };

  return (
    <div className='h-screen bg-black flex flex-col items-center'>
        <div className='mt-12 w-80 p-4 bg-black'>
            <h2 className='text-white mb-3'>Inicia sesión en Twitter Clone</h2>
            <form className='flex flex-col' autoComplete='off' onSubmit={handleSubmit}>
                <input
                    className='mb-5 p-3 outline-none border rounded-md border-white bg-black text-white'
                    type="text" 
                    placeholder='Username'
                    name='username'
                    value={form.username}
                    onChange={handleChange}
                />
                <input
                    className='mb-5 p-3 outline-none border rounded-md border-white bg-black text-white'
                    type="password"
                    placeholder='Contraseña'
                    name='password'
                    value={form.password}
                    onChange={handleChange}
                />
                <button
                    className='bg-gray-300 p-2 rounded-3xl outline-none text-black disabled:bg-gray-500'
                    type='submit'
                    disabled={!(form.username && form.password)? true : false}
                >
                    Iniciar sesión
                </button>
            </form>
            <p className='text-white mt-3'>
                ¿No tienes una cuenta?
                <Link className='text-cyan-500 ml-1' to="/register">Regístrate</Link>
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
  );
};

export default Login;