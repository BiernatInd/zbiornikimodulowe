<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

body {
  background-color: var(--white);
}

.main {
  max-width: 1920px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  background: url("@bg/background.png");
  background-repeat: no-repeat;
  background-size: cover;
}

:root {
  --white: #ffffff;
  --black: #000000;
  --green: #21b527;
  --red: #ff0000;
  --grey: #c8c8c8;
  --shadow: 0px 0px 10px 0px rgba(33, 181, 39, 0.5);
}
</style>
