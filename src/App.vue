<template>
  <suspense>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component
          :is="Component"
          v-if="$route.meta.keepAlive"
          :key="$route.path"
        />
      </keep-alive>
      <component
        :is="Component"
        v-if="!$route.meta.keepAlive"
        :key="$route.path"
      />
    </router-view>
  </suspense>
</template>

<script setup lang="ts"></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<style>
.n-card > .n-card-header {
  padding: 10px 24px 15px 24px;
}
</style>
