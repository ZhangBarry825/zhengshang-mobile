<template>
    <div class="home">
        <navigation></navigation>
        <div class="swiper-box">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </div>

    </div>
</template>

<script>
import navigation from '../components/navigation/navigation'
export default {
  name: 'Home',
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
