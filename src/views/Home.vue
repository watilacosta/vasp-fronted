<template>
  <div class="home">
    <vs-header></vs-header>
    <vs-partners></vs-partners>
    <div class="row">
      <div class="col">
        <vs-flights-schedule></vs-flights-schedule>
      </div>
      <div class="col">
        <vs-discord></vs-discord>
      </div>
    </div>
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
import VsFlightsSchedule from '../components/vs-flights-schedule.vue'
import VsDiscord from '../components/vs-discord.vue'

export default {
  name: 'Home',
  components: {
    VsHeader,
    VsPartners,
    VsOnlineFlights,
    VsAirlinesRank,
    VsMapDestinations,
    VsFlightsSchedule,
    VsDiscord
  }
}
</script>