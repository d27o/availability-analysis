<script setup>
</script>

<template>
  <nav class="flex justify-between bg-cyan-500 p-3">
    <div>
      <img src="@/assets/vue.svg" alt="Logo">
    </div>
    <ul class="flex text-xl text-white">
      <li class="pr-3">
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>