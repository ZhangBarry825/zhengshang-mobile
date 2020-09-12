<template>
  <div class="customerCase">
    <navigation :colour="false"></navigation>
    <div
      class="backgro"
      :style="'background-image: url('+require('../../assets/images/customerCase/backgro.png')+')'"
    >
      <h2>客户案例</h2>
      <p class="bar"></p>
    </div>
    <div class="tabs">
      <van-tabs color="#FF6A00">
        <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
          <div class="list">
            <div class="item" v-for="(item, index) in tabs" :key="index">
              <div>
                <img :src="item.img" alt />
              </div>
              <div>
                <p>{{item.title}}</p>
                <p>{{item.text}}</p>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
      <PageFooter></PageFooter>
    </div>
  </div>
</template>

<script>
import PageFooter from '../../components/page-footer/PageFooter'
export default {
  name: 'customerCase',

  data () {
    return {
      tabs: [{
        img: require('../../assets/images/customerCase/tabs1.png'),
        title: '线上健身 ',
        text: '线上健身 重构健身新模式'
      }, {
        img: require('../../assets/images/customerCase/tabs2.png'),
        title: '生活商城',
        text: '全渠道电商解决方案'
      }, {
        img: require('../../assets/images/customerCase/tabs3.png'),
        title: '线上健身',
        text: '助力商家实现流量高效变现'
      }, {
        img: require('../../assets/images/customerCase/tabs4.png'),
        title: '生活商城',
        text: '全渠道电商解决方案'
      }, {
        img: require('../../assets/images/customerCase/tabs1.png'),
        title: '线上健身',
        text: '线上健身 重构健身新模式'
      }, {
        img: require('../../assets/images/customerCase/tabs1.png'),
        title: '线上健身',
        text: '线上健身 重构健身新模式'
      }, {
        img: require('../../assets/images/customerCase/tabs1.png'),
        title: '线上健身',
        text: '线上健身 重构健身新模式'
      }, {
        img: require('../../assets/images/customerCase/tabs1.png'),
        title: '线上健身',
        text: '线上健身 重构健身新模式'
      }]
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
.customerCase {
  background-color: #eeeeee;
  .backgro {
    width: 750px;
    height: 734px;
    background-size: 734px 750px;
    > h2 {
      font-size: 48px;
      font-family: AlibabaPuHuiTi;
      font-weight: bold;
      color: #ffffff;
      padding-top: 221px;
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
  .tabs {
    width: 750px;
    height: 80px;
    background: #ffffff;
    .list {
      background-color: #eeeeee;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 30px 30px;
      box-sizing: border-box;
      .item {
        width: 330px;
        height: 380px;
        margin-top: 30px;
        background: #ffffff;
        > div:nth-child(1) {
          width: 330px;
          height: 220px;
          > img {
            width: 330px;
            height: 220px;
          }
        }
        > div:nth-child(2) {
          > p:nth-child(1) {
            margin: 0 auto;
            font-size: 34px;
            font-family: AlibabaPuHuiTi;
            font-weight: 250;
            color: #333333;
            text-align: center;
            margin-top: 32px;
            width: 250px;
            height: 41px;
            @include line-hidden(1);
          }
          > p:nth-child(2) {
            margin: 0 auto;
            font-size: 24px;
            height: 33px;
            font-family: AlibabaPuHuiTi;
            font-weight: 250;
            color: #9eaac3;
            text-align: center;
            margin-top: 24px;
            width: 250px;
            @include line-hidden(1);
          }
        }
      }
    }
  }
}
</style>
