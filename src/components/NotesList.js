//NoteList.js
import { useMemo } from "react";
import Masonry from 'react-masonry-css';
import Note from "./Note";

const breakpointColumnsObj = {
  default: 6,
    1600: 4,
    1100: 3,
    700: 2,
    500: 1,
};

const NotesList= ({notes, handleDeletion, renderEditForm})=>{
    const memoizedNotes = useMemo(()=>{
        return notes.map((note)=>{
            return(
                <Note   key={note._id} 
                        id={note._id}
                        title={note.title}
                        content={note.content}
                        timestamp={note.timestamp}
                        handleDeletion={handleDeletion}
                        renderEditForm={renderEditForm}/>
                );
        });
    }, [notes, handleDeletion, renderEditForm]);
return (
    <Masonry
        breakpointCols={breakpointColumnsObj}
        className='notes-wrapper'
        columnClassName ='note-masonry-gridcol'
    >
        {memoizedNotes}
    </Masonry>
);
}
export default NotesList;