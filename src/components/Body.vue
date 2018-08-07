<template>
  <main id="main">
    <div class="wrapper">
      <section class="content">
        <section class="item logo">
          <img src="../assets/imgs/orange_pixel.png" alt="orange pixel image" />
        </section>
        <section class="item desc">
          <h1>{{ greeting }}</h1>
          <p>
            i'm rebecca song,
          </p>
          <p>a
            <vue-typer
              :text="['software developer',
                      'dog enthusiast',
                      'devourer of books',
                      'lover of clementines',
                      'devotee of monospaced fonts']"
              :repeat="Infinity"
              :shuffle="false"
              :pre-type-delay="100"
              :type-delay="100"
              :pre-erase-delay="1500"
              :erase-delay="500"
            >
            </vue-typer>
          </p>
          <p>based in Toronto, Canada.</p>
        </section>
        <section class="item links">
          <ul>
          <li><a
            href="mailto:rebecca.song@outlook.com"
            target="_blank"
          >
            <i class="fa fa-envelope"></i>
          </a></li>
          <li>
          <a
            href="https://github.com/resong"
            target="_blank"
          >
            <i class="fa fa-github"></i>
          </a>
          </li>
          <li>
          <a
            href="https://twitter.com/resongg"
            target="_blank"
          >
            <i class="fa fa-twitter"></i>
          </a>
          </li>
          </ul>
        </section>
      </section>
    </div>
  </main>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Body",
  props: {
    greeting: String
  },
  components: {
    "vue-typer": VueTyper
  }
};
</script>

<style scoped>
main {
  width: 100%;
  max-width: 1600px;
}

.wrapper {
  width: 95%;
  margin: 0 auto;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.item {
  margin: 1rem;
  padding: 0.5rem;
  flex-grow: 1;
  flex-basis: 0;
}

.logo {
  text-align: right;
}

img {
  max-width: 200px;
  width: 100%;
  height: auto;
}

.desc {
  /* min-width: 261px; */
  text-align: left;
}

.links {
  flex: 0 1 100%;
  font-size: 2.3rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0.45rem 1rem;
  position: relative;
}

/* slide in slide off hover transition */
a:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0.2rem;
  transition: width 0.45s ease, background-color 0.45s ease;
}

a:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0.2rem;
  background: #50b608;
  transition: width 0.45s ease;
}

a:hover:before {
  width: 100%;
  background-color: #50b608;
  transition: width 0.45s ease;
}

a:hover:after {
  width: 100%;
  background-color: transparent;
  transition: all 0s ease;
}

/* a:hover:after {
  content: "";
  display: block;
  width: 0.45rem;
  height: 0.45rem;
  background: transparent url("../assets/imgs/leaf.png") no-repeat;
  background-size: 0.45rem;
  position: absolute;
  top: 0;
} */

@media (max-width: 1300px) {
  img {
    max-width: 180px;
  }

  .links {
    font-size: 2rem;
  }
}

@media (max-width: 1100px) {
  img {
    max-width: 150px;
  }

  .links {
    font-size: 1.8rem;
  }
}

@media (max-width: 900px) {
  img {
    max-width: 100px;
  }

  .links {
    font-size: 1.6rem;
  }
}

@media (max-width: 600px) {
  img {
    max-width: 70px;
  }

  .item {
    text-align: center;
  }

  .desc {
    flex: 0 1 100%;
  }

  .links {
    font-size: 1.4rem;
  }
}

@media (max-width: 320px) {
  img {
    max-width: 40px;
  }

  .item {
    text-align: center;
    margin: 0 0.5rem;
  }

  .desc {
    flex: 0 1 100%;
  }

  .links {
    font-size: 1.1rem;
  }
}
</style>
