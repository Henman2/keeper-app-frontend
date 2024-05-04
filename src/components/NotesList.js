//NoteList.js
import Note from "./Note";
const NotesList= ({notes, handleDeletion, renderEditForm})=>{
return(
    <div>
        {notes.map((note, index)=>{
            return(
                <Note   key={note.key} 
                        id={note.key}
                        title={note.title}
                        content={note.content}
                        handleDeletion={handleDeletion}
                        renderEditForm={renderEditForm}/>
                );
        })}
    </div>
)
}
export default NotesList;