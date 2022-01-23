import React from 'react';
import SidebarRow from './SidebarRow';

const Sidebar = () => {
    return (
        <div>
            <aside className='text-white hidden sm:block sm:mb-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
            </aside>
            <SidebarRow />
            <aside className='text-white hidden sm:block sm:mt-5 md:flex md:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <article className='hidden md:flex md:flex-col md:ml-2'>
                    <h3
                        className='text-sm'
                        style={{ maxWidth: '15ch', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}
                    >
                        Kendra Contreras
                    </h3>
                    <p
                        className='text-xs text-gray-500'
                        style={{ maxWidth: '15ch', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}
                    >
                        @contreras123
                    </p>
                </article>
            </aside>
        </div>
    )
};




export default Sidebar;