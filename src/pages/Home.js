import React from 'react';
import Comment from '../components/Comment';
import Follow from '../components/Follow';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';

import { usePostState } from '../context/post';

const Home = () => {
    const { post } = usePostState();

    return (
        <div className='bg-black h-screen flex flex-col-reverse sm:flex-row mx-auto lg:container'>
            <article className='p-3 border-t border-gray-600 sm:border-t-0 sm:border-r'>
                <Sidebar />
            </article>
            <article className='flex-1 overflow-y-scroll no-scrollbar' >
                {
                    post? <Comment /> : <Post />  
                }
            </article>
            <article className='hidden md:flex md:border-l md:border-gray-600 p-3'>
                <Follow />
            </article>
        </div>
    )
};

export default Home;