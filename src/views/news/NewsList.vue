<template>
    <div class="news-list">
        <navigation :colour="true"></navigation>
        <div class="content">
            <div class="menus">
                <van-tabs v-model="activeIndex" @change="menuChange">
                    <van-tab
                            :title="item.title"
                            :index="1111"
                            v-for="(item,index) in Acquisition"
                            :key="index"
                    ></van-tab>
                </van-tabs>
            </div>
            <div class="items">
                <div :class="'item active-news'+index" v-for="(item,index) in newslist" @click="goDetail(item.id)">
                    <div class="left">
                        <div
                                class="img"
                                :style="'background-image: url('+item.img+')'"
                        ></div>
                    </div>
                    <div class="right">
                        <div class="line1">{{item.title}}</div>
                        <div class="line3">{{item.remark}}</div>
                        <div class="line2">{{item.ctime}}</div>
                    </div>
                </div>
            </div>
            <div class="more" @click="getMore" v-loading="loading">
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
    import {getNewsClass, getNewsList} from "../../utils/api";

    export default {
        name: "NewsList",
        components: {
            navigation,
            PageFooter,
        },
        data(){
            return{
                loading:false,
                pindex: '',
                page: 1,
                Acquisition: [],
                activeIndex: 0,
                total: 1,
                recommend: [{ img: '', title: '' }],
                newslist: [],
            }
        },
        methods:{
            goDetail(id){
                this.$router.push('/newsDetail?id='+id)
            },
            getMore(){
                this.loading=true
                //console.log(this.page)
                this.page++
                this.getList()
                setTimeout(()=>{
                    this.loading=false
                },500)
            },
            async fetchData(){
                let { data } = await getNewsClass()
                this.Acquisition = data
                this.pindex = data[0].index
                this.getList()
            },
            async getList () {
                let that = this
                let { data } = await getNewsList({ limit: 8, page: this.page, pindex: this.pindex })
                if (this.page == 1) {
                    this.newslist = data.rows
                } else {
                    that.newslist=that.newslist.concat(data.rows)
                }
                this.total = data.total
                //console.log(this.recommend, "获取列表")
                //console.log(this.newslist, "获取列表")
            },
            menuChange (index, title) {
                //console.log(index, title)
                this.recommend = []
                this.newslist = []
                this.pindex = this.Acquisition[index].index
                this.page = 1
                this.getList()
            }
        },
        created() {
          this.fetchData()
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    .news-list{
        @include page-style;
        background-color: #f4f5f8;
        padding-top: 100px;
        .content{
            width: 100%;
            min-height: 1000px;
            padding: 20px 0;
            box-sizing: border-box;
            margin-top: 15px;
            .menus{
                /deep/ .van-tabs {
                    .van-tabs__wrap {
                        border-bottom: 1px solid #d6dce9;
                        height: 55px;
                        .van-tabs__nav {
                            background-color: #f4f5f8 !important;
                        }
                        .van-tab__text {
                            font-size: 15px;
                            font-weight: 400;
                            overflow: visible;
                        }
                        .van-tab {
                            margin-bottom: 0px;
                        }
                        .van-tab--active {
                            color: #014ce5;
                        }
                        .van-tabs__line {
                            background-color: #014ce5;
                        }
                    }
                }
            }
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