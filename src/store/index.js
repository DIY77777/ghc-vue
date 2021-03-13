import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      // localStorage 本地储存 项目打开的时候判断本地存储中是否有user这个对象存在，如果存在就取出username的值，否则就username为空
      // eslint-disable-next-line no-constant-condition
      username: window.localStorage.getItem('user' || '[]' == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username)
    }
  },
  // 记录用户信息的变量
  mutations: {
    login (state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }
})
