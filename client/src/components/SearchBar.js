import React from "react";
import { BiSearch } from "react-icons/bi";
import "../styles/searchbar.scss";

// AT A CERTAIN WIDTH, MAKE THE SEARCHBAR JUST AN ICON THAT CAN BE CLICKED.

const SearchBar = () => {
  // const [searchInput, setSearchInput] = useState("");

  // Ready for implementation
  // const handleChange = () => {
  //   console.log("handleChange");
  // };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search by name"
        // onChange="handleChange"
        // value={searchInput}
      ></input>
    </div>
  );
};

export default SearchBar;
