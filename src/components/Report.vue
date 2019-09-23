<template>
<main>
    <Nav />
    <select name="month" v-model="week" @change="changeWeek(week)">
        <option value="0">Välj kursmoment</option>
        <option value="1">Kmom01</option>
        <option value="2">Kmom02</option>
        <option value="3">Kmom03</option>
        <option value="4">Kmom04</option>
        <option value="5">Kmom05</option>
        <option value="6">Kmom06</option>
        <option value="10">Kmom10</option>
    </select>

    <!-- Om man är inloggad ta fram en edit knapp -->
    <div v-if="this.$store.getters.getToken" class="change">
        <router-link :to="{ name: 'Edit', params: { kmom: week }}"><button>Ändra</button></router-link>
    </div>

    <div class="report" v-html="report">
    </div>
</main>
</template>

<script>
import Nav from './Nav.vue'
import axios from 'axios'
export default {
    name: 'Report',
    components: {
        Nav
    },
    methods: {
        changeWeek(week) {
            axios.get(`http://localhost:1337/reports/week/${week}`)
            .then(response => {
                if (typeof response.data.data.report.text != "undefined") {
                    this.report = response.data.data.report.text;
                }
            }).catch(e => {
                this.report = "<h2>Finns inget skrivet för denna vecka än.</h2>";
            });
        }
    },
    mounted() {
        this.changeWeek(this.$route.params.kmom);
    },
    data() {
        return {
            week: this.$route.params.kmom,
            report: ""
        }
    }
}
</script>

<style scoped>
h3 {
    margin-top: 1em;
    font-size: 1.6em;
    font-weight: normal;
}

div >>> p {
    margin-top: 0.5em;
    margin-bottom: 1em;
    font-size: 1.2em;
}

select {
    padding: 0.5em;
    font-size: 2em;
    font-weight: bold;
    border-radius: 0.25em;
    margin-bottom: 0.5em;
}

button {
    padding: 0.5em;
    font-size: 2em;
    font-weight: bold;
    float: right;
}

.change {
    float: right;
}

.report {
    margin-top: 1em;
}

div >>> pre {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid #d900ff;
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
}

div >>> a {
    color: #333;
}
</style>
