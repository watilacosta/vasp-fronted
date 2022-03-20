<template>
  <div class="staff">
    <h1 class="display-6 text-muted text-center mb-4">Staff</h1>
    <div class="table-responsive">
      <table class="table table-bordered table-hover table-striped">
        <thead class="table-dark">
          <tr class="text-center">
            <th scope="col">Title</th>
            <th scope="col">Insignia</th>
            <th scope="col">Callsign</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="(staff, id) in staffs" :key="id">
            <td>{{ staff.title }}</td>
            <td><img :src="staff.img0" :title="staff.title" height="30" width="70"></td>
            <td>{{ staff.callsign }}</td>
            <td>{{ staff.name }}</td>
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