import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ForumView from '../views/ForumView.vue';
import DiscoverView from '../views/DiscoverView.vue';
import BlogView from '../views/BlogView.vue';
import SigninView from '../views/SigninView.vue';
import SignupView from '../views/SignupView';
import Planner from '../views/Planner.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/forum',
    name: 'forum',
    component: ForumView,
  },
  {
    path: '/discover',
    name: 'discover',
    component: DiscoverView,
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
  },
  {
    path: '/planner',
    name: 'planner',
    component: Planner,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
