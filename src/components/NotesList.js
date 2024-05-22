//NoteList.js
import { useMemo } from "react";
import Note from "./Note";

const NotesList= ({notes, handleDeletion, renderEditForm})=>{
    const memoizedNotes = useMemo(()=>{
        return notes.map((note)=>{
            return(
                <Note   key={note._id} 
                        id={note._id}
                        title={note.title}
                        content={note.content}
                        timestamp={note.timestamp}
                        handleDeletion={handleDeletion}
                        renderEditForm={renderEditForm}/>
                );
        });
    }, [notes, handleDeletion, renderEditForm]);
return(
    <div>
        {memoizedNotes}
    </div>
)
}
export default NotesList;