import React from 'react';
import CommentReplyFooter from './CommentReplyFooter';
import CommentReplyHeader from './CommentReplyHeader';

const CommentReply = ({ comment }) => {
    console.log('YOOOOOOO',  comment);
    
    return (
        <div className='text-white flex p-3 border-b border-gray-600'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            <article className='ml-3 flex-1 flex flex-col'>
                <CommentReplyHeader
                    name={comment.name}
                    username={comment.username}
                    time={comment.createdAt}
                    idComment={comment._id}
                />
                { comment.comment}
                <CommentReplyFooter />
            </article>
        </div>
    )
};

export default CommentReply;