<template>
  <div class="header__ctr">
    <router-link to="/log" class="default_btn login_btn">Вхід</router-link>
    <router-link to="/reg" class="default_btn sign_up_btn"
      >Реєстрація</router-link
    >
  </div>
</template>

<style lang="scss">
.login_btn {
  background: #cb8aa8;
  border-radius: 10px;
  padding: 5px 38px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
}
.sign_up_btn {
  padding: 5px 38px;
  border: 1px solid #aa5d81;
  border-radius: 10px;
  color: #cb8aa8;
  cursor: pointer;
  text-decoration: none;
  margin-left: 20px;
}
</style>
