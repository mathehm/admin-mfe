<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/app1">App1</RouterLink>
        <!-- <RouterLink to="/welcome">welcome</RouterLink> -->
        <RouterLink to="/admin">admin</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  max-height: 100vh;
  background-color: #333;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  background-color: #17A4D3;
}

nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    display: flex;
    flex-direction: column;
  }
}
</style>
