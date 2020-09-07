import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {
    devServerRender: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
});
