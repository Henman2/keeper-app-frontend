//Note.js
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';

const Note = ({id, title, content, timestamp, handleDeletion, renderEditForm})=>{
    const handleDeleteClick = ()=>{
        handleDeletion(id);
    }
    const handleEditClick = ()=>{
        renderEditForm(id, title, content);
    }
    return(
        <div className="note">
            <h2>{title}</h2>
            <h3>Posted: {timestamp}</h3>
            <p>{content}</p>
            <span>
                <button onClick={handleDeleteClick}><DeleteRoundedIcon/></button>
                <button onClick={handleEditClick}><EditNoteRoundedIcon/></button>
            </span>

        </div>
    )
}
export default Note;