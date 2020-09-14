<template>
    <div class="things">
        <navigation :colour="false"></navigation>
        <div class="background">
            <div class="line1">物联网</div>
            <div class="line2"></div>
        </div>
        <div class="ability">
            <div class="title">可开发行业</div>
            <div class="items">
                <van-grid square :border="false" :column-num="4" border>
                    <van-grid-item>
                        <van-image style="width: 70%" :src="require('../../../assets/images/hy1.png')"/>
                        <div class="text">移动社交</div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image style="width: 70%" :src="require('../../../assets/images/hy2.png')"/>
                        <div class="text">视频直播</div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image style="width: 70%" :src="require('../../../assets/images/hy3.png')"/>
                        <div class="text">线上教育</div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image style="width: 70%" :src="require('../../../assets/images/hy4.png')"/>
                        <div class="text">智慧医疗</div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image style="width: 70%" :src="require('../../../assets/images/hy5.png')"/>
                        <div class="text">智慧健身</div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image style="width: 70%" :src="require('../../../assets/images/hy6.png')"/>
                        <div class="text">移动商城</div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image style="width: 70%" :src="require('../../../assets/images/hy7.png')"/>
                        <div class="text">智慧外卖</div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image style="width: 70%" :src="require('../../../assets/images/hy8.png')"/>
                        <div class="text">跑腿外送</div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image style="width: 70%" :src="require('../../../assets/images/hy9.png')"/>
                        <div class="text">移动交友</div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image style="width: 70%" :src="require('../../../assets/images/hy10.png')"/>
                        <div class="text">其它行业</div>
                    </van-grid-item>

                </van-grid>
            </div>
        </div>
        <div class="progress">
            <div class="title">系统开发流程</div>
            <div class="items">
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/lc1.png" alt="">
                    </div>
                    <div class="line1">01</div>
                    <div class="line2">行业数据分析</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/lc2.png" alt="">
                    </div>
                    <div class="line1">02</div>
                    <div class="line2">品牌定位规范</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/lc3.png" alt="">
                    </div>
                    <div class="line1">03</div>
                    <div class="line2">功能需求调研</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/lc6.png" alt="">
                    </div>
                    <div class="line1">06</div>
                    <div class="line2">后端并行开发</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/lc5.png" alt="">
                    </div>
                    <div class="line1">05</div>
                    <div class="line2">双端同步开发</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/lc4.png" alt="">
                    </div>
                    <div class="line1">04</div>
                    <div class="line2">交互视觉设计</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/lc7.png" alt="">
                    </div>
                    <div class="line1">07</div>
                    <div class="line2">测试上线<br>交付使用</div>
                </div>
                <div class="border1"></div>
                <div class="border2"></div>
                <div class="border3"></div>
            </div>
        </div>
        <div class="standard">
            <div class="title">交付标准</div>
            <div class="items">
                <div class="item active-jf0">
                    <div class="logo">
                        <img src="../../../assets/images/d1.png" alt="">
                    </div>
                    <div class="item-text">项目计划书</div>
                    <img class="hoverImg" src="../../../assets/images/df1.png">
                </div>
                <div class="item active-jf1">
                    <div class="logo">
                        <img src="../../../assets/images/d2.png" alt="">
                    </div>
                    <div class="item-text">设计稿源文件</div>
                    <img class="hoverImg" src="../../../assets/images/df2.png">
                </div>
                <div class="item active-jf2">
                    <div class="logo">
                        <img src="../../../assets/images/d3.png" alt="">
                    </div>
                    <div class="item-text">源代码</div>
                    <img class="hoverImg" src="../../../assets/images/df3.png">
                </div>
                <div class="item active-jf3">
                    <div class="logo">
                        <img src="../../../assets/images/d4.png" alt="">
                    </div>
                    <div class="item-text">使用文档</div>
                    <img class="hoverImg" src="../../../assets/images/df4.png">
                </div>
                <div class="item active-jf4">
                    <div class="logo">
                        <img src="../../../assets/images/d5.png" alt="">
                    </div>
                    <div class="item-text">账号信息</div>
                    <img class="hoverImg" src="../../../assets/images/df5.png">
                </div>
            </div>
        </div>
        <div class="security">
            <div class="title">系统安全标准</div>
            <div class="center-content">
                <div class="cc-title">
                    <img :src="securityImg[securityIndex]" alt="">
                    <div class="text">服务器安全</div>
                </div>
                <div class="cc-items">
                    <div class="item" v-for="item in securityList[securityIndex].items">{{item}}</div>
                </div>
                <div class="pagination">
                    <div class="left">
                        <img :src="securityIndex==0?dotBlue:dotWhite" alt="">
                        <img :src="securityIndex==1?dotBlue:dotWhite" alt="">
                        <img :src="securityIndex==2?dotBlue:dotWhite" alt="">
                        <img :src="securityIndex==3?dotBlue:dotWhite" alt="">
                    </div>
                    <div class="right">
                        <img v-if="securityIndex==0" src="../../../assets/images/left-gray.png" alt="">
                        <img v-else src="../../../assets/images/left-blue.png" @click="changePage(-1)">
                        <img v-if="securityIndex==3" src="../../../assets/images/right-gray.png" alt="">
                        <img v-else src="../../../assets/images/right-blue.png" @click="changePage(1)">
                    </div>
                </div>
                <img src="../../../assets/images/sec-standard.png" alt="" class="img">
            </div>
        </div>
        <div class="support">
            <div class="title">技术支持</div>
            <div class="items">
                <div class="right-item">
                    <div class="line1">
                        <img src="../../../assets/images/c1.png" alt="">
                        <div class="text">程序使用培训</div>
                    </div>
                    <div class="line2">程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训</div>
                </div>
                <div class="right-item">
                    <div class="line1">
                        <img src="../../../assets/images/c2.png" alt="">
                        <div class="text">项目问题咨询</div>
                    </div>
                    <div class="line2">程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训</div>
                </div>
                <div class="right-item">
                    <div class="line1">
                        <img src="../../../assets/images/c3.png" alt="">
                        <div class="text">项目部署及维护</div>
                    </div>
                    <div class="line2">程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训</div>
                </div>
                <div class="right-item">
                    <div class="line1">
                        <img src="../../../assets/images/c4.png" alt="">
                        <div class="text">后期功能升级和修改</div>
                    </div>
                    <div class="line2">程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训</div>
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
        name: "Things",
        components: {
            navigation,
            PageFooter,
        },
        data(){
            return{
                securityIndex:0,
                dotBlue: require('../../../assets/images/dot-blue.png'),
                dotWhite: require('../../../assets/images/dot-white.png'),
                securityImg:[
                    require('../../../assets/images/sec1.png'),
                    require('../../../assets/images/sec2.png'),
                    require('../../../assets/images/sec3.png'),
                    require('../../../assets/images/sec4.png'),
                ],
                securityList: [
                    {
                        title:'源代码安全',
                        items:['1、防SQL注入','2、过滤拦截机制','3、并发安全机制','4、加密(MDS、RSA、DES)']
                    },
                    {
                        title:'程序安全',
                        items:['1、身份认证机制','2、权限控制','3、渗透测试','4、日志追踪']
                    },
                    {
                        title:'数据库安全',
                        items:['1、双机容错','2、数据备份','3、灾难恢复','4、数据存储(基于RAID的存储技术)']
                    },
                    {
                        title:'服务器安全',
                        items:['1、防火墙','2、入侵检测','3、漏洞扫描','4、物理隔离']
                    }
                ]
            }
        },
        methods:{
            changePage(num){
                this.securityIndex+=num
            }
        }
    }
</script>

<style scoped lang="scss">
    .things {
        .background {
            width: 750px;
            height: 748px;
            background: #101533;
            background-image: url("../../../assets/images/things.png");
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

            .items {
                width: 100%;
                padding: 30px;
                padding-top: 0;
                box-sizing: border-box;
                .text {
                    font-size: 24px;
                    font-weight: 400;
                    margin-top: 10px;
                    color: #222222;
                }
            }
        }

        .progress{
            width: 100%;
            min-height: 1277px;
            background: #000E32;
            background-image: url("../../../assets/images/progress.png");
            @include back-img-center;
            .title {
                padding: 80px 0;
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 500;
                color: #FFFFFF;
                line-height: 44px;
            }
            .items{
                width: 100%;
                padding: 30px;
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                position: relative;
                .item{
                    z-index: 2;
                    width: 33.33%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 90px;
                    .img{
                        width: 126px;
                        height: 127px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius:50%;
                        background-color: rgba(24,40,100,1);
                        img{
                            width: 50%;
                        }
                    }
                    .line1{
                        font-size: 34px;
                        font-weight: 500;
                        color: #195FE0;
                        margin: 30px 0;
                    }
                    .line2{
                        font-size: 29px;
                        font-weight: 400;
                        color: #FFFFFF;
                        opacity: .8;
                    }
                }
                .border1{
                    z-index: 1;
                    position: absolute;
                    top: 100px;
                    left: 140px;
                    width: 465px;
                    height: 350px;
                    border-top: 1px solid #2E387A;
                    border-right: 1px solid #2E387A;
                    border-bottom: 1px solid #2E387A;
                }
                .border2{
                    z-index: 1;
                    position: absolute;
                    height: 350px;
                    border-right: 1px solid #2E387A;
                    left:140px;
                    bottom: 350px;
                }
            }
        }

        .standard{
            width: 100%;
            background-color: rgba(238,238,238,0.7);

            .title {
                padding: 80px 0;
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #222222;
                line-height: 44px;
            }
            .items {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                padding: 30px;
                box-sizing: border-box;

                .item:nth-child(2n){
                    margin-left: 30px;
                }
                .item {
                    margin-bottom: 100px;
                    background-color: #ffffff;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-self: center;
                    box-shadow: 0px 3px 30px 0px rgba(106, 122, 156, 0.3);
                    width: 330px;
                    height: 220px;
                    position: relative;

                    .item-text {
                        display: flex;
                        justify-content: center;
                        align-self: center;


                        font-size: 30px;
                        font-weight: normal;
                        color: #343434;
                        position: relative;
                        top: 150px;

                    }

                    .logo {
                        z-index: 9;
                        width: 81px;
                        height: 81px;
                        background: rgba(255, 255, 255, 1);
                        box-shadow: 0px 0px 20px 0px rgba(24, 94, 224, 0.15);
                        border-radius: 50%;
                        position: absolute;
                        top: -28px;
                        left: 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 50%;
                            height: 50%;
                        }
                    }

                    .hoverImg {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        @include back-img-center;
                    }
                }
            }
        }

        .security{
            width: 100%;
            background-color: #ffffff;
            padding: 30px ;
            box-sizing: border-box;
            .title {
                padding: 50px 0;
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #222222;
                line-height: 44px;
            }
            .center-content {
                width: 100%;
                padding-bottom:50px;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                position: relative;

                .cc-title {
                    width: 350px;
                    padding-top: 20px;
                    padding-bottom: 37px;
                    border-bottom: 1px solid rgba(230, 236, 248, 1);
                    display: flex;
                    align-items: center;

                    .text {
                        margin-left: 14px;
                        font-size: 28px;
                        font-weight: 500;
                        color: rgba(51, 51, 51, 1);
                    }
                    img{
                        width: 41px;
                        height: 41px;
                    }
                }

                .cc-items {
                    width: 400px;
                    display: flex;
                    flex-direction: column;
                    padding: 25px 0;
                    box-sizing: border-box;
                    align-items: flex-start;
                    .item {
                        margin: 25px 0;
                        font-size: 30px;
                        font-weight: normal;
                        color: #343434;
                    }
                }

                .pagination {
                    width: 400px;
                    display: flex;
                    justify-content: space-between;
                    .left {
                        width: 80px;
                        flex-shrink: 0;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        img{
                            width: 10px;
                            height: 10px;
                        }
                    }
                    .right{
                        display: flex;
                        flex-direction: row;
                        img{
                            cursor: pointer;
                        }
                        img:first-child{
                            margin-right: 47px;
                        }
                    }
                }
                
                .img{
                    width: 409px;
                    height: 278px;
                    position: absolute;
                    right:0;
                    top: 100px;
                }
            }
        }

        .support{
            width: 100%;
            background-color: rgba(238,238,238,0.7);
            padding: 30px ;
            box-sizing: border-box;
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
                flex-direction: column;
                .right-item{
                    padding: 32px 38px;
                    box-sizing: border-box;
                    width: 100%;
                    height: 278px;
                    display: flex;
                    flex-direction: column;
                    background-color: #ffffff;
                    margin-bottom: 30px;
                    .line1{
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        .text{
                            margin-left: 14px;
                            font-size: 34px;
                            font-weight:500;
                            color:rgba(51,51,51,1);
                        }
                        img{
                            width: 53px;
                            height: 53px;
                        }
                    }
                    .line2{
                        margin-top: 32px;
                        font-size: 24px;
                        font-weight: 400;
                        color: #9EAAC4;
                        line-height: 48px;
                        @include line-hidden(3)
                    }
                }
            }
        }
    }
</style>














