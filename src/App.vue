<template>
  <vs-navbar></vs-navbar>
  <div class="container mt-2">
    <router-view/>
  </div>
</template>

<script>
import VsNavbar from './components/vs-navbar.vue'

export default {
  components: {VsNavbar}
}
</script>