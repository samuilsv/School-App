<template>
  <header class="header">
    <div class="container">
      <div class="row header__wrapper">
        <router-link to="/" class="header__logo"></router-link>
        <Button />
      </div>
    </div>
  </header>
</template>

<script>
import Button from "../btn/Button";

export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
.header .header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .header__ctr {
  display: flex;
  justify-content: flex-end;
}
.container {
  margin: 45px 80px;
}
.header__logo {
  width: 155px;
  height: 71px;
  background: #c4c4c4;
  border-radius: 20px;
}
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
