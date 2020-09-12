<template>
    <div class="news-list">
        <navigation :colour="true"></navigation>
        <div class="content">
            <div class="title">2C互联网还有机会么？</div>
            <div class="time">2020-05-22</div>
            <div class="article">
                “资本寒冬”四个字从 18 年开始贯穿到了今天，2020 年初又因为疫情的影响，互联网市场再次到达了冰点。艰难时刻「创业公司已无大机会」的论调也越来越多，可是各方声音更多的都是在描述一种感受，一种从业者的集体焦虑。
                无论是创业者还是投资人在当下或许都应该思考这几个问题：
                1、市场到底有多冷？
                2、2C 互联网大机会到底有没有？
                3、如果有，大机会又具体在哪里？
                在我们组织的「黑天鹅启示录」线上分享活动－投融资专场里，经纬中国 VP 庄明浩就以定量的方式提供了一些思路或许可以帮助我们找到答案。
                以下为正文：
                2020 年从春节开始到现在因为疫情的出现充满了变化，这些变化最直接的反应就是流量波动。
                市场中进而出现了关于各别领域即将成为风口的讨论以及 2020 年之后 10 年也不会好了的声音，我想可以试着从一个更加客观与能够量化的角度去看待这些变化，并且找到可以参考的依据来分析当下的情况和预测下未来。
                我会通过 1-3 月份移动应用增长榜 Top 200 的排名与 1-3 月份互联网广告投放的情况综合来看（数据来源为七麦、App Growing），这其中有横向的领域对比与纵向的时间对比，目的是通过研究得出结果来帮助我们寻找创业机会，进行投资判断。

                研究问题：

                1、哪些 App 增长是因为春节的原因，哪些是因为疫情？

                2、哪些增长是花钱买来的，哪些是自然而来的？

                3、当春节红利慢慢消失时，哪些行业把增长红利抓在了手里依然能够 hold 住，哪些行业在这一波流量后就 hold 不住了？

                先说明研究背景，我以七麦 2020 年 1、2、3 月份移动应用增长榜 Top 200 作为基础，这个榜单排名是根据 App 在 App Store 以及国内安卓市场（应用宝、360、百度、OPPO、vivo、华为、魅族、豌豆荚）的下载量数据综合评定而得出的。

                首先我们将 Top 200 榜单中的 App 按照不同领域进行分类，就会发现前 10 大类目分别是生活、工具、摄影、购物、社交、图书、娱乐、游戏、财务、教育，它们占据了整体榜单的 80%，这是类目的总体情况。

                然后我们分别统计 1、2、3 月里 Top 200 中分类 App 的具体数量，并将数量结果放在一起进行对比就出现了以下三组情况：

                1、稳定组：即不同月份 Top 200 榜单上的 App 数量变化不明显，比如生活类、工具类、摄影类、购物类、社交类以及图书类，这些类目较小受到所谓疫情前中后变化的影响。

                2、掉链子组：榜单上的 App 数量逐月减少，趋势下滑状态走低，很明显是娱乐类与游戏类。

                3、飘忽组：剩下的就是财务类和教育类，在不同月份的榜单上 App 数量有明显大幅度的增减，表现忽上忽下。教育就更突出了，在 2 月份增长大爆发，在 3 月份就掉了下来，但没有掉得特别多，所以教育这个类目中有些公司是拿到了这一波增长红利的。

                下面我们以社交、购物和图书这三个类目作为代表来细看。相较于其他类目主要被大公司占据的情况，这三个类目中还是有一些新公司与新变化的。

                首先是我个人认为最有意思的类目－社交。对于一个早期投资者而言，这个类目里值得挖的公司还是很多的。

                整体的状况是巨头与初创公司大乱斗。在过去的时间段里，尤其是春节那几天，互动类的社交产品崛起势头非常强劲，比如有玩吧、会玩、狼人杀等产品，其中玩吧当时是登上了中国区榜单的第一名，服务器直接爆掉了，还因此上了当天的微博热搜。

                同时还有一些其他类别的社交产品，比如去年很火的伊对、第一弹等。第一弹可以多讲一下，这家公司最早是做二次元图文社区的，做得不是特别好，他们去年转型做泰剧跟韩剧平台，有点像韩剧TV。这一波拿到了增长红利，但他们没有改分类，所以还在社交这个版块里。分类的选择或修改也是不同公司运营策略的一种体现。
            </div>
        </div>
        <div class="pagination">
            <div class="previous">
                <div class="line1">上一篇</div>
                <div class="line2">微信小程序三周年，又一个“互联网时代”重启了？</div>
                <div class="line3">2020-08-19</div>
            </div>
            <div class="next">
                <div class="line1">下一篇</div>
                <div class="line2">微信小程序三周年，又一个“互联网时代”重启了？</div>
                <div class="line3">2020-08-19</div>
            </div>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>

<script>
    import navigation from "../../components/navigation/navigation";
    import PageFooter from "../../components/page-footer/PageFooter";

    export default {
        name: "NewsDetail",
        components: {
            navigation,
            PageFooter,
        }
    }
</script>

<style scoped lang="scss">
    .news-list{
        position: absolute;
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
                font-size: 24px;
                font-weight: 400;
                color: #333333;
                line-height: 48px;
                img{
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