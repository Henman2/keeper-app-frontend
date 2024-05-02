import initialNotes from "../shared/notelist";
import NotesList from "../components/NotesList";
import CreateNote from "../components/CreateNote";
import {useState} from "react";
const HomePage = () => {
    const [notes, setNotes] = useState([...initialNotes]);
    const [newNoteId, setNewNoteId] = useState(initialNotes.length+1);
    const addNote = (newNote) => {
        setNotes(prevNotes => [...prevNotes, {...newNote, key: newNoteId}]);
        setNewNoteId(prevId => prevId + 1)
    }
    const deleteNote = (id) => {
        setNotes(prevNotes => prevNotes.filter((note, index) => index !== id));
    }
    return (
        <>
        <CreateNote onAdd={addNote} />
        <NotesList notes={notes} handleDeletion = {deleteNote} />
        </>

    );
}
export default HomePage;