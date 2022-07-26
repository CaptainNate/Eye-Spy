import React from 'react';

// image import
import placeholderImg from '../../images/about-us-hiking-img.png'

function SearchResults() {
    return (

        // creating placeholder cards that will be filled with data from the backend

        <div className="container">
            <div className="row d-flex justify-content-between mt-3">
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
                    <div className="card-body text-center">
                        <a href="/" className="card-link">External Google Maps Link</a>
                    </div>
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
                    <div className="card-body text-center">
                        <a href="/" className="card-link">External Google Maps Link</a>
                    </div>
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
                    <div className="card-body text-center">
                        <a href="/" className="card-link">External Google Maps Link</a>
                    </div>
                </div>                
           </div>
        </div>
    )
}

export default SearchResults;