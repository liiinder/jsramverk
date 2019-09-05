<template>
<main>
    <Nav />
    <h2>kmom {{ $route.params.kmom }}</h2>
    <a :href="github"><strong>Länk till Github repot</strong></a>
    <div class="readme" v-for="line in readme" :key="line">
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
      // questions: [
      //   {
      //     key: 1,
      //     question: "Github repo?",
      //     answer: "Här kan man hitta mitt github repo"
      //   },
      //   {
      //     key: 2,
      //     question: "Hur fungerar det här?",
      //     answer: "Jo man kanske kan skriva såhär?"
      //   }
      // ],
    }
  }
  // mounted() {
  //   this.getText(this.$route.params.kmom);
  // },
  // methods: {
  //   getText(kmom) {
  //     let that = this;
  //     that.text = "";
  //     fetch("https://me-api.jsramverk.me/reports/" + kmom)
  //     .then(function(response) {
  //         return response.json();
  //     })
  //     .then(function(result) {
  //         that.questions = result.data.map((question, index) => {
  //           return {
  //             key: index,
  //             question: question.question,
  //             answer: question.answer
  //           };
  //         });
  //     });
  //   }
  // }
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