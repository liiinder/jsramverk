<template>
<main>
    <Nav />
    <div v-if="this.$store.getters.getToken">
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
            <router-link :to="{ name: 'Redovisning', params: { kmom: week }}"><button>Tillbaka</button></router-link>
        <div>
            <textarea rows="30" v-model="report"></textarea>
            <button @click="saveReport">Spara</button>
        </div>
    </div>
    <h2 v-else>
      Logga in för att ändra
    </h2>
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
            axios.get(`${this.$store.getters.apiURL}/reports/week/${week}`)
            .then(response => {
                if (typeof response.data.data.report.text != "undefined") {
                    this.report = response.data.data.report.text;
                }
            }).catch(e => {
                this.report = "<h2>Finns inget skrivet för denna vecka än.</h2>";
            });
        },
        saveReport() {
            console.log(this.report);
            axios.post(`${this.$store.getters.apiURL}/reports`, {
                report: this.report,
                week: this.week
            }, {
                headers: {'x-access-token': this.$store.getters.getToken}
            }).then(response => {
                console.log(JSON.stringify(response));
                this.changeWeek(this.week);
            }).catch(e => {
                console.log(JSON.stringify(e));
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

textarea {
    margin-top: 0.5em;
    margin-bottom: 1em;
    font-size: 1.2em;
    width: 100%;
    padding: 0.5em;
    border-radius: 0.25em;
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
    background-color: #99ff99;
}
</style>
