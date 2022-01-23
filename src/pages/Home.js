import React from 'react';
import Follow from '../components/Follow';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div className='bg-black h-screen flex flex-col-reverse sm:flex-row lg:container mx-auto'>
            <article className='p-3 border-t border-gray-600 sm:border-t-0 sm:border-r'>
                <Sidebar />
            </article>
            <article className='flex-1 overflow-y-scroll no-scrollbar' >
                <Post />
            </article>
            <article className='hidden md:flex md:border-l md:border-gray-600 p-3'>
                <Follow />
            </article>
        </div>
    )
};

export default Home;