import { TwitterPicker } from "react-color";
import { useState } from "react";
import EditNoteAfter from "./EditNoteAfter";

export default function Note({ note, notes, setNotes, tags, setTags }) {
  const [viewModal, setViewModal] = useState(false);
  const [editOn, setEditOn] = useState(false);

  const editPin = () => {
    setNotes((prev) =>
      prev.map((item) =>
        item.id === note.id ? { ...item, pinned: !item.pinned } : item
      )
    );
  };

  const changeColor = (color) => {
    setNotes((prev) =>
      prev.map((item) =>
        item.id === note.id ? { ...item, color: color } : item
      )
    );
  };

  const deleteNote = () => {
    let newObj = [...notes];
    newObj = notes.filter((item) => item.id !== note.id);
    setNotes(newObj);
  };

  return (
    <div style={{ backgroundColor: note.color }} className="note">
      {editOn?(
      <EditNoteAfter note={note} notes={notes} setNotes={setNotes} editOn={editOn} setEditOn={setEditOn} tags={tags} setTags={setTags} />
    ):(
      <>
      <h2>{note.title} &nbsp; <span onClick={()=>setEditOn(true)}>🖊️</span></h2>
      <small>{note.tag}</small>
      <p>{note.text}</p> 
      <div>
        <button onClick={() => setViewModal(!viewModal)}>Edit Color</button> 
        <button 
        className="pinButton"
         onClick={() => editPin()}>
          {note.pinned ? "📌" : "Pin this note"}
        </button>
        <button
          className="deleteButton"
          onClick={() => {
            deleteNote();
            console.log("delete clicked");
          }}
        >
          Delete
        </button>
      </div>
      <div
          className="colorPicker"
          style={{ display: viewModal ? "" : "none" }}
        >
          <TwitterPicker
            color={note.color}
            onChange={(color) => changeColor(color.hex)}
          />
          <button onClick={() => setViewModal(!viewModal)}>X</button>
        </div>
        </>
    )
    }
  </div>
  );
}
