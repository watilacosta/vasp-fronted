<template>
  <div class="statistics">
    <h1 class="display-6 text-muted text-center mb-4">Statistics</h1>
    <div class="row">
      <div v-for="(statistic, id) in statistics" :key="id" class="d-flex justify-content-around py-4">
        <div class="col-sm-3">
          <div class="card text-dark bg-light m-1">
            <div class="card-header">Active Pilots</div>
            <div class="card-body">
              <h1 class="card-title text-center">{{ statistic.activePilots }}</h1>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card text-dark bg-light m-1">
            <div class="card-header">Miles Flown</div>
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
            <div class="card-header">Total Flights</div>
            <div class="card-body">
              <h1 class="card-title text-center">{{ statistic.flights.total }}</h1>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card text-dark bg-light m-1">
            <div class="card-header">Total Passengers Transported</div>
            <div class="card-body">
              <h1 class="card-title text-center">{{ statistic.passengers.total }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Statistics from '../services/statistics'

export default {
  name: 'Statistics',
  data() {
    return {
      statistics: []
    }
  },
  async mounted() {
    const statistics = await Statistics.list()
    this.statistics = statistics.data.result

    console.log(this.statistics)
  }
}
</script>
<style scoped>
  
</style>