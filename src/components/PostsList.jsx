import React, { useEffect } from 'react'
import { useContext } from 'react';
import PostContext from '../contexts/PostsContext';
import PostCard from './PostCard';
import { useAlert } from '../contexts/AlertContext';
import Alert from './Alert';


const PostsList = () => {

    let { posts } = useContext(PostContext);

    const { setAlert } = useAlert();

    useEffect(() => {
        setAlert({ type: 'success', message: 'daje roma daje' });
    }, []);

    return (
        <>
            <Alert />
            {posts.map((post) => (
                <div key={post.id}
                    className='col-12 my-4'>
                    <PostCard post={post} />
                </div>
            ))}



        </>
    )
}

export default PostsList
