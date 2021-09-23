import '/@/design/index.less';
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
// Register icon sprite
import 'virtual:svg-icons-register';
import App from './App.vue';
import { createApp } from 'vue';
// Importing on demand in local development will increase the number of browser requests by around 20%.
// This may slow down the browser refresh speed.
// Therefore, only enable on-demand importing in production environments .
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.less');
}
import { createHead } from '@vueuse/head'
async function bootstrap() {
  const app = createApp(App);
  // https://next.router.vuejs.org/api/#isready
  // await router.isReady();
  const head=createHead()
  app.use(head)
  app.mount('#app');
}

bootstrap();
