<template>
  <vs-navbar></vs-navbar>
  <div class="container my-4">
    <router-view/>
  </div>
  <vs-footer></vs-footer>
</template>

<script>
import VsFooter from './components/vs-footer.vue'
import VsNavbar from './components/vs-navbar.vue'

export default {
  components: {VsNavbar, VsFooter}
}
</script>