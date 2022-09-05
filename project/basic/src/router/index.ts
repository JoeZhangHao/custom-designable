import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import MainView from '../views/Main';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
