<template>
  <div class="search">
    <router-link to="/search"
      ><img src="../../assets/headerAfterLog/Search.svg" class="search-icon"
    /></router-link>
    <input
      placeholder="Пошук"
      v-model="searchValue"
      @keyup.enter="getInputData"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    searchValue: "",
  }),
  comments: {
    getInputData() {
      console.log(this.searchValue);
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
