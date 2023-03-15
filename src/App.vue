<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        Vue Router Beispiel
      </div>
      <nav>
        <!-- Navigation -->
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Über uns</RouterLink>
        <RouterLink to="/secret">Top secret</RouterLink>
      </nav>
    </div>
  </header>

  <main class="container">
    <!-- Inhalt -->
    <RouterView />
  </main>
</template>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 16px;
  background: #f0f0f0;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

header {
  background: #333;
  padding: 20px;
  color: #fff;
}

header .container {
  display: flex;
  justify-content: space-between;
}

.logo {
  flex-shrink: 0;
  flex-grow: 0;
}

nav {
  display: flex;
}

nav a {
  display: inline-block;
  color: #fff;
  margin-left: 10px;
}

.router-link-active {
  color: yellow;
  text-decoration: underline;
}
</style>
