import React from 'react'

const posts = [
    { id: 1, title: 'React Basis', content: 'React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.', category: 'FrontEnd' },
    { id: 2, title: 'What is Express.js?', content: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.', category: 'Backend' },
    { id: 3, title: 'Run JavaScript Everywhere', content: 'Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.', category: 'Backend' },
    { id: 4, title: 'Build fast, responsive sites with Bootstrap', content: 'Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.', category: 'Frontend' },
];

const PostsList = () => {
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
