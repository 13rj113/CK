<template>
  <div id="app">
    <!-- 头部导航 -->
    <header-tittle />
    <div class="main">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>政策解读</el-breadcrumb-item>
          <el-breadcrumb-item>政策详细页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="policy-page"></div>
      <div class="policy-origin">
        <P>政策来源：</P>
      </div>
      <div class="policy-download">
        <P>附件下载：</P>
      </div>

      <div class="sub-title">
        <el-row class="process">
          <i class="el-icon-document-copy"></i>
          申报流程
        </el-row>
      </div>
      <div class="flow-chart">
        <el-row class="flow-chart-row">
          <el-col :span="1" class="flow-chart-col-1"></el-col>
          <el-col :span="4" class="flow-chart-col-1">
            <el-card class="flow-chart-title" shadow="always">
              <p class="flow-chart-title-text">
                联系客服
                <br />了解详情
              </p>
            </el-card>
            <div class="flow-chart-arrow-y">
              <i class="el-icon-download"></i>
            </div>
            <el-card class="flow-chart-content" shadow="always">
              <p class="flow-chart-content-text">联系崇科客服，根据不同的领域需求和地域要求为客户匹配专业的政策顾问</p>
            </el-card>
          </el-col>
          <el-col :span="2" class="flow-chart-col-2">
            <div class="flow-chart-arrow-x">
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </el-col>
          <el-col :span="4" class="flow-chart-col-1">
            <el-card class="flow-chart-title" shadow="always">
              <p class="flow-chart-title-text">
                提交材料
                <br />精准匹配
              </p>
            </el-card>
            <div class="flow-chart-arrow-y">
              <i class="el-icon-download"></i>
            </div>
            <el-card class="flow-chart-content" shadow="always">
              <p class="flow-chart-content-text">提交企业详细材料后，政策顾问根据公司的实际情况进行分析从可行性和实施性进行精确匹配</p>
            </el-card>
          </el-col>

          <el-col :span="2" class="flow-chart-col-2">
            <div class="flow-chart-arrow-x">
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </el-col>
          <el-col :span="4" class="flow-chart-col-1">
            <el-card class="flow-chart-title" shadow="always">
              <p class="flow-chart-title-text">
                签订协议
                <br />代理申报
              </p>
            </el-card>
            <div class="flow-chart-arrow-y">
              <i class="el-icon-download"></i>
            </div>
            <el-card class="flow-chart-content" shadow="always">
              <p class="flow-chart-content-text">双方约定好合作后签订协议，崇科团队帮助企业整理申报文件，代理企业进行政策申报</p>
            </el-card>
          </el-col>
          <el-col :span="2" class="flow-chart-col-2">
            <div class="flow-chart-arrow-x">
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </el-col>
          <el-col :span="4" class="flow-chart-col-1">
            <el-card class="flow-chart-title" shadow="always">
              <p class="flow-chart-title-text">
                项目落地
                <br />实时监控
              </p>
            </el-card>
            <div class="flow-chart-arrow-y">
              <i class="el-icon-download"></i>
            </div>
            <el-card class="flow-chart-content" shadow="always">
              <p class="flow-chart-content-text">带项目落地后，崇科政策顾问为企业进行项目监控与政策实时更新，第一时间通知企业政策变动</p>
            </el-card>
          </el-col>
          <el-col :span="1" class="flow-chart-col-1"></el-col>
        </el-row>
      </div>
      <el-button class="declare" type="primary" round plain>我要申报</el-button>

      <el-divider></el-divider>
      <div class="similar-policy">
        <el-row class="similar-policy-row" :gutter="40">
          <el-col :span="2" class="similar-policy-col-1">
            <p>类似新闻：</p>
          </el-col>
          <el-col :span="8" class="similar-policy-col-2">
            <p>软件开发云和智能制造云服务企业备案</p>
            <p>2020年浙江省“专精特新”中小企业</p>
            <p>2020年杭州市高新材料行业发展扶持资金</p>
            <p>2020年杭州市制造业发展扶持资金</p>
            <p>2020年杭州市通讯设备行业发展扶持资金</p>
          </el-col>
          <el-col :span="14" class="similar-policy-col-3">
            <p>2019/03/20~2019/04/20</p>
            <p>2020/09/19~2020/12/15</p>
            <p>2020/12/15~2020/12/20</p>
            <p>2020/12/15~2020/12/20</p>
            <p>2020/12/15~2020/12/20</p>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 尾部导航 -->
    <end-of-page />
  </div>
</template>

<script>
import HeaderTittle from "@/components/HeaderTittle";
import EndOfPage from "@/components/EndOfPage";

export default {
  name: "policyDetail",
  components: { HeaderTittle, EndOfPage },
  data: function() {
    return {};
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
}
.main {
  height: 2500px;
  padding: 20px;
  .breadcrumb {
    margin-top: 10px;
    margin-bottom: 10px;
    .el-breadcrumb {
      font-size: 20px;
    }
  }
  .policy-page {
    height: 60%;
    border: 1px solid #ccc;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 50px;
  }
  .policy-origin {
    text-align: left;
    margin-left: 100px;
    color: #b03a2e;
    font-size: 20px;
    font-weight: bold;
    font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
  }
  .policy-download {
    text-align: left;
    margin-left: 100px;
    color: #2e86c1;
    font-size: 20px;

    font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
  }
  .sub-title {
    text-align: left;
    margin-top: 50px;
    margin-bottom: 10px;
    .process {
      font-size: 25px;
      color: #fbc02d;
    }
  }
  .flow-chart {
    height: 15%;
    margin-left: 60px;
    margin-right: 60px;
    margin-top: 50px;
    margin-bottom: 0px;
    .flow-chart-row {
      height: 100%;
      .flow-chart-col-1 {
        height: 100%;
        .flow-chart-title {
          height: 20%;
          width: 65%;
          text-align: center;
          margin: 0 auto;
          background-color: #ebf5fb;
          .el-card__body {
            padding: 0px;
            .flow-chart-title-text {
              margin-bottom: 0px;
              margin-top: 10px;
              font-weight: bold;
              font-size: 20px;
              font-family: "Arial", "Microsoft YaHei", "黑体", "宋体",
                sans-serif;
            }
          }
        }
        .flow-chart-arrow-y {
          height: 20%;
          width: 40%;
          //border: 1px solid #ccc;
          text-align: center;
          margin: 0 auto;
          .el-icon-download {
            font-size: 30px;
            margin-top: 22px;
            color: #abb2b9;
          }
        }
        .flow-chart-content {
          height: 41%;
          width: 100%;
          text-align: center;
          margin: 0 auto;
          background-color: #d6eaf8;
          .el-card__body {
            padding: 0px;
            .flow-chart-content-text {
              margin-left: 25px;
              margin-right: 25px;
              font-weight: bold;
              font-size: 18px;
              color: #3f51b5;
              text-align: left;
              font-family: "Arial", "Microsoft YaHei", "黑体", "宋体",
                sans-serif;
            }
          }
        }
      }
      .flow-chart-col-2 {
        height: 100%;
        .flow-chart-arrow-x {
          height: 20%;
          width: 100%;
          text-align: center;
          margin: 0 auto;
          .el-icon-d-arrow-right {
            margin-top: 20px;
            font-size: 30px;
            color: #abb2b9;
          }
        }
      }
    }
  }
  .declare {
    height: 50px;
    width: 200px;
    font-size: 20px;
    margin-bottom: 15px;
    // text-align: center;
    // margin: 0 auto;
    // margin-top: 20px;
  }
  .similar-policy {
    height: 8%;
    margin-left: 10px;
    .similar-policy-row {
      height: 100%;
      .similar-policy-col-1 {
        height: 100%;
        text-align: right;
        font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
      }
      .similar-policy-col-2 {
        height: 100%;
        text-align: left;
        font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
      }
      .similar-policy-col-3 {
        height: 100%;
        text-align: left;
        font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
      }
    }
  }
}
</style>