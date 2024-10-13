<script setup>
import { onMounted, ref } from "vue";
import frontServiceConnect from "../api/frontServiceConnect.js";

const ListAllPosts = ref("");

const ListPosts = () => {
  frontServiceConnect
    .getPosts()
    .then((response) => {
      ListAllPosts.value = response.data.data;
      console.log(response.data.data);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
};

defineProps({
  msg: String,
});

onMounted(() => {
  ListPosts();
});

const count = ref(0);
</script>

<template>
  <h1>{{ ListAllPosts }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
