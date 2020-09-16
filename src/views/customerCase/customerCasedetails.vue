<template>
  <div class="customerCasedetails">
    <navigation :colour="true" :propD="true"></navigation>
    <div class="listsdas">
      <img :src="dataDetail.info.content" alt />
    </div>
    <div class="list">
      <div class="item" v-if="dataDetail.recommend[0]" @click="goRefresh(dataDetail.recommend[0].id)">
        <div>
          <van-image fit="cover" :src="dataDetail.recommend[0].img" alt />
        </div>
        <div>
          <p>{{dataDetail.recommend[0].title}}</p>
          <p>{{dataDetail.recommend[0].remark}}</p>
        </div>
      </div>
      <div class="item" v-if="dataDetail.recommend[1]" @click="goRefresh(dataDetail.recommend[0].id)">
        <div>
          <van-image fit="cover" :src="dataDetail.recommend[1].img" alt />
        </div>
        <div>
          <p>{{dataDetail.recommend[1].title}}</p>
          <p>{{dataDetail.recommend[1].remark}}</p>
        </div>
      </div>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageFooter from '../../components/page-footer/PageFooter'
import {getCaseDetail} from "../../utils/api";
export default {
  name: 'customerCasedetails',

  data () {
    return {
      id:0,
      dataDetail:{
        info:{
          content:''
        },
        recommend:[
          {
            title:'',
            remark:'',
            img:''
          },
          {
            title:'',
            remark:'',
            img:''
          }
        ]
      }
    }
  },
  //生命周期函数
  created () {
  },
  mounted() {
    this.id=this.$route.query.id
    this.fetchData()
  },
  //方法
  methods: {
    goRefresh(id){
      this.id=id
      this.fetchData()
      window.scrollTo(0,0)
    },
    async fetchData(){
      let res=await getCaseDetail({id:this.id})
      //console.log(res.data)
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
      margin-top: 30px;
      background: #ffffff;
      > div:nth-child(1) {
        width: 330px;
        > img {
          width: 330px;
          height: 220px;
        }
      }
      > div:nth-child(2) {
        > p:nth-child(1) {
          padding: 10px 0;
          margin: 0 auto;
          font-size: 28px;
          color: #333333;
          text-align: center;
          width: 250px;
          height: 41px;
          @include line-hidden(1);
        }
        > p:nth-child(2) {
          padding-bottom: 10px;
          margin: 0 auto;
          font-size: 22px;
          height: 33px;
          color: #9eaac3;
          text-align: center;
          width: 250px;
          @include line-hidden(1);
        }
      }
    }
  }
}
</style>
