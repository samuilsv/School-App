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
        <Search />
        <div class="person-info">
          <img src="../../assets/headerAfterLog/Student.png" alt="Student" />
          <i class="arrow-down"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Search from "./SearchInput";
export default {
  components: {
    Search,
  },
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
.header .header__wrapper {
  display: flex;
  justify-content: start;
  align-items: center;
}
.header .header__ctr {
  display: flex;
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
.arrow-down {
  margin-left: 7px;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid #002202;
}
</style>
