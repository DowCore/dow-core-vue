import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
// Register icon sprite
import 'virtual:svg-icons-register';
import Antd from 'ant-design-vue';
import "ant-design-vue/dist/antd.css";
import App from './App.vue';
import { createApp } from 'vue';
import { createHead } from '@vueuse/head'
import '@purge-icons/generated' 
async function bootstrap() {
  const app = createApp(App);
  // https://next.router.vuejs.org/api/#isready
  // await router.isReady();
  const head=createHead()
  app.use(head)
  app.use(Antd)
  app.mount('#app');
}

bootstrap();
