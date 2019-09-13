<template>
<main>
    <Nav />
    <ReportNav />
    <h2>Kmom00: Default</h2>
</main>
</template>

<script>
import ReportNav from './ReportNav.vue'
import Nav from '../Nav.vue'
export default {
    name: 'Kmom00',
    components: {
        Nav,
        ReportNav
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>