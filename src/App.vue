<template>
  <div id="app" class="app">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
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
}

html {
    font-size: 100%;
    font-family: 'Inter UI', sans-serif;
    background-color: #0074d9;
}

.app {
    width: 80vw;
    margin: 0 auto;
    padding: 2em 6em 8em;
    color: white;
}

h1 {
    font-size: 4em;
    font-weight: 100;
}

h2 {
    font-size: 3em;
    font-weight: 100;
    text-transform: uppercase;
}

p {
    font-size: 2em;
    font-weight: normal;
}
</style>