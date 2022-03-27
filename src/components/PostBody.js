import React from 'react';
import PostBodyContent from './PostBodyContent';
import PostBodyFooter from './PostBodyFooter';
import PostBodyHeader from './PostBodyHeader';

import { chatAt } from '../util/chatAt';

const PostBody = ({ post }) => {

    return (
        <div className='text-white flex border-b border-gray-600 p-3'>
            <article>
                <span className='flex items-center justify-center h-10 w-10 bg-gray-700 rounded-full text-xl'>
                    {
                        chatAt(post.user.name)
                    }
                </span>
            </article>
            <article className='ml-3 flex-1'>
                <PostBodyHeader
                    user={post.user}
                    time={post.createdAt}
                    idPost={post._id} 
                />
                <PostBodyContent
                    comment={post.message}
                    imagen={post.imagen}
                />
                <PostBodyFooter
                    likes={post.likes}
                    comments={post.comments}
                    idPost={post._id}
                />
            </article>
        </div>
    )
};

export default PostBody;