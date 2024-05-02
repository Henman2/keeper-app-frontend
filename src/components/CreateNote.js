import {Zoom} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useState, useEffect, useRef} from "react";
const CreateNote = ({onAdd}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [inputValues, setInputValues] = useState({title:"", content:""});
    // Create a reference for the title input
    const titleInputRef = useRef(null);
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        // setInputValues({...inputValues, [name]: value})
        setInputValues(prevNote => ({...prevNote, [name]: value}))
    }
    const handleSubmit = (event) => {
        onAdd(inputValues);
        setInputValues({title:"", content:""});
        event.preventDefault();
    }
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
            {isExpanded && <input onChange={handleInputChange} ref={titleInputRef} name="title" value={inputValues.title} placeholder="Title"/>}
            <textarea onChange={handleInputChange} onClick={expand} name="content" value={inputValues.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
            <Zoom  in={isExpanded} style={{ transitionDelay: isExpanded ? '300ms' : '0ms' }}><button onClick={handleSubmit}><AddIcon/></button></Zoom>
        </form>
    )
}
export default CreateNote;