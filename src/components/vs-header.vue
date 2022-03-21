<template>
  <header>
    <!-- Background image -->
    <div class="p-5 text-center bg-image">
      <div class="mask p-4">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3">{{ $t('home-page.va-name') }}</h1>
            <h4 class="mb-3">{{ $t('home-page.slogan') }}</h4>
            <router-link to="/join-us"
              class="btn btn-outline-light btn-lg"
              role="button">{{ $t('home-page.btn-join') }}</router-link>
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
    height: 300px;
    margin-top: 2.5rem;
  }
  .bg-image {
    background-image: url('../assets/images/cover.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 500px;
    margin-bottom: 4em;
  }
</style>