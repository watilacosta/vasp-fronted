<template>
  <Datepicker
    v-model="date"
    :enableTimePicker="false"
    locale="br"
    autoApply
    required />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const date = ref('')

    return {
      date,
    }
  }
}
</script>

<style>

</style>