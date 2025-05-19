import React from 'react'
import PostsList from './PostsList'

const PostsPage = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 justify-content-center text-center my-5">
                        <h1>Postpage</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 justify-content-center text-center">
                        <PostsList />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostsPage
