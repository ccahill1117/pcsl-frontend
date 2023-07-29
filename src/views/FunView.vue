<template>
  <div class="dev">
    <h1>dev</h1>
    <MatchForm />
    <MatchResult />
  </div>
</template>

<script>
import MatchForm from '@/components/MatchForm.vue'
import MatchResult from '@/components/MatchResult.vue'

export default {
  name: 'HomeView',
  components: {
    MatchResult,
    MatchForm
  }
}
</script>
