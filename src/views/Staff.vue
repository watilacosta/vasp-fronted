<template>
  <div class="staff">
    <h1 class="display-6 text-muted text-center mb-4">{{ $t('page-staff.title') }}</h1>

    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="(staff, id) in staffs" :key="id">
        <div class="card h-100">
          <img :src="staff.img1" class="card-img-top" alt="imagem do staff" >
          <div class="card-body">
            <h5 class="card-title">{{ staff.callsign }} - {{ staff.name }}</h5>
            <p class="card-text">
              {{ staff.title.toUpperCase() }}
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">{{ staff.staffMail }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Staffs from '../services/staffs'

export default {
  name: 'Staff',
  data () {
    return {
      staffs: []
    }
  },
  async mounted() {
    const staffs = await Staffs.list()
    this.staffs = staffs.data.result
  },
}
</script>