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
        <p>{{dataDetail.config.first}}年项目开发经验</p>
      </div>
      <div>
        <p>
          <img src="../../assets/images/aboutUs/team2.png" alt />
        </p>
        <p>{{dataDetail.config.second}}人技术团队</p>
      </div>
      <div>
        <p>
          <img src="../../assets/images/aboutUs/team3.png" alt />
        </p>
        <p>{{dataDetail.config.third}}+合作客户</p>
      </div>
    </div>
    <div class="introduction">
      <div>关于我们</div>
      <div class="text">
        <div>
          <p>
            <img src="../../assets/images/aboutUs/uction.png" alt />
          </p>
          <p>{{dataDetail.aboutus.content.slice(0,47)}}</p>
        </div>
        <p class="inton">
          {{dataDetail.aboutus.content.slice(47)}}
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
            <p>{{dataDetail.idea[0].key}}</p>
            <p>{{dataDetail.idea[0].value}}</p>
          </div>
        </div>
        <div class="item">
          <div>
            <p>
              <img class="firstClass2" src="../../assets/images/aboutUs/firstClass2.png" alt />
            </p>
          </div>
          <div>
            <p>{{dataDetail.idea[1].key}}</p>
            <p>{{dataDetail.idea[1].value}}</p>
          </div>
        </div>
        <div class="item">
          <div>
            <p>
              <img class="firstClass3" src="../../assets/images/aboutUs/firstClass3.png" alt />
            </p>
          </div>
          <div>
            <p>{{dataDetail.idea[2].key}}</p>
            <p>{{dataDetail.idea[2].value}}</p>
          </div>
        </div>
        <div class="item">
          <div>
            <p>
              <img class="firstClass4" src="../../assets/images/aboutUs/firstClass4.png" alt />
            </p>
          </div>
          <div>
            <p>{{dataDetail.idea[3].key}}</p>
            <p>{{dataDetail.idea[3].value}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="Environment">
      <h4>公司环境</h4>
      <div class="company">
        <div class="itema1">
          <van-image  fit="cover" :src="dataDetail.environment.img1" alt />
        </div>
        <div class="itema2">
          <p>
            <van-image  fit="cover" :src="dataDetail.environment.img2"  alt />
          </p>
          <p>
            <van-image  fit="cover" :src="dataDetail.environment.img3"  alt />
          </p>
        </div>
        <div class="itema3">
          <van-image  fit="cover" :src="dataDetail.environment.img4"  alt />
        </div>
        <div class="itema4">
          <p>
            <van-image  fit="cover" :src="dataDetail.environment.img5"  alt />
          </p>
          <p>
            <van-image  fit="cover" :src="dataDetail.environment.img6"  alt />
          </p>
        </div>
      </div>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageFooter from '../../components/page-footer/PageFooter'
import {getAboutUs} from "../../utils/api";
export default {
  name: 'aboutUs',

  data () {
    return {
      dataDetail:{
        config:{
          first:0,
          second:0,
          third:0
        },
        aboutus:{
          content:''
        },
        idea:[
          {
            key:'',
            value:''
          },
          {
            key:'',
            value:''
          },
          {
            key:'',
            value:''
          },
          {
            key:'',
            value:''
          },
        ],
        environment: {
          img1:'',
          img2:'',
          img3:'',
          img4:'',
          img5:'',
          img6:'',
        }
      }
    }
  },
  //生命周期函数
  created () {
    this.fetchData()
  },
  //方法
  methods: {
    async fetchData(){
      let res= await getAboutUs()
      console.log(res.data)
      this.dataDetail=res.data
    }
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
        white-space: pre-line;
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
        > .van-image {
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
          > .van-image {
            width: 100%;
            height: 100%;
          }
        }
        > p:nth-child(2) {
          width: 250px;
          height: 320px;
          > .van-image {
            width: 100%;
            height: 100%;
          }
        }
      }
      .itema3 {
        width: 690px;
        height: 320px;
        margin-top: 20px;
        > .van-image {
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
          > .van-image {
            width: 100%;
            height: 100%;
          }
        }
        > p:nth-child(2) {
          width: 420px;
          height: 320px;
          > .van-image {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
