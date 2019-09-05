<template>
<main>
    <Nav />
    <h1>Me</h1>
    <p>{{ text }}</p>
    <img :src="picture"/>
</main>
</template>

<script>
import Nav from './Nav.vue'
export default {
  name: 'Me',
  props: { },
  components: {
      Nav,
  },
  data() {
    return {
        text: `
          Kristoffer Linder heter jag och är 32 år, bor i husbil och vi får se vart vi hamnar i vinter med den.
          Lutar åt spanien/portugal eller kroatien. Älskar bland annat discgolf, kitesurf, speedcubing så vi får
          se vart man hamnar och vad man kommer hålla på med för aktiviteter förutom studierna.
        `,
        picture: require('../assets/me.jpg')
    }
  }
  // mounted() {
  //   this.getMe();
  // },
  // methods: {
  //   getMe() {
  //     let that = this;
  //     fetch("https://me-api.jsramverk.me")
  //     .then(function(response) {
  //         return response.json();
  //     })
  //     .then(function(result) {
  //         that.text = result.description;
  //     });
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  margin-top: 1em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%
}
</style>
