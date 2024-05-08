<template>
  <section class="menu__content">
    <nav class="menu__links">
      <ul class="burger__links">
        <li><a href="" class="burger__link">Агенство</a></li>
        <li><a href="" class="burger__link">Услуги</a></li>
        <li><a href="" class="burger__link">Кейсы</a></li>
        <li><a href="" class="burger__link">Блог</a></li>
        <li><a href="" class="burger__link">Контанты</a></li>
      </ul>
    </nav>
    <nav class="burger__links__footer">
      <ul>
        <li>Контанты</li>
        <li>+7 999 123 45 67</li>
        <li>hello@cyberia.studio</li>
        <li>ул.Ярных, д.35, оф.10</li>
      </ul>
    </nav>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.menu__content {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color-100);
  z-index: 1;
  display: grid;
  grid-template-rows: 0.5fr 0.3fr;
}
.menu__links {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 0.6fr 0.4fr;
}
.burger__links {
  width: 100%;
  padding-top: 60px;
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &__footer {
    width: 100%;
    border-top: 1px solid var(--color-text-2);
    border-bottom: 1px solid var(--color-text-2);
  }
  &__footer ul {
    width: 100%;
    height: 100%;
    padding-top: 25px;
    padding-left: 25px;
    display: grid;
    grid-auto-rows: 0.2fr 0.1fr 0.1fr 0.1fr;
  }
  &__footer li {
    font-size: 18px;
    font-weight: 400;
    line-height: 24.51px;
    text-align: left;
  }
  &__footer ul:first-child {
    width: 100%;
    padding-left: 25px;
  }
}
.burger__links li {
  font-size: 18px;
  font-weight: 400;
  line-height: 24.51px;
  text-align: left;
}
.burger__link {
  color: var(--color-text-1);
}
</style>
