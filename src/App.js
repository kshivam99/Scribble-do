import "./styles.css";
import Body from "./components/Body";
import Tags from "./components/Tags";
import FilteredNotes from "./components/FilteredNotes";
import { useState, useEffect } from "react";

const tagItems = ["Delete a tag","Choose a tag", "Appointments", "Shopping", "Todo Tasks"];

export default function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes") || "[]"));
  const [tags, setTags] = useState(JSON.parse(localStorage.getItem("tags") || JSON.stringify(tagItems)));
  const [activeTag, setActiveTag] = useState("none");

  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes));
  },[notes])

  
  useEffect(()=>{
    localStorage.setItem("tags", JSON.stringify(tags));
    console.log(localStorage.getItem("tags"))
  },[tags])

  return (
    <>
      <div className="title">
        <h1 onClick={()=>setActiveTag("none")}>Scribble</h1>
        <small>Save paper, Use Scribble</small>
        <hr
          style={{
            backgroundColor: "black",
            height: 1
          }}
        />
      </div>
      <div className="App">
        <div className="tagsBody">
          <Tags
            tags={tags}
            setTags={setTags}
            setActiveTag={setActiveTag}
          />
        </div>
        {activeTag==="none"?(<Body notes={notes} setNotes={setNotes} tags={tags} setTags={setTags} />):(<FilteredNotes notes={notes} setNotes={setNotes} activeTag={activeTag} setActiveTag={setActiveTag} />
)}
        
      </div>
      <hr
        style={{
          backgroundColor: "black",
          height: 1
        }}
      />
      <div className="footer">
        <small>©️ Copyright @kshivam99</small>
        <div>
        <a href="https://twitter.com/kshivam99_" class="fa fa-twitter"></a>
        <a href="https://www.linkedin.com/in/kshivam99/" class="fa fa-linkedin"></a>
        <a href="https://github.com/kshivam99" class="fa fa-github"></a>
       </div>
      </div>
    </>
  );
}
