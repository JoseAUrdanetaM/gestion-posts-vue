<script setup>
import { onMounted, ref } from "vue";
import frontServiceConnect from "../api/frontServiceConnect.js";
import Sidebar from "../components/Sidebar.vue";

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

onMounted(() => {
  ListPosts();
});
</script>

<template>
  <div class="container">
    <Sidebar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.ml-64 {
  margin-left: 16rem; /* Asegura un espacio para el sidebar */
}

.container-grow {
  flex-grow: 1; /* Permite que el contenido principal ocupe el espacio restante */
}

.p-6 {
  padding: 1.5rem;
}
</style>
