<template>
<nav>
    <ul>
        <li><router-link to="/"><i class="fas fa-home"></i></router-link></li>
        <li><router-link to="/reports/week/1">Kmom01</router-link></li>
        <li><router-link to="/register">Registrera</router-link></li>
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
    grid-template-columns: 1fr 1fr 1fr;
}

li {
    justify-self: center;
    margin-right: 1em;
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
    padding: 0.5em 0.8em;
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