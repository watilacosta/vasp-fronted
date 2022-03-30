<template>
  <Datepicker
    v-model="date"
    :enableTimePicker="false"
    locale="us"
    :yearRange="[1920, 2022]"
    autoApply
    required />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const date = ref('')

    return {
      date
    }
  }
}
</script>

<style>

</style>