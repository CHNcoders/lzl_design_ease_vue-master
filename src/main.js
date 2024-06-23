import { createApp } from 'vue';
import App from './views/sucai.vue';
//import App from './App.vue'
import router from './router'; // 注入路由
import './plugins/request'; // 导入 axios 配置文件
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 更新的样式路径
const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount('#app');