import React, { useState } from 'react';

// component imports
import Modals from '../Modals';

// bootstrap imports
import Button from 'react-bootstrap/Button';

// image import
import placeholderImg from '../../images/about-us-hiking-img.png'

function SearchResults(props) {

    // useState variables for modals
    const [modalShow, setModalShow] = React.useState(false);

    return (
        // placeholder cards that will be filled with data from the backend

        <div className="container">
            <div className="row d-flex justify-content-between mt-3">
                <div>
                    <h2 className="text-center m-3">Placeholder Title</h2>
                </div>
                <div className="card col-3 m-5">
                    <img src={placeholderImg} className="card-img-top mt-3 rounded" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Placeholder Title</h5>
                        <p className="card-text text-center">Description -- only allow card to show first 50 characters of description</p>
                    </div>
                    <ul className="list-group list-group-flush text-center">
                        <li className="list-group-item">Category</li>
                        <li className="list-group-item">Address/Location Name</li>
                    </ul>
                    {/* Add Comment */}
                    <div className="mt-4">
                        <label for="validationTextarea" className="form-label">Comments</label>
                        <textarea className="form-control" id="add-comment" placeholder="Add A Comment" name="add-comment" type="text" rows="3" style={{ height: "100%" }}></textarea>
                    </div>
                    <div className="card-body text-center">
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            View all comments
                        </Button>

                        <Modals
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        ></Modals>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;