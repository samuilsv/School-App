<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <router-link to="/" class="header__logo"></router-link>
        <div class="header__people">
          <div v-for="person in personsNav" :key="person.id">
            <img :src="person.photo" alt="person.id" />
          </div>
        </div>
        <div class="header__load">
          <img src="../../assets/icon/Load.svg" alt="Load" />
        </div>
        <div class="search">
          <img
            src="../../assets/headerAfterLog/Search.svg"
            class="search-icon"
          />
          <input type="text" placeholder="Пошук" />
        </div>
        <div class="person-info">
          <img src="../../assets/headerAfterLog/TeacherLog.png" alt="Teacher" />
          <i class="arrow-down"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    personsNav: [
      { id: 1, photo: require("@/assets/headerAfterLog/Icon_1.svg") },
      { id: 2, photo: require("@/assets/headerAfterLog/Icon_2.svg") },
      { id: 3, photo: require("@/assets/headerAfterLog/Icon_3.svg") },
      { id: 4, photo: require("@/assets/headerAfterLog/Icon_4.svg") },
      { id: 5, photo: require("@/assets/headerAfterLog/Icon_5.svg") },
      { id: 6, photo: require("@/assets/headerAfterLog/Icon_6.svg") },
    ],
  }),
};
</script>

<style scoped>
.header__wrapper {
  display: flex;
  justify-content: start;
  align-items: center;
}
.container {
  margin: 20px 80px 0 80px;
}
.header__logo {
  width: 155px;
  height: 71px;
  background: #c4c4c4;
  border-radius: 20px;
  margin-right: 70px;
}
.header__people {
  display: flex;
  max-width: 400px;
  margin-right: 245px;
}
.header__people img {
  margin-right: 10px;
}
.header__load {
  display: flex;
}
.header__load {
  padding: 10px;
  margin-right: 20px;
  background: #62c567;
  border-radius: 10px;
}
.search input {
  max-width: 203px;
  padding: 10px 47px;
  font-size: 16px;
  line-height: 20px;

  color: #7b7b7b;
  background: #e5e5e5;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  margin-right: 20px;
}
.search-icon {
  position: absolute;
  padding: 10px;

  z-index: 3;
}
.arrow-down {
  margin-left: 7px;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid #002202;
}
</style>
