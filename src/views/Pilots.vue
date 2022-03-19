<template>
  <div class="pilots">
    <h1 class="display-6 text-muted text-center">Pilots</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pilot, index) in pilots" :key="index">
          <th scope="row">{{ index }}</th>
          <td>{{ pilot }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Pilots',
  components: {},
  computed: {
    ...mapGetters({
      pilots: 'listPilots'
    })
  }
}
</script>

<style>

</style>