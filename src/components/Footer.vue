<template>
  <footer class="footer">
    <div class="container">
      <div class="row footer__wrapper">
        <div class="footer_about">
          <span>2020</span><router-link to="/about">Про проект</router-link>
        </div>
        <div class="footer__love">Створено з любов’ю</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: #eff3f4;

  &_about span {
    margin-right: 38px;
  }

  &_about a {
    color: #212529;
  }

  &__wrapper {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.container {
  margin: 0 80px;
}
</style>
