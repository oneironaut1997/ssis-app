import Vue from 'vue'
import VueRouter from 'vue-router'


// Home
import HomePage from './views/pages/home/HomePage.vue'

// Request
import RequestPage from './views/pages/request/RequestPage.vue'

// Contact
import ContactUsPage from './views/pages/contact-us/ContactUsPage.vue'

// Account
import ProfilePage from './views/pages/profile/ProfilePage.vue'

// Auth
import Login from './views/auth/LoginPage.vue'
import Signup from './views/auth/SignupPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    // Home
    { name: 'home', path: '/', component: HomePage },

    // Home
    { name: 'request', path: '/request', component: RequestPage },

    // Contact
    { name: 'contact-us', path: '/contact-us', component: ContactUsPage },

    // Account
    { name: 'profile', path: '/profile', component: ProfilePage },

      // Auth
    { name: 'login', path: '/login', component: Login },
    { name: 'signup', path: '/signup', component: Signup },
  ]
})
