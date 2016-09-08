import storage from '../libs/storage';
import persist from '../libs/persist';
import NoteStore  from '../stores/NoteStore';
import LaneStore  from '../stores/LaneStore';
import PostStore  from '../stores/PostStore';

export default alt => {
    // init notes store
    alt.addStore('NoteStore', NoteStore);
    // init lanes store
    alt.addStore('LanesStore', LaneStore);
    // init posts store
    alt.addStore('PostStore', PostStore);
    // init notes persistense
    persist(alt, storage(localStorage), 'app');
}