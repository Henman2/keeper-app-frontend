//HomePage.js
import initialNotes from "../shared/notelist";
import NotesList from "../components/NotesList";
import CreateNote from "../components/CreateNote";
import EditNote from "../components/EditNote";
import {useState} from "react";
import currentTime from "../shared/currentTime";

const HomePage = () => {
    //State Variables:
    const [notes, setNotes] = useState([...initialNotes]);
    const [newNoteId, setNewNoteId] = useState(initialNotes.length+1);
    const [editingNote, setEditingNote] = useState(null);

    const addNote = (newNote) => {
        const timestamp = currentTime();
        setNotes(prevNotes => [...prevNotes, {...newNote, key: newNoteId, timestamp}]);
        setNewNoteId(prevId => prevId + 1)
    }
    const updateNote = (id, updatedNote) => {
        const timestamp = currentTime(); // Get current time
        setNotes(prevNotes => prevNotes.map(note => (
            note.key === id ? { ...note, ...updatedNote, timestamp } : note
        )));
        setEditingNote(null);
    }
    const handleEditNote = (id, title, content) => {
        setEditingNote({ id, title, content });
    }
    const cancelEdit = ()=>{
        setEditingNote(null);
    }
    const deleteNote = (id) => {
        setNotes(prevNotes => prevNotes.filter((note) => note.key !== id));
    }
    return (
        <>{editingNote ? (
            <EditNote
                id={editingNote.id}
                title={editingNote.title}
                content={editingNote.content}
                cancelEdit={cancelEdit}
                handleUpdate={updateNote} // Pass updateNote function
            />): (<CreateNote onAdd={addNote} />)
        }
        <NotesList notes={notes}
                handleDeletion = {deleteNote}
                renderEditForm={handleEditNote}
        />
        </>

    );
}
export default HomePage;