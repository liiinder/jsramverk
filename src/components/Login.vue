<template>
<div>
    <Nav />
    <h2>Logga in</h2>
    <form @submit.prevent="submitForm">
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
        <input type="submit" value="Logga in">
    </form>
    <h2 v-if="message">{{ message }}</h2>
</div>
</template>
<script>
import Nav from './Nav.vue'
import axios from 'axios'
export default {
    name: 'Login',
    components: {
        Nav
    },
    methods: {
        submitForm() {
            axios.post(`${this.$store.getters.apiURL}/login`, {
                email: this.email,
                password: this.password
            }).then(response => {
                this.message = response.data.data.msg;
                this.$store.dispatch('setToken', response.data.data.token);
            }).catch(e => {
                // console.log("e: " + JSON.stringify(e));
                this.message = e.response.data.data.msg;
            });
        },
    },
    data() {
        return {
            showPassword: true,
            email: "",
            password: "",
            message: "",
            token: ""
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

input {
    background-color: #fff;
    padding: 0.25em;
    font-size: 1.2em;
    width: 100%;
}

input[type=submit] {
    width: 15vw;
    float: right;
}

input:focus,
button:focus,
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
</style>