import { createApp } from 'vue';
import App from './App.vue';

// import '/axios';
import router from "./router";
import store from './vuex';


createApp(App)
.use(router)
.use(store)
.mount('#app');
