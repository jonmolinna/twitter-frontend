import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { useAuthState } from '../context/auth';
import { usePostState } from '../context/post';
import axios from '../util/axios';

const CommentReplyFooter = ({ likes, idComment }) => {
    const [liked, setLiked] = useState(false);
    const { user } = useAuthState();
    const { post: idPost } = usePostState();
    const token = localStorage.getItem('token-twitter');

    useEffect(() => {
        if (likes.length > 0 && likes.find(like => like.username === user.username)) {
            setLiked(true)
        } else {
            setLiked(false)
        }
    }, [likes, user]);

    const handleLikePostComment = async () => {
        try {
            let options = {
                method: 'POST',
                headers: {
                    "Content-type" : "application/json; charset=utf-8",
                    "authorization": token? `Bearer ${token}` : null,
                }
            };
            await axios(`/likeCommentPost/${idPost}/${idComment}`, options);
            
        } catch (err) {
            toast.error(err.response.data.message);      
        }

    }

    return (
        <div className='flex justify-between items-center mt-4'>
            <article className='flex items-center'>
                <button 
                    className={`${liked? 'text-pink-600' : 'text-gray-500'}`}
                    onClick={handleLikePostComment}
                >
                    {
                        liked? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        )
                    }
                </button>
                {
                    likes.length > 0 && (
                        <small className={`ml-2 ${liked? 'text-pink-600' : 'text-gray-500'}`}>
                            {likes.length}
                        </small>
                    )
                }
            </article>
            <article className='flex items-center'>
                <button className='text-gray-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                </button>
            </article>
        </div>

    )
};

export default CommentReplyFooter;