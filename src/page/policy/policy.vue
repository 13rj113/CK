<template>
  <div id="app">
    <!-- 头部导航 -->
    <header-tittle />
    <div class="header-image"></div>
    <div class="main">
      <!-- <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>政策解读</el-breadcrumb-item>
        </el-breadcrumb>
      </div>-->
      <div class="sub-title">
        <el-row class="show-policy">
          <i class="el-icon-document-copy"></i>
          政策一览
        </el-row>
      </div>
      <div class="policy">
        <el-row :gutter="20" class="policy-detail">
          <el-col :span="9" class="policy-image">
            <el-image style=" height: 100%;width:100%" src="/static/img/policy/net.png" fit="fill"></el-image>
          </el-col>
          <el-col :span="15" class="policy-content" style="overflow-y:scroll">
            <el-row
              style="height:90px;margin-bottom:20px"
              :gutter="20"
              v-for="policy in policy1"
              :key="policy.index"
            >
              <el-col :span="4" style="height:90px">
                <el-image style=" height: 100%" :src="policy.image" fit="fill"></el-image>
              </el-col>
              <el-col :span="20" style="height:90px">
                <div class="policy-search-title" style="font-weight:bold">{{policy.title}}</div>
                <div class="policy-search-content">{{policy.content}}</div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <el-button class="declare" type="danger" icon="el-icon-office-building" round plain>跳转到崇科政策网</el-button>
      <el-divider class="divider"></el-divider>

      <div class="sub-title">
        <el-row class="show-service">
          <i class="el-icon-cloudy"></i>
          服务模式
        </el-row>
      </div>
      <div class="service">
        <el-row class="service-content"></el-row>
        <el-row class="service-image"></el-row>
      </div>
      <el-divider class="divider"></el-divider>

      <div class="sub-title">
        <el-row class="show-science">
          <i class="el-icon-view"></i>
          科技行业区域政策
        </el-row>
      </div>
      <div class="science-policy">
        <el-row class="science-policy-area-1">
          <el-col :span="2" class="science-policy-title">地区：&nbsp;&nbsp;</el-col>
          <el-col :span="2" class="science-policy-content" v-for="area in area1" :key="area">
            <el-button plain>{{area}}</el-button>
          </el-col>
        </el-row>
        <el-row class="science-policy-area-2">
          <el-col :span="2" class="science-policy-title">&nbsp;</el-col>
          <el-col :span="2" class="science-policy-content" v-for="area in area2" :key="area">
            <el-button plain>{{area}}</el-button>
          </el-col>
        </el-row>
        <el-row class="science-policy-department">
          <el-col :span="2" class="science-policy-title">部门：&nbsp;&nbsp;</el-col>
          <el-col :span="2" class="science-policy-content" v-for="iteam in department" :key="iteam">
            <el-button plain>{{iteam}}</el-button>
          </el-col>
        </el-row>
        <el-row class="science-policy-effective" style="margin-bottom:0px">
          <el-col :span="2" class="science-policy-title">政策时效性：&nbsp;&nbsp;</el-col>
          <el-col :span="2" class="science-policy-content">
            <el-button plain>不限</el-button>
          </el-col>
          <el-col :span="2" class="science-policy-content">
            <el-button plain>未开始</el-button>
          </el-col>
          <el-col :span="2" class="science-policy-content">
            <el-button plain>申报中</el-button>
          </el-col>
          <el-col :span="2" class="science-policy-content">
            <el-button plain>已过期</el-button>
          </el-col>
        </el-row>
        <el-tabs type="border-card" class="science-policy-border"></el-tabs>

        <el-divider class="divider"></el-divider>

        <div class="sub-title">
          <el-row class="show-success">
            <i class="el-icon-magic-stick"></i>
            成功案例
          </el-row>
        </div>

        <div class="success">
          <el-row class="success-image" :gutter="50">
            <el-col :span="6" class="success-image-sub"></el-col>
            <el-col :span="6" class="success-image-sub"></el-col>
            <el-col :span="6" class="success-image-sub"></el-col>
            <el-col :span="6" class="success-image-sub"></el-col>
          </el-row>

          <el-row class="success-text" :gutter="50">
            <el-col :span="6" class="success-text-sub"></el-col>
            <el-col :span="6" class="success-text-sub"></el-col>
            <el-col :span="6" class="success-text-sub"></el-col>
            <el-col :span="6" class="success-text-sub"></el-col>
          </el-row>
        </div>
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
  name: "policy",
  components: { HeaderTittle, EndOfPage },
  data: function() {
    return {
      area1: [
        "北京",
        "上海",
        "广东",
        "浙江",
        "江苏",
        "四川",
        "天津",
        "河北",
        "安徽",
        "福建",
        "陕西"
      ],
      area2: ["河南", "山东", "辽宁", "湖北", "湖南", "山西", "黑龙江"],
      department: ["国务院", "科技局", "知识产权局", "组织部"],
      policy1: [
        {
          title:
            "工业和信息化部 财政部关于举办2020年“创客中国”中小企业创新创业大赛的通知",
          content:
            "为深入贯彻习近平总书记关于坚决打赢新冠肺炎疫情防控阻击战的重要指示精神，进一步激发创业创新活力，推动中小企业高质量发展，工业和信息化部、财政部将共同举办2020年“创客中国”...",
          image: "static/img/policy/policy-1.png"
        },
        {
          title: "国务院关于促进国家高新技术产业开发区高质量发展的若干意见",
          content:
            "国家高新技术产业开发区（以下简称国家高新区）经过30多年发展，已经成为我国实施创新驱动发展战略的重要载体，在转变发展方式、优化产业结构、增强国际竞争力等方面发挥了重要作用，走出...",
          image: "static/img/policy/policy-2.png"
        },
        {
          title: "闵行区关于推进科技创新创业和成果转化的政策意见的通知",
          content:
            "现将《闵行区关于推进科技创新创业和成果转化的政策意见》印发给你们，请认真遵照执行。特此通知 2019年3月1日 闵行区关于推进科技创新创业和成果转化的政策意见 为贯彻落实市委、市政府创新...",
          image: "static/img/policy/policy-3.png"
        },
        {
          title: "关于科技企业孵化器 大学科技园和众创空间税收政策的通知",
          content:
            "为进一步鼓励创业创新，现就科技企业孵化器、大学科技园、众创空间有关税收政策通知如下：一、自2019年1月1日至2021年12月31日，对其向孵化企业出租场地、房屋以及提供孵化服务的收入，免征...",
          image: "static/img/policy/policy-4.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
}
.header-image {
  height: 450px;
  width: 100%;
  margin-top: 0px;
  background-image: url(/static/img/banner-policy.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  background-position: center;
  .header-select {
    line-height: 500px;
    // background-color: #1c2833;
  }
  .header-select input.el-input__inner {
    height: 80%;
    border-radius: 15px;
    opacity: 0.65;
  }
  .header-select .el-input--suffix {
    width: 30%;
    .el-input__icon {
      color: black;
      width: 50px;
    }
  }
}
.main {
  height: 2500px;
  padding: 20px;
  .breadcrumb {
    margin-top: 5px;
    margin-bottom: 10px;
    .el-breadcrumb {
      font-size: 15px;
    }
  }
  .sub-title {
    text-align: left;
    margin-top: 20px;
    margin-bottom: 10px;
    .show-policy {
      font-size: 25px;
      color: black;
    }
    .show-service {
      font-size: 25px;
      color: black;
    }
    .show-science {
      font-size: 25px;
      color: black;
    }
    .show-success {
      font-size: 25px;
      color: black;
    }
  }
  .policy {
    height: 400px;
    margin-top: 20px;
    margin-bottom: 5px;
    .policy-detail {
      height: 100%;
      padding: 20px;
      .policy-image {
        height: 100%;
        padding: 10px;
        border: 1px solid #e5e7e9;
      }
      .policy-content {
        height: 100%;
        padding: 10px;
        border: 1px solid #e5e7e9;
      }
    }
  }
  .declare {
    height: 50px;
    width: 240px;
    font-size: 20px;
    margin-bottom: 15px;
  }
  .divider {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .service {
    height: 400px;
    margin-top: 20px;
    margin-bottom: 5px;
    .service-content {
      height: 50%;
      padding: 10px;
      border: 1px solid #e5e7e9;
    }
    .service-image {
      height: 50%;
      padding: 10px;
      border: 1px solid #e5e7e9;
    }
  }
  .science-policy {
    .science-policy-title {
      margin-top: 7px;
      text-align: right;
    }
    .science-policy-content {
      text-align: left;
    }
    .science-policy-area-1 {
      margin-top: 20px;
    }
    .science-policy-area-2 {
      margin-top: 20px;
    }
    .science-policy-department {
      margin-top: 20px;
    }
    .search-first {
      margin-top: 20px;
    }
    .science-policy-effective {
      margin-top: 20px;
    }
    .science-policy-border {
      height: 480px;
      overflow-y: scroll;
      margin: 20px;
    }
  }
  .success {
    margin: 20px;
    .success-image {
      height: 220px;
      border: 1px solid #e5e7e9;
      .success-image-sub {
        height: 100%;
        border: 1px solid #e5e7e9;
      }
    }
    .success-text {
      margin-top: 20px;
      height: 150px;
      border: 1px solid #e5e7e9;
      .success-text-sub {
        height: 100%;
        border: 1px solid #e5e7e9;
      }
    }
  }
}
</style>