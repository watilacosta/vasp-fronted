<template>
  <h1 class="display-6 text-muted text-center mb-4">{{ $t('join-us-page.title') }}</h1>
  <form class="row g-3">
    <div class="col-md-6">
      <label for="d0FirstName" class="form-label">First Name</label>
      <input type="text" class="form-control" id="d0FirstName" name="d0"
        v-model="pilot.d0">
    </div>
    <div class="col-md-6">
      <label for="d1LastName" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="d1LastName" name="d1"
        v-model="pilot.d1">
    </div>
    <div class="col-md-6">
      <label for="d2Country" class="form-label">Country</label>
      <select v-model="pilot.d2" class="form-select"
        aria-label="Default select example" id="d2Country" name="d2">
        <option disabled value="">Select you country</option>
        <option v-for="(country, id) in countries" :key="id" :value="country.iso">
          {{ country.countryName }}
        </option>
      </select>
    </div>
    <div class="col-md-6">
      <label for="d3birthdate" class="form-label">Date of birth</label>
      <vs-date id="d3birthdate" name="d3" placeholder="Date of birth"
        v-model="pilot.d3" />
    </div>
    <div class="col-md-6">
      <label for="d4email" class="form-label">Email</label>
      <input type="email" class="form-control" id="d4email" name="d4"
        v-model="pilot.d4">
    </div>
    <div class="col-md-3">
      <label for="d5ivao" class="form-label">VID IVAO</label>
      <input type="text" class="form-control" id="d5ivao" name="d5"
        v-model="pilot.d5">
    </div>
    <div class="col-md-3">
      <label for="d6vatsim" class="form-label">ID VATSIM</label>
      <input type="text" class="form-control" id="d6vatsim" name="d6"
        v-model="pilot.d6">
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </form>
</template>

<script>
import Countries from "../services/countries"
import VsDate from '../components/vs-date.vue'

export default {
  name: 'join-us',
  components: {  
    VsDate
  },
  data () {
    return {
      countries: [],
      pilot: {
        d0: null,
        d1: null,
        d2: null,
        d3: null,
        d4: null,
        d5: null,
        d6: null,
      }
    }
  },
  async mounted() {
    const countries = await Countries.list()
    this.countries = countries.data.result
  }
}
</script>
