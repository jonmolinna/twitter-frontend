import React from 'react';

const PostBodyHeader = () => {
    return (
        <aside className='flex justify-between'>
            <div className='flex'>
                <h2 
                    className='text-sm'
                    style={{ maxWidth: '15ch', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}
                >
                    Kendra Contreras
                </h2>
                <p
                    className='text-sm text-gray-500 mx-2'
                    style={{ maxWidth: '15ch', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}
                >
                    @contreras123
                </p>
                <time className='text-sm text-gray-500'>1h</time>
            </div>
            <button className='text-gray-500'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
            </button>
        </aside>
    );
};

export default PostBodyHeader;
