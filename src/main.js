import Vue from 'vue'
import App from './App'
import router from './router'
import ol from 'openlayers'

Vue.prototype.$ol = ol

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
