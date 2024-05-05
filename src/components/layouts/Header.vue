<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <img src="../../app/assets/logo.svg" alt="" />
    <nav>
      <ul class="links">
        <li><a href="" class="link">Агенство</a></li>
        <li><a href="" class="link">Услуги</a></li>
        <li><a href="" class="link">Кейсы</a></li>
        <li><a href="" class="link">Блог</a></li>
        <li><a href="" class="link">Контанты</a></li>
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
  align-items: center;
  grid-template-columns: 0.3fr auto;
}
header img {
  width: 131px;
  height: 28px;
}
header nav {
  width: 100%;
  max-width: 521px;
  height: 36px;
  display: flex;
  align-items: center;
}
.links {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.link {
  color: var(--color-text-1);
}

@media (max-width: 769px) {
  header {
    width: 85vw;
    display: grid;
    grid-template-columns: 0.4fr 0.6fr;
  }
  .link {
    font-size: 2.2vw;
  }
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
