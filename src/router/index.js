import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue'; 
import TopUp from '@/pages/TopUp.vue';

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
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

export default router; 
