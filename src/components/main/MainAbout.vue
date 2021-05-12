<template>
  <main class="main">
    <div class="container">
      <div class="about">
        <div class="about__body">
          <div class="about__info">
            <div class="about__title">Про проект</div>
            <div class="about__discription">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Felis eget velit aliquet sagittis. Est ante in nibh mauris. At
                ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
                Egestas dui id ornare arcu odio ut. Adipiscing diam donec
                adipiscing tristique risus nec. Phasellus egestas tellus rutrum
                tellus pellentesque eu tincidunt. Id donec ultrices tincidunt
                arcu. Varius sit amet mattis vulputate enim nulla aliquet
                porttitor lacus.
              </p>
              <p>
                Quam vulputate dignissim suspendisse in est ante in. Enim eu
                turpis egestas pretium aenean pharetra magna ac. Duis ut diam
                quam nulla porttitor massa. Sit amet nisl suscipit adipiscing
                bibendum. Sit amet venenatis urna cursus eget nunc. Varius morbi
                enim nunc faucibus a. Magna sit amet purus gravida quis blandit
                turpis cursus in. Ac feugiat sed lectus vestibulum mattis
                ullamcorper. Morbi tristique senectus et netus et malesuada.
                Euismod lacinia at quis risus sed vulputate.
              </p>
            </div>
          </div>
          <div class="about__img">
            <img src="@/assets/aboutMain/pngegg 1.svg" alt="Books" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 80px;
}
.about {
  // .about__body

  &__body {
    display: flex;
  }

  // .about__info

  // .about__title

  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 47px;
  }

  // .about__discription

  &__discription {
    max-width: 701px;
    line-height: 140%;
    color: #000000;
    margin-right: 206px;
    margin-bottom: 157px;
  }

  &__discription p {
    margin-bottom: 20px;
  }
  &__discription p:last-child {
    margin-bottom: 0px;
  }

  // .about__img
}
</style>
