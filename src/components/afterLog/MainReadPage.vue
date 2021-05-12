<template>
  <div class="home">
    <ChoiseClass />
    <div class="container">
      <div class="home__title">Цікаві книжки</div>
      <div class="home__body">
        <div class="book">
          <div
            class="book__body"
            v-for="(book, index) in booksInfo"
            :key="book.id"
          >
            <img :src="book.photo" alt="" class="book__img" />
            <div class="book-info">
              <div class="book-info__title">
                {{ index + 1 }}. {{ book.task }}
              </div>
              <div class="book-info__discription">
                <p>{{ book.autor }}</p>
                <p>Жанр: {{ book.genre }}</p>
                <p>Видавництво: {{ book.manufacturer }}</p>
              </div>
              <div class="book-info__time-test">
                Тестування на <strong>{{ book.time }} хвилин.</strong>
              </div>
              <div class="book-info__score">
                Кожна правильна відповідь
                <strong>+{{ book.score }} бал.</strong>
              </div>
              <div class="book-info__sum-score">
                Ти можеш отримати <strong>{{ book.sumScore }} балів.</strong>
              </div>
              <div class="book-info__button">
                <router-link class="book-info__look-task" to="/test"
                  >Почати завдання</router-link
                >
                <router-link class="book-info__pay" to="#"
                  >Придбати</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="person-info">
          <div class="person-info__body">
            <div class="person-info__title">Привіт! Мене звати Читайський</div>
            <img
              src="../../assets/main/Chytajskyj.svg"
              alt="Rymysja"
              class="person-info__img"
            />
            <div class="person-info__description">
              Мої завдання полягатимуть в доборі рими до слів. Обери свій та
              почнімо завдання!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChoiseClass from "../ChoiseClass";
export default {
  data: () => ({
    booksInfo: [
      {
        id: 1,
        photo: require("@/assets/main/Book2.png"),
        task: "Маленький Принц",
        autor: "Антуан де Сент-Екзюпері",
        genre: "Філософська казка",
        manufacturer: "Рідна мова",
        time: 20,
        score: 1,
        sumScore: 15,
      },
      {
        id: 2,
        photo: require("@/assets/main/Book3.png"),
        task: "Тереодори з Васюківки",
        autor: "Всеволод Нестайко",
        genre: "Художній вимисел",
        manufacturer: "А-ба-ба-га-ла-ма-га",
        time: 20,
        score: 1,
        sumScore: 15,
      },
    ],
  }),
  components: {
    ChoiseClass,
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 80px;
}
.home {
  // .home__body
  &__body {
    display: flex;
    justify-content: space-between;
  }

  // .home__title
  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    align-items: center;
    color: #353535;

    margin-top: 15px;
    margin-bottom: 28px;
  }
}
.book {
  // .book__body
  &__body {
    display: flex;
  }

  // .book__img
  &__img {
    margin-bottom: 44px;
  }
}
.book-info {
  margin-left: 21px;

  & strong {
    font-weight: 700;
  }
  // .book-info__title
  &__title {
    color: #353535;
    font-weight: 700;
    margin-bottom: 26px;
  }

  // .book-info__discription
  &__discription {
    margin-bottom: 26px;
  }

  &__discription p {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #353535;
  }

  // .book-info__time-test
  &__time-test {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #353535;
  }

  // .book-info__score
  &__score {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #353535;
  }

  // .book-info__sum-score
  &__sum-score {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #353535;
    margin-bottom: 31px;
  }
  &__button {
    display: flex;
    align-items: center;
  }
  &__button a {
    text-decoration: none;
    border-radius: 10px;
    margin-right: 20px;
  }
  &__look-task {
    padding: 8.5px 14px;
    color: #ffffff;
    background: #62c567;
  }
  &__pay {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    color: rgba(53, 53, 53, 0.6);
    background: #dbefdc;
    padding: 6.5px 14px;
  }
}
.person-info {
  // .person-info__body
  &__body {
    max-width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  // .person-info__title
  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    color: #353535;
  }

  // .person-info__img
  &__img {
    margin: 0 auto;
  }

  // .person-info__description
  &__description {
    line-height: 22px;
    color: #000000;
  }
}
</style>
