import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import BaseLayout from '@/components/BaseLayout.vue';
import Icon from '@/components/Icon.vue';


Vue.config.productionTip = false;

Vue.component('BaseLayout', BaseLayout);
Vue.component('Icon', Icon);

new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');
