import React from 'react';

// image import
import landingPageImg from '../../images/landing-page-img.png';

function LandingPage() {

    return (
        <div className="container pb-5">
            <div className="d-flex pt-5 pb-5 align-items-center">
                <div className="pe-5">
                    <img src={landingPageImg} alt="lake landscape" height={500} width={320} />
                </div>

                {/* webpage "introduction" */}
                <div className="">
                    <h2 className="">Welcome to Eye Spy...</h2>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                        < br/>
                        < br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                    </p>
                </div>
            </div>

            {/* STILL NEED TO ADD IN RANDOM DESTINATIONS (WORK WITH BACKEND TEAM ON THIS) */}

            {/* Sign Up Section */}
            <div className="py-5 mb-5 text-center border-top border-dark">
                <h3 className="pb-4">Sign Up Today!</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                </p>
                <button type="submit" className="all-btns p-2 rounded">submit</button>
            </div>
        </div>
    )
}

export default LandingPage;