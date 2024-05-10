<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="block">
    <img :src="project.image" alt="" />
    <span class="category">{{ project.title }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    id: Number,
    title: String,
    slug: String,
    project_url: null,
    image: String,
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

console.log(props.project.image)
</script>

<style lang="scss" scoped>
.block {
  min-width: 387px;
  min-height: 378px;
  position: relative;
  display: inline-block;
  background-color: var(--color-text-2);
  border-radius: 12px;
}
.block img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}
.category {
  position: absolute;
  background-color: gray;
  display: flex;
  color: var(--color-text-1);
  align-items: center;
  justify-content: center;
  font-family: Fira Sans Condensed;
  font-weight: 600;
  line-height: 28.8px;

  top: 25px;
  right: 25px;
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
