<template>
  <div>
    <div v-if="propD" class="placeholder"></div>
    <div class="navigation" :class="coloura?'navigationasd':''">
      <div class="head" :class="unfold?'headasdad':''">
        <img :src="coloura?logo1:unfold?logo1:logo0" alt />
        <img @click="expandAndClose" :src="coloura?unfold?menu2:menu1:unfold?menu2:menu4" alt />
        <!-- menu1//黑三行
        menu2//黑差
        menu4//白三行-->
      </div>
      <transition name="fade">
        <div v-if="unfold" class="list">
          <div class="home van">首页</div>
          <div class="business">
            <van-collapse
              v-for="(item, index) in navig"
              :key="index"
              v-model="activeNames"
              :border="true"
              accordion
              @change="change"
            >
              <van-collapse-item
                :title-class="titds==item.id?'researchP':'titdsdaldsdae'"
                :title="item.title"
                :name="item.id"
                :border="false"
              >
                <van-collapse v-model="activeName" :border="false" accordion @change="changegg">
                  <van-collapse-item
                    :title-class="titdsid==itema.id?'researchP':'titdsdaldsdae'"
                    v-for="(itema, indexa) in item.subclass"
                    :key="indexa"
                    :title="itema.title"
                    :name="itema.id"
                    :border="false"
                  >
                    <div :class="'arrangement'+itema.row">
                      <p v-for="(items, indexs) in itema.subclass" :key="indexs">{{items.text}}</p>
                    </div>
                  </van-collapse-item>
                </van-collapse>
              </van-collapse-item>
            </van-collapse>
          </div>
          <div class="business">
            <van-collapse v-model="activeNames" accordion @change="change">
              <van-collapse-item
                v-for="(item, index) in navig1"
                :key="index"
                :title="item.title"
                :name="item.id"
                :border="false"
                :title-class="titds==item.id?'researchP':'titdsdaldsdae'"
              >
                <div :class="'arrangement'+item.row">
                  <p v-for="(items, indexs) in item.subclass" :key="indexs">{{items.title}}</p>
                </div>
              </van-collapse-item>
            </van-collapse>
          </div>
          <div class="business">
            <van-collapse v-model="activeNames" accordion @change="change">
              <van-collapse-item
                v-for="(item, index) in navig2"
                :key="index"
                :title="item.title"
                :name="item.id"
                :border="false"
                :title-class="titds==item.id?'researchP':'titdsdaldsdae'"
              >
                <div :class="'arrangement'+item.row">
                  <p v-for="(items, indexs) in item.subclass" :key="indexs">{{items.title}}</p>
                </div>
              </van-collapse-item>
            </van-collapse>
          </div>
          <div class="home dsad van">关于我们</div>
          <div class="home van">联系我们</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    colour: Boolean,
    propD: {
      type: Boolean,
      default: false   //默认值
    },
  },
  data () {

    return {
      menu1: require('../../assets/images/menu-btnhei.png'),//黑三行
      menu2: require('../../assets/images/menu-btn1.png'), //黑差
      menu4: require('../../assets/images/menu-btn0.png'),//白三行
      logo1: require('../../assets/images/logo1.png'),
      logo0: require('../../assets/images/logo0.png'),
      unfold: false,
      activeNames: 0,
      activeName: 0,
      titds: 0,
      titdsid: 0,
      navig: [
        {
          title: "业务领域",
          id: 1,
          subclass: [
            {
              title: 'APP开发',
              row: 3,
              id: 2,
              subclass: [
                {
                  text: '社交'
                },
                {
                  text: '直播'
                },
                {
                  text: '团购'
                },
                {
                  text: '交友'
                },
                {
                  text: '教育'
                },
                {
                  text: '医疗'
                },
                {
                  text: '跑腿'
                },
                {
                  text: '外卖'
                },
              ]
            },
            {
              title: "小程序开发",
              row: 2,
              id: 3,
              subclass: [
                {
                  text: '展示小程序'
                },
                {
                  text: '平台直播'
                },
                {
                  text: '商城小程序'
                },
                {
                  text: '相亲交友'
                },
                {
                  text: '社区团购'
                },
                {
                  text: '其他'
                },
              ]
            },
            {
              title: "网站建设",
              row: 2,
              id: 4,
              subclass: [
                {
                  text: '企业官网'
                },
                {
                  text: '行业门户'
                },
                {
                  text: '社区论坛'
                },
                {
                  text: '电商网站'
                }
              ]
            },
            {
              title: "系统集成",
              row: 1,
              id: 5,
              subclass: [
                {
                  text: 'ERP企业管理系统'
                },
                {
                  text: 'CRM客户管理系统'
                },
                {
                  text: '报表管理系统'
                },
                {
                  text: '日程管理系统'
                },
                {
                  text: '项目管理系统'
                }
              ]
            },
            {
              title: "政务云",
              row: 1,
              id: 6,
              subclass: [
                {
                  text: '政府OA办公系统'
                },
                {
                  text: '档案管理系统'
                },
                {
                  text: '人事管理系统'
                },
                {
                  text: '采购管理系统'
                },
                {
                  text: '流程管理系统'
                },
                {
                  text: '会议管理系统'
                },
              ]
            },
            {
              title: "物联网",
              row: 2,
              id: 7,
              subclass: [
                {
                  text: '人工智能'
                },
                {
                  text: '人脸识别'
                },
                {
                  text: '硬件设备'
                },
                {
                  text: '语音系统'
                }
              ]
            },
          ]
        },

      ],
      navig1: [
        {
          title: "客户案例",
          row: 3,
          id: 8,
          subclass: [
            {
              title: 'APP开发',
            },
            {
              title: '系统集成',
            },
            {
              title: '小程序开发',
            },
            {
              title: '政务云',
            },
            {
              title: '网站建设',
            },
            {
              title: '物联网',
            },
          ]
        },
      ],
      navig2: [
        {
          title: "新闻中心",
          row: 2,
          id: 9,
          subclass: [
            {
              title: '公司新闻',
            },
            {
              title: '项目签约',
            },
            {
              title: '行业动态',
            },
            {
              title: '技术专栏',
            },
          ]
        }
      ],
      coloura: false
    }
  },
  //生命周期函数
  created () {
    this.coloura = this.colour
    console.log(this.colour)
  },
  //方法
  methods: {
    expandAndClose () {
      console.log("00000000")
      this.unfold = !this.unfold
    },
    change (e) {
      this.titds = e
    },
    changegg (e) {
      this.titdsid = e
    },
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
      this.coloura = scrollTop > 0 ? true : false;  // 如果滚动到顶部了，this.isFixed就为true

      //   window.onscroll = function () {
      //     var sl = -Math.max(document.body.scrollLeft, document.documentElement.scrollLeft);
      //     document.getElementById('fixed').style.left = sl + 'px';
      //   }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  //组件
  components: {
  }
}
</script>

<style lang='scss' scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.navigationasd {
  background-color: #fff;
  transition: all 0.5s;
}
.navigation {
  position: fixed;
  left: 0;
  top: 0;
  width: 750px;
  height: 128px;
  z-index: 9999999999;
  .headasdad {
    background-color: #fff;
    transition: all 0.5s;
  }
  .head {
    width: 750px;
    height: 128px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 26px;
    box-sizing: border-box;
    > img:nth-child(1) {
      width: 254px;
      height: 84px;
    }
    > img:nth-child(2) {
      width: 40px;
      height: 33px;
    }
  }

  .list {
    background-color: #fff;

    .home {
      width: 100%;

      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
    }
    .home.dsad {
      border-bottom: 0 solid #f9f9fa;
      border-width: 1px 0;
    }
    .van {
      padding: 0 16px;
      height: 44px;
      line-height: 44px;
      box-sizing: border-box;
    }
    .arrangement3 {
      margin: 0 auto;
      display: flex;
      //   justify-content: space-between;
      flex-wrap: wrap;
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
      line-height: 32px;
      text-align: center;
      > p {
        width: 200px;
        margin-bottom: 80px;
        margin-left: 10px;
      }
    }
    .arrangement2 {
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
      line-height: 32px;
      text-align: left;
      margin-left: 50px;
      > p {
        width: 250px;
        margin-bottom: 80px;
        margin-left: 10px;
      }
    }
    .arrangement1 {
      margin: 20px auto;
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
      line-height: 32px;
      text-align: left;
      margin-left: 50px;
      > p {
        width: 250px;
        margin-bottom: 80px;
        margin-left: 10px;
      }
    }
    .titdsdaldsdae {
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
    }
  }
}
.placeholder {
  height: 128px;
  width: 750px;
  background-color: rgba(148, 99, 99, 0);
}
::v-deep .titdsdaldsdae {
  font-size: 30px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
}
::v-deep .researchP {
  font-size: 30px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #004ce5;
}
::v-deep .van-collapse-item__title--expanded .van-cell__right-icon::before {
  color: #004ce5;
}
</style>
