import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

function SearchBar() {

    

    return (
        <div>
            {/* dropdown menu not dropping down items on click, need help with that */}
            <div className="dropdown text-center">
                <button className="all-btns p-2 rounded px-5 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Select an outdoor activity
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a id="search-bar-hiking" className="dropdown-item" href="/">Hiking Trails</a></li>
                    <li><a id="search-bar-camping" className="dropdown-item" href="/">Camping</a></li>
                    <li><a id="search-bar-biking" className="dropdown-item" href="/">Mountain Biking</a></li>
                    <li><a id="search-bar-swimming" className="dropdown-item" href="/">Swimming</a></li>
                    <li><a id="search-bar-water-sport" className="dropdown-item" href="/">Water Sports</a></li>
                    <li><a id="search-bar-view-all" className="dropdown-item" href="/">View All</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SearchBar;