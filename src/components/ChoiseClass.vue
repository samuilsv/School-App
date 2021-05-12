<template>
  <div class="choise-class">
    <div class="choise-class__body">
      <div class="choise-class__title">Обери класс</div>
      <img
        class="choise-class__img"
        src="../assets/icon/Arrow.svg"
        alt="Arrow"
      />
      <router-link to="#" class="choise-class__button">1-й класс</router-link>
      <router-link to="#" class="choise-class__button">2-й класс</router-link>
      <router-link to="#" class="choise-class__button">3-й класс</router-link>
      <router-link to="#" class="choise-class__button">4-й класс</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.choise-class {
  // .choise-class__body
  &__body {
    display: flex;
  }

  // .choise-class__title
  &__title {
    align-self: center;
    color: #353535;
    font-weight: 500;
    margin-right: 18px;
  }

  &__img {
    margin-right: 54px;
  }

  // .choise-class__button
  &__button {
    margin-right: 20px;
    padding: 9px 14px;

    background: #dbefdc;
    border-radius: 10px;
    text-decoration: none;
    align-items: center;
    color: #002202;
  }
  &__button:last-child {
    margin-right: 0;
  }
}
</style>
