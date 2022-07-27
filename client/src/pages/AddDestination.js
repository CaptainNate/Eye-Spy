import React from 'react';
import SearchBar from '../components/SearchBar';

function AddDestination() {

    // add a conditional statement so that all items in add-destination can be saved on click
    // create a formhandler?

    // Image Preview
    const loadFile = function (event) {
        const reader = new FileReader();
        reader.onload = function () {
            const output = document.getElementById('output');
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <div>
            <div className="container">
                <div className="">
                    <div>
                        <h2 className="text-center my-4 pb-4 border-bottom border-dark">Add Destination</h2>
                    </div>
                    <form>
                        <div className="d-flex">
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <label className="form-label">Title</label>
                                        <input id="destination-title" className="form-control" placeholder="Title" name="title" type="text"></input>
                                    </div>
                                    <div>
                                        <label className="form-label">Address</label>
                                        <input id="destination-address" className="form-control" placeholder="Address" name="address" type="text"></input>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-4">
                                        <label htmlFor="validationTextarea" className="form-label">Description</label>
                                        <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Please enter a brief description" name="description" type="text" rows="5" style={{ height: "100%" }} required></textarea>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <h3 className="text-center my-4 pb-4 border-bottom border-dark">Please Select A Category</h3>
                                        <SearchBar />
                                    </div>
                                </div>
                                {/* upload image */}
                                <div className="col-6 text-center">
                                    <h3 className="text-center my-4 pb-4 border-bottom border-dark">Upload A Photo</h3>
                                    <div className="text-center">
                                        <label htmlFor="file" className="File"></label>
                                        <input className="text-center" type="file" id="img-file" name="file" accept="image/*" required onChange={loadFile} />
                                        <div className="col-12">
                                            {/* warning bc react wants an alt in the img element (alt is not necessary) */}
                                            <img id="output" className="m-3 " style={{ height: "250px" }} />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 text-center mt-4">
                                    <button className="addDest-btn p-2 rounded" type="submit">Add Destination</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            < br />
            < br />
            < br />
            </div>
            < br />
            < br />
        </div>
    )
}

export default AddDestination;