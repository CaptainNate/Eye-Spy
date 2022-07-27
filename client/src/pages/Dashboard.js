import React, { useState } from "react";

// component imports
import Modals from "../components/Modals";
import SearchBar from "../components/SearchBar";

// bootstrap imports
import Button from "react-bootstrap/Button";

// image import
import placeholderImg from "../images/about-us-hiking-img.png";

function Dashboard(props) {
  // useState variables for modals
  const [modalShow, setModalShow] = React.useState(false);

  return (
    // placeholder cards that will be filled with data from the backend

    <div className="container">
      <div className="d-flex row justify-content-between text-center m-5">
        <div className="col-6">
          <div className="text-center m-5">
            <h2 className="mb-4 pb-4 border-bottom border-dark">
              Welcome, User's Name
            </h2>
            <p>
              Here you'll find the favorited locations you saved and find more
              new adventures!
            </p>
          </div>
        </div>
        {/* SEARCH NEW PLACES */}
        <div className="col-6">
          <div className="text-center m-5">
            <h2 className="mb-4 pb-4 border-bottom border-dark">
              Your next adventure is waiting!
            </h2>
            <h4 className="">
              Please select the activity you're interested in
            </h4>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="m-2">
              <SearchBar />
            </div>
            <div className="text-center">
              <button type="submit" className="all-btns p-2 rounded">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* USERS FAVORITE PLACES */}
      <div className="row d-flex justify-content-between mt-3">
        <div>
          <h2 className="text-center m-3 border-bottom border-dark p-3">
            User Name's Favorite Places
          </h2>
        </div>
        {/* Card Layout */}
        <div className="card col-3 m-5">
          <img
            src={placeholderImg}
            className="card-img-top mt-3 rounded"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-center">Placeholder Title</h5>
            <p className="card-text text-center">
              Description -- only allow card to show first 50 characters of
              description
            </p>
          </div>
          <ul className="list-group list-group-flush text-center">
            <li className="list-group-item">Category</li>
            <li className="list-group-item">Address/Location Name</li>
          </ul>
          {/* Add Comment */}
          <div className="mt-4">
            <label for="validationTextarea" className="form-label">
              Comments
            </label>
            <textarea
              className="form-control"
              id="add-comment"
              placeholder="Add A Comment"
              name="add-comment"
              type="text"
              rows="3"
              style={{ height: "100%" }}
            ></textarea>
          </div>
          <div className="card-body text-center">
            {/* Open Modal */}
  
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Show all comments
            </Button>

            <Modals
              show={modalShow}
              onHide={() => setModalShow(false)}
            ></Modals>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
