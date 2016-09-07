import React from 'react';
import Note from '../Note/Note';
import Editable from '../Editable/Editable';
import styles from './Notes.css';

export default ({notes,
    onNoteClick=()=>{},
    onEdit=()=>{},
    onDelete=()=>{}
}) => (
    <ul className={styles.notes}>
        {
            notes.map(
                ({id, editing, task}) => 
                <li key={id}>
                    <Note className={styles.note} onClick={onNoteClick.bind(null, id)}>
                        <Editable
                        className={styles.editable}
                            editing={editing}
                            value={task}
                            onEdit={onEdit.bind(null, id)} />
                        <button className={styles.delete} onClick={onDelete.bind(null, id)}>x</button>
                    </Note>
                </li>
            )
        }
    </ul>
)