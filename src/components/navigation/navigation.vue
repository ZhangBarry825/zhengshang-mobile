<template>
    <div class="navigation-page" :class="{'height':unfold}">
<!--        <div v-if="propD" class="placeholder"></div>-->
        <div class="navigation"  :class="coloura?'navigationasd':''">
            <div class="head" :class="unfold?'headasdad':''">
                <img @click="jumpTitle('/')" :src="coloura?logo1:unfold?logo1:logo0" alt/>
                <img @click="expandAndClose" :src="coloura?unfold?menu2:menu1:unfold?menu2:menu4" alt/>
            </div>
            <transition name="fade" >
                <div v-if="unfold" class="list" >
                    <div class="home van" @click="jumpLink('/')">首页</div>
                    <div class="business">
                        <van-collapse v-model="activeNames" accordion @change="change">
                            <van-collapse-item
                                    v-for="(item, index) in navig"
                                    :key="index"
                                    :title="item.title"
                                    :name="item.id"
                                    :border="false"
                                    :title-class="titds==item.id?'researchP':'titdsdaldsdae'">
                                <template #title>
                                    <div>
                                        <span @click="jumpTitle(item.Link)">{{item.title}}</span>
                                    </div>
                                </template>
                                <!--  -->
                                <van-collapse v-model="activeName" accordion @change="change">
                                    <van-collapse-item
                                            v-for="(itema, indexa) in item.subclass"
                                            :key="indexa"
                                            :name="itema.id"
                                            :border="false"
                                            :title-class="titds==itema.id?'researchP':'titdsdaldsdae'"
                                    >
                                        <template #title>
                                            <div>
                                                <span @click="jumpTitle(itema.Link)">{{itema.title}}</span>
                                            </div>
                                        </template>
                                        <div :class="'arrangement'+itema.row">
                                            <p
                                                    v-for="(items, indexs) in itema.subclass"
                                                    @click="jumpLink(items.Link)"
                                                    :key="indexs"
                                            >{{items.text}}</p>
                                        </div>
                                    </van-collapse-item>
                                </van-collapse>
                            </van-collapse-item>
                        </van-collapse>
                    </div>
                    <div class="business">
                        <van-collapse v-model="activeNames" accordion @change="change">
                            <van-collapse-item
                                    v-for="(item, index) in navig1"
                                    :key="index"
                                    :title="item.title"
                                    :name="item.id"
                                    :border="false"
                                    :title-class="titds==item.id?'researchP':'titdsdaldsdae'"
                            >
                                <template #title>
                                    <div>
                                        <span @click="jumpTitle(item.Link)">{{item.title}}</span>
                                    </div>
                                </template>
                                <div :class="'arrangement'+item.row">
                                    <p
                                            v-for="(items, indexs) in item.subclass"
                                            @click="jumpLink(items.Link)"
                                            :key="indexs"
                                    >{{items.title}}</p>
                                </div>
                            </van-collapse-item>
                        </van-collapse>
                    </div>
                    <div class="business">
                        <van-collapse v-model="activeNames" accordion @change="change">
                            <van-collapse-item
                                    v-for="(item, index) in navig2"
                                    :key="index"
                                    :name="item.id"
                                    :border="false"
                                    :title-class="titds==item.id?'researchP':'titdsdaldsdae'"
                            >
                                <template #title>
                                    <div>
                                        <span @click="jumpTitle(item.Link)">{{item.title}}</span>
                                    </div>
                                </template>
                                <div :class="'arrangement'+item.row">
                                    <p
                                            v-for="(items, indexs) in item.subclass"
                                            @click="jumpLink(items.Link)"
                                            :key="indexs"
                                    >{{items.title}}</p>
                                </div>
                            </van-collapse-item>
                        </van-collapse>
                    </div>
                    <div class="home dsad van" @click="jumpTitle('/aboutUs')">关于我们</div>
                    <div class="home van" @click="jumpTitle('/contact')">联系我们</div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navigation',
        props: {
            colour: Boolean,
            // propD: {
            //     type: Boolean,
            //     default: false   //默认值
            // },
        },
        data() {

            return {
                menu1: require('../../assets/images/menu-btnhei.png'),//黑三行
                menu2: require('../../assets/images/menu-btn1.png'), //黑差
                menu4: require('../../assets/images/menu-btn0.png'),//白三行
                logo1: require('../../assets/images/logo1.png'),
                logo0: require('../../assets/images/logo0.png'),
                unfold: false,
                activeNames: 0,
                activeName: 0,
                titds: 0,
                titdsid: 0,
                navig: [
                    {
                        title: "业务领域",
                        id: 1,
                        Link: '/caseArea',
                        subclass: [
                            {
                                title: 'APP开发',
                                row: 3,
                                id: 2,
                                Link: '/appCustom',
                                subclass: [
                                    {
                                        text: '社交',
                                        Link: '/appCustom'
                                    },
                                    {
                                        text: '直播',
                                        Link: '/appCustom'
                                    },
                                    {
                                        text: '团购',
                                        Link: '/appCustom'
                                    },
                                    {
                                        text: '交友',
                                        Link: '/appCustom'
                                    },
                                    {
                                        text: '教育',
                                        Link: '/appCustom'
                                    },
                                    {
                                        text: '医疗',
                                        Link: '/appCustom'
                                    },
                                    {
                                        text: '跑腿',
                                        Link: '/appCustom'
                                    },
                                    {
                                        text: '外卖',
                                        Link: '/appCustom'
                                    },
                                ]
                            },
                            {
                                title: "小程序开发",
                                row: 2,
                                id: 3,
                                Link: '/caseArea/mini-program',
                                subclass: [
                                    {
                                        text: '展示小程序',
                                        Link: '/caseArea/mini-program'
                                    },
                                    {
                                        text: '平台直播',
                                        Link: '/caseArea/mini-program'
                                    },
                                    {
                                        text: '商城小程序',
                                        Link: '/caseArea/mini-program'
                                    },
                                    {
                                        text: '相亲交友',
                                        Link: '/caseArea/mini-program'
                                    },
                                    {
                                        text: '社区团购',
                                        Link: '/caseArea/mini-program'
                                    },
                                    {
                                        text: '其他',
                                        Link: '/caseArea/mini-program'
                                    },
                                ]
                            },
                            {
                                title: "网站建设",
                                row: 2,
                                id: 4,
                                Link: '/caseArea/website',
                                subclass: [
                                    {
                                        text: '企业官网',
                                        Link: '/caseArea/website'
                                    },
                                    {
                                        text: '行业门户',
                                        Link: '/caseArea/website'
                                    },
                                    {
                                        text: '社区论坛',
                                        Link: '/caseArea/website'
                                    },
                                    {
                                        text: '电商网站',
                                        Link: '/caseArea/website'
                                    }
                                ]
                            },
                            {
                                title: "系统集成",
                                row: 1,
                                id: 5,
                                Link: '/systemInte',
                                subclass: [
                                    {
                                        text: 'ERP企业管理系统',
                                        Link: '/systemInte'
                                    },
                                    {
                                        text: 'CRM客户管理系统',
                                        Link: '/systemInte'
                                    },
                                    {
                                        text: '报表管理系统',
                                        Link: '/systemInte'
                                    },
                                    {
                                        text: '日程管理系统',
                                        Link: '/systemInte'
                                    },
                                    {
                                        text: '项目管理系统',
                                        Link: '/systemInte'
                                    }
                                ]
                            },
                            {
                                title: "政务云",
                                row: 1,
                                id: 6,
                                Link: '/caseArea/govCloud',
                                subclass: [
                                    {
                                        text: '政府OA办公系统',
                                        Link: '/caseArea/govCloud'
                                    },
                                    {
                                        text: '档案管理系统',
                                        Link: '/caseArea/govCloud'
                                    },
                                    {
                                        text: '人事管理系统',
                                        Link: '/caseArea/govCloud'
                                    },
                                    {
                                        text: '采购管理系统',
                                        Link: '/caseArea/govCloud'
                                    },
                                    {
                                        text: '流程管理系统',
                                        Link: '/caseArea/govCloud'
                                    },
                                    {
                                        text: '会议管理系统',
                                        Link: '/caseArea/govCloud'
                                    },
                                ]
                            },
                            {
                                title: "物联网",
                                row: 2,
                                id: 7,
                                Link: '/caseArea/things',
                                subclass: [
                                    {
                                        text: '人工智能',
                                        Link: '/caseArea/things'
                                    },
                                    {
                                        text: '人脸识别',
                                        Link: '/caseArea/things'
                                    },
                                    {
                                        text: '硬件设备',
                                        Link: '/caseArea/things'
                                    },
                                    {
                                        text: '语音系统',
                                        Link: '/caseArea/things'
                                    }
                                ]
                            },
                        ]
                    },

                ],
                navig1: [
                    {
                        title: "客户案例",
                        row: 3,
                        id: 8,
                        Link: '/customerCase',
                        subclass: [
                            {
                                title: 'APP开发',
                                Link: '/customerCase?caseId=0',
                            },
                            {
                                title: '小程序开发',
                                Link: '/customerCase?caseId=1',
                            },
                            {
                                title: '网站建设',
                                Link: '/customerCase?caseId=2',
                            },
                            {
                                title: '系统集成',
                                Link: '/customerCase?caseId=3',
                            },
                            {
                                title: '物联网',
                                Link: '/customerCase?caseId=4',
                            },
                            {
                                title: '政务云',
                                Link: '/customerCase?caseId=5',
                            },
                        ]
                    },
                ],
                navig2: [
                    {
                        title: "新闻中心",
                        row: 2,
                        id: 9,
                        Link: '/newsList',
                        subclass: [
                            {
                                title: '公司新闻',
                                Link: '/newsList',
                            },
                            {
                                title: '项目签约',
                                Link: '/newsList',
                            },
                            {
                                title: '行业动态',
                                Link: '/newsList',
                            },
                            {
                                title: '技术专栏',
                                Link: '/newsList',
                            },
                        ]
                    }
                ],
                coloura: false
            }
        },
        //生命周期函数
        created() {
            this.coloura = this.colour
            //console.log(this.colour)
        },
        //方法
        methods: {
            jumpLink(Link) {
                //console.log(Link)
                if (Link == this.$router.history.current.fullPath) {
                    this.unfold = !this.unfold
                    return
                }
                this.unfold = !this.unfold
                this.$router.push({
                    path: Link,
                    query: {}
                })
                if(this.$route.query.caseId != undefined){
                    this.$emit('reload')
                }
            },
            expandAndClose() {
                this.unfold = !this.unfold
            },
            jumpTitle(Link) {
                //console.log(Link)
                if (Link == this.$router.history.current.fullPath) {
                    this.unfold = !this.unfold
                    return
                }
                this.$router.push({
                    path: Link,
                    query: {}
                })
            },
            change(e) {
                this.titds = e
            },
            changegg(e) {
                //console.log(e)
                this.titdsid = e
            },
            handleScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
                this.coloura = scrollTop > 0 ? true : false;  // 如果滚动到顶部了，this.isFixed就为true

                //   window.onscroll = function () {
                //     var sl = -Math.max(document.body.scrollLeft, document.documentElement.scrollLeft);
                //     document.getElementById('fixed').style.left = sl + 'px';
                //   }
            }
        },
        mounted() {
            if (!this.coloura) {
                window.addEventListener('scroll', this.handleScroll)
            }

        },
        //组件
        components: {}
    }
</script>

<style lang='scss' scoped>
    .height{
        height: 100%;
    }
    .navigation-page {
        z-index: 99;
        position: fixed;
        top: 0;
        overflow: scroll;

        .fade-enter-active,
        .fade-leave-active {
            transition: opacity 0.5s;
        }

        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
        {
            opacity: 0;
        }

        .navigationasd {
            background-color: #fff;
            transition: all 0.5s;
        }

        .navigation {

            width: 750px;
            height: 128px;
            z-index: 9999999999;

            .headasdad {
                background-color: #fff;
                transition: all 0.5s;
            }

            .head {
                width: 750px;
                height: 128px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 26px;
                box-sizing: border-box;

                > img:nth-child(1) {
                    width: 254px;
                    height: 84px;
                }

                > img:nth-child(2) {
                    width: 52px;
                    height: 34px;
                }
            }

            .list {
                background-color: #fff;

                .home {
                    width: 100%;

                    font-size: 30px;
                    font-weight: 400;
                    color: #333333;
                }

                .home.dsad {
                    border-bottom: 0 solid #f9f9fa;
                    border-width: 1px 0;
                }

                .van {
                    padding: 0 16px;
                    height: 44px;
                    line-height: 44px;
                    box-sizing: border-box;
                }

                .arrangement3 {
                    margin: 0 auto;
                    display: flex;
                    //   justify-content: space-between;
                    flex-wrap: wrap;
                    font-size: 30px;

                    font-weight: 400;
                    color: #333333;
                    line-height: 32px;
                    text-align: center;

                    > p {
                        width: 200px;
                        margin-bottom: 80px;
                        margin-left: 10px;
                    }
                }

                .arrangement2 {
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    font-size: 30px;
                    font-weight: 400;
                    color: #333333;
                    line-height: 32px;
                    text-align: left;
                    margin-left: 50px;

                    > p {
                        width: 250px;
                        margin-bottom: 80px;
                        margin-left: 10px;
                    }
                }

                .arrangement1 {
                    margin: 20px auto;
                    font-size: 30px;
                    font-weight: 400;
                    color: #333333;
                    line-height: 32px;
                    text-align: left;
                    margin-left: 50px;

                    > p {
                        width: 250px;
                        margin-bottom: 80px;
                        margin-left: 10px;
                    }
                }

                .titdsdaldsdae {
                    font-size: 30px;
                    font-weight: 400;
                    color: #333333;
                }
            }
        }

        .placeholder {
            height: 128px;
            width: 750px;
            background-color: rgba(148, 99, 99, 0);
        }

        ::v-deep .titdsdaldsdae {
            font-size: 30px;

            font-weight: 400;
            color: #333333;
        }

        ::v-deep .researchP {
            font-size: 30px;

            font-weight: 400;
            color: #004ce5;
        }

        ::v-deep .van-collapse-item__title--expanded .van-cell__right-icon::before {
            color: #004ce5;
        }
    }

</style>
