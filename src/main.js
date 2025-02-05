import {createApp} from 'vue';
import App from './App.vue';
import router from './router/router'; // Adjusted path to router
import 'bootstrap'

const app = createApp(App)
app.use(router)
app.mount('#app')