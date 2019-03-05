import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store=new Vuex.Store({
    //state
    state:{
        city:"城市名"
    },
    //getters
    getters:{
        getInfo(state){
            return state.city;
        }
    },
    //通常跟api接口打交道
    actions:{
        setNameInfo({commit,state},name){
            commit('setName',name)
        }
    },
    mutations:{
        setName(state,name){
            state.city=name
        }
    }
});
export default store;