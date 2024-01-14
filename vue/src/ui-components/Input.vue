<template>
    <div>
        <label class="block text-sm font-medium leading-6 text-gray-900">{{label}}</label>
        <div class="mt-2">
            <input :value="modelValue" @input="updateInput" :type="type" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
    </div>
</template>


<script>
export default {
    props:{
        label:String,
        type:String,
        modelValue:[String,Number]
    },
    methods:{
      updateInput(e)
      {
          this.$emit('update:modelValue',e.target.value)
      }
    },
    name:'Input'
}
</script>
