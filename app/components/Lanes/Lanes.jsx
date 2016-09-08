import React from 'react';
import Lane from '../Lane/Lane';
import styles from './Lanes.css';

export default ({lanes}) => (
    <div className={styles.lanes}>
        {lanes.map(lane => 
            <Lane className={styles.lane} key={lane.id} lane={lane} />
        )}
    </div>
)