import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    // auth routes

    {
      path: '/auth',
      redirect: '/auth/signup',
      component: () => import('../layouts/auth.vue'),
      children: [
        {
          path: 'signup',
          name: 'signup',
          component: () => import('../views/auth/signup.vue'),
        },
        {
          path: 'signin',
          name: 'signin',
          component: () => import('../views/auth/signin.vue'),
        },
        {
          path: 'verify-account',
          name: 'verify-account',
          component: () => import('../views/auth/verify-account.vue'),
        },
        {
          path: 'forgot-password',
          name: 'forgot-password',
          component: () => import('../views/auth/forgot-password.vue'),
        },
        {
          path: 'reset-password',
          name: 'reset-password',
          component: () => import('../views/auth/reset-password.vue'),
        },
      ],
    },
    {
      path: '/dashboard',
      redirect: '/dashboard/overview',
      component: () => import('../layouts/dashboard.vue'),
      children: [
        {
          name: 'overview',
          path: 'overview',
          component: () => import('../views/dashboard/index.vue'),
        },
      ],
    },

    // auth routes
  ],
});

export default router;
