import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import Bill from '@/views/Bill.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path:"/",
        redirect:"/bill"
    },
    {
        path:"/bill",
        component:Bill
    },
    {
        path:"/labels",
        component:Labels
    },
    {
        path:"/statistics",
        component:Statistics
    }
];

const router = new VueRouter({
    routes
});

export default router;
