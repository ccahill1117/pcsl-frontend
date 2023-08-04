<template>
  <div class="matchForm">
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchForm',
  props: {
    registrations: Array,
    someProp: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  matchForm {
    border: thick double #32a1ce
  }
</style>
