import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
      activeStatus:0,
      mailAddress:'',
    },
    mutations:{
      changeActiveStatus(state, statusCode){
        state.activeStatus = statusCode;
      },
      changeMailAddress(state,mail){
        state.mailAddress = mail;
      }
    },
    getters:{

    }
  })

  export default store