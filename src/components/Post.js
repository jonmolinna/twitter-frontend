import React, { useState, useEffect } from 'react';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import Pusher from 'pusher-js';

import axios from '../util/axios';

const pusher = new Pusher('cabae68a0ba3d486f9b5', {
    cluster: 'us2'
});

const Post = () => {
    const [post, setPost] = useState([]);
    const token = localStorage.getItem('token-twitter');

    useEffect(() => {
        const getPostAll = async () => {

            try {
                let options = {
                    method: 'GET',
                    headers: {
                        "Content-type" : "application/json; charset=utf-8",
                        "authorization": token? `Bearer ${token}` : null,
                    }
                };

                const res = await axios('/getAllPosts', options);
                setPost(res.data.posts)
            } catch (err) {
                console.log(err.response);
            }
        }

        pusher.unsubscribe('post');

        getPostAll();

        const channel = pusher.subscribe('post');
        channel.bind('newPost', function(data){
            getPostAll();
        });

        const channelDelete = pusher.subscribe('deletePost');
        channelDelete.bind('newDeletePost', function(data){
            getPostAll()
        });

        const channelUpdate = pusher.subscribe('updatePost');
        channelUpdate.bind('newUpdatePost', function(data){
            getPostAll();
        });

    }, [token]);

    useEffect(() => {

    }, []);

    return (
        <div>
            <aside className='text-white flex justify-between p-3 sticky top-0 bg-black/80'>
                <h2 className='font-semibold'>Home</h2>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            </aside>
            <aside>
                <PostHeader />
                <article>
                    {
                        post && post.map(post => (
                            <PostBody key={post._id} post={post}/>
                        ))
                    }
                </article>
            </aside>
        </div>
    )
};

export default Post;