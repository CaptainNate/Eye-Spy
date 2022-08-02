import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import nate from "../../images/nate.jpg";

function MeetUs(props) {
  return (
    <div>
      {/* Fail Modal */}
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="modal-title-bg border-dark">
          <Modal.Title className="modalTitle" id="modal-title">
            Meet The Developers
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-bg container">
          <div className="row">
            <div className="col-4 m-3 text-center align-items-center">
              <h4 id="modal-body-title">Leandro</h4>
              <img
                src="../../images/placeholder-img.jpg"
                style={{ height: "150px" }}
                alt="leandro"
              />
              <p>Role: Backend</p>
            </div>
            <div className="col-4 m-3 text-center align-items-center">
              <h4 id="modal-body-title">Fernando</h4>
              <img
                src="../../images/placeholder-img.jpg"
                style={{ height: "150px" }}
                alt="Fernando"
              />
              <p>Role: Backend</p>
            </div>
            <div className="col-4 m-3 text-center align-items-center">
              <h4 id="modal-body-title">Luiz</h4>
              <img
                src="../../images/placeholder-img.jpg"
                style={{ height: "150px" }}
                alt="Luiz"
              />
              <p>Role: Backend</p>
            </div>
            <div className="col-4 m-3 text-center align-items-center">
              <h4 id="modal-body-title">Maggie</h4>
              <img
                src="../../images/placeholder-img.jpg"
                style={{ height: "150px" }}
                alt="Maggie"
              />
              <p>Role: Frontend</p>
            </div>
            <div className="col-4 m-3 text-center align-items-center">
              <h4 id="modal-body-title">Nate</h4>
              <img src={nate} style={{ height: "150px" }} alt="Nate" />
              <p>Role: Frontend</p>
            </div>
            <div className="col-4 m-3 text-center align-items-center">
              <h4 id="modal-body-title">Eric</h4>
              <img
                src="../../images/placeholder-img.jpg"
                style={{ height: "150px" }}
                alt="Eric"
              />
              <p>Role: PWA/Optimization</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-bg border-dark">
          <Button onClick={props.onHide} id="modal-button" className="all-btns">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MeetUs;
