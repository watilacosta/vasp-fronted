<template>
  <h1 class="display-6 text-muted text-center mb-4">{{ $t('join-us-page.title') }}</h1>
  <form class="row g-3">
    <div class="col-md-6">
      <label for="d0FirstName" class="form-label">{{ $t('join-us.firstName') }}</label>
      <input type="text" class="form-control" id="d0FirstName" name="d0"
        v-model="d0">
    </div>

    <div class="col-md-6">
      <label for="d1LastName" class="form-label">{{ $t('join-us.lastName') }}</label>
      <input type="text" class="form-control" id="d1LastName" name="d1"
        v-model="d1">
    </div>

    <div class="col-md-6">
      <label for="d2Country" class="form-label">{{ $t('join-us.country') }}</label>
      <select v-model="d2" class="form-select"
        aria-label="Default select example" id="d2Country" name="d2">
        <option disabled value="">Select your country</option>
        <option v-for="(country, id) in countries" :key="id" :value="country.iso">
          {{ country.countryName }}
        </option>
      </select>
    </div>

    <div class="col-md-6">
      <label for="d3birthdate" class="form-label">{{ $t('join-us.birthdate') }}</label>
      <vs-date id="d3birthdate" name="d3" placeholder="Select your birthdate"
        v-model="d3" />
    </div>

    <div class="col-md-6">
      <label for="d4email" class="form-label">Email</label>
      <input type="email" class="form-control" id="d4email" name="d4"
        v-model="d4">
    </div>

    <div class="col-md-3">
      <label for="d5ivao" class="form-label">VID IVAO</label>
      <input type="text" class="form-control" id="d5ivao" name="d5"
        v-model="d5">
    </div>

    <div class="col-md-3">
      <label for="d6vatsim" class="form-label">ID VATSIM</label>
      <input type="text" class="form-control" id="d6vatsim" name="d6"
        v-model="d6">
    </div>

    <div class="col-12">
      <button type="submit" class="btn btn-primary"
        @click.prevent="addNewPilot()">{{ $t('join-us.btnSignIn') }}</button>
    </div>
  </form>
</template>

<script>
import Countries from "../services/countries"
import VsDate from '../components/vs-date.vue'
import pilots from '../services/pilots'

export default {
  name: 'join-us',
  components: {  
    VsDate
  },
  data () {
    return {
      countries: [],
      d0: null,
      d1: null,
      d2: null,
      d3: null,
      d4: null,
      d5: null,
      d6: null,
      pilot: {
        firstName:  null,
        lastName:   null,
        countryIso: null,
        birthdate:  null,
        email:      null,
        ivao:       null,
        vatsim:     null,
      }
    }
  },
  methods: {
    formatDateToUesva(date) {
      if(date != null) {
        const year  = date.getFullYear()
        const month = (`0${date.getMonth() + 1}`).slice(-2)
        const day   = (`0${date.getDate()}`).slice(-2)

        return `${year}-${month}-${day}`
      }
      
      return null
    },
    async addNewPilot() {
      this.pilot = {
        firstName:  this.d0,
        lastName:   this.d1,
        countryIso: this.d2,
        birthdate:  this.formatDateToUesva(this.d3),
        email:      this.d4,
        ivao:       this.d5,
        vatsim:     this.d6,
      }

      try {
        const response = await pilots.addPilot(this.pilot)

        if(response.data.ernor == 0) {
          this.$swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Dados enviados com sucesso!',
            text: 'Acesse seu email para confirmar sua inscrição.',
            showConfirmButton: false,
            timer: 3000
          })

          this.$router.push('/')
        } else {
          this.$swal.fire({
            icon: 'error',
            title: response.data.result,
            text: 'Verifique os dados e tente novamente...',
            timer: 3000
          })

          this.$router.push('/join-us')
        }
      } catch (error) {
        console.log(error)
        this.$router.push('/join-us')
      }      
    }
  },
  async mounted() {
    const countries = await Countries.list()
    this.countries = countries.data.result
  }
}
</script>
