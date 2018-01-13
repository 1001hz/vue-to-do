import Vuex from 'vuex'
import Vue from 'vue'
import { userStore, tasksStore } from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userStore,
    tasksStore
  }
})
