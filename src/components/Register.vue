<template>
<main>
    <Nav />
    <h2>Välkommen</h2>
    <p>
        Som registrerad får du tillgång till att lägga upp redovisningar på denna me-sida!
    </p>
    <form>
        <legend for="name">Namn</legend>
        <input type="text" name="name" required minlength="2">
        <legend for="email">Email</legend>
        <input type="email" name="email" required>
        <legend for="password">Lösenord (minst 8 tecken)</legend>
        <button
            type="button"
            id="showPassword"
            :class="showPassword ? 'green' : 'red'"
            v-on:click="showPassword ? showPassword = false : showPassword = true">
            {{ showPassword ? "Visar" : "Dolt" }} lösenord
        </button>
        <input :type=" showPassword ? 'text' : 'password' " name="password" id="password" required minlength="8">
        <legend>Födelsedag</legend>
        <select name="year" v-model="selectedYear" required>
            <option disabled value="">År</option>
            <option v-for="(n,index) in 120" :key="index" :value="date.getFullYear()-index">{{ date.getFullYear()-index }}</option>    
        </select>
        <select name="month" v-model="selectedMonth" required>
            <option disabled value="">Månad</option>
            <optgroup label="bokstäver">
                <option v-for="(month, index) in months" :key="index" :value="('00' + (index+1)).slice(-2)">{{ month }}</option>
            </optgroup>
            <optgroup label="siffror">
                <option v-for="(month, index) in 12" :key="index" :value="('00' + (index+1)).slice(-2)">{{ ("00" + month).slice(-2) }}</option>            
            </optgroup>
        </select>
        <select name="day" v-model="selectedDay" required>
            <option disabled value="">Dag</option>
            <option v-for="day in getDaysInMonth(selectedYear, selectedMonth)" :key="day" :value="('00' + day).slice(-2)">{{ ("00" + day).slice(-2) }}</option>
        </select><br>
        <label for="gdrp">Godkänner du att vi inte följer GDRP?</label>
        <button type="button" class="accept" v-on:click="accept ? accept=false : accept=true">
            <i v-if="accept" class="fas fa-check"></i>
            <i v-if="accept==false" class="fas fa-square-full"></i>
            <input type="checkbox" class="hidden" required :value="accept" v-bind:checked="accept" tabindex="-1">
        </button>
        <input type="submit" value="Registrera"><br>
        <!-- <h1>{{ selectedYear + " " + selectedMonth + " " + selectedDay }}</h1> -->
        <!-- <h1>{{ getDaysInMonth(selectedYear, selectedMonth) }}</h1> -->
    </form>
</main>
</template>

<script>
import Nav from './Nav.vue'
export default {
  name: 'Register',
  components: {
    Nav,
  },
  methods: {
    getDaysInMonth: function(year, month) {
        return new Date(year, month, 0).getDate();
    }
  },
  data() {
    return {
        date: new Date(),
        months: [" januari "," februari "," mars "," april "," maj "," juni "," juli "," augusti "," september "," oktober"," november "," december "],
        year: 2000,
        showPassword: false,
        selectedYear: '',
        selectedMonth: '',
        selectedDay: '',
        accept: false,
        testing: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-transform: uppercase;
}

input {
    background-color: #fff;
    padding: 0.25em;
    font-size: 1.2em;
    width: 100%;
}

legend:after {
    content:':';
}

#password {
    width: 80%;
}

#showPassword {
    width: 20%;
}

.green {
    background-color: lightgreen;
}

.red {
    background-color: #faa;
}

select,
option {
    background-color: #fff;
    padding: 0.25em;
    font-size: 1.2em;
    width: 15vw;
    margin-bottom: 1em;
}

input[type=submit] {
    width: 15vw;
    float: right;
}

input:focus,
button:focus,
select:focus,
button:focus i {
    background-color: #ccc;
}

button:focus i.fa-square-full {
    color: #ccc;
}

button i.fa-square-full {
    color: #fff;
}

button {
    z-index: 1;
    padding: 0.25em;
    font-size: 1.2em;
    font-weight: bold;
    background-color: #fff;
}

button.accept {
    margin-left: 0.75em;
}

i {
    position: relative;
    top: 0;
    left: 0;
    float: left;
    z-index: 1;
    background-color: #fff;
    font-size: 1.0em;
}

legend {
    margin-top: 1em;
}

.hidden {
    position: relative;
    bottom: -10px;
    left: -10px;
    z-index: -1;
    width: 1px;
    height: 1px;
    /* float: left; */
}

</style>