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
    <div @click="setActive" class="menu">
      <button class="lines">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const isMenuActive = ref(false)

const props = defineProps({
  active: Boolean
})
const emit = defineEmits(['click'])

function setActive() {
  emit('click')
}
</script>

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
.menu {
  display: none;
}

//Бургер меню

.menu {
  height: 32px;
  width: 32px;
  display: none;
  justify-content: center;
  align-items: center;
}
.menu input {
  position: relative;
  width: 32px;
  height: 32px;
}
.lines:active ~ .menu__content {
  transform: translateY(0%);
}
.lines {
  position: relative;
  height: 32px;
  width: 32px;
  cursor: pointer;
  background-color: aqua;
}
.line {
  position: absolute;
  width: 24px;
  height: 4px;
  left: 4px;
  top: 14px;
  background-color: white;
}
.line:nth-child(1) {
  transform: translateY(-8px);
}
.line:nth-child(3) {
  transform: translateY(8px);
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
@media (max-width: 426px) {
  header {
    width: 85vw;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 0.8fr 0.2fr;
  }
  header nav {
    display: none;
  }
  .menu {
    height: 32px;
    width: 32px;
    display: block;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
}
</style>
