<template>
  <div class="about">
    <Header />
    <MainAbout />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/beforeLog/Header";
import MainAbout from "../components/main/MainAbout";
import Footer from "../components/Footer";

export default {
  components: {
    Header,
    MainAbout,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
