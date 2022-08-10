<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from '@/components/NavBar.vue'
import { useRouter } from 'vue-router'

const router = useRouter();

if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect
  delete sessionStorage.redirect
  router.push(redirect)
}

</script>

<template>
  <NavBar />
  <router-view />
</template>
