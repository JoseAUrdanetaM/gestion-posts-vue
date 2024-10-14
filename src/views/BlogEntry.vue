<script setup>
import { onMounted, ref } from "vue";
import frontServiceConnect from "../api/frontServiceConnect.js";
import { useRoute } from "vue-router";

const route = useRoute();

const ListSinglePost = ref("");

const ListPost = () => {
  frontServiceConnect
    .getPost(route.params.id)
    .then((response) => {
      ListSinglePost.value = response.data.data;
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
};

onMounted(() => {
  ListPost();
});
</script>

<template>
  <div
    class="max-w-4xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <img
      :src="ListSinglePost.img"
      alt="Post image"
      class="mb-4 w-full h-96 object-cover rounded-lg"
    />
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
      {{ ListSinglePost.title }}
    </h1>
    <p class="text-gray-500 dark:text-gray-400 mb-2">
      By {{ ListSinglePost.user_id }}
    </p>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
      {{ ListSinglePost.info }}
    </p>
    <div class="text-base text-gray-600 dark:text-gray-400">
      {{ ListSinglePost.content }}
      <!-- Contenido detallado -->
    </div>
  </div>
</template>

<style scoped></style>
