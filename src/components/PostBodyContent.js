import React from 'react';

const PostBodyContent = ({ comment, imagen}) => {

    return (
        <div className='text-sm'>
            {
                comment && comment
            }
            {
               imagen.url && (
                    <img 
                        src={imagen.url}
                        alt="img__post"
                        className='mt-3 border border-gray-700 rounded-2xl' 
                    />
               )
            }
            
        </div>
    );
};

export default PostBodyContent;
