<template>
    <div class="home">
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
    export default {
        name: 'Home',
        components: {
        },
        data() {
            return {};
        },
        methods: {},
    }
</script>

<style scoped lang="scss">
    .home {
        .swiper-box{
            width: 100%;
            height: 850px;
            border: 1px solid red;

            .my-swipe .van-swipe-item {
                color: #fff;
                font-size: 20px;
                line-height: 150px;
                text-align: center;
                background-color: #39a9ed;
            }
        }
    }

</style>
