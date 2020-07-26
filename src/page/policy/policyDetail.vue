<template>
  <div id="policy-detail">
    <!-- 头部导航 -->
    <header-tittle />
    <div class="main">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/policy' }">政策解读</el-breadcrumb-item>
          <el-breadcrumb-item>政策详细页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-card shadow="always" style="margin-top:20px">
        <div class="policy-page">
          <div class="policy-page-title">杭州市经济技术开发区2019年科技计划项目</div>
          <el-row>
            <el-col :span="6" :offset="6" class="policy-page-time">2018-12-29 16:55</el-col>
            <el-col :span="6" class="policy-page-origin">发布机构：杭州市经信局</el-col>
          </el-row>
          <el-divider></el-divider>
          <div class="policy-page-title-sub-1">补助说明：</div>
          <p class="policy-page-text">（一）优先扶持发明专利中新技术、新产品、新工艺的研发、中试，给予30万元以内的扶持；</p>
          <p
            class="policy-page-text"
          >（二）申报科技产业化项目，企业应具备项目生产规模已达到年销售收入在1000万元以上且企业年创税收已达到100万元以上，预测项目完成时新增销售收入达到1000万元以上且新增区级税收50万元以上的可给予30万元扶持。在此基础上，预测区级税收每增加50万元，可再增加扶持30万元，累计扶持总额不超过200万元。项目完成时实际销售收入、税收未达到预测的，按比例扣减扶持资金。</p>

          <div class="policy-page-title-sub-2">科技奖励项目</div>
          <p
            class="policy-page-text"
          >（一）获国家科技表彰的单位奖励30万元；获省政府或国家科技部门、科协部门及国家级学会表彰的单位奖励20万元；获市政府或省科技、科协部门表彰的单位奖励10万元。</p>
          <p
            class="policy-page-text"
          >（二）当年获得国内、国外发明专利授权的企业（个人）分别给予奖励5000元、1万元；获厦门市专利奖的给予相应奖金1:1的配套奖励。</p>
          <p class="policy-page-text">（三）获区科技进步奖的表扬奖、三等奖、二等奖、一等奖分别奖励5万元、10万元、15万元、20万元。</p>
          <p class="policy-page-text">（四）当年首次获高新技术企业资格的企业，一次性奖励15万元。</p>
          <p class="policy-page-text">（五）经认定获得国家、省、市级重点实验室（工程）、研究中心和企业技术中心分别给予奖励80万元、50万元、30万元。</p>

          <div class="policy-page-title-sub-1">申报条件：</div>
          <p class="policy-page-title-sub-2">一、研发中试项目：</p>
          <p class="policy-page-text">1．具有发明专利中的新技术、新产品、新工艺的企业可申报中试项目。</p>
          <p class="policy-page-text">2．企业工商注册、税收归属地在湖里区，拥有较强的研发能力，健全的财务制度，良好的经营业绩，信誉良好。承担的科技项目都有结项。</p>
          <p class="policy-page-title-sub-2">二、产业化项目：</p>
          <p class="policy-page-text">1．企业工商注册、税收归属地在湖里区，拥有较强的研发能力，健全的财务制度，良好的经营业绩，信誉良好。承担的科技项目都有结项。</p>
          <p
            class="policy-page-text"
          >2．申报的科技项目已投产，其生产规模已达1000万元以上且企业的年税收已达100万元以上，申报的科技计划项目完成时预测新增销售收入1000万元以上且新增区级税收50万元以上的企业。重点扶持高新技术领域内且适合我区产业转型、升级、可持续发展的项目。</p>
          <p class="policy-page-title-sub-2">三、社会发展项目：</p>
          <p class="policy-page-text">辖区行政事业单位及区属基层单位经主管部门同意并签署意见后可申报社会发展项目。</p>
          <p class="policy-page-title-sub-2">四、科技奖励项目：</p>
          <p class="policy-page-text">1．获得2018年国家科技表彰的单位。</p>
          <p class="policy-page-text">2．获得2018年省政府或国家科技部门、科协部门及国家级学会表彰的单位。</p>
          <p class="policy-page-text">3．获得2018年市政府或省科技部门、科协部门的表彰的单位。</p>
          <p class="policy-page-text">4．获得2018年国内、国外发明专利授权的单位（个人）。</p>
          <p class="policy-page-text">5．获得2018年厦门市专利奖的企业。</p>
          <p class="policy-page-text">6．获得2018年国家、省、市级认定的重点实验室（工程）、研究中心和企业技术中心。</p>
        </div>
        <div class="policy-origin">
          <P>政策来源：《杭州市经济技术开发区科学技术资金管理办法》（杭州经发办〔2019〕68号）</P>
        </div>
        <div class="policy-download">
          <P>附件下载1：杭州市科技局关于申报经济技术开发区2019年科技计划项目的通知.doc</P>
          <p>附件下载2：申报表格.doc</p>
        </div>
      </el-card>

      <el-card shadow="always" style="margin-top:20px">
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
                <p class="flow-chart-content-text">待项目落地后，崇科政策顾问为企业进行项目监控与政策实时更新，第一时间通知企业政策变动</p>
              </el-card>
            </el-col>
            <el-col :span="1" class="flow-chart-col-1"></el-col>
          </el-row>
        </div>
        <el-button class="declare" type="primary" round plain>我要申报</el-button>
      </el-card>

      <el-card shadow="always" style="margin-top:20px">
        <div class="similar-policy">
          <el-row class="similar-policy-row" :gutter="40">
            <el-col :span="3" class="similar-policy-col-1">
              <p>类似新闻：</p>
            </el-col>
            <el-col :span="7" class="similar-policy-col-2">
              <p>软件开发云和智能制造云服务企业备案</p>
            </el-col>
            <el-col :span="14" class="similar-policy-col-3">
              <p>2020/12/15~2020/12/20</p>
            </el-col>
          </el-row>

          <el-row class="similar-policy-row" :gutter="40">
            <el-col :span="3" class="similar-policy-col-1">
              <p>&nbsp;</p>
            </el-col>
            <el-col :span="7" class="similar-policy-col-2">
              <p>2020年浙江省“专精特新”中小企业</p>
            </el-col>
            <el-col :span="14" class="similar-policy-col-3">
              <p>2020/09/19~2020/12/15</p>
            </el-col>
          </el-row>

          <el-row class="similar-policy-row" :gutter="40">
            <el-col :span="3" class="similar-policy-col-1">
              <p>&nbsp;</p>
            </el-col>
            <el-col :span="7" class="similar-policy-col-2">
              <p>2020年杭州市高新材料行业发展扶持资金</p>
            </el-col>
            <el-col :span="14" class="similar-policy-col-3">
              <p>2019/03/20~2019/04/20</p>
            </el-col>
          </el-row>

          <el-row class="similar-policy-row" :gutter="40">
            <el-col :span="3" class="similar-policy-col-1">
              <p>&nbsp;</p>
            </el-col>
            <el-col :span="7" class="similar-policy-col-2">
              <p>2020年杭州市制造业发展扶持资金</p>
            </el-col>
            <el-col :span="14" class="similar-policy-col-3">
              <p>2020/12/15~2020/12/20</p>
            </el-col>
          </el-row>
        </div>
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
  name: "policyDetail",
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
#policy-detail {
  position: relative;
}
.main {
  height: 2300px;
  //padding: 20px;
  .breadcrumb {
    margin-top: 15px;
    margin-bottom: 10px;
    .el-breadcrumb {
      font-size: 15px;
    }
  }
  .policy-page {
    height: 55%;
    border: 1px solid #ccc;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 50px;
    .policy-page-title {
      font-weight: bold;
      font-size: 30px;
      margin-top: 40px;
      margin-bottom: 30px;
    }
    .policy-page-time {
      text-align: left;
    }
    .policy-page-origin {
      text-align: right;
    }
    .policy-page-title-sub-1 {
      text-align: left;
      margin-left: 30px;
      font-weight: bold;
      font-size: 20px;
      color: brown;
    }
    .policy-page-title-sub-2 {
      text-align: left;
      margin-left: 30px;
      font-size: 15px;
    }
    .policy-page-text {
      text-align: left;
      margin-left: 30px;
      margin-right: 30px;
      font-size: 15px;
    }
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
    margin-top: 30px;
    margin-bottom: 10px;
    .process {
      font-size: 25px;
      color: #fbc02d;
      margin-top: 30px;
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
    margin-bottom: 5px;
    margin-top: 40px;
    // text-align: center;
    // margin: 0 auto;
    // margin-top: 20px;
  }
  .similar-policy {
    height: 160px;
    margin-left: 10px;
    .similar-policy-row {
      height: 30px;
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