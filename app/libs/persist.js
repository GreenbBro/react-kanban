export default function(alt, storage, storageName) {
    // trying to load stored data from localStorage
    try {
        alt.bootstrap(storage.get(storageName));
    }
    catch(e) {
        console.log('Failed to bootstrap data', e);
    }

    // listener to store change to take snapshot on data
    alt.FinalStore.listen(() => {
        if (!storage.get('debug')) {
            storage.set(storageName, alt.takeSnapshot());
        }
    });
}