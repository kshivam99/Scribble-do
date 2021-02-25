import "./Tags.css";
import { useState } from "react";

export default function Tags({ tags, setTags, setActiveTag }) {

  const [viewDelete, setViewDelete] = useState(false);


  const deleteTag=(tagToDelete)=>{
    let newObj = [...tags];
    newObj = tags.filter((item) => item !== tagToDelete);
    setTags(newObj);

  }


  return (
    <div className="tags">
      <h1>Tags</h1>
      <ul className="taglist">
        {tags.slice(2).map((tag, index) => (
          <li onClick={() => setActiveTag(tag)} key={index}>
            {tag}
          </li>
        ))}
      </ul>
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setTags([...tags, e.target.value]);
            e.target.value = "";
          }
        }}
        placeholder="Add new tags"
      />
      <button onClick={()=>setViewDelete(prev=>!prev)}>Delete Tags:</button>
      <ul className="deleteList" style={{display:viewDelete?"block":"none"}}>
        {tags.slice(2).map((tag, index) => (
          <li onClick={() => deleteTag(tag)} key={index}>
            {tag}
          </li>
        ))}
      </ul>
      
    </div>
  );
};
