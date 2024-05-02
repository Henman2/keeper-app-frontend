import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
const Note = ({id, title, content, handleDeletion})=>{
    const handleClick = ()=>{
        handleDeletion(id);
    }
    return(
     <div className="note">
         <h2>{title}</h2>
         <p>{content}</p>
         <button onClick={handleClick}><DeleteRoundedIcon /></button>
     </div>
 )
}
export default Note;