import EditNote from "./EditNote";
import Note from "./Note";

export default function Body({ notes, setNotes, tags, setTags }){
  return (
    <div className="body">
      <EditNote notes={notes} setNotes={setNotes} tags={tags} />
      <h1> Pinned Notes </h1>
      <div className="pinnedNotes">
        {notes.map((note) =>
          note.pinned ? (
            <div key={note.id}>
              <Note note={note} notes={notes} setNotes={setNotes} tags={tags} setTags={setTags} /> &nbsp;
            </div>
          ) : (
            <div style={{ display: "none" }}></div>
          )
        )}
      </div>
      <h1> Other Notes</h1>
      <div className="otherNotes">
        {notes.map((note) =>
          !note.pinned ? 
          (
            <div key={note.id}>
              <Note note={note} notes={notes} setNotes={setNotes} tags={tags} setTags={setTags} /> &nbsp;
            </div>
          ) :
          (
            <div style={{ display: "none" }}></div>
          )
        )}
      </div>
    </div>
  );
};
