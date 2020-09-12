<template>
    <div class="news-list">
        <navigation :colour="true"></navigation>
        <div class="content">
            <div class="items">
                <div :class="'item active-news'+index" v-for="(item,index) in 4" :key="index">
                    <div class="left">
                        <div
                                class="img"
                                :style="'background-image: url('+require('../../assets/images/news0.png')+')'"
                        ></div>
                    </div>
                    <div class="right">
                        <div class="line1">2C互联网还有机会么？</div>
                        <div class="line3">“资本寒冬”四个字从2018年开始贯穿到了天，2020年初又因为疫情的影响...</div>
                        <div class="line2">2020-05-08</div>
                    </div>
                </div>
            </div>
            <div class="more">
                <div class="text">加载更多</div>
                <div class="img"></div>
            </div>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>

<script>
    import navigation from "../../components/navigation/navigation";
    import PageFooter from "../../components/page-footer/PageFooter";

    export default {
        name: "NewsList",
        components: {
            navigation,
            PageFooter,
        }
    }
</script>

<style scoped lang="scss">
    .news-list{
        position: absolute;
        @include page-style;
        background-color: #f4f5f8;
        padding-top: 100px;
        .content{
            width: 100%;
            min-height: 1000px;
            padding: 20px 0;
            box-sizing: border-box;
            margin-top: 15px;
            .items{
                width: 100%;
                display: flex;
                flex-direction: column;
                .item {
                    margin-top: 15px;
                    cursor: pointer;
                    width: 100%;
                    background: #ffffff;
                    display: flex;
                    flex-direction: row;
                    padding: 30px;
                    box-sizing: border-box;

                    .left {
                        width: 200px;
                        height: 200px;
                        margin-left: 20px;
                        box-sizing: border-box;
                        overflow: hidden;

                        .img {
                            transition: all 1s;
                            width: 200px;
                            height: 200px;
                            @include back-img-center;
                        }
                    }

                    .right {
                        width: calc(100% - 240px);
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        padding: 0 20px;
                        box-sizing: border-box;

                        .line1 {
                            font-size: 30px;
                            font-weight: 400;
                            color: #333333;
                            @include line-hidden(1);
                        }

                        .line2 {
                            font-size: 20px;
                            font-weight: 400;
                            color: #9eaac3;
                        }

                        .line3 {
                            font-size: 22px;
                            font-weight: 400;
                            color: #333333;
                            @include line-hidden(2);
                            margin-top: 35px;
                            margin-bottom: 30px;
                        }
                    }
                }
            }
            .more{
                width: 100%;
                background-color: #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 15px;
                padding: 20px 0;
                .text{
                    font-size: 24px;
                    font-weight: 400;
                    color: #9BAABF;
                }
                .img{
                    margin-left: 20px;
                    margin-top: -10px;
                    width: 15px;
                    height: 15px;
                    border-left: 4px solid #9BAABF;
                    border-bottom: 4px solid #9BAABF;
                    transform: rotate(-45deg);
                }
            }
        }
    }

</style>