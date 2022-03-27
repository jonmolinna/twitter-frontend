import React from 'react';

import { Capitalize } from '../util/capitalize';
import { chatAt } from '../util/chatAt';

const FollowUser = ({ user }) => {

    return (
        <div className='text-white flex items-center mb-3'>
            <article className='mr-3 h-10 w-10 bg-gray-600 rounded-full flex items-center justify-center text-xl'>
                { chatAt(user.name) }
            </article>
            <article>
                <h3 
                    className='text-sm'
                    style={{ maxWidth: '15ch', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}
                >
                    {Capitalize(user.name)}
                </h3>
                <p
                    className='text-xs text-gray-300'
                    style={{ maxWidth: '15ch', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}
                >
                    @{ user.username }
                </p>
            </article>
            <button className='bg-gray-200 px-2 py-1 border rounded-2xl text-black text-sm ml-auto'>
                Follow
            </button>
        </div>
    )
};

export default FollowUser;