<template>
  <div class="search">
    <div class="container">
      <Choise class="search__class" />
      <div class="search__title">Результати пошуку</div>
      <div class="search__body">
        <div class="search__list" v-for="book in booksInfo" :key="book.id">
          <img :src="book.photo" :alt="book.title" />
          <div class="search__item">
            <div class="search__name">{{ book.title }}</div>
            <div class="search__author">{{ book.author }}</div>
            <div class="search__genre">Жанр: {{ book.genre }}</div>
            <div class="search__point">{{ book.point }} балів</div>
          </div>
        </div>
        <div class="search__person">
          <div class="search__person-title">Що я маю для тебе!</div>
          <img src="../../assets/main/ChytajskyjSearch.svg" alt="Chytajskyj" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Choise from "../ChoiseClass";

export default {
  data: () => ({
    booksInfo: [
      {
        id: 1,
        photo: require("../../assets/main/Book2.png"),
        title: "Маленький Принц",
        author: "Антуан де Сент-Екзюпері",
        genre: "Філософська казка",
        point: 15,
      },
      {
        id: 2,
        photo: require("../../assets/main/Book3.png"),
        title: "Тереодори з Васюківки",
        author: "Всеволод Нестайко",
        genre: "Художній вимисел",
        point: 15,
      },
      {
        id: 3,
        photo: require("../../assets/main/Book2.png"),
        title: "Маленький Принц",
        author: "Антуан де Сент-Екзюпері",
        genre: "Філософська казка",
        point: 15,
      },

      {
        id: 4,
        photo: require("../../assets/main/Book2.png"),
        title: "Тереодори з Васюківки",
        author: "Всеволод Нестайко",
        genre: "Художній вимисел",
        point: 15,
      },
      {
        id: 5,
        photo: require("../../assets/main/Book3.png"),
        title: "Маленький Принц",
        author: "Антуан де Сент-Екзюпері",
        genre: "Філософська казка",
        point: 15,
      },
      {
        id: 6,
        photo: require("../../assets/main/Book2.png"),
        title: "Маленький Принц",
        author: "Антуан де Сент-Екзюпері",
        genre: "Філософська казка",
        point: 15,
      },
    ],
  }),
  components: {
    Choise,
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 80px;
}
.search {
  &__class {
    margin: 33px 0 49px 0;
  }
  // .search__body
  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #353535;
    margin-bottom: 10px;
  }
  &__body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    background: #ffffff;

    padding: 21px 9px;
    margin-right: 60px;
    margin-bottom: 10px;
  }
  &__list:hover {
    box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
    border-radius: 20px;
  }
  &__list img {
    padding-bottom: 5px;
  }
  &__item {
    padding: 0 20px;
  }
  // .search__title
  &__name {
    font-weight: bold;
    margin-bottom: 3px;
  }

  // .search__author
  &__author {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #353535;
    margin-bottom: 3px;
  }

  // .search__genre
  &__genre {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #353535;
    margin-bottom: 3px;
  }

  // .search__point
  &__point {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #62c567;
  }

  &__person {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 364px;
    height: 440px;
    top: 40%;
    left: 90%;
    margin-top: -100px; /* Negative half of height. */
    margin-left: -250px; /* Negative half of width. */
    background: #ffffff;
    box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
    border-radius: 20px;
  }
  &__person-title {
    position: absolute;
    font-weight: bold;
    top: 40px;
    font-size: 24px;
    line-height: 29px;
    color: #353535;
  }
  &__person img {
    position: relative;
    margin: 0 auto;
  }
}
</style>
