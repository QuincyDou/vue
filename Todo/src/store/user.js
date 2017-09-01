import {loginByUsername} from "../api/login";
import {getToken, setToken} from "../utils/auth";

const user = {
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    LoginByUsername({commit}, userInfo) {
      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data;
          setToken(response.data.token);
          commit('SET_TOKEN', data.token);
          resolve();
        }).catch(error => {
          reject(error);
        })
      })
    }
  }
}
