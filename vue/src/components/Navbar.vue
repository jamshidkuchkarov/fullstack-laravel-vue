<template>
    <header class="bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                </a>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <router-link :to="{name:'login'}" class="mx-2 text-sm font-semibold leading-6 text-gray-900">Login</router-link>
                <router-link :to="{name:'register'}" class="mx-2  text-sm font-semibold leading-6 text-gray-900">Register</router-link>
            </div>
        </nav>

    </header>
</template>

<script setup>
import {Bars3Icon} from '@heroicons/vue/24/outline'
</script>
<script>

</script>
