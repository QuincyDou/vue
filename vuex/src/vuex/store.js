/**
 * Created by Administrator on 2017/8/24.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}

const getters = {
  count: function (state) {
    return state.count += 3
  }
}

const actions = {
  addAction (context) {
    context.commit('add', 5);
    setTimeout(()=>{context.commit('reduce')}, 3000);
    console.log('我比reduce先执行');
  },
  reduceAction ({commit}) {
    commit('reduce')
  }
}

export default new Vuex.Store({
  state, mutations, getters, actions
})
