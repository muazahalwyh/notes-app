import React from "react";

function SearchBar({  onTyping  }) {
  return (
    <div className="note-search">
      <input type="text" placeholder="Search Note" onChange={onTyping} />
    </div>
  );
}

export default SearchBar;
