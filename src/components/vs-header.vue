<template>
  <header>
    <!-- Background image -->
    <div class="p-5 text-center bg-image">
      <div class="mask p-4">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3">Vasp Virtual Airlines</h1>
            <h4 class="mb-3">Viaje bem, Viaje Vasp Virtual</h4>
            <router-link to="/" class="btn btn-outline-light btn-lg" role="button">Join Us</router-link>

          </div>
        </div>
      </div>
    </div>
    <!-- Background image -->
  </header>
</template>

<script>
export default {
  name: 'vs-header'
}
</script>
<style scoped>
  .mask {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .bg-image {
    background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp');
    height: 500px;
    margin-bottom: 4em;
  }
</style>