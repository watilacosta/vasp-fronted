<template>
  <div class="statistics">
    <h1 class="display-6 text-muted text-center mb-4">{{ $t('page-statistic.title') }}</h1>
    <div class="row">
      <div v-for="(statistic, id) in statistics" :key="id" class="d-flex justify-content-around py-4">
        <div class="col-sm-3">
          <div class="card text-dark bg-light m-1">
            <div class="card-header">{{ $t('page-statistic.active-pilots') }}</div>
            <div class="card-body">
              <h1 class="card-title text-center">{{ statistic.activePilots }}</h1>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card text-dark bg-light m-1">
            <div class="card-header">{{ $t('page-statistic.miles-flown') }}</div>
            <div class="card-body">
              <h1 class="card-title text-center">
                {{ statistic.milesFlown.mn }}
                <small class="text-muted">nm</small>
              </h1>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card text-dark bg-light m-1">
            <div class="card-header">{{ $t('page-statistic.total-flights') }}</div>
            <div class="card-body">
              <h1 class="card-title text-center">{{ statistic.flights.total }}</h1>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card text-dark bg-light m-1">
            <div class="card-header">{{ $t('page-statistic.passengers-transported') }}</div>
            <div class="card-body">
              <h1 class="card-title text-center">{{ statistic.passengers.total }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vs-fleets></vs-fleets>
    <vs-pilot-flights></vs-pilot-flights>
  </div>
</template>

<script>
import Statistics from '../services/statistics'
import VsPilotFlights from '../components/vs-pilot-flights.vue'
import VsFleets from '../components/vs-fleets.vue'

export default {
  name: 'Statistics',
  components: { VsPilotFlights, VsFleets },
  data() {
    return {
      statistics: []
    }
  },
  async mounted() {
    const statistics = await Statistics.list()
    this.statistics = statistics.data.result
  }
}
</script>
<style scoped>
  .statistics {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
</style>