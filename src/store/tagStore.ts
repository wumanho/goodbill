import createId from '@/lib/createId';

const LOCAL_STORAGE_KEY_NAME = 'tags';

const tagStore = {
    tagList: [] as Tag[],
    /**
     * 标签读写
     */
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0];
    },
    getTags() {
        this.tagList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME) || '[]');
        return this.tagList;
    },
    createTag(name: string) {
        const id = createId().toString();
        const names = this.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            throw new Error('标签已存在');
        }
        this.tagList.push({id, name: name});
        this.saveTags();
        return name;
    },
    removeTag(id: string) {
        let index = -1;
        for (let i = 0; i < this.tagList.length; i++) {
            if (this.tagList[i].id === id) {
                index = i;
                break;
            }
        }
        this.tagList.splice(index, 1);
        this.saveTags();
    },
    updateTag(id: string, name: string) {
        const tag = this.tagList.filter(item => item.id === id)[0];
        if (tag) {
            tag.name = name;
            this.saveTags();
        } else {
            throw new Error('id不存在');
        }
    },
    saveTags() {
        localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(this.tagList));
    }
};
tagStore.getTags();
export default tagStore;