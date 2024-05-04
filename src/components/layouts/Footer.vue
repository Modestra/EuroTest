<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer>
    <div class="info">
      <section class="info__grid">
        <div class="info__item">
          <img src="../../app/assets/logo.svg" alt="" />
          <p>Веб-разработка и усиление IT-команд</p>
        </div>
        <div class="info__item">
          <a href="">+7 999 123 45 67</a><a href="">Агентство</a><a href="">Блог</a>
          <a href="">hello@cyberia.studio</a><a href="">Услуги</a><a href="">Контанты</a>
          <a href="">ул.Ярных,д.35,оф.10</a><a href="">Кейсы</a>
        </div>
      </section>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss">
footer {
  width: 100vw;
  height: 396px;
  display: flex;
  justify-content: center;
  background-color: var(--background-color-75);
}
.info {
  display: flex;
  align-items: center;
  width: 70vw;
  height: 100%;

  &__grid {
    display: grid;
    grid-template-columns: auto auto;
  }
  &__item {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  &__item a {
    color: var(--color-text-1);
  }
}
</style>
