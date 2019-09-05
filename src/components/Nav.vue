<template>
<nav>
    <ul>
        <li><router-link to="/">Me</router-link></li>
        <li><router-link to="/reports/week/1">kmom01</router-link></li>
    </ul>
</nav>
</template>

<script>
export default {
  name: 'Me',
  props: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
li {
    justify-self: start;
    margin-right: 1em;
}
li a {
    text-decoration: none;
    color: white;
    font-size: 1.4em;
    border: 4px solid #0be6d7;
    background-color: #489ae0;
    border-radius: 0.5em;
    padding: 0.5em 0.8em;
}
li a:hover {
    text-decoration: underline;
    background-color: #bbb;
}
nav {
    margin-bottom: 1em;
}
</style>