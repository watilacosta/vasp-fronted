<template>
  <vs-navbar></vs-navbar>
  <div class="container my-4">
    <router-view/>
  </div>
</template>

<script>
import VsNavbar from './components/vs-navbar.vue'

export default {
  components: {VsNavbar}
}
</script>