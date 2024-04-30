import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
const Note = ({id, title, content})=>{
 return(
     <div className="note">
         <h2>{title}</h2>
         <p>{content}</p>
         <button><DeleteRoundedIcon /></button>
     </div>
 )
}
export default Note;