import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ item, deleteNote, archiveNote }) {
    if (item.length) {
      return (
        <div className="notes-list">
          {item.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              archiveNote={archiveNote}
              
            />
          ))}
        </div>
      );
    }
  
    return <p>Tidak ada catatan</p>;
  }

export default NoteList;