import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    screen: {
      namespaced: true,
      state: {
        scrollable: true
      },

      mutations: {
        scrollable (state, value) {
          state.scrollable = value
        }
      }
    }
  },

  getters: {
    //
  }
})
