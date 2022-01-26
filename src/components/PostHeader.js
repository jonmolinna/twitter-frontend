import React, { useState } from 'react';

const PostHeader = () => {
    const [comment, setComment] = useState('');
    const [image, setImage] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);

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

    const handleSubmit = () => {
        try {
            
        } catch (err) {
            console.log(err.response);
        }
    };

    return (
        <div className='text-white border-b border-gray-600 p-3 flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
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
                            className='w-6 absolute opacity-0'
                            name='image'
                            onChange={handleFileChange}
                        />
                        <button className='text-cyan-500 mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>
                        <button className='text-cyan-500 mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                        </button>
                        <button className='text-cyan-500 mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <button className='text-cyan-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </div>
                    <button 
                        className='bg-cyan-600 py-1 px-3 rounded-2xl'
                        onClick={handleSubmit}
                    >
                        Tweet
                    </button>
                </aside>
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