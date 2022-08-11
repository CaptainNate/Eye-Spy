import React from 'react';
import "../index.css";

import Auth from "../utils/Auth";

// image import
import landingPageImg from '../images/landing-page-img.png';

function LandingPage() {

    return (
        <div className="container pb-5">
            <div className="d-flex pt-5 pb-5 align-items-center border-bottom border-dark">
                <div className="pe-5 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block">
                    <img src={landingPageImg} alt="lake landscape" height={500} width={320} />
                </div>

                {/* webpage "introduction" */}
                <div className="container">
                    <h2 className="header-font">Welcome to Eye Spy!</h2>
                    {/* <br /> */}
                    {/* <br /> */}
                    <p className="fs-4 text subHeader-font"><em>Eye Spy Your Next Favorite Spot! </em>We are Your <em>Next Best Friend</em> for finding a new unique treasure. We'll help you find the next place you want to explore! </p>
                    <div className="container-fluid p-2 card mb-3 scrolling-wrapper landingPage-secondaryBg shadow-lg">
                        <h2 className="font-weight-light header-font pb-2 border-bottom border-dark">Checkout these Reviews</h2>
                        <div className="row d-flex row g-0 landingPage-secondaryBg m-1">
                            {/* Static Reviews */}
                            <div className="col-sm-12 col-md-6 col-xl-3 mt-2">
                                <div className="card card-body h-100 landingPage-tertiaryBg">
                                    <p>Wow! I never thought I would find a site like this. I was able to find so many cool and unique places that were so close to home!</p>
                                    <p> - Scott H.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-xl-3 mt-2">
                                <div className="card card-body h-100 landingPage-tertiaryBg">
                                    <p>At first I thought it was such a weird webpage but it ended up being exactly what I was looking for! I can't even recommend it enough to anyone who likes being outdoors.</p>
                                    <p>-Theodore M.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-xl-3 mt-2">
                                <div className="card card-body h-100 landingPage-tertiaryBg">
                                    <p>I never thought anyone would think of an idea to find these unique gems. I'm always searching for these and a lot of them are just not what I'm looking for. This hits the nail on the head.</p>
                                    <p>-Cleo P.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-xl-3 mt-2">
                                <div className="card card-body h-100 landingPage-tertiaryBg">
                                    <p>What a refreshing site. It matches what I was looking for and the webpage is so pleasant and nice to look at. I love the feature being able to add our own suggestions onto the website too!</p>
                                    <p>-Lilliana L.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* STILL NEED TO ADD IN RANDOM DESTINATIONS (WORK WITH BACKEND TEAM ON THIS) */}

            {Auth.loggedIn() ? (
                <>
                    {/* Alternative text to display when signed-in */}
                </>

            ): (
            <>
            {/* Sign Up Section */}
            <div className="py-5 my-5 text-center landingPage-secondaryBg shadow-lg rounded d-flex justify-content-center flex-wrap">
                <h3 className="pb-3 col-6 subHeader-font border-bottom border-dark">Sign Up Today!</h3>
                <div className="p-3">
                    <p>
                        Ever wanted to be apart of a big picture? A new exciting journey is just one click away! <br></br>Join us today and help us help you make the best unique exploration website you can see!
                        <br></br>
                        Signing up lets you add places to your favorites, submit places to be added to our webpage, allows you to comment and like places, and many more! Sign up now!
                    </p>
                </div>
                <div className='w-100'>
                    <a
                        className="btn all-btns p-2 rounded text-decoration-none"
                        href="/sign-up"
                        role="button"
                    >
                        Sign Up!
                    </a>
                </div>
            </div>
                </>
                )}
            <br/>
            <br/>
        </div>
    )
}

export default LandingPage;