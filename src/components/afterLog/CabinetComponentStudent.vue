<template>
  <div class="cabinet-student">
    <div class="container">
      <div class="cabinet-student__body">
        <div class="cabinet-student__title">Кабінет</div>
        <router-link to="#" class="cabinet-student__button active"
          >Герої</router-link
        >
        <router-link to="#" class="cabinet-student__button"
          >Статистика</router-link
        >
      </div>
      <div class="cabinet-student__filter">
        <input type="text" placeholder="Всі герої" />
        <p>Бали набрали за завдання <strong>34</strong></p>
      </div>
      <table>
        <tr>
          <th>Дата</th>
          <th>Герой</th>
          <th>Назва</th>
          <th>Клас</th>
          <th>Бали</th>
        </tr>
        <tr>
          <td>13.05.2020</td>
          <td>п. Читайський</td>
          <td>Рима на А</td>
          <td>3-й клас</td>
          <td><strong>13 /</strong> 130</td>
        </tr>
        <tr>
          <td>13.05.2020</td>
          <td>Цікавинка</td>
          <td>Смола</td>
          <td>1-й клас</td>
          <td><strong>13 /</strong> 130</td>
        </tr>
        <tr>
          <td>13.05.2020</td>
          <td>п. Читайський</td>
          <td>Рима на А</td>
          <td>3-й клас</td>
          <td><strong>13 /</strong> 130</td>
        </tr>
        <tr>
          <td>13.05.2020</td>
          <td>Цікавинка</td>
          <td>Смола</td>
          <td>1-й клас</td>
          <td><strong>13 /</strong> 130</td>
        </tr>
        <tr>
          <td>13.05.2020</td>
          <td>п. Читайський</td>
          <td>Рима на А</td>
          <td>3-й клас</td>
          <td><strong>13 /</strong> 130</td>
        </tr>
        <tr>
          <td>13.05.2020</td>
          <td>Цікавинка</td>
          <td>Смола</td>
          <td>1-й клас</td>
          <td><strong>13 /</strong> 130</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  margin: 40px 0 0 80px;
}
.cabinet-student {
  // .cabinet-student__body
  &__body {
    display: flex;
    align-items: center;
  }

  // .cabinet-student__title
  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #353535;
    margin-right: 60px;
  }

  &__img {
    margin-right: 54px;
  }

  // .cabinet-student__button
  &__button {
    margin-right: 20px;
    padding: 9px 14px;

    border: 1px solid #d5e7ff;
    box-sizing: border-box;
    border-radius: 10px;
    text-decoration: none;
    align-items: center;
    color: #7b7b7b;
  }
  &__button:last-child {
    margin-right: 0;
  }
  & input {
    border: none;
    border: 1px solid rgba(53, 53, 53, 0.6);
    box-sizing: border-box;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    padding: 10px;
    position: relative;
    z-index: 1;
  }
  & input::after {
    position: absolute;
    content: "";
    z-index: 2;
    margin-left: -7px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #002202;
  }
  &__filter {
    max-width: 540px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 37px;
    margin-bottom: 24px;
  }
  &__filter p {
    font-weight: 500;
    color: #353535;
  }
  &__filter strong {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #62c567;
  }
}

.active {
  font-weight: 500;
  padding: 9px 20px;
  color: #353535;
  background: #d5e7ff;
  border-radius: 10px;
}
strong {
  color: #62c567;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 708px;
  background: #ffffff;
  border: 1px solid #d5e7ff;
  box-sizing: border-box;
  border-radius: 20px;
}

td,
th {
  border: 1px solid #d5e7ff;
  text-align: left;
  padding: 11px;
}
td {
  font-weight: 500;
}
</style>
