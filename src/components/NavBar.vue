<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter();

    const goToLink = (routeName) => {
      router.push({
        name: routeName
      })
    }

    return {
      goToLink
    }
  }
}     
</script>

<template>
  <nav class="flex justify-between bg-cyan-500 p-3">
    <div>
      <img src="@/assets/vue.svg" alt="Logo">
    </div>
    <ul class="flex text-xl text-white">
      <li class="pr-3">
        <button @click.prevent = "goToLink('home')">
          Home
        </button>
      </li>
      <li>
        <button @click.prevent = "goToLink('about')">
          About
        </button>
      </li>
    </ul>
  </nav>
</template>