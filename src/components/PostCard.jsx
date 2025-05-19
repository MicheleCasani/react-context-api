import React from 'react'


function PostCard({ post }) {
    return (
        <>
            <div className="card flex-fill my-3">
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{post.category} </li>
                </ul>
            </div>
        </>
    )
}

export default PostCard
