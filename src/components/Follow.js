import React from 'react';
import FollowUser from './FollowUser';

const Follow = () => {
    return (
        <div>
            <div className='bg-gray-800 py-2 px-4 borde rounded-3xl'>
                <h2 className='text-white font-semibold'>Who to follow</h2>
                <div className='mt-2'>
                    <FollowUser />
                    <FollowUser />
                    <FollowUser />
                </div>
            </div>
        </div>
    )
};

export default Follow;