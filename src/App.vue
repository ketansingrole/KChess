<template>
  <div class="flex bg-background h-screen w-screen">
    <div class="flex w-40">
      <NavBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
