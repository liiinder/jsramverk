<template>
<div>
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
        id="password"
        v-model="password" 
        required minlength="8">
</div>
</template>

<script>
export default {
    name: 'Password',
    data() {
        return {
            showPassword: true,
            email: "",
            password: ""
        }
    }
}
</script>

<style scoped>
input {
    background-color: #fff;
    padding: 0.25em;
    font-size: 1.2em;
    width: 100%;
}

legend {
    margin-top: 1em;
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

input:focus,
button:focus,
button:focus i {
    background-color: #ccc;
}

button {
    z-index: 1;
    padding: 0.25em;
    font-size: 1.2em;
    font-weight: bold;
    background-color: #fff;
}

</style>