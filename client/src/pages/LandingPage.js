import React from 'react';

// image import
import landingPageImg from '../images/landing-page-img.png';

function LandingPage() {

    return (
        <div className="container pb-5">
            <div className="d-flex pt-5 pb-5 align-items-center border-bottom border-dark">
                <div className="pe-5">
                    <img src={landingPageImg} alt="lake landscape" height={500} width={320} />
                </div>

                {/* webpage "introduction" */}
                <div className="">
                    <h1 className="header-font">Welcome to Eye Spy...</h1>
                    <br />
                    <p className="">
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
            <div className="py-5 my-5 text-center landingPage-secondaryBg shadow-lg rounded d-flex justify-content-center flex-wrap">
                <h3 className="pb-3 col-6 subHeader-font border-bottom border-dark">Sign Up Today!</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                </p>
                <button type="submit" className="all-btns p-2 rounded">submit</button>
            </div>
            < br/>
            < br/>
        </div>
    )
}

export default LandingPage;