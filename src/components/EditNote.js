import { useState } from "react";
import "./EditNote.css";
import { TwitterPicker } from "react-color";
import uuid from "react-uuid";

export default function EditNote({ notes, setNotes, tags }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");
  const [pin, setPin] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const addNote = () => {
    let newObj = {
      id: uuid(),
      title: title,
      text: text,
      pinned: pin,
      tag: tag,
      color: bgColor
    };
    setNotes([newObj, ...notes]);
    setTitle("");
    setText("");
    setTag("Choose a tag");
    setPin(false);
    setBgColor("white");
    setViewModal(false);
  };

  return (
    <div style={{ backgroundColor: bgColor }} className="note">
      <input
        placeholder="Title"
        className="note-heading"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder=" Write your note"
        className="note-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        onChange={(e) => {
          setTag(e.target.value);
        }}
        value={tag}
      >
        {tags.slice(1).map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <div>
        <button onClick={() => setViewModal(!viewModal)}>Color</button>
        <button
          style={{ backgroundColor: pin ? "yellow" : "white" }}
          onClick={() => setPin(!pin)}
        >
          <span>📌</span>
        </button>

        <button
          onClick={() => {
            addNote();
          }}
        >
          Add
        </button>

        <div
          className="colorPicker"
          style={{ display: viewModal ? "" : "none" }}
        >
          <TwitterPicker
            color={bgColor}
            onChange={(color) => setBgColor(color.hex)}
          />
          <button onClick={() => setViewModal(!viewModal)}>X</button>
        </div>
      </div>
    </div>
  );
}
