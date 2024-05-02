import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import currentTime from "../shared/currentTime";
const Note = ({id, title, content, handleDeletion})=>{
    const handleClick = ()=>{
        handleDeletion(id);
    }
    return(
        <div className="note">
            <h2>{title}</h2>
            <h3>Posted: {currentTime()}</h3>
            <p>{content}</p>
            <button onClick={handleClick}><DeleteRoundedIcon/></button>
            <button onClick={handleClick}><EditNoteRoundedIcon/></button>
        </div>
    )
}
export default Note;