<template>
   <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
        {{text}}
	</span>
</template>


<script>

export default {
    name:'ValidationError',
    props:{
        text:String
    }
}
</script>
