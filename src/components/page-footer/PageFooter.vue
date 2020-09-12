<template>
    <div class="footer-page">
        <div class="line-group">
            <div class="line">
                QQ邮箱：574807769@qq.com
            </div>
            <div class="line">
                联系电话：15238699705
            </div>
        </div>
        <div class="line-group">
            <div class="line">
                总部：正尚科技
            </div>
            <div class="line">
                地址：郑州市郑东新区金水东路绿地新都会6号楼1522
            </div>
        </div>
        <div class="line-group">
            <div class="line">
                分部：弘廷科技
            </div>
            <div class="line">
                地址：郑州市管城区航海东路2号55号楼22层307号
            </div>
        </div>
        <div class="line-group">
            <div class="line">
                分部：智亘科技
            </div>
            <div class="line">
                地址：郑州市郑东新区金水东路绿地新都会6号楼1521
            </div>
        </div>
        <div class="line-group">
            <div class="line">
                版权所有 2020河南正尚网络科技有限公司
            </div>
            <div class="line">
                豫ICP备20012527号1
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageFooter"
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
        .line-group{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .line {
                font-size: 24px;
                font-weight: 400;
                color: #5D647E;
                line-height: 48px;
            }
        }

    }

</style>