<template>
  <div class="footer-page">
    <div class="line-group">
      <div class="line">QQ邮箱：{{Footer.qq}}</div>
      <div class="line">联系电话：{{Footer.tel}}</div>
    </div>
    <div class="line-group">
      <div class="line">总部：{{companys[0].name||''}}</div>
      <div class="line">地址：{{companys[0].place||''}}</div>
    </div>
    <div class="line-group">
      <div class="line">总部：{{companys[1].name||''}}</div>
      <div class="line">地址：{{companys[1].place||''}}</div>
    </div>
    <div class="line-group">
      <div class="line">总部：{{companys[2].name||''}}</div>
      <div class="line">地址：{{companys[2].place||''}}</div>
    </div>
    <div class="line-group">
      <div class="line">版权所有 2020河南正尚网络科技有限公司</div>
      <div class="line">豫ICP备20012527号1</div>
    </div>
  </div>
</template>

<script>
import { bottomInfoapi } from '../../utils/api'
export default {
  name: "PageFooter",
  data () {
    return {
      Footer: {},
      companys: [
        {
          name: '',
          place: ''
        },
        {
          name: '',
          place: ''
        },
        {
          name: '',
          place: ''
        },
      ]
    }
  },
  //生命周期函数
  created () {
    this.retrieveData()
  },
  //方法
  methods: {
    async retrieveData () {
      let { data } = await bottomInfoapi()
      this.Footer = data
      this.companys = data.companys
      //console.log(data)
    }
  },
}
</script>

<style scoped lang="scss">
.footer-page {
  width: 750px;
  height: 695px;
  background: #131726;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0;
  box-sizing: border-box;
  justify-content: space-around;
  .line-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .line {
      font-size: 24px;
      font-weight: 400;
      color: #5d647e;
      line-height: 48px;
    }
  }
}
</style>
