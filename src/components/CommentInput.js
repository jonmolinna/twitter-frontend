import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

import axios from '../util/axios';
import { usePostState } from '../context/post';

const CommentInput = () => {
    const [comment, setComment] = useState('');
    const { post: postId } = usePostState();
    const token = localStorage.getItem('token-twitter');

    const handleSubmitPostComment = async () => {
        try {
            let options = {
                method: "PUT",
                headers: {
                    "Content-type" : "application/json; charset=utf-8",
                    "authorization": token? `Bearer ${token}` : null,
                },
                data: JSON.stringify({
                    comment: comment
                })
            };

            const res = await axios(`addComment/${postId}`, options);
            console.log(res);
            setComment('');

        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    return (
        <div className='text-white flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            <article className='ml-4 flex flex-col flex-1'>
                <textarea
                    rows="2"
                    placeholder='Tweet your reply'
                    className='w-full text-white border-none outline-none resize-none bg-black'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                >    
                </textarea>
                <aside className='mt-2 flex flex-row-reverse'>
                    <button
                        className='bg-cyan-600 py-1 px-3 rounded-2xl disabled:bg-cyan-800 disabled:text-gray-500'
                        disabled={comment.length > 3 && comment.length < 200 ? false : true}
                        onClick={handleSubmitPostComment}
                    >
                        Reply
                    </button>
                </aside>
            </article>
        </div>
    )
};

export default CommentInput;
