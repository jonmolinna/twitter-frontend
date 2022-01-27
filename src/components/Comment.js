import React, { useState, useEffect } from 'react';
import PostBodyHeader from './PostBodyHeader';
import PostBodyContent from './PostBodyContent';
import PostBodyFooter from './PostBodyFooter';
import CommentInput from './CommentInput';

import axios from '../util/axios';
import { usePostState } from '../context/post';
import CommentReply from './CommentReply';

const Comment = () => {
    const [post, setPost] = useState(null);
    const { post: postId } = usePostState();
    const token = localStorage.getItem('token-twitter');

    useEffect(() => {
        const getOnePost = async () => {
            try {
                let options = {
                    method: 'GET',
                    headers: {
                        "Content-type" : "application/json; charset=utf-8",
                        "authorization": token? `Bearer ${token}` : null,
                    },
                };

                if (postId) {
                    const res = await axios(`/getOnePost/${postId}`, options);
                    setPost(res.data.post);
                }

            } catch (err) {
                console.log(err.response);
            }
        };

        getOnePost();
    }, [postId, token]);

    return (
        <div className='text-white'>
            <aside>
                Comment Header
            </aside>
            {
                post && (
                    <aside className='p-3 border-b border-gray-600 flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        <div className='ml-3 flex-1'>
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
                        </div>
                    </aside>
                )
            }
            <aside className='p-3 border-b border-gray-600'>
                <CommentInput />
            </aside>
            <aside>
            {
                post && post?.comments.map(comment => (
                    <CommentReply
                        key={comment._id}
                        comment={comment}
                    />
                ))
            }
            </aside>
            <aside>
            </aside>
        </div>
    )
};

export default Comment;