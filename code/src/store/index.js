import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
      activeStatus:0,
      mailAddress:'',
      userData:'[{"title":"银行卡","menus":[{"item":"农业银行"},{"item":"建设银行"}]},{"title":"身份证"},{"title":"护照"}]',
    },
    mutations:{
      changeActiveStatus(state, statusCode){
        state.activeStatus = statusCode;
      },
      changeMailAddress(state,mail){
        state.mailAddress = mail;
      },
      setUserData(state,data){
        state.userData = data;
      }
    },
    getters:{

    }
  })

  export default store