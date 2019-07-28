import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import SamplePage from './views/SamplePage.vue'
import SampleForm from './views/SampleForm.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'page', path: '/page', component: SamplePage },
    { name: 'form', path: '/form', component: SampleForm }
  ]
})
