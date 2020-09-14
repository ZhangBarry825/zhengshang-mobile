<template>
    <div class="mini-program">
        <navigation :colour="false"></navigation>
        <div class="background">
            <div class="line1">小程序定制开发</div>
            <div class="line2"></div>
        </div>
        <div class="ability">
            <div class="title">可开发行业</div>
            <div class="box">
                <div class="item">
                    <div class="left-title">{{textList[selectedIndex].title}}</div>
                    <div class="left-item" v-for="item in textList[selectedIndex].itemList">
                        <div class="line1">{{item.title}}</div>
                        <div class="line2">{{item.context}}</div>
                    </div>
                    <div class="more">
                        <div class="text">了解更多</div>
                        <img class="more1" src="../../../assets/images/more1.png" alt/>
                        <img class="more0" src="../../../assets/images/more0.png" alt/>
                    </div>
                </div>
                <div class="bottom">
                    <van-tabs v-model="activeIndex" @change="selectChange">
                        <van-tab :title="item.title" :index="1111" v-for="(item,index) in tabList"
                                 :key="index"></van-tab>
                    </van-tabs>
                </div>
            </div>
        </div>
        <div class="process">
            <div class="title">小程序开发流程</div>
            <img src="../../../assets/images/lct.png" alt="">
            <div class="items">
                <div class="item" :class="{'active':processIndex==0}" @click="processIndex=0">
                    <div class="left">01</div>
                    <div class="right">
                        <div class="line1">行业数据分析</div>
                        <div class="line2">甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队</div>
                    </div>
                </div>
                <div class="item" :class="{'active':processIndex==1}" @click="processIndex=1">
                    <div class="left">02</div>
                    <div class="right">
                        <div class="line1">品牌定位规范</div>
                        <div class="line2">甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队</div>
                    </div>
                </div>
                <div class="item" :class="{'active':processIndex==2}" @click="processIndex=2">
                    <div class="left">03</div>
                    <div class="right">
                        <div class="line1">功能需求调研</div>
                        <div class="line2">甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队</div>
                    </div>
                </div>
                <div class="item" :class="{'active':processIndex==3}" @click="processIndex=3">
                    <div class="left">04</div>
                    <div class="right">
                        <div class="line1">行业数据分析</div>
                        <div class="line2">甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队</div>
                    </div>
                </div>
                <div class="item" :class="{'active':processIndex==4}" @click="processIndex=4">
                    <div class="left">05</div>
                    <div class="right">
                        <div class="line1">交互视觉设计</div>
                        <div class="line2">甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队</div>
                    </div>
                </div>
                <div class="item" :class="{'active':processIndex==5}" @click="processIndex=5">
                    <div class="left">06</div>
                    <div class="right">
                        <div class="line1">行业数据分析</div>
                        <div class="line2">甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队</div>
                    </div>
                </div>
                <div class="item" :class="{'active':processIndex==6}" @click="processIndex=6">
                    <div class="left">07</div>
                    <div class="right">
                        <div class="line1">交互视觉设计</div>
                        <div class="line2">甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="deliver-standard">
            <div class="title">交付标准</div>
            <div class="items">
                <div class="item active-del1">
                    <div class="circle">
                        <img src="../../../assets/images/q1.png" alt="">
                    </div>
                    <div class="text">产品文档</div>
                </div>
                <div class="item active-del2">
                    <div class="circle">
                        <img src="../../../assets/images/q2.png" alt="">
                    </div>
                    <div class="text">设计稿源文件</div>
                </div>
                <div class="item active-del3">
                    <div class="circle">
                        <img src="../../../assets/images/q3.png" alt="">
                    </div>
                    <div class="text">源代码</div>
                </div>
                <div class="item active-del4">
                    <div class="circle">
                        <img src="../../../assets/images/q4.png" alt="">
                    </div>
                    <div class="text">使用文档</div>
                </div>
                <div class="item active-del5">
                    <div class="circle">
                        <img src="../../../assets/images/q5.png" alt="">
                    </div>
                    <div class="text">账号信息</div>
                </div>
            </div>
        </div>
        <div class="security-standard">
            <div class="title">系统安全标准</div>
            <div class="items">
                <div class="item">
                    <div class="item-title">源代码安全</div>
                    <div class="li">
                        <img src="../../../assets/images/ss1.png" alt="">
                        <div class="text">防SQL注入</div>
                    </div>
                    <div class="li">
                        <img src="../../../assets/images/ss3.png" alt="">
                        <div class="text">过滤拦截机制</div>
                    </div>
                    <div class="li">
                        <img src="../../../assets/images/ss4.png" alt="">
                        <div class="text">并发安全机制</div>
                    </div>
                    <div class="li">
                        <img src="../../../assets/images/ss1.png" alt="">
                        <div class="text">
                            加密(MDS、RSA、<br>
                            DES)
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title">程序安全</div>
                    <div class="li">
                        <img src="../../../assets/images/ss5.png" alt="">
                        <div class="text">身份认证机制</div>
                    </div>
                    <div class="li">
                        <img src="../../../assets/images/ss6.png" alt="">
                        <div class="text">权限控制</div>
                    </div>
                    <div class="li">
                        <img src="../../../assets/images/ss7.png" alt="">
                        <div class="text">渗透测试</div>
                    </div>
                    <div class="li">
                        <img src="../../../assets/images/ss8.png" alt="">
                        <div class="text">日志追踪</div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title">数据库安全</div>
                    <div class="li">
                        <img src="../../../assets/images/ss9.png" alt="">
                        <div class="text">双机容错</div>
                    </div>
                    <div class="li">
                        <img src="../../../assets/images/ss10.png" alt="">
                        <div class="text">数据备份</div>
                    </div>
                    <div class="li">
                        <img src="../../../assets/images/ss11.png" alt="">
                        <div class="text">灾难恢复</div>
                    </div>
                    <div class="li">
                        <img src="../../../assets/images/ss12.png" alt="">
                        <div class="text">
                            数据存储(基于RAID<br>
                            的存储技术)
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title">服务器安全</div>
                    <div class="li">
                        <img src="../../../assets/images/ss13.png" alt="">
                        <div class="text">防火墙</div>
                    </div>
                    <div class="li">
                        <img src="../../../assets/images/ss14.png" alt="">
                        <div class="text">入侵检测</div>
                    </div>
                    <div class="li">
                        <img src="../../../assets/images/ss15.png" alt="">
                        <div class="text">漏洞扫描</div>
                    </div>
                    <div class="li">
                        <img src="../../../assets/images/ss16.png" alt="">
                        <div class="text">物理隔离</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="support">
            <div class="title">技术支持</div>
            <div class="items">
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/j1.png" class="item-img" alt="">
                    </div>
                    <div class="item-title">程序使用培训</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/j2.png" class="item-img" alt="">
                    </div>
                    <div class="item-title">项目问题咨询</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/j3.png" class="item-img" alt="">
                    </div>
                    <div class="item-title">项目部署及维护</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/j4.png" class="item-img" alt="">
                    </div>
                    <div class="item-title">后期功能升级和修改</div>
                </div>
            </div>
        </div>

        <PageFooter></PageFooter>
    </div>
</template>

<script>
    import navigation from '../../../components/navigation/navigation'
    import PageFooter from "../../../components/page-footer/PageFooter";

    export default {
        name: "MiniProgram",
        components: {
            navigation,
            PageFooter,
        },
        data() {
            return {
                processIndex:0,
                selectedIndex:0,
                activeIndex: 0,
                tabList: [
                    {
                        title:'直播'
                    },
                    {
                        title:'医疗'
                    },
                    {
                        title:'教育'
                    },
                    {
                        title:'社交'
                    },
                    {
                        title:'交友'
                    },
                    {
                        title:'跑腿'
                    },
                    {
                        title:'外卖'
                    },
                    {
                        title:'团购'
                    },
                    {
                        title:'健身'
                    },

                ],
                textList:[
                    {
                        title:'直播类小程序',
                        itemList:[
                            {
                                title:'多渠道预热，蓄水前置流量',
                                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
                            },
                            {
                                title:'全场景推广，快速引流获客',
                                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
                            },
                            {
                                title:'边看边买，导购在线推荐',
                                context:'在线演示增强信任，OMG热搜式销货，提高转化'
                            }
                        ]
                    },
                    {
                        title:'医疗类小程序',
                        itemList:[
                            {
                                title:'多渠道预热，蓄水前置流量',
                                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
                            },
                            {
                                title:'全场景推广，快速引流获客',
                                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
                            },
                            {
                                title:'边看边买，导购在线推荐',
                                context:'在线演示增强信任，OMG热搜式销货，提高转化'
                            }
                        ]
                    },
                    {
                        title:'教育类小程序',
                        itemList:[
                            {
                                title:'多渠道预热，蓄水前置流量',
                                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
                            },
                            {
                                title:'全场景推广，快速引流获客',
                                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
                            },
                            {
                                title:'边看边买，导购在线推荐',
                                context:'在线演示增强信任，OMG热搜式销货，提高转化'
                            }
                        ]
                    },
                    {
                        title:'社交类小程序',
                        itemList:[
                            {
                                title:'多渠道预热，蓄水前置流量',
                                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
                            },
                            {
                                title:'全场景推广，快速引流获客',
                                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
                            },
                            {
                                title:'边看边买，导购在线推荐',
                                context:'在线演示增强信任，OMG热搜式销货，提高转化'
                            }
                        ]
                    },
                    {
                        title:'交友类小程序',
                        itemList:[
                            {
                                title:'多渠道预热，蓄水前置流量',
                                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
                            },
                            {
                                title:'全场景推广，快速引流获客',
                                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
                            },
                            {
                                title:'边看边买，导购在线推荐',
                                context:'在线演示增强信任，OMG热搜式销货，提高转化'
                            }
                        ]
                    },
                    {
                        title:'跑腿类小程序',
                        itemList:[
                            {
                                title:'多渠道预热，蓄水前置流量',
                                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
                            },
                            {
                                title:'全场景推广，快速引流获客',
                                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
                            },
                            {
                                title:'边看边买，导购在线推荐',
                                context:'在线演示增强信任，OMG热搜式销货，提高转化'
                            }
                        ]
                    },
                    {
                        title:'外卖类小程序',
                        itemList:[
                            {
                                title:'多渠道预热，蓄水前置流量',
                                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
                            },
                            {
                                title:'全场景推广，快速引流获客',
                                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
                            },
                            {
                                title:'边看边买，导购在线推荐',
                                context:'在线演示增强信任，OMG热搜式销货，提高转化'
                            }
                        ]
                    },
                    {
                        title:'团购类小程序',
                        itemList:[
                            {
                                title:'多渠道预热，蓄水前置流量',
                                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
                            },
                            {
                                title:'全场景推广，快速引流获客',
                                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
                            },
                            {
                                title:'边看边买，导购在线推荐',
                                context:'在线演示增强信任，OMG热搜式销货，提高转化'
                            }
                        ]
                    },
                    {
                        title:'健身类小程序',
                        itemList:[
                            {
                                title:'多渠道预热，蓄水前置流量',
                                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
                            },
                            {
                                title:'全场景推广，快速引流获客',
                                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
                            },
                            {
                                title:'边看边买，导购在线推荐',
                                context:'在线演示增强信任，OMG热搜式销货，提高转化'
                            }
                        ]
                    },
                ]
            }
        },
        methods: {
            selectChange(index){
                this.selectedIndex=index
            },


        }
    }
</script>

<style scoped lang="scss">
    .mini-program {
        .background {
            width: 750px;
            height: 748px;
            background: #101533;
            background-image: url("../../../assets/images/mnp.png");
            @include back-img-center;
            display: flex;
            flex-direction: column;

            .line1 {
                margin-top: 213px;
                margin-left: 50px;
                font-size: 54px;
                font-weight: 800;
                color: #FFFFFF;
            }

            .line2 {
                width: 106px;
                height: 8px;
                background: #FFFFFF;
                margin-top: 40px;
                margin-left: 50px;
            }
        }
        .ability {
            width: 100%;
            background-color: #fefefe;

            .title {
                padding: 50px 0;
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #222222;
                line-height: 44px;
            }

            .box {
                margin: 0 auto;
                width: 698px;
                height: 856px;
                background: #FFFFFF;
                box-shadow: 1px 3px 50px 0px rgba(106, 123, 156, 0.2);
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .item {
                    display: flex;
                    flex-direction: column;
                    padding: 50px 30px;
                    box-sizing: border-box;

                    .left-title {
                        font-size: 34px;
                        font-weight: 500;
                        color: #343434;
                        border-left: 6px solid #004BE5;
                        padding-left: 15px;
                        margin-bottom: 72px;
                    }

                    .left-item {
                        display: flex;
                        flex-direction: column;

                        .line1 {
                            font-size: 30px;
                            font-weight: 400;
                            color: #343434;
                            margin-bottom: 23px;
                        }

                        .line2 {
                            font-size: 26px;
                            font-weight: 400;
                            color: #9EAAC4;
                            line-height: 26px;
                            margin-bottom: 49px;
                            @include line-hidden(1)
                        }
                    }

                    .more {
                        width: 212px;
                        height: 80px;
                        border: 2px solid #004ce5;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;

                        .text {
                            transition: all .5s;
                            font-size: 16px;
                            font-weight: 400;
                            color: #004ce5;
                        }

                        img {
                            transition: all .5s;
                            margin-left: 10px;
                            width: 38px;
                            height: 17px;
                        }

                        .more1 {
                            display: block;
                        }

                        .more0 {
                            display: none;
                        }

                        z-index: 1;
                        position: relative;
                        font-size: inherit;
                        font-family: inherit;
                        color: white;
                        outline: none;
                        overflow: hidden;
                        transition: color 0.4s ease-in-out;
                    }

                    .more::before {
                        content: '';
                        z-index: -1;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 1em;
                        height: 1em;
                        border-radius: 50%;
                        background-color: #004ce5;
                        transform-origin: center;
                        transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
                        transition: transform 0.45s ease-in-out;
                    }

                    .more:hover {
                        cursor: pointer;

                        .text {
                            color: #ffffff;
                        }

                        .more1 {
                            display: none;
                        }

                        .more0 {
                            display: block;
                        }
                    }

                    .more:hover::before {
                        transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
                    }
                }

                .bottom {
                    width: 698px;
                    height: 130px;
                    background: #004CE5;

                    /deep/ .van-tabs {
                        .van-tabs__wrap {
                            height: 55px;

                            .van-tabs__nav {
                                background: none !important;
                            }

                            .van-tab__text {
                                overflow: visible;
                                font-size: 15px;
                                font-weight: 400;
                                color: #FFFFFF;
                            }

                            .van-tab {
                                margin-bottom: -10px;
                            }

                            .van-tab--active {
                                color: #ffffff;
                            }

                            .van-tabs__line {
                                background-color: #ffffff;
                                height: 2px;
                                width: 30px;
                            }
                        }
                    }
                }
            }
        }
        .process{
            margin-top: 50px;
            width: 100%;
            background-color: #f7f7f7;
            padding: 30px;
            box-sizing: border-box;
            padding-bottom: 50px;
            .title {
                padding: 50px 0;
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #343434;
                line-height: 44px;
            }
            img{
                width: 100%;
            }
            .items{
                margin-top: 30px;
                width: 696px;
                height: 795px;
                display: flex;
                flex-direction: column;
                background-color: #eef1f7;
                padding: 50px 0;
                box-sizing: border-box;
                overflow-y: scroll;
                .item{
                    margin-bottom: 60px;
                    border-left: 6px solid rgba(0,0,0,0);
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    padding: 0 30px;
                    box-sizing: border-box;
                    .left{
                        width: 50px;
                        font-size: 44px;
                        font-weight: 400;
                        color: #343434;
                    }
                    .right{
                        padding-left: 20px;
                        width: calc(100% - 50px);
                        display: flex;
                        flex-direction: column;
                        .line1{
                            font-size: 34px;
                            font-weight: 400;
                            color: #343434;
                        }
                        .line2{
                            margin-top: 30px;
                            font-size: 26px;
                            font-weight: 400;
                            color: #9EAAC4;
                            line-height: 38px;
                        }
                    }
                }
                .active{
                    border-left: 6px solid #FF8438;
                    .left{
                        color: #004DE5;
                    }
                    .right{
                        .line1{
                            /*color: #004DE5;*/
                        }
                    }
                }
            }

        }
        .deliver-standard{
            width: 100%;
            background-color: #fefefe;
            background-image: url("../../../assets/images/jfbj.png");
            background-size: cover;
            height: 755px;
            background-color: #f3f5f7;

            .title {
                padding: 50px 0;
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #ffffff;
                line-height: 44px;
            }
            .items {
                flex-direction: row;
                display: flex;
                flex-wrap: wrap;
                padding: 30px ;
                box-sizing: border-box;
                .item:nth-child(2),.item:nth-child(5){
                    margin: 0 40px;
                }
                .item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 202px;
                    height: 235px;
                    background: rgba(23, 40, 100, 0.7);
                    justify-content: center;
                    margin-bottom: 40px;
                    .circle {
                        width: 94px;
                        height: 94px;
                        background: rgba(255, 255, 255, 1);
                        box-shadow: 0px 8px 20px 0px rgba(24, 94, 223, 0.15);
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 50%;
                        }
                    }

                    .text {
                        margin-top: 39px;
                        width: 100%;
                        text-align: center;
                        font-size: 24px;
                        font-weight: 400;
                        color: rgba(255, 255, 255, 1);
                    }
                }
            }
        }
        .security-standard{
            width: 100%;
            background-color: #f3f5f7;

            .title {
                padding: 50px 0;
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #222222;
                line-height: 44px;
            }
            .items{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 30px;
                box-sizing: border-box;
                .item:hover{
                    box-shadow: 0px 3px 50px 0px rgba(105, 122, 156, 0.25);
                }
                .item{
                    width: 324px;
                    height: 442px;
                    background: #004CE5;
                    background-image: url("../../../assets/images/item.png");
                    background-size: cover;
                    padding: 28px 20px;
                    box-sizing: border-box;
                    margin-bottom: 52px;
                    .item-title{
                        font-size: 32px;
                        font-weight: 500;
                        color: #FFFFFF;
                        margin-bottom: 64px;
                    }
                    .li:last-child{
                        margin-bottom: 0;
                    }
                    .li{
                        margin-bottom: 30px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        img{
                            width: 31px;
                            height: 31px;
                        }
                        .text{
                            font-size: 26px;
                            font-weight: 400;
                            color: #343434;
                            margin-left: 10px;
                            line-height: 1.5;
                        }
                    }
                }
            }
        }
        .support{
            width: 100%;
            background-color: #ffffff;

            .title {
                padding: 50px 0;
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #222222;
                line-height: 44px;
            }
            .items{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 30px;
                box-sizing: border-box;
                .item{
                    width: 322px;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 10px;
                    .img{
                        overflow: hidden;
                        width: 322px;
                        height:225px;
                        .item-img{
                            transition: all 1s;
                            width:100%;
                            height:100%;
                        }
                    }
                    .item-title{
                        width: 100%;
                        text-align: center;
                        font-size: 30px;
                        font-weight: 400;
                        color: #343434;
                        margin: 30px 0;
                    }
                }
                .item:hover{
                    cursor: pointer;
                    .item-img{
                        transform: scale(1.2);
                    }
                }
            }
        }
    }

</style>















