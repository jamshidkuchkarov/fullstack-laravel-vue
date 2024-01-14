import AuthService from "@/service/auth.js";
import {setItem} from "@/helpers/persistaneStorage.js";
const  state = {
    isLoading:false,
    user:null,
    errors:null,
    isLoggedIn:null
}

const mutations = {
    registerStart(state){
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggedIn=null
    },
    registerSuccess(state,payload){
        state.isLoading = false
        state.user = payload
        state.isLoggedIn=true
    },
    registerFailure(state,payload){
        state.isLoading = false
        state.errors = payload
        state.isLoggedIn=false
    },
    loginStart(state){
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggedIn=null
    },
    loginSuccess(state,payload){
        state.isLoading = false
        state.user = payload
        state.isLoggedIn=true

    },
    loginFailure(state,payload){
        state.isLoading = false
        state.errors = payload
        state.isLoggedIn=false
    }
}

const actions = {
   register(context,user) {
       context.commit('registerStart')
      return new Promise((resolve,reject)=>{
          AuthService.register(user)
              .then(response=>{
              context.commit('registerSuccess',response.data.data)
               setItem('token',response.data.data.token)
              resolve(response.data.data)
          }).catch(error=>{
              context.commit('registerFailure',error.response.data)
              reject(error.response.data)
              console.log(error)
          })
      })
   },
    login(context,user) {
        context.commit('loginStart')
        return new Promise((resolve,reject)=>{
            AuthService.login(user)
                .then(response=>{
                    context.commit('loginSuccess',response.data.data)
                    setItem('token',response.data.data.token)
                    resolve(response.data.data)
                }).catch(error=>{
                context.commit('loginFailure',error.response.data)
                reject(error.response.data)
            })
        })
    }
}

export default {
    state,mutations,actions
}
