import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

import axios from '../util/axios';
import { usePostState } from '../context/post';
import { useAuthState } from '../context/auth';
import { chatAt } from '../util/chatAt';

const CommentInput = () => {
    const [comment, setComment] = useState('');
    const { post: postId } = usePostState();
    const token = localStorage.getItem('token-twitter');
    const { user } = useAuthState();

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
            <article>
                <span className='flex items-center justify-center h-10 w-10 bg-gray-700 rounded-full text-xl'>
                    { chatAt(user.name) }
                </span>
            </article>
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
