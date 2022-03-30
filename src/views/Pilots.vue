<template>
  <div class="pilots">
    <h1 class="display-6 text-muted text-center mb-4">{{ $t('page-pilots.title') }}</h1>
    <div class="table-responsive">
      <table class="table table-bordered table-hover table-striped table-sm">
        <thead class="table-dark">
          <tr class="text-center">
            <th scope="col">{{ $t('page-pilots.table.th.callsign') }}</th>
            <th scope="col">{{ $t('page-pilots.table.th.name') }}</th>
            <th scope="col">{{ $t('page-pilots.table.th.rating') }}</th>
            <th scope="col">Score Rating</th>
            <th scope="col">IVAO</th>
            <th scope="col">VATSIM</th>
            <th scope="col">{{ $t('page-pilots.table.th.join-date') }}</th>
            <th scope="col">{{ $t('page-pilots.table.th.flight-hours') }}</th>
            <th scope="col">{{ $t('page-pilots.table.th.last-flight') }}</th>
            <th scope="col">{{ $t('page-pilots.table.th.country') }}</th>
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
            <td>
              <span class="badge bg-success">{{ pilot.UesvaScoreRating }}</span>
            </td>
            <td>{{ pilot.ivao }}</td>
            <td>{{ pilot.vatsim }}</td>
            <td>{{ pilot.dataAirline.registeredDate }}</td>
            <td>{{ pilot.dataAirline.totalHoursFlights }}</td>
            <td>{{ pilot.dataAirline.lastFlightDate }}</td>
            <td>
              <country-flag :country=pilot.country.toLowerCase() size='small'/>
            </td>
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
