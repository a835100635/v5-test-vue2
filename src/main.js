import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@wangeditor/editor-cattle/dist/css/style.css"; // 也可以在 <style> 中 import

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
