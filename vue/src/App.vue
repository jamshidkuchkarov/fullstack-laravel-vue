<template>
  <RouterView />
</template>


<script>
import {Navbar} from "@/components";
export default {
    components: {Navbar},
    mounted() {
        this.$store.dispatch('getUser')
    }
}
</script>
