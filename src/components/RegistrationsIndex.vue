<template>
  <div class="hi">
    <p>
      Let's put table of registrations here as they come in
    </p>
    <p>drag and drop to reorder</p>
  </div>
</template>

<script>
export default {
  name: 'RegistrationsIndex',
  props: {
    registrations: Array,
    someProp: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
