<template>
  <div class="nav-bar">
    <nav>
      <ul>
        <li v-for="link in router.options.routes" :key="link.name">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped lang="scss">
ul {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 20px;
  margin: 0;
  background: #078b69;
  padding: 10px;
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
