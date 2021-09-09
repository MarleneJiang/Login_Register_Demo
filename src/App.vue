<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Login from './components/Login.vue'
</script>

<template>
  <div class="flex items-center justify-center h-full ">
    <router-view v-slot="{ Component }">
      <transition name="fade" >
        <keep-alive>
          <component :is="Component"/>
        </keep-alive>
      </transition>
    </router-view>
    <!--    <Login/>-->
  </div>
</template>

<style>

</style>
