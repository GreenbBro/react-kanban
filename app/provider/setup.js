import storage from '../libs/storage';
import persist from '../libs/persist';
import NoteStore  from '../stores/NoteStore';
import LaneStore  from '../stores/LaneStore';

export default alt => {
    // init notes store
    alt.addStore('NoteStore', NoteStore);
    // init lanes store
    alt.addStore('LaneeStore', LaneStore);
    // init notes persistense
    persist(alt, storage(localStorage), 'app');
}