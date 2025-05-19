import React from 'react'
import { useContext } from 'react';
import CountContext from '../contexts/CountContext';


const PostsList = () => {

    let { posts } = useContext(CountContext);

    return (
        <>
            {posts.map((post) => (
                <div key={post.id}
                    className='col-12 my-4'>
                    <div className="card flex-fill my-3">
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.content}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{post.category} </li>
                        </ul>
                    </div>
                </div>
            ))}



        </>
    )
}

export default PostsList
