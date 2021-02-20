import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex);

type RootState = {
    recordList: RecordItem[];
    tagList: Tag[];
    currentTag?: Tag;
}
const store = new Vuex.Store({
    state: {
        recordList: [],
        tagList: [],
        currentTag: undefined
    } as RootState,
    mutations: {
        findTag(state, id: string) {
            state.currentTag = state.tagList.filter(t => t.id === id)[0];
        },
        getRecords(state) {
            state.recordList = JSON.parse(localStorage.getItem('records') || '[]');
        },
        getTags(state) {
            state.tagList = JSON.parse(localStorage.getItem('tags') || '[]');
        },
        createTag(state, name: string) {
            const id = createId().toString();
            const names = state.tagList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                throw new Error('标签已存在');
            }
            state.tagList.push({id, name: name});
            store.commit('saveTags');
            return name;
        },
        createRecord(state, record: RecordItem) {
            const newRecord: RecordItem = clone(record);
            newRecord.createTime = new Date();
            state.recordList.push(newRecord);
            store.commit('saveRecords');
            location.reload();
        },
        updateTag(state, payload: { id: string; name: string }) {
            const {id, name} = payload;
            const tag = state.tagList.filter(item => item.id === id)[0];
            if (tag) {
                tag.name = name;
                store.commit('saveTags');
            } else {
                throw new Error('id不存在');
            }
        },
        removeTag(state,id: string) {
            let index = -1;
            for (let i = 0; i < state.tagList.length; i++) {
                if (state.tagList[i].id === id) {
                    index = i;
                    break;
                }
            }
            state.tagList.splice(index, 1);
            store.commit('saveTags');
        },
        saveTags(state) {
            localStorage.setItem('tags', JSON.stringify(state.tagList));
        },
        saveRecords(state) {
            localStorage.setItem('records', JSON.stringify(state.recordList));
            alert('记账成功');
        }
    }
    // actions: {},
    // modules: {}
});

export default store;
