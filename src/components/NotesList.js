
import Note from "./Note";
const NotesList= ({notes, handleDeletion})=>{
    return(
        <div>
            {notes.map((note, index)=>{
                return(
                    <Note key={index} id={index} title={note.title} content={note.content}
                          handleDeletion={handleDeletion} />
                )
            })}
        </div>
    )
}
export default NotesList;