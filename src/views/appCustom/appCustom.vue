<template>
  <div class="appCustom">
    <navigation :colour="false"></navigation>
    <div
      class="backgro"
      :style="'background-image: url('+require('../../assets/images/app/backgro.png')+')'"
    >
      <h2>APP定制化开发</h2>
      <p class="bar"></p>
    </div>
    <div class="developable" :style="'background-image: url('+develimg+')'">
      <h4>可开发行业</h4>
      <div class="lits">
        <div
          v-for="(item, index) in developable"
          :key="index"
          @click="toggleGraph(index)"
          class="item"
          :class="activa==index?'activa':''"
        >
          <p>
            <img :src="activa==index?item.img2:item.img" alt />
          </p>
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
    <div class="process">
      <!-- liucheng.png -->
      <h4>APP开发流程</h4>
      <div class="data">
        <div class="itema">
          <p>四个阶段</p>
          <p>开工、原型、设计、开发与测试</p>
        </div>
        <div class="itema">
          <p>六个角色</p>
          <p>项目经理、产品经理、UI设计师、前端开发工程师、JAVA开发工程师、系统测试工程师</p>
        </div>
        <div class="itema">
          <p>阶段成果</p>
          <p>《开工确认单》、《需求原型确认单》《UI设计确认单》、《测试报告确认单》</p>
        </div>
      </div>
      <div class="turn">
        <img src="../../assets/images/app/liucheng.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appCustom',

  data () {
    return {
      developable: [
        {
          img: require('../../assets/images/app/activa1.png'),
          img2: require('../../assets/images/app/activa_1.png'),
          text: '智能家居',
          industry: require('../../assets/images/app/hangye1.png'),
          width: '32px',
          height: '34px',
          id: 1
        },
        {
          img: require('../../assets/images/app/activa2.png'),
          img2: require('../../assets/images/app/activa_2.png'),
          text: '教育',
          industry: require('../../assets/images/app/hangye2.png'),
          width: '40px',
          height: '24px',
          id: 2
        },
        {
          img: require('../../assets/images/app/activa3.png'),
          img2: require('../../assets/images/app/activa_3.png'),
          text: '二手车',
          industry: require('../../assets/images/app/hangye3.png'),
          width: '38px',
          height: '27px',
          id: 3
        },
        {
          img: require('../../assets/images/app/activa4.png'),
          img2: require('../../assets/images/app/activa_4.png'),
          text: '直播',
          industry: require('../../assets/images/app/hangye4.png'),
          width: '35px',
          height: '31px',
          id: 4
        },
        {
          img: require('../../assets/images/app/activa5.png'),
          img2: require('../../assets/images/app/activa_5.png'),
          text: '医疗',
          industry: require('../../assets/images/app/hangye5.png'),
          width: '32px',
          height: '28px',
          id: 5
        },
        {
          img: require('../../assets/images/app/activa6.png'),
          img2: require('../../assets/images/app/activa_6.png'),
          text: '交友',
          industry: require('../../assets/images/app/hangye6.png'),
          width: '35px',
          height: '24px',
          id: 6
        },
        {
          img: require('../../assets/images/app/activa7.png'),
          img2: require('../../assets/images/app/activa_7.png'),
          text: '商城',
          industry: require('../../assets/images/app/hangye7.png'),
          width: '34px',
          height: '32px',
          id: 7
        },
        {
          img: require('../../assets/images/app/activa8.png'),
          img2: require('../../assets/images/app/activa_8.png'),
          text: '外卖',
          industry: require('../../assets/images/app/hangye8.png'),
          width: '36px',
          height: '31px',
          id: 8
        },
        {
          img: require('../../assets/images/app/activa9.png'),
          img2: require('../../assets/images/app/activa_9.png'),
          text: '健身',
          industry: require('../../assets/images/app/hangye9.png'),
          width: '36px',
          height: '25px',
          id: 9
        },
        {
          img: require('../../assets/images/app/activa10.png'),
          img2: require('../../assets/images/app/activa_10.png'),
          text: '房产',
          industry: require('../../assets/images/app/hangye10.png'),
          width: '32px',
          height: '35px',
          id: 10
        },
      ],
      activa: 1,
      develimg: ''
    }
  },
  //生命周期函数
  created () {
    this.toggleGraph(0)
  },
  //方法
  methods: {
    toggleGraph (index) {
      this.develimg = this.developable[index].industry
      this.activa = index
      console.log(index)
    }
  },
  //组件
  components: {
  }
}
</script>

<style lang='scss' scoped>
.appCustom {
  .backgro {
    width: 750px;
    height: 748px;
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
  .developable {
    width: 100%;
    height: 1264px;
    background-image: url('../../assets/images/app/hangye1.png');
    background-repeat: no-repeat;
    background-size: 734px 750px;
    background-position: 0 400px;
    > h4 {
      font-family: SourceHanSansCN-Medium;
      font-size: 34px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 1px;
      color: #333333;
      text-align: center;
      margin-top: 79px;
      //   font-weight: bolder;
    }
    .lits {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      //   justify-content: center;

      .item {
        display: flex;
        align-items: center;
        // justify-content: center;
        padding: 0 10px;
        box-sizing: border-box;
        width: 208px;
        height: 76px;
        margin-top: 43px;
        margin-left: 40px;
        > p:nth-child(1) {
          width: 45px;
          height: 45px;
          > img {
            width: 45px;
            height: 45px;
          }
        }
        > p:nth-child(2) {
          font-family: SourceHanSansCN-Regular;
          font-size: 28px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 0px;
          letter-spacing: 1px;
          color: #333333;
          margin-left: 20px;
          margin-top: -5px;
        }
      }

      .item.activa {
        width: 208px;
        height: 76px;
        // border: solid 1px #185ee0;
        > p:nth-child(2) {
          font-family: SourceHanSansCN-Regular;
          font-size: 28px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 41px;
          letter-spacing: 1px;
          color: #004ce5;
        }
      }
    }
  }
  .process {
    width: 750px;
    // height: 1406px;
    background-color: #f4f5f8;
    padding: 80px 0 40px;
    box-sizing: border-box;
    > h4 {
      font-family: SourceHanSansCN-Medium;
      font-size: 34px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 1px;
      color: #333333;
      text-align: center;
    }
    .data {
      width: 100%;
      padding: 0 27px 0 36px;
      box-sizing: border-box;
      .itema {
        margin-top: 55px;
        > p:nth-child(1) {
          font-family: SourceHanSansCN-Regular;
          font-size: 32px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 1px;
          color: #333333;
          @include line-hidden(1);
        }
        > p:nth-child(2) {
          font-family: SourceHanSansCN-Regular;
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 1px;
          color: #9eaac3;
          margin-top: 28px;
          line-height: 40px;
          @include line-hidden(2);
        }
      }
    }
    .turn {
      width: 699px;
      height: 710px;
      margin: 20px auto;
      > img {
        width: 699px;
        height: 710px;
      }
    }
  }
}
</style>
