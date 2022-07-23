import React from 'react';

import SearchBar from '../components/SearchBar';

const Search = () => {

    // add conditional statements to generate proper search here

    return (
        <main className='container d-flex justify-content-center'>
            <div className=''>
            <div className='text-center m-5'>
                <h2 className='mb-5'>What kind of adventure is next?</h2>
                <h4 className='mb-4'>Please select the activity you're interested in</h4>
            </div>
            <div>
                <SearchBar />
            </div>
            </div>
        </main>
    )
}

export default Search;