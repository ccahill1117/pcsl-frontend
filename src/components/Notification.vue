<template>
  <transition appear name='fade'>
    <div v-if='show' class='notification'>{{ error.message }}</div>
  </transition>
</template>

<script>
export default {
  name: 'ErrorNotification',
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      show: false,
      timeout: 0
    }
  },
  watch: {
    error () {
      this.show = true
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.show = false
      }, 3000)
    }
  }
}
</script>

<style scoped>
.notification {
  position: fixed;
  left: 1rem;
  top: 1rem;
  background-color: rgba(255, 0, 0, 70%);
  padding: 1rem;
  border-radius: 0.4rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}
.fade-enter-active,
.fade-leave-active {
  transition: left 3s ease;
}
.fade-enter,
.fade-leave-to {
  left: -2000px;
}
</style>
