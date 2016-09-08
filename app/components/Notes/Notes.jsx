import React from 'react';
import Note from '../Note/Note';
import Editable from '../Editable/Editable';
import LaneActions from '../../actions/LaneActions';
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
                    <Note className={styles.note} id={id}
                        editing={editing}
                        onClick={onNoteClick.bind(null, id)}
                        onMove={LaneActions.move}>
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