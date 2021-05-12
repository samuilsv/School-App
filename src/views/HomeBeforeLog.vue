<template>
  <div class="home">
    <Header class="header" />
    <div class="main-content"><Main /></div>
    <Footer class="footer" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/beforeLog/Header";
import Main from "../components/beforeLog/MainHome";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
  flex: 0 0 auto;
}
.main-content {
  /* 1 flex-grow, 0 flex-shrink, auto flex-basis */
  flex: 1 0 auto;
}
.footer {
  /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
  flex: 0 0 auto;
}
</style>
