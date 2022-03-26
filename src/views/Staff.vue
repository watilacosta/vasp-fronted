<template>
  <div class="staff">
    <h1 class="display-6 text-muted text-center mb-4">{{ $t('page-staff.title') }}</h1>
    <div class="table-responsive">
      <table class="table table-bordered table-hover table-striped">
        <thead class="table-dark">
          <tr class="text-center">
            <th scope="col">{{ $t('page-staff.table.th.name') }}</th>
            <th scope="col">{{ $t('page-staff.table.th.callsign') }}</th>
            <th scope="col">{{ $t('page-staff.table.th.title') }}</th>
            <th scope="col">{{ $t('page-staff.table.th.email') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="(staff, id) in staffs" :key="id">
            <td>{{ staff.name }}</td>
            <td>{{ staff.callsign }}</td>
            <td>{{ staff.title.toUpperCase() }}</td>
            <td>{{ staff.staffMail }}</td>
          </tr>
        </tbody>
      </table>
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