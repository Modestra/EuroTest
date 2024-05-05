<template>
  <Header></Header>
  <div class="breadcrumbs">Главная/Кейсы</div>
  <main>
    <h1>Кейсы</h1>
    <section></section>
    <div class="block__container">
      <Project v-for="project in projects" />
    </div>
  </main>
  <Footer></Footer>
</template>

<script lang="ts" setup>
import Header from '@components/layouts/Header.vue'
import Footer from '@components/layouts/Footer.vue'
import { onActivated, ref } from 'vue'
import { getProjects } from '@/services/ProductsService'
import Project from '@components/Project.vue'

const projects = ref([])

onActivated(() => {
  getProjects().then((resp) => {
    projects.value = resp.data
    console.log(projects.value)
  })
})
//Работает
getProjects().then((resp) => {
  projects.value = resp.data.items
  console.log(projects.value)
})
</script>

<style lang="scss" scoped>
main {
  width: 70vw;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.breadcrumbs {
  width: 70vw;
  height: 17px;
  margin-bottom: 120px;
}
.block__container {
  width: 70vw;
  margin-top: 30px;
  margin-bottom: 50px;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(0.3fr, 1fr));
}
@media (max-width: 376px) {
  main {
    width: 85vw;
  }
  .breadcrumbs {
    width: 85vw;
  }
}
</style>
