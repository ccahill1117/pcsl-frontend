<template>
  <div class="scores-entry">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <MatchForm />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MatchForm from '@/components/MatchForm.vue'

export default {
  name: 'ScoresEntryView',
  components: {
    MatchForm
  }
}
</script>
