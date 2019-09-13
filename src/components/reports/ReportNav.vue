<template>
<nav>
    <ul>
        <li><router-link v-for="n in 7" :key="n" :to="'/reports/week/'+n">Kmom{{ ('00' + (n)).slice(-2) }}</router-link></li>
    </ul>
</nav>
</template>

<script>
export default {
  name: 'ReportNav',
  props: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5em;
}

li {
    justify-self: center;
    margin: 1.5em 0;
}

li a {
    text-decoration: none;
    color: white;
    font-size: 1.4em;
    border: 4px solid #0be6d7;
    background-color: #ddd;
    color: #333;
    font-weight: bold;
    border-radius: 0.15em;
    padding: 0.5em 0.7em;
}

li a:hover {
    text-decoration: underline;
    background-color: #bbb;
}

i {
    background-color: rgba(0, 0, 0, 0.0);
}

nav {
    margin-bottom: 1em;
}
</style>