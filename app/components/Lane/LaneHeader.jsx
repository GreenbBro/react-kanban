import React from 'react';
import uuid from 'uuid';
import connect from '../../libs/connect';
import NoteActions from '../../actions/NoteActions';
import LaneActions from '../../actions/LaneActions';
import Editable from '../Editable/Editable';
import styles from './Lane.css';

export default connect(() => ({}), {
    NoteActions,
    LaneActions
})(({lane, onDelete = () => {}, onEdit = () => {}, onLaneClick = () => {}, LaneActions, NoteActions, ...props}) => {
    const addNote = e => {
        e.stopPropagation();

        const noteId = uuid.v4();

        NoteActions.create({
            id: noteId,
            task: 'New task ' + Math.round(Math.random()*100)
        });
        LaneActions.attachToLane({
            laneId: lane.id,
            noteId
        });
    };

    return (
        <div className={styles.header} {...props}>
            <div className={styles.name} onClick={onLaneClick.bind(null, lane.id)}>
                <Editable
                        className={styles.editable}
                            editing={lane.editing}
                            value={lane.name}
                            onEdit={onEdit.bind(null, lane.id)} />

            </div>
            <button className={styles.delete} onClick={onDelete.bind(null, lane.id)}>Delete lane</button>
            <button onClick={addNote}>Add note</button>
        </div>
    );
})