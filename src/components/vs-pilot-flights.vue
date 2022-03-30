<template>
  <h1 class="display-6 text-muted text-center mb-4">Pilots Flights Months</h1>
    <div class="row">
      <div class="table-responsive">
        <table class="table table-bordered table-hover table-striped table-sm">
          <thead class="table-dark">
            <tr class="text-center">
              <th scope="col">Name</th>
              <th scope="col">Current Month Flights</th>
              <th scope="col">Current Month Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center" v-for="(data, id) in pilotFlights" :key="id">
              <td>{{ data.name}}</td>
              <td>{{ data.currentMonth.flights }}</td>
              <td>{{ data.currentMonth.hoursFlights }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import PilotsFlights from '../services/pilotFlightMonths'

export default {
  name: 'vs-pilot-flights',
  data() {
    return {
      pilotFlights: []
    }
  },
  async mounted() {
    const flights = await PilotsFlights.list()
    this.pilotFlights = flights.data.result
  },
}
</script>
