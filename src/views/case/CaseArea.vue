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
                    <img src="../../assets/images/case1.png" alt="">
                </div>
                <div class="title">
                    <div class="line1">APP开发</div>
                    <div class="line2"></div>
                    <div class="line3">以互联网定制开发为主营业务，各行业APP开发，包括直播类、短视频、社区配送、生活商城、在线教育等</div>
                </div>
                <div class="content-item">1、多渠道预热，蓄水前置流量</div>
                <div class="content-item">2、多渠道预热，蓄水前置流量，多渠道预</div>
                <div class="content-item">3、多渠道预热，蓄水前置流量，多渠道预热，蓄水前 置流</div>
                <div class="more">
                    <div class="more-text">了解更多</div>
                    <img src="../../assets/images/more1.png" />
                </div>
            </div>
            <div class="item item2">
                <div class="image">
                    <img src="../../assets/images/case2.png" alt="">
                </div>
                <div class="title">
                    <div class="line1">小程序开发</div>
                    <div class="line2"></div>
                    <div class="line3">以互联网定制开发为主营业务，各行业APP开发，包括直播类、短视频、社区配送、生活商城、在线教育等</div>
                </div>
                <div class="content-item">1、多渠道预热，蓄水前置流量</div>
                <div class="content-item">2、多渠道预热，蓄水前置流量，多渠道预</div>
                <div class="content-item">3、多渠道预热，蓄水前置流量，多渠道预热，蓄水前 置流</div>
                <div class="more">
                    <div class="more-text">了解更多</div>
                    <img src="../../assets/images/more1.png" />
                </div>
            </div>
            <div class="item item3">
                <div class="image">
                    <img src="../../assets/images/case3.png" alt="">
                </div>
                <div class="title">
                    <div class="line1">网站建设</div>
                    <div class="line2"></div>
                    <div class="line3">以互联网定制开发为主营业务，各行业APP开发，包括直播类、短视频、社区配送、生活商城、在线教育等</div>
                </div>
                <div class="content-item">1、多渠道预热，蓄水前置流量</div>
                <div class="content-item">2、多渠道预热，蓄水前置流量，多渠道预</div>
                <div class="content-item">3、多渠道预热，蓄水前置流量，多渠道预热，蓄水前 置流</div>
                <div class="more">
                    <div class="more-text">了解更多</div>
                    <img src="../../assets/images/more1.png" />
                </div>
            </div>
            <div class="item item4">
                <div class="image">
                    <img src="../../assets/images/case4.png" alt="">
                </div>
                <div class="title">
                    <div class="line1">系统集成</div>
                    <div class="line2"></div>
                    <div class="line3">以互联网定制开发为主营业务，各行业APP开发，包括直播类、短视频、社区配送、生活商城、在线教育等</div>
                </div>
                <div class="content-item">1、多渠道预热，蓄水前置流量</div>
                <div class="content-item">2、多渠道预热，蓄水前置流量，多渠道预</div>
                <div class="content-item">3、多渠道预热，蓄水前置流量，多渠道预热，蓄水前 置流</div>
                <div class="more">
                    <div class="more-text">了解更多</div>
                    <img src="../../assets/images/more1.png" />
                </div>
            </div>
            <div class="item item5">
                <div class="image">
                    <img src="../../assets/images/case5.png" alt="">
                </div>
                <div class="title">
                    <div class="line1">物联网</div>
                    <div class="line2"></div>
                    <div class="line3">以互联网定制开发为主营业务，各行业APP开发，包括直播类、短视频、社区配送、生活商城、在线教育等</div>
                </div>
                <div class="content-item">1、多渠道预热，蓄水前置流量</div>
                <div class="content-item">2、多渠道预热，蓄水前置流量，多渠道预</div>
                <div class="content-item">3、多渠道预热，蓄水前置流量，多渠道预热，蓄水前 置流</div>
                <div class="more">
                    <div class="more-text">了解更多</div>
                    <img src="../../assets/images/more1.png" />
                </div>
            </div>
            <div class="item item6">
                <div class="image">
                    <img src="../../assets/images/case6.png" alt="">
                </div>
                <div class="title">
                    <div class="line1">政务云</div>
                    <div class="line2"></div>
                    <div class="line3">以互联网定制开发为主营业务，各行业APP开发，包括直播类、短视频、社区配送、生活商城、在线教育等</div>
                </div>
                <div class="content-item">1、多渠道预热，蓄水前置流量</div>
                <div class="content-item">2、多渠道预热，蓄水前置流量，多渠道预</div>
                <div class="content-item">3、多渠道预热，蓄水前置流量，多渠道预热，蓄水前 置流</div>
                <div class="more">
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

    export default {
        name: "CaseArea",
        components: {
            navigation,
            PageFooter,
        }
    }
</script>

<style scoped lang="scss">
    .case-area-page{
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