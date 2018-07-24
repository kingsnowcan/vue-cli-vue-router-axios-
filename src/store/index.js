import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
//import login_store from '../components/login_store.js';
export default new vuex.Store({
    state:{
    	name:'',
    	
    	checkStatue:"",
    },
   mutations:{
   	userLogin(state,msg){  		
   		localStorage.setItem('userLogin',msg);
   		state.name = msg;
   	},
   	checkStatue(state,msg){
   		state.checkStatue = msg;
   		localStorage.setItem('checkStatue',msg);
   	}

     // LOGIN(state){
     //  // state.checkStatue = true
     //   let user = JSON.parse(sessionStorage.getItem('user'))
     //   state.loginedUser.name = user.name
     //   state.loginedUser.password = user.password     
     // },

   },
   // actions:{
   //     login(context){
   //     	context.commit('LOGIN')
   //     },
   // }
    
})