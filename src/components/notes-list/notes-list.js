import NotesListItem from "../notes-list-item/notes-list-item";
import './notes-list.css';

const NotesList =()=>{
    return (
        <ul className="app-list list-group">
<NotesListItem/>
<NotesListItem/>
<NotesListItem/>
        </ul>
    )
}

export default NotesList;