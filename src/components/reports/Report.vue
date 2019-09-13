<template>
<main>
    <Nav />
    <ReportNav />
    <h2>Redovisningar</h2>
</main>
</template>

<script>
import Nav from '../Nav.vue'
import ReportNav from './ReportNav.vue'
export default {
    name: 'Report',
    components: {
        Nav,
        ReportNav
    }
}
</script>

<style scoped>

</style>