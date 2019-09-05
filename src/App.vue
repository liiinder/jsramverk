  
<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://rsms.me/inter/inter-ui.css');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #0074d9;
}
html {
    font-size: 100%;
    font-family: 'Inter UI', sans-serif;
}
.app {
    width: 62em;
    margin: 0 auto;
    padding: 2em 6em 8em;
    color: white;
}
h1 {
    font-size: 8em;
    font-weight: 100;
}
h2 {
    font-size: 6em;
    font-weight: 100;
}
p {
    font-size: 2em;
    font-weight: normal;
}
</style>