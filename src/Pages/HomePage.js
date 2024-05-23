//HomePage.js
import NotesList from "../components/NotesList";
import CreateNote from "../components/CreateNote";
import EditNote from "../components/EditNote";
import {useState, useEffect, useCallback} from "react";
import { useNavigate } from "react-router-dom";



const HomePage = () => {
    //State Variables:
    const [notes, setNotes] = useState([]);
    const [editingNote, setEditingNote] = useState(null);
    const baseURL = process.env.REACT_APP_API_BASE_URL;
    const navigate = useNavigate();
    const fetchNotes = useCallback(
        async () =>{
            try {
            const response = await fetch(`${baseURL}/notes`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });
            if (!response.ok) {
                throw new Error(`Error fetching notes: ${response.statusText}`);
            }
            const noteData = await response.json();
            // console.log(noteData);
            setNotes(noteData);
            } catch (error) {
            console.log("Error fetching notes:", error);
            }
        }, [baseURL]
    )
    useEffect(() => {
        fetchNotes();
    }, [fetchNotes]);

    const addNote = async (newNote) => { 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(newNote),
        };
        try {
            const response = await fetch(`${baseURL}/notes/newnote`, requestOptions);
            if (!response.ok) {
                throw new Error(`Error adding note: ${response.statusText}`);
            }
            const noteData = await response.json();
            setNotes(prevNotes => [...prevNotes, noteData]);
            navigate('/', { replace: true }); // Prevent going back to notes/newnote
        } catch (err) {
            console.error("Error adding note:", err);
        }
    }
    const updateNote =  async (id, updatedNote) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ noteID: id, ...updatedNote }),
        };
        try{
            const response = await fetch(`${baseURL}/notes/updatenote`, requestOptions);
            if(!response.ok){
                throw new Error(`Error updating note: ${response.statusText}`);
            }
            const noteData = await response.json();
            setNotes(prevNotes => prevNotes.map (note => note._id === id ? noteData : note));
            setEditingNote(null);
        }
        catch (err) {
            console.log("Error updating note:", err);

        }
        
    }
    const handleEditNote = (id, title, content) => {
        setEditingNote({ id, title, content });
    }
    const cancelEdit = ()=>{
        setEditingNote(null);
    }
    const deleteNote = async (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ noteID: id }),
        };
        try{
            const response = await fetch(`${baseURL}/notes/deletenote`, requestOptions);
            if (!response.ok) {
                throw new Error(`Error deleting note: ${response.statusText}`);
            }
            setNotes(prevNotes => prevNotes.filter((note) => note._id !== id));
        }
        catch(err){
            console.log("Error deleting note:", err);
        }
        
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