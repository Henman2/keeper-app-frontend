//HomePage.js
import initialNotes from "../shared/notelist";
import NotesList from "../components/NotesList";
import CreateNote from "../components/CreateNote";
import EditNote from "../components/EditNote";
import {useState} from "react";

const HomePage = () => {
    //State Variables:
    const [notes, setNotes] = useState([...initialNotes]);
    const [newNoteId, setNewNoteId] = useState(initialNotes.length+1);
    const [editingNote, setEditingNote] = useState(null);

    const addNote = (newNote) => {
        setNotes(prevNotes => [...prevNotes, {...newNote, key: newNoteId}]);
        setNewNoteId(prevId => prevId + 1)
    }
    const updateNote = (id, updatedNote) => {
        setNotes(prevNotes => prevNotes.map(note => (
            note.key === id ? { ...note, ...updatedNote } : note
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
        setNotes(prevNotes => prevNotes.filter((note, index) => index !== id));
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