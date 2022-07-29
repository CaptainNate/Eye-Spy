import React, { useState } from "react";
import { useMutation } from "@apollo/client"
import { NEW_POST } from '../utils/mutations'

// component imports
// import AddDestSearchBar from '../components/AddDestSearchBar';
import SuccessModal from '../components/SuccessModal';

// bootstrap imports
import Button from "react-bootstrap/Button";
import Auth from "../utils/Auth";

function AddDestination() {
    // useState variables for modals
    const [modalShow, setModalShow] = React.useState(false);

    // add a conditional statement so that all items in add-destination can be saved on click
    // create a formhandler?
    const [formState, setFormState] = useState({ img: "", post_title: "", category: "", post_text: "", location: "" });
    const [saveDestination, { error }] = useMutation(NEW_POST);

    //   update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
        console.log(formState);
    }

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await saveDestination({
                variable: { ...formState },
            });

            Auth.login(data.login.token);
            console.log("success")
        } catch (e) {
            console.error(e);
        }

        // clear from values
        setFormState({

        });
    }

    // Image Preview
    const loadFile = function (event) {
        const reader = new FileReader();
        reader.onload = function () {
            const output = document.getElementById("output");
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    return (
        <div className="">
            <div className="container p-5 mb-5">
                <div className="row">
                    <div>
                        <h1 className="text-center mb-5 pb-3 border-bottom border-dark header-font">Add Destination</h1>
                    </div>
                    <form onSubmit={handleFormSubmit} className="container d-flex flex-wrap justify-content-center">
                        <div className="">
                            <div className="row justify-content-center">
                                <div className="col-5 p-4 m-2 rounded shadow-lg floating-box-bg">
                                    <div className="pb-2">
                                        <label className="form-label">Title</label>
                                        <input id="destination-title" className="form-control" placeholder="Title" name="title" type="text" onChange={handleChange} value={formState.post_title}></input>
                                    </div>
                                    <div className="">
                                        <label className="form-label">Address</label>
                                        <input id="destination-address" className="form-control" placeholder="Address" name="address" type="text" onChange={handleChange} value={formState.location}></input>
                                    </div>
                                </div>
                                <div className="col-5 p-4 m-2 rounded shadow-lg floating-box-bg">
                                    <div className="">
                                        <label htmlFor="validationTextarea" className="form-label">Description</label>
                                        <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Please enter a brief description" name="description" type="text" rows="5" style={{ height: "100%" }} required onChange={handleChange} value={formState.post_text}></textarea>
                                    </div>
                                </div>
                                <div className="col-5 m-2 rounded shadow-lg floating-box-bg">
                                    <div>
                                        <h4 className="text-center my-4 pb-3 border-bottom border-dark subHeader-font">Please Select A Category</h4>
                                        <div>
                                            <div className="text-center">
                                                <select name="activity" className="category-btn p-2 rounded" placeholder='Select an outdoor activity' style={{ width: "100%" }}>
                                                    <option value="" className="text-center" defaultValue={""}>Select an outdoor activity</option>
                                                    <option value={formState.category} onChange={handleChange} id="search-bar-hiking" className="text-center">Hiking Trails</option>
                                                    <option value={formState.category} onChange={handleChange} id="search-bar-camping" className="text-center">Camping</option>
                                                    <option value={formState.category} onChange={handleChange} id="search-bar-biking" className="text-center">Mountain Biking</option>
                                                    <option value={formState.category} onChange={handleChange} id="search-bar-swimming" className="text-center">Swimming</option>
                                                    <option value={formState.category} onChange={handleChange} id="search-bar-water-sport" className="text-center">Water Sports</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* upload image */}
                                <div className="col-5 m-2 text-center rounded shadow-lg floating-box-bg">
                                    <h4 className="text-center my-4 pb-3 border-bottom border-dark subHeader-font">Upload A Photo</h4>
                                    <div className="text-center">
                                        <label htmlFor="file" className="File"></label>
                                        <input className="text-center" type="file" id="img-file" name="file" accept="image/*" required onChange={loadFile} />
                                        <div className="col-12">
                                            {/* warning bc react wants an alt in the img element (alt is not necessary) */}
                                            <img id="output" className="m-3 " style={{ height: "250px" }} alt="..." value={formState.img} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>

                                {/* Open Modal */}
                                <Button className="all-btns m-2 p-2 rounded text-center col-4" onClick={() => setModalShow(true)}>
                                    Add Destination
                                </Button>
                                <SuccessModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                ></SuccessModal>
                            </div>
                        </div>
                    </form>
                    {/* catch login error */}
                    {error && <div>Something went wrong</div>}
                </div>
            </div>
        </div>
    );
}

export default AddDestination;
