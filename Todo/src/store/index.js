import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  user
})

export default store
