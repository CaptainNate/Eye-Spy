import React, { useState } from 'react';

// component imports
import FailModal from '../FailModal';

// bootstrap imports
// import Button from 'react-bootstrap/Button';

// image import
// import placeholderImg from '../../images/about-us-hiking-img.png'

function SearchResults({ posts }) {

    // useState variables for modals
    // const [modalShow, setModalShow] = React.useState(false);

    if (!posts.length) {
        return <FailModal />
    }

    return (
        // placeholder cards that will be filled with data from the backend
        <div className="container p-5 mb-5">
            <div className="">
                <h1 className="mb-5 pb-3 border-bottom border-dark header-font text-center">Your Searched Activity</h1>
            </div>

            {posts &&
                posts.map(post => (
                    <div key={post._id}>
                        <div className="card col-4 p-3 shadow-lg floating-box-bg">
                            <img src={post.img} className="card-img-top rounded" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">{post.post_title}</h5>
                                <p className="card-text text-center">{post.post_text}</p>
                            </div>
                            <ul className="list-group list-group-flush text-center">
                                <li className="list-group-item floating-box-bg">{post.category}</li>
                                <li className="list-group-item floating-box-bg">{post.location}</li>
                            </ul>
                        </div>
                        < br />
                        <div />
                    </div>
                ))}

        </div>
    )
}

export default SearchResults;