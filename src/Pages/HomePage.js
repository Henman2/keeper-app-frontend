import notes from "../shared/notelist";
import NotesList from "../components/NotesList";
import CreateNote from "../components/CreateNote";
import {useState} from "react";
const HomePage = () => {
    const [newNotes, setNewNotes] = useState([]);
    const addNote = (newNote) => {
        setNewNotes(prevNotes => [...prevNotes, newNote])
    }
    return (
        <>
            <CreateNote onAdd={addNote} />
            <NotesList notes={notes.concat(newNotes)} />
        </>

    );
}
export default HomePage;