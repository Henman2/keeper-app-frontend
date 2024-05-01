import {Zoom} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useState, useEffect, useRef} from "react";
const CreateNote = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const titleInputRef = useRef(null); // Create a reference for the title input
    const expand = ()=> {
        setIsExpanded(true);
    }
    useEffect(()=>{
        // Focus on the title input when isExpanded becomes true
        if(isExpanded){
            titleInputRef.current.focus();
        }
    }, [isExpanded]); // Run this effect when isExpanded changes

    return(
        <form className="create-note">
            {isExpanded && <input ref={titleInputRef} name="title" placeholder="Title"/>}
            <textarea onClick={expand} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
            <Zoom  in={isExpanded} style={{ transitionDelay: isExpanded ? '500ms' : '0ms' }}><button><AddIcon/></button></Zoom>
        </form>
    )
}
export default CreateNote;