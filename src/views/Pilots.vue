<template>
  <div class="pilots">
    <h1 class="display-6 text-muted text-center mb-4">Pilots</h1>

    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">Callsign</th>
          <th scope="col">Name</th>
          <th scope="col">Rating</th>
          <th scope="col">IVAO</th>
          <th scope="col">VATSIM</th>
          <th scope="col">Join Date</th>
          <th scope="col">Flight Hours</th>
          <th scope="col">Last Flight</th>
          <th scope="col">Country</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pilot, id) in pilots" :key="id">
          <td>{{ pilot.dataAirline.callsign }}</td>
          <td>{{ pilot.name }}</td>
          <td><img :src="pilot.imageRating" :title="pilot.pilotRating"></td>
          <td>{{ pilot.ivao }}</td>
          <td>{{ pilot.vatsim }}</td>
          <td>{{ pilot.dataAirline.registeredDate }}</td>
          <td>{{ pilot.dataAirline.totalHoursFlights }}</td>
          <td>{{ pilot.dataAirline.lastFlightDate }}</td>
          <td>{{ pilot.country }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Pilots from '../services/pilots'

export default {
  name: 'Pilots',
  components: {},
  data() {
    return {
      pilots: []
    }
  },
  async mounted() {
    const pilots = await Pilots.list()
    this.pilots = pilots.data.result
  },
}
</script>

<style>

</style>