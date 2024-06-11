import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home.vue';
import useAuthStore from '@/stores/auth';

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
          meta: { guestOnly: true },
        },
        {
          path: 'signin',
          name: 'signin',
          component: () => import('../views/auth/signin.vue'),
          meta: { guestOnly: true },
        },
        {
          path: 'activate-account',
          name: 'activate-account',
          component: () => import('../views/auth/activate-account.vue'),
          meta: { requiresAuth: true },
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
      meta: { requiresAuth: true },
      children: [
        {
          name: 'overview',
          path: 'overview',
          component: () => import('../views/dashboard/index.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },

    // auth routes
  ],
});

router.beforeEach((to, from, next) => {
  const AuthStore = useAuthStore();

  if (!to.meta.requiresAuth && !to.meta.guestOnly) {
    return next();
  }

  if (AuthStore.hasFetchedUserPreviously) {
    if (to.matched.some((e) => e?.meta.requiresAuth)) {
      if (!AuthStore.user) {
        return next({ name: 'signin' });
      } else {
        return next();
      }
    } else if (to.matched.some((e) => e?.meta.guestOnly)) {
      if (AuthStore.user) {
        return next({ name: 'home' });
      } else {
        return next();
      }
    }
  } else {
    // AuthStore.fetchUserDetails().then().catch({});

    AuthStore.fetchUserDetails()
      .then(() => {
        if (to.matched.some((record) => record.meta.requiresAuth)) {
          if (!AuthStore.user) {
            return next({ name: 'signin' });
          } else {
            return next();
          }
        } else if (to.matched.some((record) => record.meta.guestOnly)) {
          if (AuthStore.user) {
            return next({ name: 'overview' });
          } else {
            return next();
          }
        } else {
          return next();
        }
      })
      .catch(() => {
        if (to.matched.some((record) => record.meta.requiresAuth)) {
          return next({ name: 'signin' });
        }
        return next();
      });
  }

  // if (to.matched.some((e) => e?.meta.requiresAuth)) {
  //   if (AuthStore.hasFetchedUserPreviously && !AuthStore.user) {
  //     return next({ name: 'signin' });
  //   }
  // }
});

export default router;
