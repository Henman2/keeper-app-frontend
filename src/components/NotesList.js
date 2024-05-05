//NoteList.js
import { useMemo } from "react";
import Note from "./Note";
const NotesList= ({notes, handleDeletion, renderEditForm})=>{
    const memoizedNotes = useMemo(()=>{
        return notes.map((note)=>{
            return(
                <Note   key={note.key} 
                        id={note.key}
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