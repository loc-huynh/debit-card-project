import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/DebitsLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Index.vue') }],
  },
  {
    path: '/cards',
    component: () => import('src/layouts/DebitsLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Cards.vue') }],
  },
  {
    path: '/game',
    component: () => import('src/layouts/DebitsLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Game.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
