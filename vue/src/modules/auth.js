import AuthService from "@/service/auth.js";
import {removeItem, setItem} from "@/helpers/persistaneStorage.js";
import {gettersTypes} from "@/modules/types.js";

const  state = {
    isLoading:false,
    user:null,
    errors:null,
    isLoggedIn:null
}
const getters = {
    [gettersTypes.currentUser]:state=>{
        return state.user
    },
    [gettersTypes.isLoggedIn]:state=>{
        return Boolean(state.isLoggedIn)
    },
    [gettersTypes.isAnonymous]:state=>{
        return state.isLoggedIn === false
    }
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
    },
    currentUserStart(state){
        state.isLoading = true
        state.user = null
    },
    currentUserSuccess(state,payload){
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    currentUserFailure(state,payload){
        state.isLoading = false
        state.isLoggedIn = false
       state.errors = payload
    },
    logout(state){
        state.user = null
        state.isLoggedIn = false
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
    },
    getUser(context){
       return new Promise((resolve)=>{
           context.commit('currentUserStart')
           AuthService.getUser().then(response=>{
             context.commit('currentUserSuccess',response.data)
               resolve(response.data)
           }).catch(()=>context.commit('currentUserFailure'))

       })
    },
    logout(context){
       context.commit('logout')
        removeItem('token')
    }
}

export default {
    state,mutations,actions,getters
}
