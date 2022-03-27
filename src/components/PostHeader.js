import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

import axios from '../util/axios';
import { useAuthState } from '../context/auth';
import { chatAt } from '../util/chatAt';

const PostHeader = () => {
    const [comment, setComment] = useState('');
    const [image, setImage] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token-twitter');

    const { user } = useAuthState();

    const handleFileChange = (e) => {
        const [file] = e.target.files;
        let img = e.target.files[0];
        setImage(img);

        // Convertiendo a base 64
        const reader= new FileReader();
        reader.onloadend = () => {
            setSelectedFile(reader.result);
        };

        reader.readAsDataURL(file);
        e.target.value = '';
    };

    const handleSubmitPost = async () => {
        setLoading(true);

        try {
            let formData = new FormData();
            formData.append('image', image);
            formData.append('message', comment);

            let options = {
                headers: {
                    "authorization": token? `Bearer ${token}` : null,
                },
            };

            await axios.post('/addPost', formData, options);
            setComment('');
            setSelectedFile(null);
            setImage('');
        } catch (err) {
            // console.log(err.response);
            toast.error(err.response.data.message);
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className='text-white border-b border-gray-600 p-3 flex'>
            <article>
                <span className='flex items-center justify-center h-10 w-10 bg-gray-700 rounded-full text-xl font-bold'>
                    { chatAt(user.name) }
                </span>
            </article>
            <article className='flex-1 ml-4'>
                <textarea
                    rows="3"
                    placeholder="What's happening?"
                    className='w-full bg-black text-white border-none outline-none resize-none'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                > 
                </textarea>
                <aside className='flex justify-between items-center mt-2'>
                    <div className='flex items-center'>
                        <input
                            type="file"
                            className='hidden'
                            name='image'
                            onChange={handleFileChange}
                            id='image-post'
                        />
                        <label className='text-cyan-500 mr-2' htmlFor='image-post'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </label>
                        <label className='text-cyan-500 mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                        </label>
                        <label className='text-cyan-500 mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </label>
                        <label className='text-cyan-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </label>
                    </div>
                    <button 
                        className='bg-cyan-600 py-1 px-3 rounded-2xl disabled:bg-cyan-800 disabled:text-gray-500'
                        onClick={handleSubmitPost}
                        disabled={image || comment.length > 3? false : true}
                    >
                        Tweet
                    </button>
                </aside>
                {
                    loading && (
                        <div className='text-center mt-3'>
                            <p>Cargando ...</p>
                        </div>
                    )
                }
                {
                    selectedFile && (
                        <img
                            src={selectedFile} 
                            alt="loaderimg"
                            className='border border-black rounded-xl mt-2 '
                        />
                    )
                }
            </article>
        </div>
    )               
};

export default PostHeader;