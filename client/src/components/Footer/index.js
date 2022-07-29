import React from 'react';
// import { Link } from 'react-router-dom';

// component import
import MeetUs from '../MeetUs';

// bootstrap imports
import Button from "react-bootstrap/Button"

function Footer() {

    // useState variables for modals
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <footer className="p-3 text-center">
            <div>
                <div>
                    <Button className="all-btns m-2 p-2 rounded text-center col-4" onClick={() => setModalShow(true)}>
                        Meet The Developers
                    </Button>
                    <MeetUs
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    ></MeetUs>
                </div>

                <div>
                    &copy; Eye Spy 2022
                </div>
            </div>
        </footer>
    )
}

export default Footer;

