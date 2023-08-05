import React from "react";

const SearchBox = ({ searchfield, searchchange}) => {
    return(
        <div className="tc pa3">
            <input 
                className="tc pa3 ba b--green bg-lightest-blue dim" 
                type="search" 
                placeholder="search robots" 
                onChange={searchchange} 
            />
        </div>
    );
}

export default SearchBox;