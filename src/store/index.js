import { createStore } from 'vuex'

export default createStore({
  state: {
    // state管理
    // どういうデータを管理するのか
    memos: []
  },
  getters: {
    // データの取得の方法
  },
  mutations: {
    // save memo
    save (state, newMemo) {
      state.memos.unshift(newMemo)
    }
  },
  actions: {
    // 非同期通信で使う
  },
  modules: {
  }
})
