<template>
  <div class="demand-detail">
    <!-- 头部导航 -->
    <header-tittle />
    <div class="main">
      <el-card shadow="always" style="margin-top:20px">
        <el-row class="demand" :gutter="50">
          <el-col class="demand-image" :span="8">
            <el-image
              style=" height: 100%;width:100%"
              src="/static/img/demand/image-1.png"
              fit="fill"
            ></el-image>
          </el-col>
          <el-col class="demand-text" :span="16">
            <el-row class="demand-text-title-row">质谱仪温控系统开发</el-row>
            <el-row :gutter="20" class="demand-text-row">
              <el-col :span="12">需求领域：电气设备/电气自动化设备/计量仪表</el-col>
              <el-col :span="6">所在地：不限</el-col>
              <el-col :span="6">期望研发费用： 10万</el-col>
            </el-row>
            <el-row :gutter="20" class="demand-text-row">
              <el-col :span="12">发布时间：2020-6-10</el-col>
              <el-col :span="12">期望解决时间：2020年12月之前</el-col>
            </el-row>
            <el-row :gutter="20" class="demand-text-row">
              <el-col :span="12">联系方式：通过崇科技术小帮手获取</el-col>
              <el-col :span="6">企业规模：中大型企业</el-col>
              <el-col :span="6">企业主营业务：质谱仪</el-col>
            </el-row>
            <el-button
              class="demand-button"
              type="primary"
              icon="el-icon-message"
              round
              plain
            >一键获取详细信息</el-button>
          </el-col>
        </el-row>
      </el-card>
      <el-card shadow="always" style="margin-top:20px">
        <div class="sub-title">
          <el-row class="show-demand">
            <i class="el-icon-view"></i>
            需求描述
          </el-row>
        </div>

        <div class="third-title">
          <el-row class="show-demand">企业需求背景</el-row>
        </div>
        <div class="enterprise-demand-background">
          <p>企业是一家集质谱仪研发、制造、生产、技术服务为一体的国家级火炬计划重点高新技术企业，工信部“专精特新”小巨人企业，年营业额3.5亿左右；过往温控模块采用的是市场上的通用产品，与仪器其他模块配合度不高，同时企业想在温控系统形成自己的知识产权，寻求专家可开发一款温控系统。</p>
        </div>

        <el-divider></el-divider>
        <div class="third-title">
          <el-row class="show-demand">需求详细描述</el-row>
        </div>
        <div class="demand-description">
          <p>1、对目标对象进行快速升降温控制，传感器采用K型热电偶，热电偶线径小于等于1nm；目标对象为石英柱（15m长，直径1/32in.，绕成直径约10cm的圆形），要求石英柱均匀加热。目标对象也包括与上述石英柱类似的对象，例如50~500g的不锈钢块。传感器采用热电偶；</p>
          <p>2、 满足温度范围：0-800℃可调；</p>
          <p>3、 升温速率：0．1-200℃/min可调，且在指定时间段内温度线性上升；</p>
          <p>4、 每秒10次以上测量采样数率，最小控制周期0.25秒；</p>
          <p>5、 测量精度±0.1℃；</p>
          <p>6、具备30段程序编排功能，且在每1程序段内保持线性升温。可设置任意大小的给定值升、降斜率；具有跳转、运行、暂停及停止等可编程/可操作命令，可在程序控制运行中修改程序；</p>
          <p>7、加热电压：直流14~40V；</p>
          <p>8、整机尺寸不大于100mm*100mm*120mm；</p>
          <p>9、工作温度0-60摄氏度；</p>
          <p>10、企业希望专家有温控系统开发的过往案例，重点在于升温速率的控制；</p>
        </div>

        <el-divider></el-divider>
        <div class="third-title">
          <el-row class="show-demand">对供应商的要求</el-row>
        </div>
        <div class="supplier-requirement">
          <p>全部供应商 接包地区：全国</p>
        </div>

        <el-button class="declare" type="info" icon="el-icon-message" round plain>点击崇科小助手获取联系方式</el-button>
      </el-card>
    </div>

    <customer-service></customer-service>

    <!-- 尾部导航 -->
    <end-of-page />
  </div>
</template>

<script>
import HeaderTittle from "@/components/HeaderTittle";
import EndOfPage from "@/components/EndOfPage";
import customerService from "@/components/customerService";

export default {
  name: "demandDetail",
  components: { HeaderTittle, EndOfPage, customerService },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}
.demand-detail {
  position: relative;
}
.main {
  height: 1500px;
  //padding: 20px;
  .sub-title {
    text-align: left;
    margin-top: 30px;
    margin-bottom: 20px;
    .show-demand {
      font-size: 25px;
      color: black;
    }
  }
  .third-title {
    text-align: left;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 30px;
    .show-demand {
      font-size: 20px;
      color: black;
    }
  }
  .enterprise-demand-background {
    margin-left: 40px;
    margin-right: 40px;
    height: 80px;
    //border: 2px solid #e5e7e9;
    text-align: left;
    text-indent: 2em;
    font-size: 17px;
  }
  .demand-description {
    margin-left: 40px;
    margin-right: 40px;
    height: 450px;
    //border: 2px solid #e5e7e9;
    text-align: left;
    text-indent: 2em;
    font-size: 17px;
  }
  .supplier-requirement {
    margin-left: 40px;
    margin-right: 40px;
    height: 50px;
    //border: 2px solid #e5e7e9;
    text-align: left;
    text-indent: 2em;
    font-size: 17px;
  }
  .declare {
    height: 50px;
    width: 350px;
    font-size: 20px;
    margin-bottom: 15px;
    margin-top: 5px;
  }
  .demand {
    //border: 2px solid #e5e7e9;
    .demand-image {
      height: 100%;
      //border: 2px solid #e5e7e9;
    }
    .demand-text {
      height: 100%;
      //border: 2px solid #e5e7e9;
      .demand-text-title-row {
        font-size: 25px;
        font-weight: bold;
        margin-top: 30px;
        margin-bottom: 30px;
      }
      .demand-text-row {
        font-size: 18px;
        margin-top: 20px;
        margin-bottom: 15px;
        text-align: left;
      }
      .demand-button {
        height: 50px;
        width: 300px;
        font-size: 20px;
        margin-bottom: 15px;
        margin-top: 15px;
      }
    }
  }
}
</style>