<template>
  <main class="main">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <h2 class="h2">Ласкаво просимо!</h2>
        </div>
        <div class="col-xl-11 ml-auto mr-auto">
          <div class="hero_list">
            <div
              id="tooltip-target-1"
              class="hero"
              v-for="person in persons"
              :key="person.id"
            >
              <img :src="person.photo" />
              <p class="text-center">{{ person.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    persons: [
      {
        id: 1,
        photo: require("@/assets/homePersons/Gramatyka.svg"),
        name: "Граматика",
      },
      {
        id: 2,
        photo: require("@/assets/homePersons/Googlyk.svg"),
        name: "Гуглик",
      },
      {
        id: 3,
        photo: require("@/assets/homePersons/Nyshporka.svg"),
        name: "Нишпорка",
      },
      {
        id: 4,
        photo: require("@/assets/homePersons/Rysja-Rymysja.svg"),
        name: "Римуся",
      },
      {
        id: 5,
        photo: require("@/assets/homePersons/Cikavynka.svg"),
        name: "Цікавинка",
      },
      {
        id: 6,
        photo: require("@/assets/homePersons/Chytajskyj.svg"),
        name: "Читайський",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
}

.h2 {
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #353535;
  margin-bottom: 5rem;
  margin-top: 103px;
}

.hero {
  // .hero_list

  &_list {
    display: flex;
    align-items: center;
    margin-bottom: 208px;
  }
}
.text-center {
  text-align: center;
}
</style>
