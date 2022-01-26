import React, { createContext, useReducer, useContext } from 'react';

const PostStateContext = createContext();
const PostDispatchContext = createContext();

let post = null;

const postReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                post: action.payload,
            };
        case 'REMOVE_POST':
            return {
                ...state,
                post: null
            }
        default:
            return state;
    }
};

export const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postReducer, { post })

    return (
        <PostDispatchContext.Provider value={dispatch}>
            <PostStateContext.Provider value={state}>
                { children }
            </PostStateContext.Provider>
        </PostDispatchContext.Provider>
    )
};

export const usePostState = () => useContext(PostStateContext);
export const usePostDispatch = () => useContext(PostDispatchContext);