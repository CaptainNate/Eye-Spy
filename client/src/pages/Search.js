import React from 'react';

import SearchBar from '../components/SearchBar';

// import loginImg from '../images/login-signup-img.png';
import searchImg from '../images/search-img.png';

const Search = () => {

    // add conditional statements to generate proper search here

    // when search button is clicked, display searchResults component
    // need to add conditional statements for this

    return (
        <main className='container p-5 mb-5'>
            <div className='d-flex justify-content-center align-items-center'>
                <div className="px-5 mx-5">
                    <div>
                        <img src={searchImg} alt="couple paddle boarding" style={{height:"600px"}} />
                    </div>
                </div>
                <div>
                    <div className='text-center m-5'>
                        <h2 className='mb-4 pb-4 border-bottom border-dark'>What's your next big adventure?</h2>
                        <h4 className=''>Please select the activity you're interested in</h4>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="m-2">
                            <SearchBar />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="all-btns p-2 rounded"><a href="../components/SearchResults">Search</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </main>
    )
}

export default Search;