import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa' // default - only for display purposes
  },

  theme: {
    themes: {
      light: {
        primary: '#022C43',
        secondary: '#053F5E',
        accent: '#115173',
        error: '#FF5252',
        info: '#115173',
        success: '#4CAF50',
        warning: '#FFD700'
      }
    }
  }
})
