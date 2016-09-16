import React from 'react';
import uuid from 'uuid';
import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import connect from '../libs/connect';
import Lanes from './Lanes/Lanes';
import LaneActions from '../actions/LaneActions';
import Posts from './Posts/Posts';
import PostActions from '../actions/PostActions';
import Articles from './Articles/Articles';

const App = ({LaneActions, lanes, PostActions, posts}) => {
    const addLane = () => {
        LaneActions.create({
            id: uuid.v4(),
            name: 'New lane'
        });
    };

    return (
        <div>
            <button className="add-lane" onClick={addLane}>Add lane</button>
            <Lanes lanes={lanes} />
            <Posts posts={posts} />
            <Articles />
        </div>
    );
};

export default compose(
    DragDropContext(HTML5Backend),
    connect(
        ({lanes, posts}) => ({lanes, posts}),
        {LaneActions, PostActions}
    )
)(App)