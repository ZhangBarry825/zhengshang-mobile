<template>
  <div class="home">
    <div class="swiper-box">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item class="swipe-item" v-for="(item,index) in 4" :key="index">
          <div class="center">
            <div class="line1">专业的互联网方案解决专家</div>
            <div class="line2">以互联网定制开发为主营业务，专注微信服务号、企业号、微信公众平台开发和微信小程序等的微信开发服务，全方位满足企业个性化需求</div>
            <div class="line3">
              <div class="text">了解更多</div>
              <img src="../assets/images/more0.png" alt />
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="our-service">
      <div class="title">行业解决方案</div>
      <div class="items">
        <div class="item">
          <img src="../assets/images/service1.png" alt />
          <div class="line1">APP开发</div>
          <div class="line2">商城、交友、教育、赛事、直播、生活服务，您的创业蓝图，我们帮您实现</div>
        </div>
        <div class="item">
          <img src="../assets/images/service2.png" alt />
          <div class="line1">小程序开发</div>
          <div class="line2">小程序、公众号、微信营销一站式全系息服务，为您抢占微信流量红利</div>
        </div>
        <div class="item">
          <img src="../assets/images/service3.png" alt />
          <div class="line1">网站建设</div>
          <div class="line2">企业网站、个人网站、展示型网站、推广型网站、高端定制型网站，为您量身打造企业互联网战略解决方案</div>
        </div>
        <div class="item">
          <img src="../assets/images/service4.png" alt />
          <div class="line1">系统集成</div>
          <div class="line2">ERP、OA、CRM、HR、PRM多种管理系统开发，成熟架构，多种解决方案，尽在正尚科技</div>
        </div>
        <div class="item">
          <img src="../assets/images/service5.png" alt />
          <div class="line1">物联网</div>
          <div class="line2">为企业和个人开发者提供智能硬件一体化解决方案</div>
        </div>
        <div class="item">
          <img src="../assets/images/service6.png" alt />
          <div class="line1">政务云</div>
          <div class="line2">为政府行业提供基础设施、支撑软件、应用系统、信息资源、运行保障和信息安全等综合服务平台</div>
        </div>
      </div>
    </div>
    <div class="solution">
      <div class="title">行业解决方案</div>
      <div class="items">
        <div
          class="item"
          :style="'background-image: url('+require('../assets/images/solution1.png')+')'"
        >
          <div class="line1">直播平台解决方案</div>
          <div class="line2">拍摄直播、PPT直播、桌面共享直播，传播简单快捷、时效高、受众广，助理商家高效流量变现</div>
        </div>
        <div
          class="item"
          :style="'background-image: url('+require('../assets/images/solution2.png')+')'"
        >
          <div class="line1">教育平台解决方案</div>
          <div class="line2">拍摄直播、PPT直播、桌面共享直播，传播简单快捷、时效高、受众广，助理商家高效流量变现</div>
        </div>
        <div
          class="item"
          :style="'background-image: url('+require('../assets/images/solution3.png')+')'"
        >
          <div class="line1">社区团购解决方案</div>
          <div class="line2">拍摄直播、PPT直播、桌面共享直播，传播简单快捷、时效高、受众广，助理商家高效流量变现</div>
        </div>
      </div>
    </div>
    <div class="process">
      <div class="title">项目服务流程</div>
      <div class="images">
        <img class="pro" src="../assets/images/pro.png" alt />
        <img class="pro0" src="../assets/images/pro0.png" alt />
        <img class="pro1" src="../assets/images/pro1.png" alt />
        <img class="pro2" src="../assets/images/pro2.png" alt />
        <img class="pro3" src="../assets/images/pro3.png" alt />
        <img class="pro4" src="../assets/images/pro4.png" alt />
        <img class="pro5" src="../assets/images/pro5.png" alt />
        <img class="pro6" src="../assets/images/pro6.png" alt />
      </div>
    </div>
    <div class="advantage">
      <div class="title">我们的优势</div>
      <div class="items">
        <div class="item">
          <img src="../assets/images/adv1.png" alt />
          <div class="text">详细了解功能需求</div>
        </div>
        <div class="item">
          <img src="../assets/images/adv2.png" alt />
          <div class="text">创意精细的设计</div>
        </div>
        <div class="item">
          <img src="../assets/images/adv3.png" alt />
          <div class="text">规范的代码开发</div>
        </div>
        <div class="item">
          <img src="../assets/images/adv4.png" alt />
          <div class="text">安全稳定的数据库</div>
        </div>
        <div class="item">
          <img src="../assets/images/adv5.png" alt />
          <div class="text">线下实体公司</div>
        </div>
        <div class="item">
          <img src="../assets/images/adv6.png" alt />
          <div class="text">用户至上的服务</div>
        </div>
        <div class="item">
          <img src="../assets/images/adv7.png" alt />
          <div class="text">专业的技术团队</div>
        </div>
        <div class="item">
          <img src="../assets/images/adv8.png" alt />
          <div class="text">众多行业开发经验</div>
        </div>
      </div>
    </div>
    <div class="customer">
      <div class="title">服务过的客户</div>
      <div class="items">
        <div class="item">
          <div class="line1">200+</div>
          <div class="line2">先上线下微小企业</div>
        </div>
        <div class="item">
          <div class="line1">106</div>
          <div class="line2">个人用户</div>
        </div>
        <div class="item">
          <div class="line1">68</div>
          <div class="line2">创新创业公司</div>
        </div>
        <div class="item">
          <div class="line1">30+</div>
          <div class="line2">政府和公共服务机构</div>
        </div>
      </div>
    </div>
    <div class="news">
      <div class="title">新闻中心</div>
      <div class="items">
        <div :class="'item active-news'+index" v-for="(item,index) in 4" :key="index">
          <div class="left">
            <div
              class="img"
              :style="'background-image: url('+require('../assets/images/news0.png')+')'"
            ></div>
          </div>
          <div class="right">
            <div class="line1">2C互联网还有机会么？</div>
            <div class="line2">2020-05-08</div>
            <div class="line3">“资本寒冬”四个字从2018年开始贯穿到了天，2020年初又因为疫情的影响...</div>
          </div>
        </div>
      </div>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import navigation from '../components/navigation/navigation'
import PageFooter from "../components/page-footer/PageFooter";

export default {
  name: 'Home',
  data () {
    return {};
  },
  methods: {},
  components: {
    navigation,
    PageFooter
  }
}
</script>

<style scoped lang="scss">
.home {
  .swiper-box {
    background-image: url('../assets/images/swipe-back.png');
    @include back-img-center;
    height: 850px;

    .my-swipe {
      height: 100%;

      .van-swipe__track {
        .swipe-item {
          .center {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 130px;

            .line1 {
              font-size: 30px;
              color: #ffffff;
              text-align: center;
            }

            .line2 {
              text-align: center;
              font-size: 14px;
              color: #ffffff;
              padding: 30px 20px;
              box-sizing: border-box;
              opacity: 0.8;
              @include line-hidden(3);
            }

            .line3 {
              display: flex;
              align-items: center;
              background-color: #fe8238;
              border-radius: 50px;
              padding: 10px 15px;
              margin-top: 20px;

              .text {
                font-size: 12px;
                color: #ffffff;
              }

              img {
                margin-left: 5px;
                width: 20px;
              }
            }
          }
        }
      }
    }
  }

  .our-service {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
    box-sizing: border-box;
    background-color: #f4f5f8;

    .title {
      width: 100%;
      text-align: center;
      font-size: 34px;
      font-weight: 500;
      color: #333333;
      padding: 50px 0;
      box-sizing: border-box;
    }

    .items {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      .item {
        flex-shrink: 1;
        width: calc(50% - 10px);
        height: 400px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        box-sizing: border-box;
        justify-content: space-around;
        margin-bottom: 20px;

        img {
          width: 50%;
        }

        .line1 {
          font-size: 30px;
          font-weight: 400;
          color: #333333;
        }

        .line2 {
          font-size: 22px;
          font-weight: 400;
          color: #9eaac3;
          line-height: 30px;
          @include line-hidden(3);
        }
      }

      .item:nth-child(2n) {
        margin-left: 20px;
      }
    }
  }

  .solution {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
    box-sizing: border-box;
    background-color: #ffffff;

    .title {
      width: 100%;
      text-align: center;
      font-size: 34px;
      font-weight: 500;
      color: #333333;
      padding: 50px 0;
      box-sizing: border-box;
    }

    .items {
      width: 100%;
      display: flex;
      flex-direction: column;

      .item {
        width: 100%;
        height: 328px;
        @include back-img-center();
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
        box-sizing: border-box;
        justify-content: center;
        margin-bottom: 25px;

        .line1 {
          font-size: 38px;
          font-weight: 500;
          color: #ffffff;
        }

        .line2 {
          margin-top: 48px;
          font-size: 24px;
          font-weight: 400;
          color: #ffffff;
          line-height: 34px;
          opacity: 0.7;
        }
      }
    }
  }

  .process {
    width: 100%;
    height: 524px;
    background: #151e46;
    background-image: url('../assets/images/process.png');
    @include back-img-center;
    padding: 30px;
    box-sizing: border-box;

    .title {
      width: 100%;
      text-align: center;
      font-size: 34px;
      font-weight: 500;
      color: #ffffff;
      padding: 50px 0;
      box-sizing: border-box;
    }

    .images {
      margin-top: 150px;
      width: 100%;
      position: relative;

      .pro {
        width: 708px;
      }

      .pro0 {
        width: 146px;
        position: absolute;
        top: 90px;
        left: 280px;
      }

      .pro1 {
        width: 91px;
        position: absolute;
        top: -50px;
        left: 50px;
      }

      .pro2 {
        width: 135px;
        position: absolute;
        top: -140px;
        left: 200px;
      }

      .pro3 {
        width: 134px;
        position: absolute;
        top: -140px;
        right: 180px;
      }

      .pro4 {
        width: 136px;
        position: absolute;
        top: -40px;
        right: 20px;
      }

      .pro5 {
        width: 106px;
        position: absolute;
        bottom: 100px;
        right: 150px;
      }

      .pro6 {
        width: 170px;
        position: absolute;
        bottom: 80px;
        left: 140px;
      }
    }
  }

  .advantage {
    background-color: #f4f5f8;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
    box-sizing: border-box;
    padding-top: 250px;
    padding-bottom: 50px;

    .title {
      width: 100%;
      text-align: center;
      font-size: 34px;
      font-weight: 500;
      color: #333333;
      padding: 50px 0;
      box-sizing: border-box;
    }

    .items {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .item {
        width: 217px;
        height: 208px;
        margin-bottom: 25px;
        background: #ffffff;
        box-shadow: 0 3px 50px 0 rgba(106, 122, 156, 0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 20px 10px;
        box-sizing: border-box;

        img {
          width: 50%;
        }

        .text {
          width: 100%;
          text-align: center;
          font-size: 22px;
          font-weight: 400;
          color: #333333;
        }
      }

      .item:nth-child(2),
      .item:nth-child(5),
      .item:nth-child(8) {
        margin: 0 18px;
      }
    }
  }

  .customer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #ffffff;
    height: 530px;
    background-image: url('../assets/images/customer0.png');
    padding: 30px;
    box-sizing: border-box;
    @include back-img-center;
    background-size: 100%;
    .title {
      width: 100%;
      text-align: center;
      font-size: 34px;
      font-weight: 500;
      color: #333333;
      padding: 50px 0;
      box-sizing: border-box;
    }
    .items {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .item {
        width: 25%;
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        box-sizing: border-box;
        align-items: center;
        .line1 {
          font-size: 50px;
          font-weight: bold;
          color: #222222;
          text-align: center;
        }
        .line2 {
          font-size: 22px;
          font-weight: 400;
          color: #333333;
          text-align: center;
          letter-spacing: 2px;
        }
      }
    }
  }

  .news {
    height: 1243px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #ffffff;
    background-image: url('../assets/images/news.png');
    padding: 30px;
    box-sizing: border-box;
    @include back-img-center;
    background-size: 100%;
    .title {
      width: 100%;
      text-align: center;
      font-size: 34px;
      font-weight: 500;
      color: #ffffff;
      padding: 50px 0;
      box-sizing: border-box;
    }
    .items {
      width: 100%;
      display: flex;
      flex-direction: column;
      .item {
        margin-bottom: 70px;
        cursor: pointer;
        width: 100%;
        height: 207px;
        background: #ffffff;
        display: flex;
        flex-direction: row;
        box-shadow: 0px 3px 50px 0px rgba(0, 0, 0, 0.2);

        .left {
          width: 200px;
          height: 196px;
          margin-left: 20px;
          box-sizing: border-box;
          overflow: hidden;
          margin-top: -30px;

          .img {
            transition: all 1s;
            width: 200px;
            height: 196px;
            @include back-img-center;
          }
        }

        .right {
          width: calc(100% - 240px);
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 20px;
          box-sizing: border-box;

          .line1 {
            font-size: 30px;
            font-weight: 400;
            color: #333333;
            @include line-hidden(1);
          }

          .line2 {
            font-size: 20px;
            font-weight: 400;
            color: #9eaac3;
            margin: 15px 0 20px 0;
          }

          .line3 {
            font-size: 22px;
            font-weight: 400;
            color: #333333;
            @include line-hidden(3);
          }
        }
      }
    }
  }
}
</style>
















