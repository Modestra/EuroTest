<template>
  <section class="menu__content">
    <nav class="menu__links">
      <ul class="links">
        <li><a href="" class="link">Агенство</a></li>
        <li><a href="" class="link">Услуги</a></li>
        <li><a href="" class="link">Кейсы</a></li>
        <li><a href="" class="link">Блог</a></li>
        <li><a href="" class="link">Контанты</a></li>
      </ul>
    </nav>
    <nav class="links__footer">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  </section>
</template>

<script setup></script>

<style lang="scss">
.menu__content {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color-100);
  z-index: 1;
}
.menu__links {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 0.6fr 0.4fr;
}
.links {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &__footer {
  }
}
.link {
  color: var(--color-text-1);
}
</style>
