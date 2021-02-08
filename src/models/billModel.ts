import clone from '@/lib/clone';

const LOCAL_STORAGE_KEY_NAME = 'records';

const billModel = {
    data: [] as RecordItem[],
    create(item: RecordItem) {
        const newRecord: RecordItem = clone(item);
        newRecord.createTime = new Date();
        this.data.push(newRecord);
    },
    get(): RecordItem[] {
        this.data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME) || '[]');
        return this.data;
    },
    save() {
        localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(this.data));
    }
};

export default billModel;