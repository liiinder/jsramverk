<template>
<main>
    <Nav />
    <h2>kmom {{ $route.params.kmom }}</h2>
    <a :href="github"><strong>Länk till Github repot</strong></a>
    <div class="readme" v-for="(line, index) in readme" :key="index">
      <p><strong>{{ line.head }}</strong></p>
      <p>{{ line.text }}</p>
    </div>
</main>
</template>

<script>
import Nav from './Nav.vue'
export default {
  name: 'Report',
  components: {
    Nav,
  },
  data() {
    return {
      github: "https://github.com/liiinder/jsramverk",
      readme: [
        {
          head: "Project setup",
          text: "npm install"
        },
        {
          head: "Compiles and hot-reloads for development",
          text: "npm run serve"
        },
        {
          head: "Compiles and minifies for production",
          text: "npm run build"
        },
        {
          head: "Lints and fixes files",
          text: "npm run lint"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-transform: uppercase;
}

a {
  font-size: 2em;
  color: #bbb;
}

.readme {
  margin-bottom: 2em;
}
</style>
