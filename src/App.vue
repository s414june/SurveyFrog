<script setup lang="ts">
import Footer from "./components/Footer.vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="bg-zinc-100 min-h-screen vh-for-mobile">
    <div class="grow pb-20">
      <div class="flex justify-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-full w-192 m-4 relative">
          <router-view v-slot=" { Component } ">
            <keep-alive>
              <component :is=" Component " />
            </keep-alive>
          </router-view>
        </div>
      </div>
    </div>
    <div>
      <Footer v-if="router.currentRoute.value.name!='end'"/>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
