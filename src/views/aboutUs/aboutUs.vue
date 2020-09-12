<template>
  <div class="aboutUs">
    <navigation :colour="false"></navigation>
    <div
      class="backgro"
      :style="'background-image: url('+require('../../assets/images/aboutUs/backgro.png')+')'"
    >
      <h2>关于我们</h2>
      <p class="bar"></p>
    </div>
    <div class="team">
      <div>
        <p>
          <img src="../../assets/images/aboutUs/team1.png" alt />
        </p>
        <p>7年项目开发经验</p>
      </div>
      <div>
        <p>
          <img src="../../assets/images/aboutUs/team2.png" alt />
        </p>
        <p>78人技术团队</p>
      </div>
      <div>
        <p>
          <img src="../../assets/images/aboutUs/team3.png" alt />
        </p>
        <p>3000+合作客户</p>
      </div>
    </div>
    <div class="introduction">
      <div>关于我们</div>
      <div class="text">
        <div>
          <p>
            <img src="../../assets/images/aboutUs/uction.png" alt />
          </p>
          <p>郑州正尚网络科技有限公司，位于郑州郑东新区金水东路绿地新都会6号楼。是一家集网站建设、小程序开</p>
        </div>
        <p class="inton">
          发、APP开发、OA办公系统、智慧城市服务系统、大数据分析系统、物联网管理平台于一体一站式互联网服务。
          <br />我们是追求品质与力求不断超越自己的团队，每一位成员也是亲密的伙伴，与公司一起成长与发展。我们尊重每次合作的机会，不断精进，团队秉承专注、专业的技术服务思维。视服务质量为企业使命，视客户为企业之本，以服务客户为企业宗旨，以高效而良好的服务为客户切实节约成本、创造价值。
        </p>
      </div>
    </div>
    <div class="business">
      <h4>经营理念</h4>
      <div class="Philosophy">
        <div class="item">
          <div>
            <p>
              <img class="firstClass1" src="../../assets/images/aboutUs/firstClass1.png" alt />
            </p>
          </div>
          <div>
            <p>一流服务体验</p>
            <p>尊重客户，及时响应客户需求，快速解决客户问题，站在客户立场思考和推进工作，深入了解客户需求的变化，提供超出客户预期的产品和服务。</p>
          </div>
        </div>
        <div class="item">
          <div>
            <p>
              <img class="firstClass2" src="../../assets/images/aboutUs/firstClass2.png" alt />
            </p>
          </div>
          <div>
            <p>一流服务体验</p>
            <p>尊重客户，及时响应客户需求，快速解决客户问题，站在客户立场思考和推进工作，深入了解客户需求的变化，提供超出客户预期的产品和服务。</p>
          </div>
        </div>
        <div class="item">
          <div>
            <p>
              <img class="firstClass3" src="../../assets/images/aboutUs/firstClass3.png" alt />
            </p>
          </div>
          <div>
            <p>一流服务体验</p>
            <p>尊重客户，及时响应客户需求，快速解决客户问题，站在客户立场思考和推进工作，深入了解客户需求的变化，提供超出客户预期的产品和服务。</p>
          </div>
        </div>
        <div class="item">
          <div>
            <p>
              <img class="firstClass4" src="../../assets/images/aboutUs/firstClass4.png" alt />
            </p>
          </div>
          <div>
            <p>一流服务体验</p>
            <p>尊重客户，及时响应客户需求，快速解决客户问题，站在客户立场思考和推进工作，深入了解客户需求的变化，提供超出客户预期的产品和服务。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="Environment">
      <h4>公司环境</h4>
      <div class="company">
        <div class="itema1">
          <img src="../../assets/images/aboutUs/company1.png" alt />
        </div>
        <div class="itema2">
          <p>
            <img src="../../assets/images/aboutUs/company2.png" alt />
          </p>
          <p>
            <img src="../../assets/images/aboutUs/company3.png" alt />
          </p>
        </div>
        <div class="itema3">
          <img src="../../assets/images/aboutUs/company4.png" alt />
        </div>
        <div class="itema4">
          <p>
            <img src="../../assets/images/aboutUs/company5.png" alt />
          </p>
          <p>
            <img src="../../assets/images/aboutUs/company6.png" alt />
          </p>
        </div>
      </div>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageFooter from '../../components/page-footer/PageFooter'
export default {
  name: 'aboutUs',

  data () {
    return {

    }
  },
  //生命周期函数
  created () {
  },
  //方法
  methods: {
  },
  //组件
  components: {
    PageFooter
  }
}
</script>

<style lang='scss' scoped>
.aboutUs {
  background-color: #eeeeee;
  .backgro {
    width: 750px;
    height: 734px;
    background-image: url('../../assets/images/aboutUs/backgro.png');
    background-size: 734px 750px;
    > h2 {
      font-size: 48px;
      font-family: AlibabaPuHuiTi;
      font-weight: bold;
      color: #ffffff;
      padding-top: 218px;
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
  .team {
    width: 690px;
    height: 300px;
    border-radius: 10px;
    margin: 10px auto;
    margin-top: -200px;
    padding: 0 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    div {
      > p:nth-child(1) {
        width: 146px;
        height: 138px;
        margin: 48px auto;
        > img {
          width: 146px;
          height: 138px;
        }
      }
      > p:nth-child(2) {
        font-size: 24px;
        font-family: AlibabaPuHuiTi;
        font-weight: 400;
        color: #333333;
        // margin-top: 38px;
      }
    }
  }
  .introduction {
    margin-top: 82px;
    > div:nth-child(1) {
      font-size: 48px;
      font-family: AlibabaPuHuiTi;
      font-weight: 400;
      color: #222222;
      line-height: 44px;
      text-align: right;
      margin-right: 31px;
    }
    .text {
      background-color: #fff;
      padding: 0 31px 0 29px;
      padding-bottom: 50px;
      box-sizing: border-box;
      margin-top: 62px;
      > div:nth-child(1) {
        display: flex;
        > p:nth-child(1) {
          width: 360px;
          height: 340px;
          border-radius: 5px;
          margin-top: -120px;
          > img {
            width: 360px;
            height: 340px;
          }
        }
        > p:nth-child(2) {
          font-size: 24px;
          font-family: AlibabaPuHuiTi;
          font-weight: 400;
          color: #333333;
          line-height: 48px;
          margin-left: 38px;
          margin-top: 41px;
          text-indent: 28px;
        }
      }
      .inton {
        font-size: 24px;
        font-family: AlibabaPuHuiTi;
        font-weight: 400;
        color: #333333;
        line-height: 48px;
        margin-top: 41px;
      }
    }
  }
  .business {
    margin-top: 59px;
    > h4 {
      font-size: 48px;
      font-family: AlibabaPuHuiTi;
      font-weight: 400;
      color: #222222;
      line-height: 44px;
      text-align: center;
    }
    .Philosophy {
      .item:nth-child(1) {
        margin-top: 59px;
      }
      .item {
        width: 630px;
        height: 320px;
        border-radius: 10px;
        background-color: #fff;
        margin-left: 90px;
        display: flex;
        align-items: center;
        margin-top: 30px;
        > div:nth-child(1) {
          width: 130px;
          height: 130px;
          background: #ffffff;
          box-shadow: 0px 8px 30px 0px rgba(85, 113, 216, 0.15);
          border-radius: 50%;
          margin-left: -65px;
          p {
            width: 130px;
            height: 130px;
            background: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            .firstClass1 {
              width: 59px;
              height: 55px;
            }
            .firstClass2 {
              width: 66px;
              height: 62px;
            }
            .firstClass3 {
              width: 71px;
              height: 50px;
            }
            .firstClass4 {
              width: 66px;
              height: 69px;
            }
          }
        }
        > div:nth-child(2) {
          margin-left: 41px;
          > p:nth-child(1) {
            font-size: 34px;
            font-family: AlibabaPuHuiTi;
            font-weight: 400;
            color: #333333;
            line-height: 11px;
            margin-top: 44px;
          }
          > p:nth-child(2) {
            margin-top: 38px;
            font-size: 24px;
            font-family: AlibabaPuHuiTi;
            font-weight: 400;
            color: #333333;
            line-height: 48px;
          }
        }
      }
    }
  }
  .Environment {
    margin-top: 80px;
    margin-bottom: 40px;
    padding: 0 30px;
    box-sizing: border-box;
    h4 {
      font-size: 48px;
      font-family: AlibabaPuHuiTi;
      font-weight: 400;
      color: #222222;
      line-height: 44px;
      text-align: center;
      margin-bottom: 59px;
    }
    .company {
      .itema1 {
        width: 690px;
        height: 320px;
        background: #000000;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .itema2 {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        > p:nth-child(1) {
          width: 420px;
          height: 320px;
          > img {
            width: 100%;
            height: 100%;
          }
        }
        > p:nth-child(2) {
          width: 250px;
          height: 320px;
          > img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .itema3 {
        width: 690px;
        height: 320px;
        margin-top: 20px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .itema4 {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        > p:nth-child(1) {
          width: 250px;
          height: 320px;
          > img {
            width: 100%;
            height: 100%;
          }
        }
        > p:nth-child(2) {
          width: 420px;
          height: 320px;
          > img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
