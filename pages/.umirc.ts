import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index', name: 'Home' },
    { path: 'post/:id', component: '@/pages/Detail/Detail', name: '' },
  ],
  dva: {
    immer: false,
    hmr: true,
  }
});
