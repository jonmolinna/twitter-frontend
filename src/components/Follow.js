import React, { useState, useEffect } from 'react';
import FollowUser from './FollowUser';

import axios from '../util/axios';

const Follow = () => {
    const [follow, setFollow] = useState(null);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token-twitter');

    useEffect(() => {
        const getThreeUser = async () => {
            setLoading(true);

            try {
                let options = {
                    method: 'GET',
                    headers: {
                        "Content-type" : "application/json; charset=utf-8",
                        "authorization": token? `Bearer ${token}` : null,
                    }
                };

                const res = await axios('/getThreeUser', options);
                setFollow(res.data.user);
                
            } catch (err) {
                console.log(err.response);
            } finally {
                setLoading(false);
            }
        }

        getThreeUser();

    }, [token]);

    return (
        <div>
            <div className='bg-gray-800 py-2 px-4 borde rounded-3xl'>
                <h2 className='text-white font-semibold'>Who to follow</h2>
                <div className='mt-2'>
                    {
                        loading? (
                            <div className='text-center mt-2'>
                                <p className='text-white'>Cargando ...</p>
                            </div>
                        ) : (
                            follow && follow.map(user => (
                                <FollowUser key={user._id} user={user} />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default Follow;