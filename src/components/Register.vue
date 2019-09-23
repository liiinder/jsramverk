<template>
<main>
    <Nav />
    <h2>Välkommen</h2>
    <p>
        Som registrerad får du tillgång till att lägga upp redovisningar på denna me-sida!
    </p>
    <form @submit.prevent="submitForm">
        <legend for="name">Namn</legend>
        <input type="text" name="name" v-model="name" required minlength="2">
        <legend for="email">Email</legend>
        <input type="email" name="email" v-model="email" required>
        <legend for="password">Lösenord (minst 8 tecken)</legend>
        <button
            type="button"
            id="showPassword"
            :class="showPassword ? 'green' : 'red'"
            @click="showPassword = showPassword ? false : true">
            <i v-if="showPassword" class="fas fa-eye"> visar</i>
            <i v-else class="fas fa-eye-slash"> dolt</i>
        </button>
        <input
            :type="showPassword ? 'text' : 'password'"
            name="password"
            class="password"
            v-model="password" 
            required minlength="8">
        <legend>Födelsedag</legend>
        <select name="year" v-model="selectedYear" required>
            <option disabled value="">År</option>
            <option
                v-for="(n,index) in 120"
                :key="index"
                :value="date.getFullYear()-index">
                {{ date.getFullYear()-index }}
            </option>    
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
            <option
                v-for="day in getDaysInMonth(selectedYear, selectedMonth)"
                :key="day"
                :value="('00' + day).slice(-2)">{{ ("00" + day).slice(-2) }}
            </option>
        </select>
        <label for="gdrp">Godkänner du att vi inte följer GDPR?</label>
        <button type="button" class="accept" @click="accept = accept ? false : true">
            <i v-if="accept" class="fas fa-check"></i>
            <i v-else class="fas fa-square-full"></i>
            <input type="checkbox" class="hidden" required :value="accept" :checked="accept" tabindex="-1">
        </button>
        <input type="submit" value="Registrera">
        <br>
    </form>
    <h2 v-if="message">{{ message }}</h2>
</main>
</template>

<script>
import Nav from './Nav.vue'
import axios from 'axios'
export default {
  name: 'Register',
  components: {
    Nav
  },
  methods: {
    getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    },
    submitForm() {
        axios.post('http://localhost:1337/register', {
            name: this.name,
            birth: `${this.selectedYear}${this.selectedMonth}${this.selectedDay}`,
            email: this.email,
            password: this.password
        }).then(response => {
            this.message = response.data.data.msg;
        }).catch(e => {
            this.message = e.response.data.data.msg;
        });
    },
  },
  data() {
    return {
        date: new Date(),
        months: [" januari "," februari "," mars "," april "," maj "," juni "," juli "," augusti "," september "," oktober"," november "," december "],
        accept: false,
        showPassword: true,
        name: "",
        selectedYear: '',
        selectedMonth: '',
        selectedDay: '',
        email: "",
        password: "",
        message: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
legend {
    margin-top: 1em;
}

legend:after {
    content:':';
}

select,
option,
input {
    background-color: #fff;
    padding: 0.25em;
    font-size: 1.2em;
    width: 100%;
}

select,
option {
    width: 33.33%;
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
    background-color: rgba(0, 0, 0, 0);
    font-size: 1.0em;
}

.password {
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

.hidden {
    position: relative;
    bottom: -10px;
    left: -10px;
    z-index: -1;
    width: 1px;
    height: 1px;
}

</style>