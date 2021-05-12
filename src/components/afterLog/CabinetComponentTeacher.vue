<template>
  <div class="cabinet-teacher">
    <div class="container">
      <div class="cabinet-teacher__body">
        <div class="cabinet-teacher__title">Кабінет</div>
        <router-link to="#" class="cabinet-teacher__button" :class="active"
          >Герої</router-link
        >
        <router-link to="#" class="cabinet-teacher__button"
          >Статистика</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 40px 0 0 80px;
}
.cabinet-teacher {
  // .cabinet-teacher__body
  &__body {
    display: flex;
    align-items: center;
  }

  // .cabinet-teacher__title
  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #353535;
    margin-right: 60px;
  }

  &__img {
    margin-right: 54px;
  }

  // .cabinet-teacher__button
  &__button {
    margin-right: 20px;
    padding: 9px 14px;

    border: 1px solid #d5e7ff;
    box-sizing: border-box;
    border-radius: 10px;
    text-decoration: none;
    align-items: center;
    color: #7b7b7b;
  }
  &__button:last-child {
    margin-right: 0;
  }
}
.active {
  font-weight: 500;
  padding: 9px 20px;
  background: #d5e7ff;
  border-radius: 10px;
}
</style>
