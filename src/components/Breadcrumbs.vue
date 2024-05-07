<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="breadcrumbs">Главная/{{ item }}</div>
</template>

<script setup>
const props = defineProps({
  item: String
})
</script>

<style lang="scss">
.breadcrumbs {
  width: 70vw;
  height: 17px;
  margin-bottom: 120px;
}
</style>
