<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="block"></div>
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
  background-color: var(--color-text-2);
}
.block img {
  width: 100%;
  height: 100%;
}
</style>
