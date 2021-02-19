import clone from '@/lib/clone';

const LOCAL_STORAGE_KEY_NAME = 'records';

const recordStore = {
    recordList: [] as RecordItem[],
    getRecords() {
        this.recordList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME) || '[]');
        return this.recordList;
    },
    saveRecords() {
        localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(this.recordList));
        alert('记账成功');
    },
    /**
     * 记账读写
     */
    createRecord(record: RecordItem){
        const newRecord: RecordItem = clone(record);
        newRecord.createTime = new Date();
        this.recordList && this.recordList.push(newRecord);
        recordStore.saveRecords();
        location.reload();
    },
};

recordStore.getRecords();

export default recordStore;