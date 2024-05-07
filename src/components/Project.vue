<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <figure class="block">
    <span class="category"></span>
    <img :src="project.image" alt="" />
  </figure>
</template>

<script setup>
const props = defineProps({
  project: {
    id: Number,
    title: String,
    slug: String,
    project_url: null,
    image: String,
    image_dark: String,
    description: String,
    geo: {
      lat: null,
      lng: null
    },
    categories: [
      {
        id: Number,
        name: String
      }
    ]
  }
})
</script>

<style lang="scss" scoped>
.block {
  min-width: 387px;
  min-height: 378px;
  position: relative;
  background-color: var(--color-text-2);
  border-radius: 12px;
}
.block img {
  width: 100%;
  height: 100%;
}
.category {
  position: relative;
  width: 128px;
  height: 128px;
}
@media (max-width: 769px) {
}
@media (max-width: 426px) {
  .block {
    min-width: 320px;
  }
}
</style>
