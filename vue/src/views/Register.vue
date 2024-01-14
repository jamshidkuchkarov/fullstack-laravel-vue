<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

            <form class="space-y-6">
                 <!-- User name  -->
                <Input  v-model="name" type="text" label="User name"/>
                <ValidationError v-if="validationError.errors?.name" :text="validationError.errors.name[0]"/>
                <!-- Email  -->
                <Input v-model="email" type="email" label="Email address"/>
                <ValidationError v-if="validationError.errors?.email" :text="validationError.errors.email[0]"/>
                <!-- Password  -->
                <Input  v-model="password" type="password" label="Password"/>
                <ValidationError v-if="validationError.errors?.password" :text="validationError.errors.password[0]"/>
                <!-- Password confirmation  -->
                <Input  v-model="password_confirmation" type="password" label="Password Confirmation"/>
                <Button :isLoading="isLoading" @click="submit" type="submit" text="Register"/>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
               Already member?
                {{ ' ' }}
                <router-link  :to="{name:'login'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</router-link>
            </p>
        </div>
    </div>
</template>


<script>
import {ValidationError} from "@/components/index.js";
export default {
    data(){
      return{
        name:'',
        email:'',
        password: '',
        password_confirmation:'',
        validationError:{},
      }
    },
    methods:{
        submit(e){
            e.preventDefault();
            const user = {
                name:this.name,
                email:this.email,
                password:this.password,
                password_confirmation:this.password_confirmation
            };
            this.$store.dispatch('register',user)
                .then(user=>{
                this.$router.push({name:'home'})
                })
                .catch(error=>{
                    this.validationError = error
                console.log(error)
            })
        }
    },
    computed:{
        isLoading(){
            return this.$store.state.auth.isLoading
        },
    },
    components:{
        ValidationError
    }
}

</script>
