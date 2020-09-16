<template>
    <div class="website">
        <navigation :colour="false"></navigation>
        <div class="background">
            <div class="line1">网站建设</div>
            <div class="line2"></div>
        </div>
        <div class="ability">
            <div class="title">可开发行业</div>
            <div class="items">
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/kf1.png" alt="">
                    </div>
                    <div class="text">移动社交</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/kf2.png" alt="">
                    </div>
                    <div class="text">跑腿外送</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/kf3.png" alt="">
                    </div>
                    <div class="text">智慧医疗</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/kf4.png" alt="">
                    </div>
                    <div class="text">视频直播</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/kf5.png" alt="">
                    </div>
                    <div class="text">智慧外卖</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/kf6.png" alt="">
                    </div>
                    <div class="text">移动商城</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/kf7.png" alt="">
                    </div>
                    <div class="text">线上教育</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/kf8.png" alt="">
                    </div>
                    <div class="text">智慧健身</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="../../../assets/images/kf9.png" alt="">
                    </div>
                    <div class="text">智能家居</div>
                </div>
            </div>
        </div>
        <div class="progress">
            <div class="title">网站开发流程</div>
            <div class="items">
                <div class="item active-pro0">
                    <div class="img">
                        <img src="../../../assets/images/w1.png" alt="">
                    </div>
                    <h2 class="text">1、行业数据分析</h2>
                </div>
                <div class="item active-pro1">
                    <div class="img">
                        <img src="../../../assets/images/w2.png" alt="">
                    </div>
                    <h2 class="text">2、品牌定位规范</h2>
                </div>
                <div class="item active-pro2">
                    <div class="img">
                        <img src="../../../assets/images/w3.png" alt="">
                    </div>
                    <h2 class="text">3、功能需求调研</h2>
                </div>
                <div class="item active-pro3">
                    <div class="img">
                        <img src="../../../assets/images/w4.png" alt="">
                    </div>
                    <h2 class="text">4、交互视觉设计</h2>
                </div>
                <div class="item active-pro4">
                    <div class="img">
                        <img src="../../../assets/images/w5.png" alt="">
                    </div>
                    <h2 class="text">5、双端同步开发</h2>
                </div>
                <div class="item active-pro5">
                    <div class="img">
                        <img src="../../../assets/images/w6.png" alt="">
                    </div>
                    <h2 class="text">6、后端并行开发</h2>
                </div>
                <div class="item active-pro6">
                    <div class="img">
                        <img src="../../../assets/images/w7.png" alt="">
                    </div>
                    <h2 class="text">7、测试上线交付使用</h2>
                </div>
            </div>
            <img src="../../../assets/images/computer.png" alt="" class="computer">
        </div>
        <div class="deliver-standard">
            <div class="title">交付标准</div>
            <div class="items">
                <div class="item">
                    <div class="logo">
                        <img src="../../../assets/images/d1.png" alt="">
                    </div>
                    <div class="item-text">项目计划书</div>
                    <img class="hoverImg" src="../../../assets/images/df1.png">
                </div>
                <div class="item">
                    <div class="logo">
                        <img src="../../../assets/images/d2.png" alt="">
                    </div>
                    <div class="item-text">设计稿源文件</div>
                    <img class="hoverImg" src="../../../assets/images/df2.png">
                </div>
                <div class="item">
                    <div class="logo">
                        <img src="../../../assets/images/d3.png" alt="">
                    </div>
                    <div class="item-text">源代码</div>
                    <img class="hoverImg" src="../../../assets/images/df3.png">
                </div>
                <div class="item">
                    <div class="logo">
                        <img src="../../../assets/images/d4.png" alt="">
                    </div>
                    <div class="item-text">使用文档</div>
                    <img class="hoverImg" src="../../../assets/images/df4.png">
                </div>
                <div class="item">
                    <div class="logo">
                        <img src="../../../assets/images/d5.png" alt="">
                    </div>
                    <div class="item-text">账号信息</div>
                    <img class="hoverImg" src="../../../assets/images/df5.png">
                </div>
            </div>
        </div>
        <div class="security-standard">
            <div class="title">系统安全标准</div>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item class="swipe-item">
                    <div class="swipe-center">
                        <div class="swipe-title">源代码安全</div>
                        <div class="items">
                            <div class="item">
                                <img src="../../../assets/images/ss1.png" alt="">
                                <div class="text">防SQL注入</div>
                            </div>
                            <div class="item">
                                <img src="../../../assets/images/ss2.png" alt="">
                                <div class="text">过滤拦截机制</div>
                            </div>
                            <div class="item">
                                <img src="../../../assets/images/ss3.png" alt="">
                                <div class="text">并发安全机制</div>
                            </div>
                            <div class="item">
                                <img src="../../../assets/images/ss4.png" alt="">
                                <div class="text">加密(MDS、RSA、DES)</div>
                            </div>
                        </div>
                    </div>
                </van-swipe-item>
                <van-swipe-item class="swipe-item">
                    <div class="swipe-center">
                        <div class="swipe-title">程序安全</div>
                        <div class="items">
                            <div class="item">
                                <img src="../../../assets/images/ss5.png" alt="">
                                <div class="text">身份认证机制</div>
                            </div>
                            <div class="item">
                                <img src="../../../assets/images/ss6.png" alt="">
                                <div class="text">权限控制</div>
                            </div>
                            <div class="item">
                                <img src="../../../assets/images/ss7.png" alt="">
                                <div class="text">渗透测试</div>
                            </div>
                            <div class="item">
                                <img src="../../../assets/images/ss8.png" alt="">
                                <div class="text">日志追踪</div>
                            </div>
                        </div>
                    </div>
                </van-swipe-item>
                <van-swipe-item class="swipe-item">
                    <div class="swipe-center">
                        <div class="swipe-title">数据库安全</div>
                        <div class="items">
                            <div class="item">
                                <img src="../../../assets/images/ss9.png" alt="">
                                <div class="text">双机容错</div>
                            </div>
                            <div class="item">
                                <img src="../../../assets/images/ss10.png" alt="">
                                <div class="text">数据备份</div>
                            </div>
                            <div class="item">
                                <img src="../../../assets/images/ss11.png" alt="">
                                <div class="text">灾难恢复</div>
                            </div>
                            <div class="item">
                                <img src="../../../assets/images/ss12.png" alt="">
                                <div class="text">数据存储(基于RAID <br>
                                    的存储技术)</div>
                            </div>
                        </div>
                    </div>
                </van-swipe-item>
                <van-swipe-item class="swipe-item">
                    <div class="swipe-center">
                        <div class="swipe-title">服务器安全</div>
                        <div class="items">
                            <div class="item">
                                <img src="../../../assets/images/ss13.png" alt="">
                                <div class="text">防火墙</div>
                            </div>
                            <div class="item">
                                <img src="../../../assets/images/ss14.png" alt="">
                                <div class="text">入侵检测</div>
                            </div>
                            <div class="item">
                                <img src="../../../assets/images/ss15.png" alt="">
                                <div class="text">漏洞扫描</div>
                            </div>
                            <div class="item">
                                <img src="../../../assets/images/ss16.png" alt="">
                                <div class="text">物理隔离</div>
                            </div>
                        </div>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="support">
            <div class="title">技术支持</div>
            <div class="items">
                <div class="right-item">
                    <div class="line1">
                        <img src="../../../assets/images/c1.png" alt="">
                        <div class="text">程序使用培训</div>
                    </div>
                    <div class="line2">项目完成上线后，提供详细的使用说明文档和源码，并有专人答疑解惑</div>
                </div>
                <div class="right-item">
                    <div class="line1">
                        <img src="../../../assets/images/c2.png" alt="">
                        <div class="text">项目问题咨询</div>
                    </div>
                    <div class="line2">从项目立项到上线，过程中有任何问题都可以咨询我们的销售顾问或技术人员</div>
                </div>
                <div class="right-item">
                    <div class="line1">
                        <img src="../../../assets/images/c3.png" alt="">
                        <div class="text">项目部署及维护</div>
                    </div>
                    <div class="line2">项目完成后，进行整体测试，后期使用过程中有bug可以联系我们，会有专人对您的项目进行维护</div>
                </div>
                <div class="right-item">
                    <div class="line1">
                        <img src="../../../assets/images/c4.png" alt="">
                        <div class="text">后期功能升级修改</div>
                    </div>
                    <div class="line2">项目使用过程中，想升级功能或改版，随时联系我们，会有销售顾问给您提供专业化的建议</div>
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
        name: "WebSite",
        components: {
            navigation,
            PageFooter,
        }
    }
</script>

<style scoped lang="scss">
    .website{
        overflow: hidden;
        .background {
            width: 750px;
            height: 748px;
            background: #101533;
            background-image: url("../../../assets/images/website.png");
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
        .ability{
            width: 100%;
            background-color: #ffffff;

            .title {
                padding: 60px 0;
                padding-top: 80px;
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
                flex-wrap: wrap;
                background-image: url("../../../assets/images/kfhy.png");
                @include back-img-center;
                .item{
                    flex-direction: column;
                    align-items: center;
                    width: 33.33%;
                    display: flex;
                    justify-content: center;
                    margin-bottom: 56px;
                    .img{
                        width: 106px;
                        height: 106px;
                        background: #FFFFFF;
                        box-shadow: 1px 8px 30px 0px rgba(24, 94, 224, 0.15);
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 60%;
                        }
                    }
                    .text{
                        margin-top: 30px;
                        font-size: 30px;
                        font-weight: 400;
                        color: #343434;
                    }
                }
            }
        }
        .progress{
            width: 100%;
            height: 1300px;
            background-image: url("../../../assets/images/lc-back.png");
            @include back-img-center;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            position: relative;
            .title {
                padding: 60px 0;
                padding-top: 150px;
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #ffffff;
                line-height: 44px;
            }
            .items {
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                padding:30px;
                box-sizing: border-box;
                .item {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 30px 0;
                    .text {
                        margin-left: 27px;
                        font-size: 26px;
                        font-weight: 400;
                        color: rgba(255, 255, 255, 1);
                    }
                    .img{
                        width: 71px;
                        height: 71px;
                        background:rgba(0, 76, 229,.2);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img{
                            width: 70%;
                        }
                    }
                }
            }
            .computer{
                width: 80%;
                position: absolute;
                bottom: -50px;
                right: 30px;
            }

        }
        .deliver-standard{
            width: 100%;
            background-color: rgba(244,245,248,0.7);
            height: 950px;
            margin-top: -200px;
            .title {
                padding: 100px 0;
                padding-top: 340px;
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #343434;
                line-height: 44px;
            }
            .items {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                z-index: 9;
                padding: 0 35px;
                box-sizing: border-box;
                .item:nth-child(2),.item:nth-child(5){
                    margin: 0 35px;
                }
                .item {
                    margin-bottom: 88px !important;
                    z-index: 9;
                    background-color: #ffffff;
                    cursor: pointer;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-self: center;
                    box-shadow: 0px 3px 30px 0px rgba(106, 122, 156, 0.3);
                    width: 201px;
                    height: 133px;
                    position: relative;

                    .item-text {
                        display: flex;
                        justify-content: center;
                        align-self: center;
                        font-size: 26px;
                        font-weight: 400;
                        color: #343434;
                    }

                    .logo {
                        z-index: 99;
                        width: 67px;
                        height: 67px;
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
                            width: 60%;
                        }
                    }

                    .hoverImg {
                        display: none;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        @include back-img-center;
                    }
                }

                .item:hover {
                    border-radius: 5px;

                    .hoverImg {
                        display: block !important;
                    }
                }
            }
        }
        .security-standard{
            width: 100%;
            background-color: #ffffff;
            height: 1002px;
            background-image: url("../../../assets/images/security-standard.png");
            @include back-img-center;
            .title {
                padding: 60px 0;
                padding-top: 80px;
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #ffffff;
                line-height: 44px;
                letter-spacing: 5px;
            }
            .my-swipe{
                overflow: visible;
                .swipe-center{
                    margin: 0 auto;
                    width: 617px;
                    height: 664px;
                    .swipe-title{
                        width: 100%;
                        height: 125px;
                        background: #004CE5;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        font-size: 34px;
                        font-weight: 500;
                        color: #FFFFFF;
                    }
                    .items{
                        width: 100%;
                        height: calc(100% - 125px);
                        background-color: #f4f5f8;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        .item:nth-child(3),.item:nth-child(4){
                            margin-top: 10px;
                        }
                        .item{
                            width: 299px;
                            height: 260px;
                            background: #FFFFFF;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            .text{
                                font-size: 30px;
                                font-weight: 400;
                                margin-top: 30px;
                                color: #343434;
                                width: 100%;
                                text-align: center;
                            }
                        }
                    }
                }
                ::v-deep .van-swipe__indicators{
                    bottom: -40px;
                    font-size: 34px;
                    font-weight: 500;
                    color: #FFFFFF;
                }
            }
        }
        .support{
            width: 100%;
            background-color: rgba(0,76,229,1);

            .title {
                padding: 60px 0;
                padding-top: 80px;
                width: 100%;
                text-align: center;
                font-size: 34px;
                font-weight: 600;
                color: #ffffff;
                line-height: 44px;
            }
            .items{
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                padding: 26px;
                box-sizing: border-box;
                justify-content: space-between;
                .right-item{
                    padding: 40px 20px;
                    box-sizing: border-box;
                    width: 334px;
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
                            font-size: 29px;
                            font-weight: 500;
                            color: #343434;
                        }
                        img{
                            width: 34px;
                            height: 35px;
                        }
                    }
                    .line2{
                        margin-top: 20px;
                        font-size: 22px;
                        font-weight: 400;
                        color: #9EAAC4;
                        line-height: 1.3;
                        @include line-hidden(4)
                    }
                }
            }
        }
    }
</style>





















