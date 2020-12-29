import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
      activeStatus:0,
      mailAddress:'949052312@qq.com',
      userData:'[{"title":"导航1","menus":[{"item":"分栏1"},{"item":"分栏2"}]},{"title":"导航2"},{"title":"导航3"}]',
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