// EditNote.js
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useState } from "react";

const EditNote = ({ id, title: initialTitle, content: initialContent, handleUpdate, cancelEdit }) => {
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        handleUpdate(id, {title, content });
        cancelEdit(); // Close the edit form after submitting
    }
    const handleCancel = () => {
        cancelEdit();
    }
    return (
        <form className="create-note">
            <input name="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <textarea name="content" value={content} onChange={e => setContent(e.target.value)}></textarea>
            <button type="submit" onClick={handleSubmit}><SaveRoundedIcon /></button>
            <button className="cancelBtn" onClick={handleCancel}><CancelRoundedIcon /></button>
        </form>
    )
}
export default EditNote;
