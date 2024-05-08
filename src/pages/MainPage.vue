<template>
  <BurgerMenu v-if="isActiveMenu"></BurgerMenu>
  <Header @click="setActiveMenu" :active="isActiveMenu"></Header>
  <Breadcrumbs :item="$route.name"></Breadcrumbs>
  <main>
    <h1>Кейсы</h1>
    <section class="category__grid">
      <button
        class="category"
        @click="fil(category.name)"
        v-for="category in categories"
        :key="category.id"
      >
        <p>{{ category.name }}</p>
      </button>
    </section>
    <div class="block__container">
      <Project project="{{ project }}" v-for="project in projects.filted" :key="project.id" />
    </div>
    <h1>Расскажите о вашем проекте</h1>
    <form>
      <section class="form__grid">
        <fieldset class="form">
          <legend>Ваше имя</legend>
          <input />
        </fieldset>
        <fieldset class="form">
          <legend>Email</legend>
          <input />
        </fieldset>
        <fieldset class="form">
          <legend>Телефон</legend>
          <input />
        </fieldset>
      </section>
      <section class="form__grid">
        <fieldset class="form__textarea">
          <legend>Сообщение</legend>
          <textarea></textarea>
        </fieldset>
      </section>
      <section class="form__confirm">
        <input type="checkbox" />
        <p>Согласие на обработку персональных данных</p>
      </section>
      <section class="form__button">
        <button class="btn" type="submit">Обсудить проект</button>
      </section>
    </form>
  </main>
  <Footer></Footer>
</template>

<script setup>
import Header from '@components/layouts/Header.vue'
import Footer from '@components/layouts/Footer.vue'
import Breadcrumbs from '@components/Breadcrumbs.vue'
import BurgerMenu from '@components/BurgerMenu.vue'
import { useCategoryStore } from '@/stores/category'
import { onActivated, ref, watchEffect } from 'vue'
import { getCategories, getProjects } from '@/services/ProductsService'
import Project from '@components/Project.vue'
import { useCounterStore } from '@/stores/projects'

const projects = useCounterStore()
const categories = ref([])

const isActiveMenu = ref(false)

function setActiveMenu() {
  isActiveMenu.value = !isActiveMenu.value
}
getProjects().then((resp) => {
  projects.setData(resp.data.items)
  console.log(projects.projects)
})
getCategories().then((resp) => {
  categories.value = resp.data.items
})

function fil(cat) {
  console.log(cat)
  projects.filterList(cat)
}
</script>

<style lang="scss" scoped>
.category {
  width: auto;
  height: 49px;
  border-radius: 7px;
  background-color: var(--background-color-75);
  display: flex;
  justify-content: center;
  align-items: center;
  &__grid {
    width: 100%;
    min-height: 49px;
    margin-top: 40px;
    margin-bottom: 40px;
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(49px, 1fr));
  }
  &--active {
    background-color: #2d76f9;
  }
}
.category p {
  font-size: 18px;
  font-weight: 400;
  line-height: 28.8px;
  text-align: left;
}

main {
  width: 70vw;
  display: flex;
  flex-direction: column;
  flex: 1;
}
main h1 {
  font-family: Fira Sans Condensed;
  font-size: 48px;
  font-weight: 600;
  line-height: 57.6px;
  text-align: left;
  color: var(--color-text-1);
}
.block__container {
  width: 70vw;
  margin-top: 30px;
  margin-bottom: 50px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(387px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(320px, 1fr));
}
.form {
  width: 100%;
  height: 61px;
  border: 1px solid var(--color-text-2);
  border-radius: 10px;
  &__textarea {
    height: 100%;
    height: 139px;
    border: 1px solid var(--color-text-2);
    padding: 5px;
  }
  &__textarea legend {
    margin-left: 20px;
    padding: 5px;
  }
  &__textarea textarea {
    width: 100%;
    height: 100%;
  }
  &__textarea textarea:focus {
    outline: none;
  }
  &__grid {
    width: 70vw;
    margin-top: 50px;
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(326px, 1fr));
  }
  &__confirm {
    width: 100%;
    height: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &__confirm input {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
  &__button {
    width: 100%;
    height: 62px;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.btn {
  width: 259px;
  height: 62px;
  background-color: #2d76f9;
  border-radius: 85px;
  color: var(--color-text-1);
}
.form input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  padding-bottom: 5px;
}
.form legend {
  margin-left: 20px;
  padding: 5px;
}
@media (max-width: 769px) {
  .block__container {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
  }
  main {
    width: 85vw;
  }
  .form__grid {
    width: 85vw;
  }
  .breadcrumbs {
    width: 85vw;
  }
}
</style>
