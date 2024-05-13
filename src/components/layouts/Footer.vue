<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer>
    <div class="info">
      <section class="info__grid">
        <div class="info__item__logo">
          <img src="../../app/assets/logo.svg" alt="" />
          <p>Веб-разработка и усиление IT-команд</p>
        </div>
      </section>
      <section class="info__grid">
        <div class="info__item__links">
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
  max-height: 396px;
  display: flex;
  justify-content: center;
  background-color: var(--background-color-75);
}
.info {
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  width: 70vw;
  min-height: 396px;

  &__grid {
    display: flex;
  }
  &__item__logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  &__item__logo p {
    margin-top: 10px;
  }
  &__item__links {
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 0.2fr);
  }
  &__item__links a {
    color: var(--color-text-1);
  }
}
@media (max-width: 769px) {
  .info {
    display: grid;
    grid-template-rows: 0.4fr 0.6fr;
    grid-template-columns: 1fr;

    &__grid {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__item__links {
      display: grid;
      align-content: center;
      height: 100%;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 0.2fr);
    }
  }
}
</style>
