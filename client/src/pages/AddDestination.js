import React from 'react';
import SearchBar from '../components/SearchBar';

function AddDestination() {

    // add a conditional statement so that all items in add-destination can be saved on click
    // create a formhandler?

    return (
        <div className="container d-flex justify-content-center">
            <div className="col-6">
                <div>
                    <h2 className="text-center my-4 pb-4 border-bottom border-dark">Add Destination</h2>
                </div>
                <form>
                    <div>
                        <label className="form-label">Title</label>
                        <input id="destination-title" className="form-control" placeholder="Title" name="title" type="text"></input>
                    </div>
                    <div>
                        <label className="form-label">Address</label>
                        <input id="destination-address" className="form-control" placeholder="Address" name="address" type="text"></input>
                    </div>
                    <div>
                        <h3 className="text-center my-4 pb-4 border-bottom border-dark">Please Select A Category</h3>
                        <SearchBar />
                    </div>
                    <div className="mt-4">
                        <label for="validationTextarea" className="form-label">Description</label>
                        <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Please enter a brief description" name="description" type="text" rows="10" style={{height:"100%"}} required></textarea>
                    </div>

                    {/* upload image content from Fernando to go in this div */}
                    <div>

                    </div>

                    <div className="text-center mt-4">
                        <button className="all-btns p-2 rounded" type="submit">Add Destination</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddDestination;