<template>
    <div>
        <button :type="type" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{text}}</button>
    </div>
</template>

<script>
export default {
    props:{
        type:String,
        text:String
    },
    name:'Button'
}
</script>
