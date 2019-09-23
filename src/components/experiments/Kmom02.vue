<template>
<main>
    <Nav />
    <ReportNav />
    <h2>Kmom02: UX</h2>
    <p>
        Största inspirationen till formuläret var <a href="https://www.smashingmagazine.com/2017/07/designing-perfect-date-time-picker/">smashingmagazines</a> artikel.
        Framförallt deras bild på googles gmail lösning för födelsedags formuläret.
        Men även en del inspiration från föreläsningen mitt största fokus så var att få det så användarvänligt för dom som bara använder tangentbord.
    </p>
    <p>
        Tycker personligen det är lite tydligare med att skriva ut månaden i text form även om man nu borde veta vilket nummer ens månad har.
        Så använde mig av optgroups för att lägga in båda alternativen som slutligen ger backend samma value.
        Det gör att oavsett om man skriver april eller 04 så kommer den visa "april" och vill man lägga till så det räcker med 4 så kan man även göra det.
        Angående dagarna så är det automatiskt 31 dagar då dagarna väljs beroende på vilket år/månad man valt , har man inte valt något så kommer den gå på default i javascripts datetime som är 31.
        När man väl har valt en månad så kommer dagar anpassa sig reaktivt och man kan bara välja ett datum som stämmer vilket även fungerar för skottår.
    </p>
    <p>
        En annan sak som kändes viktigt var att lösa en större checkbox som bättre matchade resten av dokumentet.
        Det tog dock betydligt längre tid än jag hade tänkt men tycker min lösning är helt okej!
        Sedan en knapp för att toggla lösenordet då det underlättar enormt att kunna se så man har skrivit rätt.
        För dom som tabbar sig fram så är det bättre att den knappen ligger före lösenordet så dom som
        tabbar sig fram kan välja det före dom skriver in lösenordet istället för att dubbeltabba,
        välja att se lösenordet tabba tillbaka skriva in lösenordet och sen dubbeltabba igen för att komma vidare.
    </p>
    <h2>Övrigt</h2>
    <p>
        Hade varit kul att designa någon popup kalender också men det kändes inte direkt nödvändigt för ett födelsedatum och väldigt overkill för detta kursmoment
        både i mängd arbete och vad som behövs om man ser till UX.
    </p>
    <p>
        Finslipade lite på min me-sida och la till en ny komponent för ReportNav och testade runt lite med ramverket.
        Ser fram emot nästa vecka då man kan koppla allt till ett backend/api och få alla sidor att fungera dynamiskt.
    </p>
</main>
</template>

<script>
import ReportNav from './ReportNav.vue'
import Nav from '../Nav.vue'
export default {
    name: 'Kmom02',
    components: {
        Nav,
        ReportNav
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin-bottom: 0.5em;
}
</style>