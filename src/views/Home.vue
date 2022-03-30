<template>
  <div class="home">
    <vs-header></vs-header>
    <vs-partners></vs-partners>
    <vs-online-flights></vs-online-flights>
    <vs-airlines-rank></vs-airlines-rank>
    <vs-map-destinations></vs-map-destinations>
  </div>
</template>

<script>
import VsAirlinesRank from '../components/vs-airlines-rank.vue'
import VsHeader from '../components/vs-header.vue'
import VsOnlineFlights from '../components/vs-online-flights.vue'
import VsPartners from '../components/vs-partners.vue'
import VsMapDestinations from '../components/vs-map-destinations.vue'

export default {
  name: 'Home',
  components: {VsHeader, VsPartners, VsOnlineFlights, VsAirlinesRank, VsMapDestinations}
}
</script>