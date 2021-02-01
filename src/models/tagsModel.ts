const LOCAL_STORAGE_KEY_NAME = 'tags';
type TagsModel = {
    data: string[];
    get: () => string[];
    create: (name: string) => string;
    save: () => void;
}

const tagsModel: TagsModel = {
    data: [],
    get() {
        this.data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME) || '[]');
        return this.data;
    },
    create(name) {
        if (this.data.indexOf(name)>=0){
            throw new Error("标签已存在")
        }
        this.data.push(name);
        this.save();
        return name;
    },
    save() {
        localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(this.data));
    }
};

export default tagsModel;