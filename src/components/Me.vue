<template>
<main>
    <Nav />
    <h1>{{ name }}</h1>
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
        name: "",
        text: "",
        picture: require('../assets/me.jpg')
    }
  },
  mounted() {
    this.getMe();
  },
  methods: {
    getMe() {
      let that = this;
      fetch(`${this.$store.getters.apiURL}`)
      .then(function(response) {
          return response.json();
      })
      .then(function(result) {
          that.name = result.data.name;
          that.text = result.data.desc;
      });
    }
  }
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
