import AuthService from "@/service/auth.js";
import {setItem} from "@/helpers/persistaneStorage.js";
import ArticleService from "@/service/articles.js";

const state = {
     data:null,
     isLoading:false,
     error:null
 }

 const mutations = {
    getArticlesStart(state){
        state.isLoading = true
        state.data = null
        state.error = null
    },
     getArticlesSuccess(state,payload){
         state.isLoading = false
         state.data = payload
     },
     getArticlesFailure(state){
         state.isLoading = false
     }
 }
 const actions = {
    articles(context){
        return new Promise((resolve,reject)=>{
            context.commit('getArticlesStart')
            ArticleService.articles()
                .then(response=>{
                    context.commit('getArticlesSuccess',response.data.data.articles)
                    resolve(response.data.data.articles)
                    console.log(response)
                }).catch(()=>context.commit('getArticlesFailure'))
        })
    }
 }
 export default {
    state,mutations,actions
 }
