const LOCAL_STORAGE_KEY_NAME = 'records';
const billModel = {
    clone(item: RecordItem) {
        return JSON.parse(JSON.stringify(item))
    },
    get() {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME) || '[]');
    },
    save(data: RecordItem[]) {
        localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(data));
    }
};

export default billModel;