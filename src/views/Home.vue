<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <navigation></navigation>
  </div>
</template>

<script>
import navigation from '../components/navigation/navigation'
export default {
  name: 'Home',
  components: {},
  data () {
    return {};
  },
  methods: {},
  components: {
    navigation
  }
}
</script>

<style scoped lang="scss">
.home {
  img {
    width: 750px;
  }
}
</style>
