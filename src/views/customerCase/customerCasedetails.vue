<template>
  <div class="customerCasedetails">
    <navigation :colour="true" :propD="true"></navigation>
    <div class="listsdas">
      <img src="../../assets/images/customerCase/backgro.png" alt />
    </div>
    <div class="list">
      <div class="item">
        <div>
          <img src="../../assets/images/customerCase/backgro.png" alt />
        </div>
        <div>
          <p>线上健身</p>
          <p>全渠道电商解决方案</p>
        </div>
      </div>
      <div class="item">
        <div>
          <img src="../../assets/images/customerCase/backgro.png" alt />
        </div>
        <div>
          <p>线上健身</p>
          <p>全渠道电商解决方案</p>
        </div>
      </div>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageFooter from '../../components/page-footer/PageFooter'
export default {
  name: 'customerCasedetails',

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
.customerCasedetails {
  .listsdas {
    width: 100%;
    > img {
      width: 100%;
    }
  }
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
</style>
