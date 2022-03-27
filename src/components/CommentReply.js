import React from 'react';
import CommentReplyFooter from './CommentReplyFooter';
import CommentReplyHeader from './CommentReplyHeader';

import { chatAt } from '../util/chatAt'

const CommentReply = ({ comment }) => {
    
    return (
        <div className='text-white flex p-3 border-b border-gray-600'>
            <article>
                <span className='flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-xl'>
                    { chatAt(comment.name) }
                </span>
            </article>
            <article className='ml-3 flex-1 flex flex-col'>
                <CommentReplyHeader
                    name={comment.name}
                    username={comment.username}
                    time={comment.createdAt}
                    idComment={comment._id}
                />
                { comment.comment}
                <CommentReplyFooter
                    likes={comment.likes}
                    idComment={comment._id}
                />
            </article>
        </div>
    )
};

export default CommentReply;