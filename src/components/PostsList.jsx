import React from 'react'
import { useContext } from 'react';
import PostContext from '../contexts/PostsContext';
import PostCard from './PostCard';


const PostsList = () => {

    let { posts } = useContext(PostContext);

    return (
        <>
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
