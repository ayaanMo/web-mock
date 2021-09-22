import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import animated from 'animate.css';
import VueParticlesBg from 'particles-bg-vue';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css';
const app = createApp(App);
app.use(animated).use(VueParticlesBg).use(ElementPlus).use(store).use(router).mount('#app');