import React from "react";

function ArchiveButton({ archived, onClick }) {
  return (
    <button className="note-item__archive-button" onClick={onClick}>
      {archived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}

export default ArchiveButton;