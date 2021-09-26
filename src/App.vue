<script setup lang="ts">
import { useHead } from '@vueuse/head'
import SvgIcon from './components/Icon/SvgIcon/index.vue'
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'DowVue',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})
</script>

<template>
  <svg-icon name="business"  class="h-8 w-8 text-red-300"></svg-icon>
  <a-button type="dashed">Dashed Button</a-button>
  <span class="iconify" data-icon="fa:home"></span> 
  <button
    w:bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
    w:text="sm white"
    w:font="mono light"
    w:p="y-2 x-4"
    w:border="2 rounded blue-200"
  >Button</button>
  <router-view />
</template>
