<template>
  <div class="partners">
    <h1 class="display-6 text-muted text-center mb-4">
      {{ $t('partners') }}
    </h1>

    <div class="d-flex justify-content-evenly">
      <a href="https://www.vatsim.net/" target="_blank">
        <img class="img-partners" src="../assets/images/vatsim.png" />
      </a>
      <a href="https://www.voeclimb.com/welcome/" target="_blank">
        <img class="img-partners climb" src="../assets/images/climb.png" />
      </a>
      <a href="https://www.ivao.aero/" target="_blank">
        <img class="img-partners" src="../assets/images/ivao.svg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vs-partners'
}
</script>
<style scoped>
  .img-partners {
    height: 80px;
    width: 200px;
  }
  .img-partners.climb {
    height: 60px;
    margin-top: 1em;
  }
</style>