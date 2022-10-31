import './bootstrap';

import Main from './components/Main.vue';
import { createApp } from 'vue';
import router  from './router/router.js';

const app = createApp(Main);
app.use(router);
app.mount("#app");