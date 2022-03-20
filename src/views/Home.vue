<template>
  <div class="home">
    <vs-header></vs-header>
    <h1 class="display-6 text-muted text-center my-4">Online Flights</h1>
    <iframe src="https://uesva.com:3008/addons/iframe?uid=a0hhOElLYkxkbkdjNXowcXdxdCtudWV2RzNzRExBTmIxV0x0NUd3dWhhVT0="
      scrolling="no"
      width="100%"
      height="600"
      frameborder="0"
      name="CRvxTFNVnJSu1647637401"></iframe>

    <h1 class="display-6 text-muted text-center mb-2">Airlines Ranks</h1>
    <iframe src="https://uesva.com:3008/addons/iframe?uid=QlBrUU0xcGtvRnFSSDl6WDczR1VRMzFwdm9GQmdOWEx5MzlLakMyczM3UmtLRHNGSE9hL0V3PT0="
      scrolling="no"
      width="100%"
      height="300"
      frameborder="0"
      name="GJRcyJhuEdXTQ1647695184"></iframe>
  </div>
</template>

<script>
import VsHeader from '../components/vs-header.vue'

export default {
  name: 'Home',
  components: {VsHeader}
}
</script>
