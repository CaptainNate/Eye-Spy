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
            <div className="col-sm-12 col-lg-4 text-center align-items-center">
              <h4 id="modal-body-title">Leandro</h4>
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQGR1d3ixluliA/profile-displayphoto-shrink_400_400/0/1517504610340?e=1665619200&v=beta&t=Bq7sbXr_LOy431rDsJGiGyENv4txHGMMtzTkT3QKffA"
                style={{ borderRadius: "50%", width: "120px", height: "120px", objectFit: "cover" }}
                alt="Leandro"
              />
              <p>Role: Backend</p>
            </div>
            <div className="col-sm-12 col-lg-4 text-center align-items-center">
              <h4 id="modal-body-title">Fernando</h4>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQHLHXh2v1KbLQ/profile-displayphoto-shrink_400_400/0/1516544379380?e=1665619200&v=beta&t=0JNaEOlP8cYXsuIh1j09Ma010noPTy7IOJNiKqXCXZI"
                style={{ borderRadius: "50%", width: "120px", height: "120px", objectFit: "cover" }}
                alt="Fernando"
              />
              <p>Role: Backend</p>
            </div>
            <div className="col-sm-12 col-lg-4 text-center align-items-center">
              <h4 id="modal-body-title">Luiz</h4>
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQEeqDu39XmO2A/profile-displayphoto-shrink_800_800/0/1595971884894?e=1665619200&v=beta&t=qcyzvPqfiOmo_HEzvI00nwsodWWi10sdwrhVy21dkfY"
                style={{ borderRadius: "50%", width: "120px", height: "120px", objectFit: "cover" }}
                alt="Luiz"
              />
              <p>Role: Backend</p>
            </div>
            <div className="col-sm-12 col-lg-4 text-center align-items-center">
              <h4 id="modal-body-title">Maggie</h4>
              <img
                src="https://avatars.githubusercontent.com/u/98727672?v=4"
                style={{ borderRadius: "50%", width: "120px", height: "120px", objectFit: "cover" }}
                alt="Maggie"
              />
              <p>Role: Frontend</p>
            </div>
            <div className="col-sm-12 col-lg-4 text-center align-items-center">
              <h4 id="modal-body-title">Nate</h4>
              <img src={nate} style={{ borderRadius: "50%", width: "120px", height: "120px", objectFit: "cover" }} alt="Nate" />
              <p>Role: Frontend</p>
            </div>
            <div className="col-sm-12 col-lg-4 text-center align-items-center">
              <h4 id="modal-body-title">Eric</h4>
              <img
                src="https://raw.githubusercontent.com/frodrickfronkenstein/portfolio/main/assets/images/profile-pic.jpeg"
                style={{ borderRadius: "50%", width: "120px", height: "120px", objectFit: "cover" }}
                alt="Eric"
              />
              <p>Role: PWA Optimization</p>
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
