import Vue from 'vue'
import VueRouter from 'vue-router'


// Home
import HomePage from './views/pages/home/HomePage.vue'

// Loan
import LoansPage from './views/pages/loans/LoansPage.vue'
import ApplyLoanPage from './views/pages/loans/ApplyLoanPage.vue'
import SelectedLoanPage from './views/pages/loans/SelectedLoanPage.vue'

// Contact
import ContactUsPage from './views/pages/contact-us/ContactUsPage.vue'

// Account
import ProfilePage from './views/pages/profile/ProfilePage.vue'
import ProfileFormPage from './views/pages/profile/ProfileFormPage.vue'
import ProfilePasswordFormPage from './views/pages/profile/ProfilePasswordFormPage.vue'

// Auth
import Login from './views/auth/LoginPage.vue'
import Signup from './views/auth/SignupPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    // Home
    { name: 'home', path: '/', component: HomePage },

    // Loan
    { name: 'loans', path: '/loans', component: LoansPage },
    { name: 'apply-loan', path: '/apply-loan', component: ApplyLoanPage },
    { name: 'selected-loan', path: '/selected-loan', component: SelectedLoanPage },

    // Contact
    { name: 'contact-us', path: '/contact-us', component: ContactUsPage },

    // Account
    { name: 'profile', path: '/profile', component: ProfilePage },
    { name: 'profile-form', path: '/profile/form', component: ProfileFormPage },
    { name: 'profile-password-form', path: '/profile/password', component: ProfilePasswordFormPage },

      // Auth
    { name: 'login', path: '/login', component: Login },
    { name: 'signup', path: '/signup', component: Signup },
  ]
})
