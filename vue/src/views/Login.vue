<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <!--
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    -->
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" >
                <!-- Email  -->
                <Input v-model="email" type="email" label="Email address"/>
                <ValidationError v-if="validationError?.errors?.email" :text="validationError.errors.email[0]"/>
                <!-- Password  -->
                <Input  v-model="password" type="password" label="Password"/>
                <ValidationError v-if="validationError?.errors?.password" :text="validationError.errors.password[0]"/>
                <ValidationError v-if="validationError?.status" :text="validationError.message"/>
                <Button :isLoading="isLoading" @click="login" type="submit" text="Register"/>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                {{ ' ' }}
                <router-link :to="{name:'register'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register</router-link>
            </p>
        </div>
    </div>
</template>
<script>
import {ValidationError} from "@/components/index.js";
import {mapState} from 'vuex'
export default {
    data(){
        return{
            email:'',
            password:'',
        }
    },
    components:{
        ValidationError
    },
    methods:{
        login(e){
            e.preventDefault();
            const user = {
                email:this.email,
                password:this.password
            }
            this.$store.dispatch('login',user)
                .then(()=>{
                this.$router.push({name:'home'})
            })
        }
    },
    computed: {
        isLoading() {
            return this.$store.state.auth.isLoading
        },
        ...mapState({
            isLoading:state =>state.auth.isLoading,
            validationError:state=>state.auth.errors
                 })
    }

}
</script>
