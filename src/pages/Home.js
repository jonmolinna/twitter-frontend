import React from 'react';
import Comment from '../components/Comment';
import Follow from '../components/Follow';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';

import { usePostState } from '../context/post';

const Home = () => {
    const { post } = usePostState();

    return (
        <div className='bg-black h-screen container mx-auto grid grid-cols-12'>
            <article className='col-span-12 row-start-2 sm:row-start-1 sm:col-span-2 md:col-span-2 lg:col-span-3 border-t border-gray-600 sm:border-t-0 sm:border-r p-3'>
                <Sidebar />
            </article>
            <article className='col-span-12 sm:col-span-10 md:col-span-6 lg:col-span-5  flex-1 overflow-y-scroll no-scrollbar max-w-screen-sm sm:border-r sm:border-gray-600' >
                {
                    post? <Comment /> : <Post />  
                }
            </article>
            <article className='hidden md:col-span-4  md:flex p-3'>
                <Follow />
            </article>
        </div>
    )
};

export default Home;