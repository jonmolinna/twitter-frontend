import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import { toast } from 'react-hot-toast';

import { Capitalize } from '../util/capitalize';
import { useAuthState } from '../context/auth';
import { usePostDispatch } from '../context/post';
import axios from '../util/axios';

const PostBodyHeader = ({ user, time, idPost }) => {
    const { user: usuario } = useAuthState();
    const postDispatch = usePostDispatch();
    let isUser = usuario?.username === user?.username;
    const token = localStorage.getItem('token-twitter');

    const handleDeletePost = async () => {
        let isDelete = window.confirm('¿Estas seguro de eliminar?');

        // En caso que elimine en Thread
        postDispatch({
            type: 'REMOVE_POST',
        });

        try {
            let options = {
                method: 'DELETE',
                headers: {
                    "Content-type" : "application/json; charset=utf-8",
                    "authorization": token? `Bearer ${token}` : null,
                }
            };

            if(isDelete) {
                const res = await axios(`/deletePost/${idPost}`, options);
                toast.success(res.data.message);
            }
            
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };
    
    return (
        <aside className='flex justify-between'>
            <div className='flex'>
                <h2 
                    className='text-sm'
                    style={{ maxWidth: '15ch', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}
                >
                    {Capitalize(user?.name)}
                </h2>
                <p
                    className='text-sm text-gray-500 mx-2'
                    style={{ maxWidth: '15ch', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}
                >
                    @{user?.username}
                </p>
                <time className='text-sm text-gray-500'>
                    {moment(time).subtract('hour').fromNow(true)}
                </time>
            </div>
            {
                isUser ? (
                    <button className='text-gray-500' onClick={handleDeletePost}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>               
                    </button>

                ) : (
                    <button className='text-gray-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>                
                    </button>
                )
            }
        </aside>
    );
};

export default PostBodyHeader;
