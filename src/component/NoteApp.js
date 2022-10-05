import React from "react";
import SearchBar from "./SearchBar";
import NoteList from "./NoteList";

import { getInitialData } from '../utils/index';
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery: "",
            notes: getInitialData(),
        }
        this.searchTypingHandler = this.searchTypingHandler.bind(this);
        this.addNoteHandler = this.addNoteHandler.bind(this);
        this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
        this.archiveNoteHandler = this.archiveNoteHandler.bind(this);    
    }

    searchTypingHandler(event) {
        this.setState((prevState) => {
          return {
            ...prevState,
            searchQuery: event.target.value,
          };
        });
    }

    addNoteHandler({title, body}){
        this.setState((prevState) =>{
            return{
                notes:[
                    ...prevState.notes,
                {
                    id:+new Date(),
                    title,
                    body,
                    archived: false, 
                    createdAt: new Date().toISOString(),
                }
                ]
            }
        });
    }

    deleteNoteHandler(id) {
        this.setState((prevState) => {
          return {
            ...prevState,
            notes: prevState.notes.filter((note) => note.id !== id),
          };
        });
    }
    
    archiveNoteHandler(id) {
        const { notes } = this.state;
        notes.forEach((note) => {
          if (note.id === id) note.archived = !note.archived;
        });
        this.setState((prevState) => ({ ...prevState, notes }));
    }
    
    noteList() {
        const { searchQuery, notes } = this.state;
    
        const item = searchQuery.trim().length
          ? notes.filter((note) =>
              note.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : notes;
    
        return item;
    }
    

    render() {
        return (
            <>
             <div className="note-app__header">
                 <h1>CATATAN PRIBADI</h1>
                 <SearchBar onTyping={this.searchTypingHandler} />
             </div>
             <div className="note-app__body">
                 <h2>Buat Catatan Harian</h2>
                 <NoteInput addNote={this.addNoteHandler}/>
                 <h2>Catatan Harian Aktif</h2>
                 <NoteList item={this.noteList().filter((note) => !note.archived)} deleteNote={this.deleteNoteHandler} archiveNote={this.archiveNoteHandler}/>
                 <h2>Daftar Arsipan</h2>
                 <NoteList item={this.noteList().filter((note) => note.archived)} deleteNote={this.deleteNoteHandler} archiveNote={this.archiveNoteHandler}/>
             </div>
            </>
        )
    }
}


export default NoteApp;