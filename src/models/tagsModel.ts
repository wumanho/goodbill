const LOCAL_STORAGE_KEY_NAME = 'tags';
type Tag = {
    id: string;
    name: string;
}
type TagsModel = {
    data: Tag[];
    get: () => Tag[];
    create: (name: string) => string;
    update: (id: string, name: string) => void;
    remove: (id: string) => void;
    save: () => void;
}

const tagsModel: TagsModel = {
    data: [],
    get() {
        this.data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME) || '[]');
        return this.data;
    },
    create(name: string) {
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            throw new Error('标签已存在');
        }
        this.data.push({id: name, name: name});
        this.save();
        return name;
    },
    update(id: string, name: string) {
        const tag = this.data.filter(item => item.id === id)[0];
        if (tag) {
            tag.name = name;
            this.save();
        } else {
            throw new Error('id不存在');
        }
    },
    remove(id: string) {
        let index = -1;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break;
            }
        }
        this.data.splice(index,1)
        this.save();
    },
    save() {
        localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(this.data));
    }
};

export default tagsModel;