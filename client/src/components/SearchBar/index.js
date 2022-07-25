import { React, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function SearchBar() {

    // functional component for a search bar
    // const [searchInput, setSearchInput] = useState("");

    // const searchOptions = [];

    // const handleChange = (event) => {
    //     event.preventDefault();
    //     setSearchInput(event.target.value);
    // };

    // if (searchInput.length > 0) {
    //     searchOptions.filter((options) => {
    //         return options.name.match(searchInput);
    //     });
    // }

    return (
        <div>
            {/* add an on click that when the dropdown item is selected, it changes the title name */}
            {/* extend the length of the dropdown menu to match the length of "please select..." */}
            {/* need to style dropdown menu to match webpage, haven't figured that out yet */}
            <div className="text-center">
                <DropdownButton title="Placeholder Text">
                    <Dropdown.Item>Hiking Trails</Dropdown.Item>
                    <Dropdown.Item>Camping</Dropdown.Item>
                    <Dropdown.Item>Mountain Biking</Dropdown.Item>
                    <Dropdown.Item>Swimming</Dropdown.Item>
                    <Dropdown.Item>Water Sports</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className='text-center mt-5'>
                <button className="all-btns p-2 px-4 rounded">
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar;