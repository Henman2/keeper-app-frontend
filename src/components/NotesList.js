
import Note from "./Note";
const NotesList= ({notes})=>{
    return(
        <div>
            {notes.map((note, index)=>{
                return(
                    <Note key={index} id={index} title={note.title} content={note.content}/>
                )
            })}
        </div>
    )
}
export default NotesList;