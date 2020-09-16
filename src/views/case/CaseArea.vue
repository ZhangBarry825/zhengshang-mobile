<template>
    <div class="case-area-page">
        <navigation :colour="false"></navigation>
        <div class="background">
            <div class="line1">业务领域</div>
            <div class="line2"></div>
        </div>
        <div class="items">
            <div class="item item1">
                <div class="image">
                    <img class="active-bottom" :src="dataDetail.datalist[0].img" alt="">
                </div>
                <div class="title">
                    <div class="line1">{{dataDetail.datalist[0].title}}</div>
                    <div class="line2"></div>
                    <div class="line3">{{dataDetail.datalist[0].remark}}</div>
                </div>
                <div :class="'content-item active-right-item'+index" v-for="(item,index) in dataDetail.datalist[0].content">{{item}}</div>
                <div class="more" @click="goDetail(1)">
                    <div class="more-text">了解更多</div>
                    <img src="../../assets/images/more1.png" />
                </div>
            </div>
            <div class="item item2">
                <div class="image">
                    <img class="active-bottom" :src="dataDetail.datalist[1].img" alt="">
                </div>
                <div class="title">
                    <div class="line1">{{dataDetail.datalist[1].title}}</div>
                    <div class="line2"></div>
                    <div class="line3">{{dataDetail.datalist[1].remark}}</div>
                </div>
                <div :class="'content-item active-right-item'+index" v-for="(item,index) in dataDetail.datalist[1].content">{{item}}</div>
                <div class="more" @click="goDetail(2)">
                    <div class="more-text">了解更多</div>
                    <img src="../../assets/images/more1.png" />
                </div>
            </div>
            <div class="item item3">
                <div class="image">
                    <img class="active-bottom" :src="dataDetail.datalist[2].img" alt="">
                </div>
                <div class="title">
                    <div class="line1">{{dataDetail.datalist[2].title}}</div>
                    <div class="line2"></div>
                    <div class="line3">{{dataDetail.datalist[2].remark}}</div>
                </div>
                <div :class="'content-item active-right-item'+index" v-for="(item,index) in dataDetail.datalist[2].content">{{item}}</div>
                <div class="more" @click="goDetail(3)">
                    <div class="more-text">了解更多</div>
                    <img src="../../assets/images/more1.png" />
                </div>
            </div>
            <div class="item item4">
                <div class="image">
                    <img class="active-bottom" :src="dataDetail.datalist[3].img" alt="">
                </div>
                <div class="title">
                    <div class="line1">{{dataDetail.datalist[3].title}}</div>
                    <div class="line2"></div>
                    <div class="line3">{{dataDetail.datalist[3].remark}}</div>
                </div>
                <div :class="'content-item active-right-item'+index" v-for="(item,index) in dataDetail.datalist[3].content">{{item}}</div>
                <div class="more" @click="goDetail(4)">
                    <div class="more-text">了解更多</div>
                    <img src="../../assets/images/more1.png" />
                </div>
            </div>
            <div class="item item5">
                <div class="image">
                    <img class="active-bottom" :src="dataDetail.datalist[4].img" alt="">
                </div>
                <div class="title">
                    <div class="line1">{{dataDetail.datalist[4].title}}</div>
                    <div class="line2"></div>
                    <div class="line3">{{dataDetail.datalist[4].remark}}</div>
                </div>
                <div :class="'content-item active-right-item'+index" v-for="(item,index) in dataDetail.datalist[4].content">{{item}}</div>
                <div class="more" @click="goDetail(5)">
                    <div class="more-text">了解更多</div>
                    <img src="../../assets/images/more1.png" />
                </div>
            </div>
            <div class="item item6">
                <div class="image">
                    <img class="active-bottom" :src="dataDetail.datalist[5].img" alt="">
                </div>
                <div class="title">
                    <div class="line1">{{dataDetail.datalist[5].title}}</div>
                    <div class="line2"></div>
                    <div class="line3">{{dataDetail.datalist[5].remark}}</div>
                </div>
                <div :class="'content-item active-right-item'+index" v-for="(item,index) in dataDetail.datalist[5].content">{{item}}</div>
                <div class="more" @click="goDetail(6)">
                    <div class="more-text">了解更多</div>
                    <img src="../../assets/images/more1.png" />
                </div>
            </div>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>

<script>
    import navigation from "../../components/navigation/navigation";
    import PageFooter from "../../components/page-footer/PageFooter";
    import {getCaseArea} from "../../utils/api";

    export default {
        name: "CaseArea",
        components: {
            navigation,
            PageFooter,
        },
        data(){
            return{
                dataDetail:{
                    datalist:[
                        {
                            content:[
                                '','',''
                            ],
                            img:'',
                            remark:'',
                            title:''
                        },
                        {
                            content:[
                                '','',''
                            ],
                            img:'',
                            remark:'',
                            title:''
                        },
                        {
                            content:[
                                '','',''
                            ],
                            img:'',
                            remark:'',
                            title:''
                        },
                        {
                            content:[
                                '','',''
                            ],
                            img:'',
                            remark:'',
                            title:''
                        },
                        {
                            content:[
                                '','',''
                            ],
                            img:'',
                            remark:'',
                            title:''
                        },
                        {
                            content:[
                                '','',''
                            ],
                            img:'',
                            remark:'',
                            title:''
                        },
                    ]
                }
            }
        },
        methods:{
            goDetail(index){
                if(index==1){
                    this.$router.push('/appCustom')
                }else if(index==2){
                    this.$router.push('/caseArea/mini-program')
                }else if(index==3){
                    this.$router.push('/caseArea/website')
                }else if(index==4){
                    this.$router.push('/systemInte')
                }else if(index==5){
                    this.$router.push('/caseArea/things')
                }else if(index==6){
                    this.$router.push('/caseArea/govCloud')
                }else {
                    this.$router.push('/')
                }

            },
            async fetchData(){
                let res= await getCaseArea()
                //console.log(res.data)
                this.dataDetail=res.data
            }
        },
        created() {
            this.fetchData()
        },
        mounted() {
            let that = this
        }
    }
</script>

<style scoped lang="scss">
    .case-area-page{
        overflow: hidden;
        .background{
            width: 750px;
            height: 748px;
            background: #101533;
            background-image: url("../../assets/images/ywly.png");
            @include back-img-center;
            display: flex;
            flex-direction: column;
            .line1{
                margin-top: 213px;
                margin-left: 50px;
                font-size: 54px;
                font-weight: 800;
                color: #FFFFFF;
            }
            .line2{
                width: 106px;
                height: 8px;
                background: #FFFFFF;
                margin-top: 40px;
                margin-left: 50px;
            }
        }
        .items{
            width: 100%;
            display: flex;
            flex-direction: column;
            .item{
                padding: 0 30px;
                box-sizing: border-box;
                .image{
                    display: flex;
                    justify-content: center;
                    padding: 50px 0;
                    box-sizing: border-box;
                    img{
                        width: 80%;
                    }
                }
                .title{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin-bottom:50px ;
                    .line1{
                        font-size: 34px;
                        font-weight: 600;
                        color: #333333;
                    }
                    .line2{
                        width: 65px;
                        height: 6px;
                        background: #014CE5;
                        margin-top: 16px;
                        margin-bottom: 38px;
                    }
                    .line3{
                        width:100%;
                        height: 60px;
                        font-size: 24px;
                        font-weight: 400;
                        color: #9EAAC3;
                        @include line-hidden(2)
                    }
                }
                .content-item{
                    font-size: 28px;
                    font-weight: 400;
                    color: #333333;
                    @include line-hidden(2);
                    margin: 10px 0;
                }
                .more {
                    margin: 80px 0;
                    width: 212px;
                    height: 80px;
                    border: 2px solid #004ce5;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .more-text {
                        font-size: 24px;
                        font-weight: 400;
                        color: #004ce5;
                        line-height: 26px;
                    }
                    img {
                        margin-left: 10px;
                        width: 38px;
                    }
                }
            }
            .item2{
                background-color: #f4f5f8;
            }
            .item3{
                background-color: #ffffff;
                background-image: url("../../assets/images/case-back1.png");
                background-size: 80%;
                background-position: right;
                background-repeat: no-repeat;
            }
            .item4{
                background-color: #f4f5f8;
            }
            .item5{
                background-color: #ffffff;
                background-image: url("../../assets/images/case-back2.png");
                background-size: 80%;
                background-repeat: no-repeat;
                background-position: 0 100px ;
            }
            .item6{
                background-color: #f4f5f8;
            }
        }
    }
</style>