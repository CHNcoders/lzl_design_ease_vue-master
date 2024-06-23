<script setup>
import PersonLeft from "./PersonLeft.vue";
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  
  <nav-bar />
  <div class="view">
   <person-left />
   <router-view />
  </div>
  
</template>


<style scoped>
.view{
  display: flex;
  flex-direction: row;
  /* margin-top: 84px ; */
  text-align: center;
  align-items: center;
  justify-content: center;
}
</style>

