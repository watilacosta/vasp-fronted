<template>
  <h1 class="display-6 text-muted text-center mb-4">{{ $t('page-rules.title') }}</h1>
  <div class="row">
    <div class="mt-4 fw-lighter">
      <p><strong>1.</strong> {{ $t('page-rules.rules.1') }}</p>
      <p><strong>2.</strong> {{ $t('page-rules.rules.2') }}</p>
      <p><strong>3.</strong> {{ $t('page-rules.rules.3') }}</p>
      <p><strong>4.</strong> {{ $t('page-rules.rules.4') }}</p>
      <p>
        <strong>5.</strong>
        {{ $t('page-rules.rules.5') }}
        <a href="http://www.uesva.com" target="_blank">www.uesva.com</a>
      </p>
      <p><strong>6.</strong> {{ $t('page-rules.rules.6') }}</p>
      <p><strong>7.</strong> {{ $t('page-rules.rules.7') }}</p>
      <p><strong>8.</strong> {{ $t('page-rules.rules.8') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rules'
}
</script>