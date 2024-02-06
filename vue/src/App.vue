<template>
  <RouterView />
</template>


<script>
import {Navbar} from "@/components";
import {mapState} from "vuex";
export default {
    components: {Navbar},
    mounted() {
        this.$store.dispatch('getUser')
    }
}
</script>
