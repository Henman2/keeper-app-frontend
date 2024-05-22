//HomePage.js
import NotesList from "../components/NotesList";
import CreateNote from "../components/CreateNote";
import EditNote from "../components/EditNote";
import {useState, useEffect} from "react";



const HomePage = () => {
    //State Variables:
    const [notes, setNotes] = useState([]);
    const [editingNote, setEditingNote] = useState(null);
   
    
    const fetchNotes = async () =>{
        try {
        const response = await fetch('http://localhost:3800/notes', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
        if (!response.ok) {
            throw new Error(`Error fetching notes: ${response.statusText}`);
        }
        const noteData = await response.json();
        console.log(noteData);
        setNotes(noteData);
        } catch (error) {
        console.log("Error fetching notes:", error);
        }
    }
    useEffect(() => {
        fetchNotes()
    }, []);

    const addNote = (newNote) => { 
       
    }
    const updateNote = (id, updatedNote) => {
        
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