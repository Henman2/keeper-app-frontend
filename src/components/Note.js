//Note.js
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Card, CardContent, Typography, Button } from '@mui/material';



const Note = ({id, title, content, timestamp, handleDeletion, renderEditForm})=>{
    const handleDeleteClick = ()=>{
        handleDeletion(id);
    }
    const handleEditClick = ()=>{
        renderEditForm(id, title, content);
    }
    return (
        <Card key={id} className='note'>
            <CardContent>
                <Typography variant='h2'>{title}</Typography>
                <Typography variant='h3'>Posted: {timestamp}</Typography>
                <Typography>{content}</Typography>
            </CardContent>
            <Button onClick={handleDeleteClick}  className="note-btn">
                <DeleteRoundedIcon />
            </Button>
            <Button onClick={handleEditClick}  className="note-btn">
                <EditRoundedIcon />
            </Button>
        </Card>
    );
}
export default Note;