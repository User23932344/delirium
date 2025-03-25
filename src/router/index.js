import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import TopUp from '@/pages/TopUp.vue';
import Rating from '@/pages/Rating.vue'; // Импорт компонента Rating
import Wiki from '@/pages/Wiki.vue';
import Maps from '@/pages/Map.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
