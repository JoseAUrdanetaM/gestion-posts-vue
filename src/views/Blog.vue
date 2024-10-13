<script setup>
import { onMounted, ref } from "vue";
import frontServiceConnect from "../api/frontServiceConnect.js";
import Card from "../components/Card.vue";

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
  <div class="flex flex-wrap gap-6">
    <!-- Bucle para generar varias tarjetas -->
    <Card
      v-for="(post, index) in ListAllPosts"
      :key="index"
      :id="post.id"
      :title="post.title"
      :description="post.info"
      :image="post.img"
    />
  </div>
</template>

<style scoped></style>
