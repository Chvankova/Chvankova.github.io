// import {createApp} from Vue
// const app = Vue

// createApp({
//   data() {
//     return {
//       name: 'Sandra',
//       birthDate: 1982,
//       year: null
//     } 
//   },
//   methods: {
//    age(){
//     this.year - this.birthDate
//    }
//   }
  
// }).mount("#app");

// main.js

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.mount('#app');
