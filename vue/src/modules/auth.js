import AuthService from "@/service/auth.js";
const  state = {
    isLoading:false
}

const mutations = {
    registerStart(state){
        state.isLoading = true
    },
    registerSuccess(state){
        state.isLoading = false
    },
    registerFailure(state){
        state.isLoading = false
    }
}

const actions = {
   register(context,user) {
      return new Promise(()=>{
          AuthService.register(user).then(response=>{
              console.log('response',response)
          }).catch(error=>{
              console.log(error)
          })
      })
   }
}

export default {
    state,mutations,actions
}
