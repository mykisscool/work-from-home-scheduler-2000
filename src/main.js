import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
