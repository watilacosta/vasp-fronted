<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#!">
        <img src="../assets/images/299x65.png" alt="logotipo vasp virtual"
          class="d-inline-block align-text-top m-0 p-0">
      </a>
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
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/pilots" class="nav-link">Pilots</router-link>
            <router-link to="/rules" class="nav-link">Rules and Regulation</router-link>
            <router-link to="/staff" class="nav-link">Staff</router-link>
            <router-link to="/stastitics" class="nav-link">Statistics</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'vs-navbar'
}
</script>