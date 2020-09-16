<template>
    <div class="contact-page">
        <navigation :colour="false"></navigation>
        <div class="background">
            <div class="line1">联系我们</div>
            <div class="line2"></div>
        </div>
        <div class="map-box">
            <div class="center">
                <div class="blue"></div>
                <div class="map">
                    <baidu-map
                            :center="center"
                            :zoom="zoom"
                            @ready="handler"
                            class="bdmp"
                            @click="getClickInfo"
                            :scroll-wheel-zoom="true"
                    ></baidu-map>
                </div>
            </div>
        </div>
        <div class="form-box">
            <div class="right-title">项目需求</div>
            <div class="border"></div>
            <el-form
                    label-position="right"
                    label-width="0"
                    :model="formData"
                    :rules="rules"
                    ref="ruleForm"
            >
                <el-form-item prop="name">
                    <el-input v-model="formData.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item prop="phone">
                    <el-input v-model="formData.phone" placeholder="请输入电话"></el-input>
                </el-form-item>
                <el-form-item prop="description">
                    <el-input
                            type="textarea"
                            :rows="5"
                            v-model="formData.description"
                            placeholder="请输入简单需求（如网站建设、APP开发、软件开发、小程序开发等）"
                    ></el-input>
                </el-form-item>
            </el-form>
            <div class="button" @click="submitForm('ruleForm')">免费获取项目方案和报价</div>
        </div>
        <div class="contact-box">
            <div class="item">
                <div class="item-left">
                    <img src="../../assets/images/address.png" alt />
                </div>
                <div class="item-right">
                    <div class="line1">地址</div>
                    <div class="line2">郑州市郑东新区金水东路绿地新都会6号楼1522</div>
                </div>
            </div>
            <div class="item">
                <div class="item-left">
                    <img src="../../assets/images/email.png" alt />
                </div>
                <div class="item-right">
                    <div class="line1">邮箱</div>
                    <div class="line2">574807769@qq.com</div>
                </div>
            </div>
            <div class="item">
                <div class="item-left">
                    <img src="../../assets/images/tel.png" alt />
                </div>
                <div class="item-right">
                    <div class="line1">电话</div>
                    <div class="line2">15238699705</div>
                </div>
            </div>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>

<script>
    import PageFooter from "../../components/page-footer/PageFooter";
    import {contactUs} from "../../utils/api";
    import { Dialog } from 'vant';
    export default {
        name: "Contact",
        components:{
            PageFooter
        },
        data() {
            var validatePhone = (rule, value, callback) => {
                if (!(/^1[3456789]\d{9}$/.test(value))) {
                    callback(new Error('请输入正确的电话号码'));
                } else {
                    callback();
                }
            };
            return {
                center: {lng: 113.774507, lat: 34.776789},
                zoom: 16,
                formData: {
                    name: '',
                    phone: '',
                    description: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                    ],
                    phone: [
                        { required: true, message: '请输入电话', trigger: 'blur' },
                        { validator: validatePhone, trigger: 'blur' }
                    ],
                    description: [
                        { required: true, message: '请输入需求内容', trigger: 'blur' },
                    ],
                },
            }
        },
        methods: {
            submitForm (formName) {
                let that = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        contactUs({ name: this.formData.name, mobile: this.formData.phone, remark: this.formData.description }).then(res => {

                            if(res.code==1){
                                //console.log(res)
                                Dialog({
                                    message: '提交成功！',
                                    confirmButtonColor:'#FF7E00'
                                });
                            }else {
                                Dialog({
                                    message: '提交错误',
                                    confirmButtonColor:'#FF7E00'
                                });
                            }

                            //console.log(res)
                        })
                    } else {
                        //console.log('error submit!!');
                        return false;
                    }
                });
            },
            handler({BMap, map}) {
                var point = new BMap.Point(this.center.lng, this.center.lat)
                map.centerAndZoom(point, this.zoom)
                var marker = new BMap.Marker(point) // 创建标注
                map.addOverlay(marker) // 将标注添加到地图中

            },
            getClickInfo(e) {
                //console.log(e.point.lng)
                //console.log(e.point.lat)
                this.center.lng = e.point.lng
                this.center.lat = e.point.lat
            }
        },

    }
</script>

<style scoped lang="scss">
    .contact-page {
        .background {
            width: 750px;
            height: 610px;
            background: #101533;
            background-image: url("../../assets/images/contact.png");
            @include back-img-center;
            display: flex;
            flex-direction: column;

            .line1 {
                margin-top: 232px;
                margin-left: 58px;
                font-size: 54px;
                font-weight: 800;
                color: #FFFFFF;
            }

            .line2 {
                width: 106px;
                height: 8px;
                background: #FFFFFF;
                margin-top: 40px;
                margin-left: 58px;
            }
        }

        .map-box {
            width: 100%;
            padding: 30px;
            margin-bottom:60px ;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            position: relative;
            .center {
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                z-index: 1;
                width: 100%;
                position: relative;

                .blue {
                    width: 220px;
                    height: 512px;
                    /*background: #014CE5;*/
                }

                .map {
                    position: absolute;
                    width:100%;
                    height: 512px;
                    /*top: 50px;*/
                    /*padding-left: 77px;*/
                    box-sizing: border-box;
                    .bdmp{
                        width: 100%;
                        height: 512px;
                    }
                }
            }
        }

        .form-box {
            width: 100%;
            padding: 30px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            .right-title {
                font-size: 34px;
                font-weight: 500;
                color: #343434;
                width: 100%;
                text-align: center;
            }
            .border {
                margin: 0 auto;
                width: 65px;
                height: 6px;
                background: #024CE5;
                margin-top: 20px;
                margin-bottom: 61px;
            }
            ::v-deep .el-form{
                .el-form-item{
                    margin-bottom: 40px;
                    .el-input__inner{
                        height: 80px;
                        font-size: 25px;
                    }
                    textarea{
                        font-size: 25px;
                    }
                    .el-form-item__error{
                        font-size: 25px;
                    }
                }
            }
            .button {
                cursor: pointer;
                width: 100%;
                height: 80px;
                background: #FF7E00;
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                margin-top: 30px;
                text-align: center;
                font-size: 26px;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 305px;
            }
        }

        .contact-box{
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 30px;
            box-sizing: border-box;
            .item {
                min-height: 90px;
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 100%;
                margin-bottom: 50px;
                .item-left {
                    flex-shrink: 0;
                    width: 90px;
                    height: 90px;
                    background: #ffffff;
                    box-shadow: 1px 8px 30px 0px rgba(85, 113, 216, 0.15);
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 50%;
                        height: 50%;
                    }
                }
                .item-right {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    padding-left: 20px;
                    box-sizing: border-box;
                    .line1 {
                        font-size: 24px;
                        font-weight: 400;
                        color: #000034;
                    }
                    .line2 {
                        margin-top: 17px;
                        font-size: 20px;
                        font-weight: 400;
                        color: #9eaac4;
                    }
                }
            }
        }
    }
</style>