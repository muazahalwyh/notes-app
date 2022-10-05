import React from "react";
import { showFormattedDate } from "../utils/index";

function NoteItemBody({ title, body, createdAt}){
    return (
        <div className="note-item__content">
            <h3 className="note-item__title">{title}</h3>
            <time className="note-item__date" dateTime={createdAt}>{showFormattedDate(createdAt)}</time>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NoteItemBody;