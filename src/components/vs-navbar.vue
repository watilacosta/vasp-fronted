<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/images/299x65.png"
          alt="logotipo vasp virtual"
          height="40"
          width="180"
          class="d-inline-block align-text-top m-0 p-0">
      </router-link>
      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="d-flex w-auto">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/" class="nav-link">{{ $t('menus.home') }}</router-link>
            <router-link to="/pilots" class="nav-link">{{ $t('menus.pilots') }}</router-link>
						<router-link to="/fleets" class="nav-link">{{ $t('menus.fleets') }}</router-link>
            <router-link to="/staff" class="nav-link">Staff</router-link>
            <router-link to="/statistics" class="nav-link">{{ $t('menus.statistics') }}</router-link>
            <router-link to="/rules" class="nav-link">{{ $t('menus.rules') }}</router-link>
          </div>
          <img
            @click="translate('pt')"
            :style="{ width: flagSize, height: flagSize }"
            src="../assets/images/icons/brasil.png"
            class="mx-1"
           alt="bandeira do brasil"/>
          <img
            @click="translate('en')"
            :style="{ width: flagSize, height: flagSize }"
            src="../assets/images/icons/us.png"
            class=""
           alt="bandeira dos eua"/>
          <router-link to="/join-us" class="btn btn-sm btn-info text-white ms-3" type="button">
            {{ $t('home-page.btn-join') }}
          </router-link>
          <a href="https://vasp-dov.herokuapp.com/users/sign_in" target="_blank" class="btn btn-sm btn-secondary text-white ms-1">Área do Piloto</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'vs-navbar',
  methods: {
    translate(language) {
      this.$i18n.locale = language
    }
  },
  data() {
    return {
      flagSize: '1.6rem',
      hover: false,
    }
  },
}
</script>