<template>
  <div id="app">
    <Body greeting="hi there!" />
    <Nav />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Body,
    Nav,
    Footer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f7f7f7;
}

#app {
  font-family: Consolas, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.8rem;
  text-align: center;
  color: #363d44;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1300px) {
  #app {
    font-size: 1.5rem;
  }
}

@media (max-width: 1100px) {
  #app {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  #app {
    font-size: 1rem;
  }
}

@media (max-width: 320px) {
  #app {
    font-size: 0.7rem;
  }
}

strong {
  color: #50b608;
}

a {
  color: #2c3e50;
}

.vue-typer .custom.char {
  color: #ff7300;
}
</style>
