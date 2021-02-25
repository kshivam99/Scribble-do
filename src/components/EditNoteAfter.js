import "./EditNoteAfter.css";
import {useState} from "react";

export default function EditNoteAfter({note, notes, setNotes, editOn, setEditOn, tags, setTags}) {
    
    const [title, setTitle] = useState(note.title);
    const [text, setText] = useState(note.text);
    const [tagChange, setTagChange] = useState(note.tag);

    const submitChanges=(title, text, tagChange)=>{
        setEditOn(false);
        console.log("inside edit")
     setNotes((prev) =>
      prev.map((item) =>
        item.id === note.id ? { ...item, title:title, text:text, tag:tagChange } : item
      )
    );
  };


    return (
        <div>

        <input  placeholder="Title"  onChange={(e)=>setTitle(e.target.value)} value={title}></input>
      <textarea
        placeholder="Body"
        className="note-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        onChange={(e) => {
          setTagChange(e.target.value);
        }}
        value={tagChange}
      >
        {tags.slice(1).map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <button onClick={()=>submitChanges(title, text, tagChange )}>Done Editing</button>
      
    </div>
    );
};