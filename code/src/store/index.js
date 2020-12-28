import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
      activeStatus:0
    },
    mutations:{
      changeActiveStatus(state, n){
        state.activeStatus = n
      }
    },
    getters:{

    }
  })

  export default store