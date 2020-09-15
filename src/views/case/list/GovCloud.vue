<template>
    <div class="gov-cloud-page">
        <navigation :colour="false"></navigation>
        <div class="swiper-box">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item class="swipe-item" v-for="(item,index) in dataDetail"  :style="'background-image: url('+item.img+');'">
                    <div class="center">
                        <div class="line1">{{item.title}}</div>
                        <div class="line2">
                            {{item.content}}
                        </div>
                        <div class="line3">
                            <div class="text">立即咨询</div>
                        </div>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="service-area">
            <div class="title">服务领域</div>
            <div class="items">
                <div class="item">
                    <img src="../../../assets/images/service-area1.png" alt="" class="logo">
                    <div class="line1">智慧城市建设</div>
                    <div class="line2">做好智慧城市顶层设计，推进城市治理现代化，分布建设万物互联的全感知全连接的基础软硬件设施及数据连接管道</div>
                </div>
                <div class="item">
                    <img src="../../../assets/images/service-area2.png" alt="" class="logo">
                    <div class="line1">大数据</div>
                    <div class="line2">基于Hadoop/NoSQL等技术，支持海量数据计算与存储，满足智慧城市大数据量处理需求，在感知监察、智慧公安、智能交通等领域建立了成功案例</div>
                </div>
                <div class="item">
                    <img src="../../../assets/images/service-area3.png" alt="" class="logo">
                    <div class="line1">数字化</div>
                    <div class="line2">以元数据智能驱动为基座，形成数据管控平台，面向各业务领域提供大数据建设、管理及数据服务的能力，构建全链路一站式的数据资产管控中心</div>
                </div>
                <div class="item">
                    <img src="../../../assets/images/service-area4.png" alt="" class="logo">
                    <div class="line1">信息安全</div>
                    <div class="line2">高标准的运维管控体系，为客户提供合规、可用、安全、可信的云计算服务</div>
                </div>
            </div>
        </div>
        <div class="solution">
            <div class="title">行业解决方案</div>
            <div class="menus">
                <van-tabs v-model="activeIndex">
                    <van-tab :title="item.title" :index="1111" v-for="(item,index) in tabList" :key="index"></van-tab>
                </van-tabs>
            </div>
            <div class="items">
                <div class="item" v-for="(item,index) in solveMethodsList" :key="index">
                    <div class="line1">
                        <img class="blue" :src="item.img" alt />
                        <div class="text">{{item.title}}</div>
                    </div>
                    <div class="line2">{{item.remark}}</div>
                    <div class="line3">
                        <div class="text">了解更多</div>
                        <img src="../../../assets/images/more1.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="function">
            <div class="title">智慧的政务功能方案</div>
            <div class="items">
                <div class="item">
                    <div class="logo">
                        <img src="../../../assets/images/fun1.png" alt="">
                    </div>
                    <div class="line1">一网通办</div>
                    <div class="line2">八类应用融合平台、N种服务慧聚平台三级政务贯彻平台、四项中心互通共享</div>
                </div>
                <div class="item">
                    <div class="logo">
                        <img src="../../../assets/images/fun2.png" alt="">
                    </div>
                    <div class="line1">项目管理</div>
                    <div class="line2">通过建立合理、规范、高效的电子政务项目管理体系，提高地方政府电子政务项目建设管理水平</div>
                </div>
                <div class="item">
                    <div class="logo">
                        <img src="../../../assets/images/fun3.png" alt="">
                    </div>
                    <div class="line1">行政审批</div>
                    <div class="line2">实现行政审批事项全过程网上办理、全程记录.全程留痕等功能</div>
                </div>
                <div class="item">
                    <div class="logo">
                        <img src="../../../assets/images/fun4.png" alt="">
                    </div>
                    <div class="line1">电子监察</div>
                    <div class="line2">推动行政监察向“事前、事中、事后“全过程监察的转变，通过汇总业务监察数据</div>
                </div>
                <div class="item">
                    <div class="logo">
                        <img src="../../../assets/images/fun5.png" alt="">
                    </div>
                    <div class="line1">干部管理</div>
                    <div class="line2">集中管理机关单位的干部人员，减少干部处人力资源管理员工作量，辅助领导决策</div>
                </div>
                <div class="item">
                    <div class="logo">
                        <img src="../../../assets/images/fun6.png" alt="">
                    </div>
                    <div class="line1">内控管理</div>
                    <div class="line2">实现以业务为源头，以审批和追溯为抓手，将相关管控规则内嵌到信息化平台中，固化审批流程</div>
                </div>
                <div class="item">
                    <div class="logo">
                        <img src="../../../assets/images/fun7.png" alt="">
                    </div>
                    <div class="line1">内外一体化</div>
                    <div class="line2">建设一个内部信息系统与外部数字世界的连接平台，是以工作为主心的获取、推送、交互的工作平台</div>
                </div>
                <div class="item">
                    <div class="logo">
                        <img src="../../../assets/images/fun8.png" alt="">
                    </div>
                    <div class="line1">信创协同</div>
                    <div class="line2">推动行政监察向“事前、事中、事后“全过程监察的转变，通过汇总业务监察数据</div>
                </div>
            </div>
        </div>
        <div class="special">
            <div class="title">方案特点及架构</div>
            <div class="items">
                <div :class="'item active-spe'+index" v-for="(item,index) in specialList" :key="index">
                    <div class="line1">
                        <img :src="item.img" alt class="img" />
                        <div class="text">{{item.title}}</div>
                    </div>
                    <div class="line2">{{item.description}}</div>
                </div>
            </div>
        </div>
        <div class="picture">
            <div class="title">整体架构图</div>
            <img src="../../../assets/images/jgt.png" alt="">
        </div>
        <div class="case">
            <div class="title">服务案例</div>
            <div class="items">
                <div class="item"
                        v-for="(item,index) in serviceCaseList"
                        :key="index"
                        :style="'background-image: url('+item.src+')'">
                    <div class="back-gray">
                        <div class="line1">{{item.title}}</div>
                        <div class="line2">{{item.description}}</div>
                    </div>
                </div>
            </div>
            <div class="more" @click="$router.push('/caseArea')">
                <div class="text">了解更多</div>
                <img class="more1" src="../../../assets/images/more1.png" alt />
            </div>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>

<script>
    import navigation from '../../../components/navigation/navigation'
    import PageFooter from "../../../components/page-footer/PageFooter";
    import {getGovCloud} from "../../../utils/api";

    export default {
        name: "GovCloud",
        components: {
            navigation,
            PageFooter,
        },
        data() {
            return {
                activeIndex: 0,
                tabList: [
                    {
                        title: '智慧城市'
                    },
                    {
                        title: '政府'
                    },
                    {
                        title: '金融'
                    },
                    {
                        title: '交通'
                    },
                    {
                        title: '企业'
                    }
                ],
                solveMethodsList: [
                    {
                        title:'城市操作系统',
                        remark:'以城市智慧化管理和运营为核心，感知城市全域数据、融合多源异构数据，构建智慧城市的应用体系',
                        img:require('../../../assets/images/xw1.png')
                    },
                    {
                        title:'智能楼宇人员管理系统',
                        remark:'将高精度的计算机视觉技术，融入楼宇人员管理当中，提升考勤和人员管理效率',
                        img:require('../../../assets/images/xw2.png')
                    },
                    {
                        title:'智能社区管理系统',
                        remark:'为城市提供点线面结合的社区治理顶层设计和定制智能解决方案，推动社区管理从规划、到运维、到预测的可持续发展',
                        img:require('../../../assets/images/xw3.png')
                    },
                    {
                        title:'智能文旅解决方案',
                        remark:'解决模式单一、缺乏顶层设计、无法可持续发展等行业痛点，打造智能文旅新模式',
                        img:require('../../../assets/images/xw4.png')
                    }
                ],
                specialList:[
                    {
                        img:require('../../../assets/images/jiagou1.png'),
                        title:'全方位事项梳理',
                        description:'以群众和企业办事为核心，以问题为导向，从而将事项的公示信息逐步分解成群众和企业业务办理过程中能看明白、看的懂、方便理解的形式进行展示'
                    },
                    {
                        img:require('../../../assets/images/jiagou2.png'),
                        title:'智能化服务套餐',
                        description:'以群众办事的角度梳理出政府服务的相关事项进行“打包”，基于政务服务目录库，建设行政服务套餐管理，从而形成智能化的行政服务套餐，服务于群众'
                    },
                    {
                        img:require('../../../assets/images/jiagou3.png'),
                        title:'一站式智能问答及检索',
                        description:'基于政务服务资源库中数据，自定义政务服务知识库，提供全天候的政务解答，以人工服务为辅，引导群众向自助服务模式转变，减轻业务部门工作压力'
                    },
                    {
                        img:require('../../../assets/images/jiagou4.png'),
                        title:'电子证照共享库',
                        description:'依托统一的数据共享交换平台，以公民身份号码、企业社会信用代码分别作为个人和企业的唯一标识，结合统一身份认证体系，构建电子证照库'
                    },
                ],
                serviceCaseList:[
                    {
                        src:require('../../../assets/images/jgt.png'),
                        title:'市政府系统',
                        description:'在解决日常政务办公的基础上结合未来的发展趋势，以“放、管、服”与“互联网+”为指导思想，将各业务条线内部大量的综合事务管理、办文管理、办会管理等业务需求以新型智慧移动办公方式落地实现'
                    },
                    {
                        src:require('../../../assets/images/jgt.png'),
                        title:'旅游局系统',
                        description:'推进移动办公平台建设，裁用信息化手段管理上级单位管理文件；实现行政管理工作规范化；协同各业务管理系统，提高工作效率，辅助工作人员快速掌握和分析业务数据，对旅游管理工作做出快速反应'
                    }
                ],
                dataDetail:[]
            }
        },
        methods:{
            async fetchData(){
                let res =await getGovCloud()
                console.log(res.data)
                this.dataDetail=res.data
            }
        },
        created() {
            this.fetchData()
        }
    }
</script>

<style scoped lang="scss">
    .gov-cloud-page {
        .swiper-box {
            width: 100%;
            height: 750px;


            .my-swipe {
                height: 100%;

                .van-swipe__track {

                    .swipe-item {
                        @include back-img-center;
                        .center {
                            display: flex;
                            flex-direction: column;
                            padding: 0 30px;
                            padding-top: 100px;

                            .line1 {
                                font-size: 20px;
                                font-weight: bold;
                                color: #FFFFFF;
                            }

                            .line2 {
                                margin-top: 30px;
                                font-size: 13px;
                                font-weight: 400;
                                color: #FFFFFF;
                                line-height: 23px;
                                opacity: .8;
                                @include line-hidden(4);
                            }

                            .line3 {
                                margin: 0 auto;
                                margin-top: 30px;
                                width: 100px;
                                height: 35px;
                                border: 1px solid #FFFFFF;
                                border-radius: 31px;
                                display: flex;
                                justify-content: center;
                                align-items: center;

                                .text {
                                    font-size: 15px;
                                    font-weight: 400;
                                    color: #FFFFFF;
                                    line-height: 26px;
                                    opacity: .9;
                                }
                            }
                        }

                    }
                }
            }
        }

        .service-area {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            padding: 30px;
            padding-bottom: 50px;
            box-sizing: border-box;
            background-color: #f4f5f8;

            .title {
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #333333;
                padding: 50px 0;
                box-sizing: border-box;
            }

            .items {
                width: 100%;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;

                .item:first-child {
                    margin-top: 20px;
                }

                .item {
                    margin-top: 80px;
                    height: 281px;
                    background: #FFFFFF;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 45px 40px;
                    box-sizing: border-box;
                    position: relative;

                    .line1 {
                        font-size: 34px;
                        font-weight: 400;
                        color: #333333;
                    }

                    .line2 {
                        margin-top: 40px;
                        font-size: 24px;
                        font-weight: 400;
                        color: #333333;
                        line-height: 34px;
                        @include line-hidden(3)
                    }

                    .logo {
                        width: 116px;
                        height: 110px;
                        position: absolute;
                        right: 40px;
                        top: -50px;
                    }
                }
            }
        }

        .solution {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 30px;
            padding-bottom: 50px;
            box-sizing: border-box;
            height: 1677px;
            background-image: url("../../../assets/images/jjfa.png");
            @include back-img-center;

            .title {
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #ffffff;
                padding: 50px 0;
                box-sizing: border-box;
                letter-spacing: 7px;
            }

            .menus {
                width: 100%;

                /deep/ .van-tabs {
                    .van-tabs__wrap {
                        border-bottom: 1px solid gainsboro;
                        height: 55px;

                        .van-tabs__nav {
                            background: none !important;
                        }

                        .van-tab__text {
                            font-size: 15px;
                            font-weight: 400;
                            overflow: visible;
                            color: #ffffff;
                            opacity: .9;
                        }

                        .van-tab--active {
                            color: #ffffff;
                        }

                        .van-tabs__line {
                            background-color: #ffffff;
                            opacity: .9;
                        }
                    }
                }
            }

            .items{
                width: 100%;
                display: flex;
                flex-direction: column;
                padding-top: 50px;
                box-sizing: border-box;
                .item {
                    margin-bottom: 30px;
                    width:100%;
                    background: #ffffff;
                    padding: 40px 30px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .line1 {
                        width: 100%;
                        display: flex;
                        align-items: center;

                        img {
                            width: 56px;
                            margin-right: 15px;
                        }

                        .text {
                            font-size: 34px;
                            font-weight: 400;
                            color: #343434;
                        }

                        .blue {
                            display: block;
                        }

                        .white {
                            display: none;
                        }
                    }

                    .line2 {
                        font-size: 24px;
                        font-weight: 400;
                        color: #9EAAC3;
                        line-height: 30px;
                        margin-top: 35px;
                        margin-bottom: 40px;
                        @include line-hidden(3);
                    }

                    .line3 {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        cursor: pointer;

                        .text {
                            font-size: 14px;
                            font-weight: 400;
                            color: #024ce5;
                        }

                        img {
                            margin-left: 9px;
                            width: 40px;
                        }

                        .blue {
                            display: block;
                        }

                        .white {
                            display: none;
                        }
                    }
                }
            }
        }

        .function{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            padding: 30px;
            padding-bottom: 50px;
            box-sizing: border-box;
            background-color: #f4f5f8;

            .title {
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #333333;
                padding: 50px 0;
                box-sizing: border-box;
            }
            .items{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                .item{
                    margin-top: 30px;
                    width: 629px;
                    height: 230px;
                    background: #FFFFFF;
                    position: relative;
                    padding-left: 106px;
                    box-sizing: border-box;
                    justify-content: center;
                    display: flex;
                    flex-direction: column;
                    .logo{
                        width: 130px;
                        height: 130px;
                        background: #FFFFFF;
                        box-shadow: 0px 8px 30px 0px rgba(85, 113, 216, 0.15);
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        left: -65px;
                        top: 50px;
                        img{
                            width: 50%;
                        }
                    }
                    .line1{
                        font-size: 34px;
                        font-weight: 400;
                        color: #333333;
                        line-height: 11px;
                    }
                    .line2{
                        margin-top: 40px;
                        font-size: 24px;
                        font-weight: 400;
                        color: #333333;
                        line-height: 34px;
                    }
                }
            }
        }

        .special{
            height: 1600px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            padding: 30px;
            padding-bottom: 70px;
            box-sizing: border-box;
            background-color: #f4f5f8;
            background-image: url("../../../assets/images/fatd.png");
            @include back-img-center;

            .title {
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 500;
                color: #ffffff;
                padding: 50px 0;
                box-sizing: border-box;
                letter-spacing: 5px;
                height: 50px !important;
            }
            .items{
                width: 100%;
                display: flex;
                flex-direction: column;
                .item {
                    margin-bottom: 30px;
                    width: 100%;
                    height: 278px;
                    background: rgba(6, 25, 73, 0.7);
                    display: flex;
                    flex-direction: column;
                    padding: 36px 41px;
                    box-sizing: border-box;
                    .line1 {
                        display: flex;
                        align-items: center;
                        img{
                            width: 46px;
                        }
                        .text {
                            margin-left: 20px;
                            font-size: 30px;
                            font-weight: 400;
                            color: #ffffff;
                        }
                    }
                    .line2 {
                        margin-top: 40px;
                        font-size: 23px;
                        line-height: 1.5;
                        font-weight: 400;
                        color: #ffffff;
                        opacity: 0.7;
                        @include line-hidden(3);
                    }
                }
            }
        }

        .picture{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            padding: 30px;
            padding-bottom: 50px;
            box-sizing: border-box;
            background-color: #f4f5f8;
            position: relative;

            .title {
                width: calc(100% - 60px);
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #ffffff;
                padding: 50px 0;
                box-sizing: border-box;
                position: absolute;
                top: -170px;
            }
            img{
                position: absolute;
                width: calc(100% - 60px);
                height: 351px;
                top: -50px;
                
            }

        }
        .case{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            padding: 30px;
            padding-bottom: 50px;
            box-sizing: border-box;
            background-color: #f4f5f8;
            padding-top: 250px;
            .title {
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #333333;
                padding: 50px 0;
                box-sizing: border-box;

            }
            .items{
                width: 100%;
                display: flex;
                flex-direction: column;
                .item {
                    width: 100%;
                    height: 323px;
                    position: relative;
                    @include back-img-center;
                    margin-bottom: 30px;
                    .back-gray {
                        padding: 70px 43px;
                        box-sizing: border-box;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        background-color: rgba(2, 7, 20, 0.7);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        .line1 {
                            font-size: 24px;
                            font-weight: 400;
                            color: #fefefe;
                        }
                        .line2 {
                            margin-top: 50px;
                            font-size: 16px;
                            font-weight: 400;
                            color: #fefefe;
                            line-height: 1.5;
                            @include line-hidden(3);
                        }
                    }
                }
            }
            .more {
                width: 212px;
                height: 80px;
                border: 2px solid #004CE5;
                margin: 0 auto;
                margin-top: 50px;
                margin-bottom: 30px;
                border: 4px solid #004ce5;
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
                    width: 26px;
                    height: 9px;
                }
                .more1{
                    display: block;
                }
                .more0{
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
        }
    }
</style>