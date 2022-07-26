import React from 'react';
import Button from 'react-bootstrap/Button';
import   Modal  from 'react-bootstrap/Modal';

function Modals(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="modalTitle" id="modal-title">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 id="modal-body-title">Centered Modal</h4>
                <p id="modal-body">
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} id="modal-button">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Modals;