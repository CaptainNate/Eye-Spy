import React from 'react';
import "../index.css";

// image import
import landingPageImg from '../images/landing-page-img.png';

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
                    <br />
                    <p>hello</p>
    <div class="container-fluid py-2 card mb-3 scrolling-wrapper">
    {/* <h2 class="font-weight-light"></h2> */}
    <div class="d-flex flex-row flex-nowrap row g-0">
      
        <div class="card card-body"><p>Wow! I never thougth I would find a site like this. I was able to find so many cool and unique places that were so close to home!</p>
        <p> - Scott H.</p></div>
        <div class="card card-body"><p>At first I thought it was such a weird webpage but it ended up being exactly what I was looking for! I can't even recommend it enough to anyone who likes being outdoors.</p>
        <p>-Theodore M.</p></div>
        <div class="card card-body"><p>I never thought anyone would think of an idea to find these unique gems. I'm always searching for these and a lot of them are just not what I'm looking for. This hits the nail on the head.</p>
        <p>-Cleo P.</p></div>
        {/* <div class="card card-body"><p>Eye Spy is a name that indeed matches. It's definitely got an eye for rare spots. I thought I was good, but they're even better.</p>
        <p>-John E.</p></div> */}
        {/* <div class="card card-body"><p>I was never one to look online to find places to explore, that weren't so busy, but here we are.I found this site and now I can't stop checking back!</p>
        <p>-Cillia T.</p></div> */}
        <div class="card card-body"><p>What a refreshing site. It matches what I was looking for but just the webpage was so pleasant and nice to look at. I wish I could keep looking. I love the feature being able to add our own suggestions onto the website too! I feel so engaged.</p>
        <p>-Lilliana L.</p></div>
        
    </div>
</div>

{/* <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */}

                    {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                        < br/>
                        < br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                    </p> */}
                </div>
            </div>

            {/* STILL NEED TO ADD IN RANDOM DESTINATIONS (WORK WITH BACKEND TEAM ON THIS) */}

            {/* Sign Up Section */}
            <div className="py-5 mb-5 text-center border-top border-dark">
                <h3 className="pb-4">Sign Up Today!</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                </p>
                <button type="submit" className="all-btns p-2 rounded">Submit</button>
            </div>
        </div>
    )
}

export default LandingPage;