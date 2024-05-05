<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <img src="../../app/assets/logo.svg" alt="" />
    <nav>
      <ul class="links">
        <li><a href="">Агенство</a></li>
        <li><a href="">Услуги</a></li>
        <li><a href="">Кейсы</a></li>
        <li><a href="">Блог</a></li>
        <li><a href="">Контанты</a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
header {
  width: 70vw;
  height: 36px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 0.2fr 0.6fr 0.2fr;
}
header img {
  width: 131px;
  height: 28px;
}
header nav {
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
}
.links {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
@media (max-width: 376px) {
  header {
    width: 85vw;
    display: grid;
    grid-template-columns: 0.8fr 0.2fr;
  }
  header nav {
    display: none;
  }
}
</style>
