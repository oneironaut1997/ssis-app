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
    },
    user: {
      namespaced: true,
      state: {
          details: {},
          authenticated: false,
          forgotpassword: false,
      },

      mutations: {
        set(state, values) {
            state.details = values ? values : state.details;
        },

        setAuth(state, value) {
            state.authenticated = value;
        },

        setForgotpassword(state, value) {
            state.forgotpassword = value;
        },

        setSession(state, values){
            state.session.id = values.id ? values.id : state.session.id;
        },

        logout(state){
            state.details = {};
            state.authenticated = false;
        },
      },
    },
    courses: {
      namespaced: true,
      state: {
          details: {},
      },

      mutations: {
        set(state, values) {
            state.details = values ? values : state.details;
        },
      },
    },
    natureOfConcerns: {
      namespaced: true,
      state: {
          details: {},
      },

      mutations: {
        set(state, values) {
            state.details = values ? values : state.details;
        },
      },
    },

    transactions: {
      namespaced: true,
      state: {
          details: {},
      },

      mutations: {
        set(state, values) {
            state.details = values ? values : state.details;
        },
      },
    },

    registrar_announcements: {
      namespaced: true,
      state: {
          details: {},
      },

      mutations: {
        set(state, values) {
            state.details = values ? values : state.details;
        },
      },
    },

    guidance_announcements: {
      namespaced: true,
      state: {
          details: {},
      },

      mutations: {
        set(state, values) {
            state.details = values ? values : state.details;
        },
      },
    },

    student_service_announcements: {
      namespaced: true,
      state: {
          details: {},
      },

      mutations: {
        set(state, values) {
            state.details = values ? values : state.details;
        },
      },
    },

    cashier_announcements: {
      namespaced: true,
      state: {
          details: {},
      },

      mutations: {
        set(state, values) {
            state.details = values ? values : state.details;
        },
      },
    },

    ictmo_announcements: {
      namespaced: true,
      state: {
          details: {},
      },

      mutations: {
        set(state, values) {
            state.details = values ? values : state.details;
        },
      },
    },
  },

  getters: {
    //
  }
})
