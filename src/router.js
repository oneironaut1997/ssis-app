import Vue from 'vue'
import VueRouter from 'vue-router'

// Home
import HomePage from './views/pages/home/HomePage.vue'

// Request
import RequestPage from './views/pages/request/RequestPage.vue'
import RegistrarFormPage from './views/pages/request/RegistrarFormPage.vue'
import GuidanceFormPage from './views/pages/request/GuidanceFormPage.vue'

// Application
import SsoFormPage from './views/pages/application/SsoFormPage.vue'

// Inquiry
import InquiryPage from './views/pages/inquiry/InquiryPage.vue'

// Annoucement
import AnnouncementPage from './views/pages/announcement/AnnouncementPage.vue'
import RegistrarAnnouncementPage from './views/pages/announcement/RegistrarAnnouncementPage.vue'
import GuidanceAnnouncementPage from './views/pages/announcement/GuidanceAnnouncementPage.vue'
import StudentServiceAnnouncementPage from './views/pages/announcement/StudentServiceAnnouncementPage.vue'
import CashierAnnouncementPage from './views/pages/announcement/CashierAnnouncementPage.vue'
import IctmoAnnouncementPage from './views/pages/announcement/IctmoAnnouncementPage.vue'

// Notification
import NotificationPage from './views/pages/notification/NotificationPage.vue'

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

    // Request
    { name: 'request', path: '/request', component: RequestPage },
    { name: 'registrar-form', path: '/request/registrar-form', component: RegistrarFormPage },
    { name: 'guidance-form', path: '/request/guidance-form', component: GuidanceFormPage },

    // Application
    { name: 'application', path: '/application', component: SsoFormPage },

    // Inquiry
    { name: 'inquiry', path: '/inquiry', component: InquiryPage },

    // Announcement
    { name: 'announcement', path: '/announcement', component: AnnouncementPage },
    { name: 'registrar-announcement', path: '/announcement/registrar-announcements', component: RegistrarAnnouncementPage },
    { name: 'guidance-announcement', path: '/announcement/guidance-announcements', component: GuidanceAnnouncementPage },
    { name: 'student-service-announcement', path: '/announcement/student-service-announcements', component: StudentServiceAnnouncementPage },
    { name: 'cashier-announcement', path: '/announcement/cashier-announcements', component: CashierAnnouncementPage },
    { name: 'ictmo-announcement', path: '/announcement/ictmo-announcements', component: IctmoAnnouncementPage },

    // Notigication
    { name: 'notification', path: '/notification', component: NotificationPage },

    // Account
    { name: 'profile', path: '/profile', component: ProfilePage },

      // Auth
    { name: 'login', path: '/login', component: Login },
    { name: 'signup', path: '/signup', component: Signup },
  ]
})
