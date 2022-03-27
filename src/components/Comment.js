import React, { useState, useEffect } from 'react';
import PostBodyHeader from './PostBodyHeader';
import PostBodyContent from './PostBodyContent';
import PostBodyFooter from './PostBodyFooter';
import CommentInput from './CommentInput';
import Pusher from 'pusher-js';
import CommentReply from './CommentReply';

import axios from '../util/axios';
import { usePostState, usePostDispatch } from '../context/post';
import { chatAt } from '../util/chatAt';

const pusher = new Pusher('cabae68a0ba3d486f9b5', {
    cluster: 'us2'
});

const Comment = () => {
    const [post, setPost] = useState(null);
    const { post: postId } = usePostState();
    const dispatch = usePostDispatch();
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

        pusher.unsubscribe('post');

        getOnePost();

        const channelUpdate = pusher.subscribe('updatePost');
        channelUpdate.bind('newUpdatePost', function(data){
            getOnePost();
        });


    }, [postId, token]);

    const removePostID = () => {
        dispatch({
            type: 'REMOVE_POST'
        })
    };

    return (
        <div className='text-white'>
            <aside className='sticky top-0 p-3 bg-black/80 flex'>
                <button 
                    className='text-white'
                    onClick={removePostID}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                </button>
                <h2 className='ml-3'>Thread</h2>
            </aside>
            {
                post && (
                    <aside className='p-3 border-b border-gray-600 flex'>
                        <div>
                            <span className='flex items-center justify-center bg-gray-700 h-10 w-10 rounded-full text-xl'>
                                { chatAt(post.user.name) }
                            </span>
                        </div>
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

        </div>
                    
    )
};

export default Comment;