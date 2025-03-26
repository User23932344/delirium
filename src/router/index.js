import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import TopUp from '@/pages/TopUp.vue';
import Rating from '@/pages/Rating.vue';
import Wiki from '@/pages/Wiki.vue';
import Maps from '@/pages/Map.vue';
import PersonalAccount from '@/pages/PersonalAccount.vue';
import Transport from '@/pages/Transport.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/top-up',
    name: 'TopUp',
    component: TopUp,
  },
  {
    path: '/rating', 
    name: 'Rating',  
    component: Rating, 
  },
  {
    path: '/wiki', 
    name: 'WIKI',  
    component: Wiki, 
  },
  {
    path:'/map',
    name:'Map',
    component: Maps,
  },
  {
    path:'/personalaccount',
    name:'PersonalAccount',
    component: PersonalAccount,
  },
  {
    path:'/transport',
    name:'Transport',
    component: Transport,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
