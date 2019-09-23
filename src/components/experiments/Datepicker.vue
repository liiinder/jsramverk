<template>
    <div>
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
    </div>
</template>

<script>
export default {
    name: 'Datepicker',
    methods: {
        getDaysInMonth: function(year, month) {
            return new Date(year, month, 0).getDate();
        }
    },
    data() {
        return {
            date: new Date(),
            months: [" januari "," februari "," mars "," april "," maj "," juni "," juli "," augusti "," september "," oktober"," november "," december "],
            selectedYear: '',
            selectedMonth: '',
            selectedDay: ''
        }
    }
}
</script>

<style scoped>
legend {
    margin-top: 1em;
}

legend:after {
    content:':';
}

select,
option {
    background-color: #fff;
    padding: 0.25em;
    font-size: 1.2em;
    width: 33.33%;
    margin-bottom: 1em;
}

select:focus {
    background-color: #ccc;
}
</style>