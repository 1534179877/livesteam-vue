import { createApp } from 'vue'
import App from './App.vue'
import router from './router/main.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from "./store/store"

const app = createApp(App);

//注册组件
app.use(router);
app.use(ElementPlus);
app.use(store);

app.mount('#app');
