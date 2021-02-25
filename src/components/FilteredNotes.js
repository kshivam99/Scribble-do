import Note from "./Note";
import "./FilteredNotes.css";

export default function FilteredNotes({notes, setNotes, activeTag, setActiveTag}){

    const filterNotes = (items, activeTag)=>{
        return items.filter((item)=>item.tag===activeTag);
    }
    return (
        <div className="tagFilterBody">
        <button onClick={()=>setActiveTag("none")} style={{cursor:"pointer"}}>
                <span>🏠 Home </span>
            </button>
        <div className="tagFilter">
            
            {filterNotes(notes, activeTag).map((note)=><div><Note note={note} notes={notes} setNotes={setNotes} /></div>)}


        </div>
        </div>

    );
};