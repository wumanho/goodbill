import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import BaseLayout from '@/components/BaseLayout.vue';
import Icon from '@/components/Icon.vue';
import tagsModel from '@/models/tagsModel';


Vue.config.productionTip = false;

Vue.component('BaseLayout', BaseLayout);
Vue.component('Icon', Icon);
window.tagList = tagsModel.get();
window.createTag = (name: string) => {
    try {
        tagsModel.create(name);
    } catch (err) {
        alert(err);
    }
};

new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');
