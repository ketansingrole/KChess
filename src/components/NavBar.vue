<template>
  <div class="nav-bar bg-gray-600 flex flex-col w-max h-screen">
    <div id="home">
      <router-link to="/"
        ><img id="home" src="../assets/home.svg" alt="home"
      /></router-link>
    </div>
    <div id="computer">
      <router-link to="/computer">
        <img id="computer" src="../assets/desktop-outline.svg" alt="computer"
      /></router-link>
    </div>
    <div id="settings" class="mt-auto">
      <router-link to="/settings"
        ><img
          id="settings"
          src="../assets/settings-white-48dp.svg"
          alt="settings"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>