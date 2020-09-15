<template>
    <div class="news-list">
        <navigation :colour="true"></navigation>
        <div class="content">
            <div class="title">{{artDetail.title}}</div>
            <div class="time">{{artDetail.ctime}}</div>
            <div class="article" v-html="artDetail.content">
            </div>
        </div>
        <div class="pagination">
            <div class="previous" v-if="artDetail.pre" @click="goNewsDetail(artDetail.pre.id)">
                <div class="line1">上一篇</div>
                <div class="line2">{{artDetail.pre.title}}</div>
                <div class="line3">{{artDetail.pre.ctime}}</div>
            </div>
            <div class="next"  v-if="artDetail.next" @click="goNewsDetail(artDetail.next.id)">
                <div class="line1">下一篇</div>
                <div class="line2">{{artDetail.next.title}}</div>
                <div class="line3">{{artDetail.next.ctime}}</div>
            </div>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>

<script>
    import navigation from "../../components/navigation/navigation";
    import PageFooter from "../../components/page-footer/PageFooter";
    import {getNewsDetail} from "../../utils/api";

    export default {
        name: "NewsDetail",
        components: {
            navigation,
            PageFooter,
        },
        data(){
            return{
                id:0,
                artDetail:{}
            }
        },
        methods:{
            goNewsDetail(id){
                this.id=id
                this.fetchData()
                window.scrollTo(0,0)
            },
            async fetchData(){
                let res= await getNewsDetail({id:this.id})
                console.log(res.data)
                this.artDetail=res.data
            }
        },
        created() {
            this.id=this.$route.query.id
            this.fetchData()
        }
    }
</script>

<style scoped lang="scss">
    .news-list{
        @include page-style;
        background-color: #f4f5f8;
        padding-top: 130px;
        .content{
            width: 100%;
            min-height: 1000px;
            padding: 30px 50px;
            box-sizing: border-box;
            margin-top: 15px;
            background: #ffffff;
            .title{
                font-size: 34px;
                font-weight: 600;
                color: #222222;
                line-height: 44px;
                text-align: center;
            }
            .time{
                text-align: center;
                font-size: 26px;
                font-weight: 400;
                color: #9BAABF;
                line-height: 44px;
                margin-top: 30px ;
                margin-bottom: 40px;
            }
            .article{
                width: 100%;
                ::v-deep img{
                    max-width: 100%;
                }

            }

        }
        .pagination{
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 30px;
            box-sizing: border-box;
            .previous,
            .next {
                cursor: pointer;
                width: 100%;
                height: 168px;
                background: #ffffff;
                padding: 20px;
                box-sizing: border-box;
                border-left: 8px solid #ff8338;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .line1 {
                    font-size: 16px;
                    font-weight: 400;
                    color: #999;
                }
                .line2 {
                    font-size: 16px;
                    font-weight: 400;
                    color: #666;
                }
                .line3 {
                    font-size: 14px;
                    font-weight: 400;
                    color: #9eaac3;
                }
            }
            .next{
                margin-top: 20px;
            }
        }
    }

</style>