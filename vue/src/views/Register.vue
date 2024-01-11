<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <Input type="email" label="Email address"/>
                <Input type="password" label="Password"/>
                <Button @click="submit" type="submit" text="Register"/>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
               Already member?
                {{ ' ' }}
                <router-link :to="{name:'login'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</router-link>
            </p>
        </div>
    </div>
</template>


<script>
export default {
    methods:{
        submit(e){
            e.preventDefault();
            const user = {
                name:"jamshid",
                email:"jamshisd21@gmail.com",
                password:"12345678",
                password_confirmation:"12345678"
            };
            this.$store.dispatch('register',user);
        }
    }
}
</script>
