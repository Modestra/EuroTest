<template>
  <Header></Header>
  <div class="breadcrumbs">Главная/Кейсы</div>
  <main>
    <h1>Кейсы</h1>
  </main>
  <Footer></Footer>
</template>

<script lang="ts" setup>
import Header from '@components/layouts/Header.vue'
import Footer from '@components/layouts/Footer.vue'
</script>

<style lang="scss" scoped>
main {
  width: 70vw;
  display: flex;
  flex: 1;
}
.breadcrumbs {
  width: 70vw;
  height: 17px;
  margin-bottom: 120px;
}
</style>
