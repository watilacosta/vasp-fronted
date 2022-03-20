<template>
  <div class="pilots">
    <h1 class="display-6 text-muted text-center mb-4">Pilots Roster</h1>
    <div class="table-responsive">
      <table class="table table-bordered table-hover table-striped">
        <thead class="table-dark">
          <tr class="text-center">
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
          <tr class="text-center" v-for="(pilot, id) in pilots" :key="id">
            <td>{{ pilot.dataAirline.callsign }}</td>
            <td>{{ pilot.name }}</td>
            <td>
              <img class="image-rating" height="20" width="50"
                :src="pilot.imageRating" :title="pilot.pilotRating" />
            </td>
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
  </div>
</template>

<script>
import Pilots from '../services/pilots'

export default {
  name: 'Pilots',
  data () {
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
