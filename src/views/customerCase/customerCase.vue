<template>
    <div class="customerCase">
        <navigation :colour="false"></navigation>
        <div
                class="backgro"
                :style="'background-image: url('+require('../../assets/images/customerCase/backgro.png')+')'"
        >
            <h2>客户案例</h2>
            <p class="bar"></p>
        </div>
        <div class="tabs">
            <van-tabs color="#FF6A00" @change="menuChange" v-model="activeIndex">
                <van-tab v-for="item1 in tabList" :title="item1.title">
                    <div class="list">
                        <div class="item" v-for="(item2, index2) in datalist" :key="index2"
                             @click="$router.push({path: '/customerCasedetails',query: {id: item2.id,}})">
                            <div>
                                <van-image fit="cover" :src="item2.img"/>
                            </div>
                            <div>
                                <p>{{item2.title}}</p>
                                <p>{{item2.remark}}</p>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
            <PageFooter></PageFooter>
        </div>
    </div>
</template>

<script>
    import PageFooter from '../../components/page-footer/PageFooter'
    import {getCaseClass, getCaseList} from "../../utils/api";

    export default {
        name: 'customerCase',

        data() {
            return {
                tabs: [{
                    img: require('../../assets/images/customerCase/tabs1.png'),
                    title: '线上健身 ',
                    text: '线上健身 重构健身新模式'
                }, {
                    img: require('../../assets/images/customerCase/tabs2.png'),
                    title: '生活商城',
                    text: '全渠道电商解决方案'
                }, {
                    img: require('../../assets/images/customerCase/tabs3.png'),
                    title: '线上健身',
                    text: '助力商家实现流量高效变现'
                }, {
                    img: require('../../assets/images/customerCase/tabs4.png'),
                    title: '生活商城',
                    text: '全渠道电商解决方案'
                }, {
                    img: require('../../assets/images/customerCase/tabs1.png'),
                    title: '线上健身',
                    text: '线上健身 重构健身新模式'
                }, {
                    img: require('../../assets/images/customerCase/tabs1.png'),
                    title: '线上健身',
                    text: '线上健身 重构健身新模式'
                }, {
                    img: require('../../assets/images/customerCase/tabs1.png'),
                    title: '线上健身',
                    text: '线上健身 重构健身新模式'
                }, {
                    img: require('../../assets/images/customerCase/tabs1.png'),
                    title: '线上健身',
                    text: '线上健身 重构健身新模式'
                }],

                activeIndex: 0,
                tabList: [],
                pindex: '',
                page: 1,
                datalist: [],
                total: 0,
                loading: false,
                pageSize: 8
            }
        },
        //生命周期函数
        created() {
            this.typeOfAcquisition()
        },
        //方法
        methods: {
            //   获取数据列表
            retrieveData() {
                let that = this
                that.loading = true
                getCaseList({
                    pindex: that.pindex,
                    page: that.page,
                    limit: that.pageSize
                }).then(res => {
                    let data = res.data
                    that.datalist = data.rows
                    that.total = data.total
                    that.loading = false
                })

            },
            // 获取种类
            async typeOfAcquisition() {
                let {data} = await getCaseClass()
                this.pindex = data[0].index
                this.tabList = data
                this.retrieveData()
                //console.log(data, '获取种类')
            },
            handleSizeChange(val) {
                this.page = val
                this.retrieveData()
                //console.log(val)
            },
            menuChange(index, title) {
                //console.log(index, title)
                this.pindex = this.tabList[index].index
                this.page = 1
                console.log(this.pindex)
                console.log(index)
                this.retrieveData()
            }
        },
        //组件
        components: {
            PageFooter
        }
    }
</script>

<style lang='scss' scoped>
    .customerCase {
        background-color: #eeeeee;

        .backgro {
            width: 750px;
            height: 734px;
            background-size: 734px 750px;

            > h2 {
                font-size: 48px;
                font-weight: bold;
                color: #ffffff;
                padding-top: 221px;
                padding-left: 59px;
                box-sizing: border-box;
            }

            .bar {
                width: 106px;
                height: 8px;
                background: #ffffff;
                margin-left: 59px;
                margin-top: 44px;
            }
        }

        .tabs {
            width: 750px;
            height: 80px;
            background: #ffffff;

            .list {
                background-color: #eeeeee;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 0 30px 30px;
                box-sizing: border-box;

                .item {
                    width: 330px;
                    margin-top: 30px;
                    background: #ffffff;

                    > div:nth-child(1) {
                        width: 330px;

                        > img {
                            width: 330px;
                            height: 220px;
                        }
                    }

                    > div:nth-child(2) {
                        > p:nth-child(1) {
                            margin: 0 auto;
                            font-size: 28px;
                            color: #333333;
                            text-align: center;
                            margin-top: 20px;
                            width: 250px;
                            height: 41px;
                            @include line-hidden(1);
                        }

                        > p:nth-child(2) {
                            margin: 0 auto;
                            font-size: 22px;
                            height: 33px;
                            color: #9eaac3;
                            text-align: center;
                            margin-bottom: 20px;
                            width: 250px;
                            @include line-hidden(1);
                        }
                    }
                }
            }
        }
    }
</style>
