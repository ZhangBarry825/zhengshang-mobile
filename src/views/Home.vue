<template>
  <div class="home">
    <navigation :colour="false"></navigation>
    <div class="swiper-box ">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item class="swipe-item" v-for="(item,index) in bannerList">
          <div class="center">
            <div class="line1">{{item.title}}</div>
            <div class="line2">{{item.content}}</div>
            <div class="line3" @click="openDialog">
              <div class="text">了解更多</div>
              <img src="../assets/images/more0.png" alt />
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="our-service">
      <div class="title active-top">我们的服务</div>
      <div class="items">
        <div class="item active-left">
          <img src="../assets/images/service1.png" alt />
          <div class="line1">APP开发</div>
          <div class="line2">商城、交友、教育、赛事、直播、生活服务，您的创业蓝图，我们帮您实现</div>
        </div>
        <div class="item active-right">
          <img src="../assets/images/service2.png" alt />
          <div class="line1">小程序开发</div>
          <div class="line2">小程序、公众号、微信营销一站式全系息服务，为您抢占微信流量红利</div>
        </div>
        <div class="item active-left">
          <img src="../assets/images/service3.png" alt />
          <div class="line1">网站建设</div>
          <div class="line2">企业网站、个人网站、展示型网站、推广型网站、高端定制型网站，为您量身打造企业互联网战略解决方案</div>
        </div>
        <div class="item active-right">
          <img src="../assets/images/service4.png" alt />
          <div class="line1">系统集成</div>
          <div class="line2">ERP、OA、CRM、HR、PRM多种管理系统开发，成熟架构，多种解决方案，尽在正尚科技</div>
        </div>
        <div class="item active-left">
          <img src="../assets/images/service5.png" alt />
          <div class="line1">物联网</div>
          <div class="line2">为企业和个人开发者提供智能硬件一体化解决方案</div>
        </div>
        <div class="item active-right">
          <img src="../assets/images/service6.png" alt />
          <div class="line1">政务云</div>
          <div class="line2">为政府行业提供基础设施、支撑软件、应用系统、信息资源、运行保障和信息安全等综合服务平台</div>
        </div>
      </div>
    </div>
    <div class="solution">
      <div class="title active-top">行业解决方案</div>
      <div class="items">
        <div
          class="item"
          v-for="(item,index) in solution"
          :style="'background-image: url('+item.img+')'"
        >
          <div class="line1 active-bottom">{{item.title}}</div>
          <div class="line2 active-bottom">{{item.content}}</div>
        </div>
      </div>
    </div>
    <div class="process">
      <div class="title active-top">项目服务流程</div>
      <div class="images">
        <img class="pro active-bottom" src="../assets/images/pro.png" alt />
        <img class="pro0 active-top0" src="../assets/images/pro0.png" alt />
        <img class="pro1 active-top1" src="../assets/images/pro1.png" alt />
        <img class="pro2 active-top2" src="../assets/images/pro2.png" alt />
        <img class="pro3 active-top3" src="../assets/images/pro3.png" alt />
        <img class="pro4 active-top4" src="../assets/images/pro4.png" alt />
        <img class="pro5 active-top5" src="../assets/images/pro5.png" alt />
        <img class="pro6 active-top6" src="../assets/images/pro6.png" alt />
      </div>
    </div>
    <div class="advantage">
      <div class="title active-top">我们的优势</div>
      <div class="items">
        <div class="item active-advantage1">
          <img src="../assets/images/adv1.png" alt />
          <div class="text">详细了解功能需求</div>
        </div>
        <div class="item active-advantage2">
          <img src="../assets/images/adv2.png" alt />
          <div class="text">创意精细的设计</div>
        </div>
        <div class="item active-advantage3">
          <img src="../assets/images/adv3.png" alt />
          <div class="text">规范的代码开发</div>
        </div>
        <div class="item active-advantage4">
          <img src="../assets/images/adv4.png" alt />
          <div class="text">安全稳定的数据库</div>
        </div>
        <div class="item active-advantage5">
          <img src="../assets/images/adv5.png" alt />
          <div class="text">线下实体公司</div>
        </div>
        <div class="item active-advantage6">
          <img src="../assets/images/adv6.png" alt />
          <div class="text">用户至上的服务</div>
        </div>
        <div class="item active-advantage7">
          <img src="../assets/images/adv7.png" alt />
          <div class="text">专业的技术团队</div>
        </div>
        <div class="item active-advantage8">
          <img src="../assets/images/adv8.png" alt />
          <div class="text">众多行业开发经验</div>
        </div>
      </div>
    </div>
    <div class="customer">
      <div class="title active-top">服务过的客户</div>
      <div class="items">
        <div class="item active-num">
          <div class="line1">
            <animate-number
                  from="1"
                  :to="200"
                  duration="1500"
                  easing="easeOutQuad"
                  ref="myNum1">
            </animate-number>+
          </div>
          <div class="line2">先上线下微小企业</div>
        </div>
        <div class="item active-num">
          <div class="line1">
            <animate-number
                    from="1"
                    :to="106"
                    duration="1500"
                    easing="easeOutQuad"
                    ref="myNum2">
            </animate-number>
          </div>
          <div class="line2">个人用户</div>
        </div>
        <div class="item active-num">
          <div class="line1">
            <animate-number
                    from="1"
                    :to="68"
                    duration="1500"
                    easing="easeOutQuad"
                    ref="myNum3">
            </animate-number>
          </div>
          <div class="line2">创新创业公司</div>
        </div>
        <div class="item active-num">
          <div class="line1">
            <animate-number
                    from="1"
                    :to="30"
                    duration="1500"
                    easing="easeOutQuad"
                    ref="myNum4">
            </animate-number>+
          </div>
          <div class="line2">政府和公共服务机构</div>
        </div>
      </div>
    </div>
    <div class="news">
      <div class="title active-top">新闻中心</div>
      <div class="items">
        <div :class="'item active-news'+index" v-for="(item,index) in news" :key="index" @click="goNewsDetail(item.id)">
          <div class="left">
            <div
              class="img"
              :style="'background-image: url('+item.img+')'"
            ></div>
          </div>
          <div class="right">
            <div class="line1">{{item.title}}</div>
            <div class="line2">{{item.ctime}}</div>
            <div class="line3">{{item.remark}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="partner">
      <div class="title active-top">合作伙伴</div>
      <div class="items">
        <div
          class="item"
          v-for="(item,index) in partner"
          :class="'item active-partner'+index"
          :style="'background-image: url('+item.img+')'"
        ></div>
      </div>
    </div>
    <div class="about">
      <div class="title active-top">关于我们</div>
      <div class="image active-original" :style="'background-image: url('+aboutus.img+')'"></div>
      <div
        class="text">{{aboutus.content}}</div>
      <div class="more" @click="$router.push('/aboutUs')">
        <div class="more-text">了解更多</div>
        <img src="../assets/images/more1.png" alt />
      </div>
    </div>

    <transition name="fade">
      <div class="center-dialog" v-show="showCenterDialog">
        <div class="dialog-box">
          <img class="dialog-back" src="../assets/images/dialog-b.png" alt="">
          <img @click="showCenterDialog=false" class="close-dialog" src="../assets/images/cccc.png" alt="">
          <div class="center-text">
            <div class="line1">您好，欢迎来到正尚网络，</div>
            <div class="line2">请问有什么可以帮您？</div>
            <div class="line3">
              <div class="btn1" @click="showCenterDialog=false">稍后再说</div>
              <div class="btn2" @click="openDialog">现在咨询</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import navigation from '../components/navigation/navigation'
import PageFooter from "../components/page-footer/PageFooter";
import {getHomeData} from "../utils/api";

export default {
  name: 'Home',
  components: {
    navigation,
    PageFooter,
  },

  data () {
    return {
      showCenterDialog: false,
      bannerList:[],
      solution:[],
      news:[],
      partner:[],
      aboutus: {
        img:'',
        title:''
      },
      timer: '',
    };
  },
  methods: {
    async fetchData(){
      let res = await getHomeData()
      console.log(res.data)
      this.bannerList=res.data.carousel
      this.solution=res.data.solution
      this.news=res.data.news
      this.partner=res.data.partner
      this.aboutus=res.data.aboutus
    },
    goNewsDetail(id){
      this.$router.push('/newsDetail?id='+id)
    },
    openDialog() {
      this.$dia()
    },
    autoAlertDialog() {
      this.timer = setInterval(() => {
        this.open()
      }, 30000)
    },
    open() {
      this.showCenterDialog = true
      clearInterval(this.timer)
      this.autoAlertDialog()
    },
  },
  created() {
    this.fetchData()
  },
  mounted() {
    //咨询弹窗 30s
    this.autoAlertDialog()
    let that = this

    setTimeout(()=>{
      that.$ami('.active-left', 200, 'left', '100%', .5, true)
      that.$ami('.active-right', 200, 'right', '100%', .5, true)
      that.$ami('.active-top', 200, 'top', '100%', .5, true)
      that.$ami('.active-bottom', 200, 'bottom', '100%', .5, true)

      that.$ami('.active-original', 300, 'bottom', '30%', 0, true)

      that.$ami('.active-news0', 0, 'right', '50%', .5, true)
      that.$ami('.active-news1', 100, 'right', '50%', .5, true)
      that.$ami('.active-news2', 200, 'right', '50%', .5, true)
      that.$ami('.active-news3', 300, 'right', '50%', .5, true)
    },300)


    that.$ami('.active-top0', 0, 'top', '100%', .5, true)
    that.$ami('.active-top1', 100, 'top', '100%', .5, true)
    that.$ami('.active-top2', 200, 'top', '100%', .5, true)
    that.$ami('.active-top3', 300, 'top', '100%', .5, true)
    that.$ami('.active-top4', 400, 'top', '100%', .5, true)
    that.$ami('.active-top5', 500, 'top', '100%', .5, true)
    that.$ami('.active-top6', 600, 'top', '100%', .5, true)


    that.$ami('.active-num', 0, 'top', '0%', 1, true,()=>{
      that.$refs.myNum1.start()
      that.$refs.myNum2.start()
      that.$refs.myNum3.start()
      that.$refs.myNum4.start()
    })



  }
}
</script>

<style scoped lang="scss">
.home {
  overflow: hidden;
  .swiper-box {
    background-image: url('../assets/images/swipe-back.gif');
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
              margin: 30px 20px;
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
      font-weight: 600;
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
      font-weight: 600;
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
      font-weight: 600;
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
      font-weight: 600;
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
      .item:hover {
        cursor: pointer;
        color: rgba(47, 103, 241, 0.31);

        img {
          transition: all 1.5s;
          transform: rotateY(540deg);
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
      font-weight: 600;
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
    background-image: url('../assets/images/news.png');
    background-color: #f4f5f8;
    padding: 0 30px;
    box-sizing: border-box;
    @include back-img-center;
    background-position: top center;
    background-size: 100%;
    .title {
      width: 100%;
      text-align: center;
      font-size: 34px;
      font-weight: 600;
      color: #ffffff;
      padding: 50px 0;
      box-sizing: border-box;
    }
    .items {
      margin-top: 50px;
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

  .partner {
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
      font-weight: 600;
      color: #333333;
      padding: 50px 0;
      box-sizing: border-box;
    }
    .items {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding-bottom: 30px;
      .item {
        width: 226px;
        height: 140px;
        background: #ffffff;
        border: 1px solid #dce8fe;
        @include back-img-center;
        background-size: 90%;
      }
    }
  }

  .about {
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
      font-weight: 600;
      color: #333333;
      padding: 50px 0;
      box-sizing: border-box;
    }
    .image {
      width: 100%;
      height: 383px;
      @include back-img-center;
    }
    .text {
      margin-top: 20px;
      /*text-indent: 2em;*/
      font-size: 24px;
      font-weight: 400;
      color: #333333;
      line-height: 40px;
      white-space: pre-line;
    }
    .more {
      margin: 80px auto;

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

  .center-dialog {
    margin: 0 auto;
    z-index: 5;
    position: fixed;
    top: 20%;
    left: calc(50% - 250px);
    border-radius: 4px;
    overflow: hidden;

    .dialog-box {
      width: 500px;
      height: 496px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      .dialog-back {
        position: absolute;
        width: 100%;
      }

      .close-dialog {
        cursor: pointer;
        position: absolute;
        right: 40px;
        top: 170px;
        width:50px;
      }

      .center-text {
        z-index: 5;
        height: 270px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .line1 {
          font-size: 24px;
          color: #ffffff;
        }

        .line2 {
          margin-top: 20px;
          font-size: 28px;
          color: #ffffff;
          letter-spacing: 2px;
        }

        .line3 {
          display: flex;
          width: 100%;
          justify-content: space-around;
          margin-top: 50px;

          .btn1 {
            cursor: pointer;
            font-size: 20px;
            color: #ffffff;
            border: 1px solid #ffffff;
            border-radius: 50px;
            padding: 15px 40px;
          }

          .btn2 {
            cursor: pointer;
            font-size: 20px;
            color: #014ce5;
            background-color: #ffffff;
            border-radius: 50px;
            padding: 15px 40px;
          }
        }
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
}
</style>
















