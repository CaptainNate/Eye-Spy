import { React, useState } from 'react';

function SearchBar() {

    // functional component for a search bar
    const [searchInput, setSearchInput] = useState("");

    const searchOptions = [];

    const handleChange = (event) => {
        event.preventDefault();
        setSearchInput(event.target.value);
    };

    if (searchInput.length > 0) {
        searchOptions.filter((options) => {
            return options.name.match(searchInput);
        });
    }

    return (
        <form method="get" className="d-flex">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search Destination Posts</span>
            </label>
            <input type="search" className="search-border p-1 m-2 border border-dark border-1 rounded-pill text-center" placeholder="Search destination" onChange={handleChange} value={searchInput} />
            {/* instead of the word search, I'd like to add in a search icon instead */}
            <button type="submit" className="p-1 btn btn-outine-none">
                <span class="material-symbols-outlined">
                    search
                </span>
            </button>
        </form>
    )
}

export default SearchBar;