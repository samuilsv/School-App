<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <router-link to="/" class="modal-header"></router-link>
        <div class="modal-body">
          <div class="modal-title">Вхід для вчителя</div>
          <div class="modal-description">Заповніть поля нижче</div>
          <div class="modal-input">
            <input type="text" placeholder="Введіть ім’я" />
            <input type="password" placeholder="Введіть пароль" />
          </div>
          <div class="modal-button__quick-entry">
            <div class="quick-entry__title">
              або скористайтесь швидким входом
            </div>
            <div class="quick-entry__button">
              <router-link class="facebook" to="#"></router-link>
              <router-link class="google" to="#"></router-link>
            </div>
          </div>
          <div class="modal-button">
            <router-link to="/homeAfterLogTeacher">Далі</router-link>
          </div>
          <div class="modal-button__forgot">
            <router-link to="/">Забув пароль?</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(41, 41, 41, 0.5);
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 526px;
  margin: 0px auto;
  padding-top: 74px;
  background: #ffffff;
  box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
  border-radius: 20px;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  opacity: 0.4;
  width: 24px;
  height: 24px;
  bottom: 2.3rem;
  left: 27.3rem;
  position: relative;
  border-radius: 6px;
}

.modal-header::before,
.modal-header::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 1.5px;
  background-color: rgb(0, 0, 0);
  border-radius: 2px;
}

.modal-header::before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
  left: -12px;
}

.modal-header::after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  transform: rotate(-45deg);
  right: -12px;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-body {
  display: flex;
  flex-direction: column;
}
.modal-title {
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  align-self: center;
  margin-bottom: 10px;
  font-stretch: normal;
}
.modal-description {
  line-height: 22px;
  align-self: center;
  text-align: center;
  max-width: 301px;

  color: #000000;
  margin-bottom: 34px;
}
.modal-input {
  display: flex;
  flex-direction: column;
  max-width: 315px;
  margin: 0 auto;
}
.modal-input input {
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(204, 219, 224, 0.5);
  border-radius: 10px;
  line-height: 22px;
  padding: 9px 20px;
  color: #ccdbe0;
  margin-bottom: 10px;
}
.modal-input input:last-child {
  margin-bottom: 39px;
}
.modal-button {
  align-self: center;
  margin-bottom: 40px;

  & a {
    line-height: 22px;
    padding: 8px 28px;

    color: rgba(53, 53, 53, 0.6);
    background: rgba(170, 93, 129, 0.1);
    border: 0px;
    border-radius: 10px;
    text-decoration: none;
  }
}
.quick-entry {
  // .quick-entry__title

  &__title {
    text-align: center;

    color: #000000;
    font-weight: 400;
  }

  // .quick-entry__button
  &__button {
    margin: 20px 0px;
    text-align: center;
  }
  &__button .facebook {
    padding: 15px;
    margin-right: 10px;
    background: url("../assets/icon/Facebook.svg") no-repeat;
  }
  &__button .google {
    padding: 15px;
    background: url("../assets/icon/Google.svg") no-repeat;
  }
}

.modal-button__forgot {
  text-align: center;
  margin-bottom: 34px;
}
.modal-button__forgot a {
  color: #7b7b7b;
}
</style>
