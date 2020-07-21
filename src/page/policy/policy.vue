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
      <el-card shadow="always" style="margin-top:20px">
        <div class="sub-title">
          <el-row class="show-policy">
            <i class="el-icon-document-copy"></i>
            政策一览
          </el-row>
        </div>
        <div class="policy">
          <el-row :gutter="20" class="policy-detail">
            <el-col :span="9" class="policy-image">
              <el-image
                style=" height: 100%;width:100%"
                src="/static/img/policy/net.png"
                fit="fill"
              ></el-image>
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
      </el-card>
      <el-divider class="divider"></el-divider>

      <el-card shadow="always" style="margin-top:20px">
        <div class="sub-title">
          <el-row class="show-service">
            <i class="el-icon-cloudy"></i>
            服务模式
          </el-row>
        </div>
        <div class="service-1">
          <el-row class="service-image">
            <el-col>
              <div class="intro-detail">
                <el-row style="height:60%">
                  <el-col :span="4" style="height:100%">
                    <div class="intro-detail-img">
                      <el-image style=" width: 70%" src="static/img/icon/AI.png" fit="fill"></el-image>
                      <div style="margin-top:15px">分析公司概况</div>
                    </div>
                  </el-col>
                  <el-col :span="4" style="height:100%">
                    <div class="intro-detail-img">
                      <el-image style=" width: 70%" src="static/img/icon/Internet.png" fit="fill"></el-image>
                      <div style="margin-top:15px">诊断公司需求</div>
                    </div>
                  </el-col>
                  <el-col :span="4" style="height:100%">
                    <div class="intro-detail-img">
                      <el-image
                        style=" width: 70%"
                        src="static/img/icon/Manufacture.png"
                        fit="fill"
                      ></el-image>
                      <div style="margin-top:15px">需求问题界定</div>
                    </div>
                  </el-col>
                  <el-col :span="4" style="height:100%">
                    <div class="intro-detail-img">
                      <el-image style=" width: 70%" src="static/img/icon/Material.png" fit="fill"></el-image>
                      <div style="margin-top:15px">解读方案搜寻</div>
                    </div>
                  </el-col>
                  <el-col :span="4" style="height:100%">
                    <div class="intro-detail-img">
                      <el-image style=" width: 70%" src="static/img/icon/Medical.png" fit="fill"></el-image>
                      <div style="margin-top:15px">未来阶段预测</div>
                    </div>
                  </el-col>
                  <el-col :span="4" style="height:100%">
                    <div class="intro-detail-img">
                      <el-image style=" width: 70%" src="static/img/icon/Car.png" fit="fill"></el-image>
                      <div style="margin-top:15px">最终结果评估</div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-card shadow="always" style="margin-top:20px">
        <div class="sub-title">
          <el-row class="show-service">
            <i class="el-icon-position"></i>
            我们的理念
          </el-row>
        </div>
        <div class="service-2">
          <el-row class="service-content">
            <p>崇科拥有专业的政策分析团队，每日搜寻最新的政策指示，形成了庞大的政策数据库，能更好的从企业的角度匹配到最佳的政策需求，对于一些新规和试行规定，我们的专业团队抱着谨慎的态度去分析实施的可行性，用最独到的眼光捕捉机会，解读政策，对企业给予最大限度的帮助。</p>
          </el-row>
        </div>
      </el-card>

      <el-card shadow="always" style="margin-top:20px">
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
            <el-col
              :span="2"
              class="science-policy-content"
              v-for="iteam in department"
              :key="iteam"
            >
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
          <el-tabs type="border-card" class="science-policy-border">
            <el-row
              style="height:100px;margin-bottom:20px"
              :gutter="20"
              v-for="policy in policy2"
              :key="policy.index"
            >
              <el-col :span="4" style="height:100px">
                <el-image style=" height: 100%" :src="policy.image" fit="fill"></el-image>
              </el-col>
              <el-col :span="20" style="height:100px">
                <div class="policy-search-title">{{policy.title}}</div>
                <div class="policy-search-content">{{policy.content}}</div>
              </el-col>
            </el-row>
          </el-tabs>
        </div>
      </el-card>
      <el-card shadow="always" style="margin-top:20px">
        <div class="sub-title">
          <el-row class="show-success">
            <i class="el-icon-magic-stick"></i>
            成功案例
          </el-row>
        </div>

        <div class="success">
          <el-row class="success-image" :gutter="50">
            <el-col :span="6" class="success-image-sub">
              <el-image style="width:100%;height:100%" src="static/img/policy/success-1.png"></el-image>
            </el-col>
            <el-col :span="6" class="success-image-sub">
              <el-image style="width:100%;height:100%" src="static/img/policy/success-2.png"></el-image>
            </el-col>

            <el-col :span="6" class="success-image-sub">
              <el-image style="width:100%;height:100%" src="static/img/policy/success-3.png"></el-image>
            </el-col>
            <el-col :span="6" class="success-image-sub">
              <el-image style="width:100%;height:100%" src="static/img/policy/success-4.png"></el-image>
            </el-col>
          </el-row>

          <el-row class="success-text" :gutter="50">
            <el-col :span="6" class="success-text-sub">
              <p>崇科成功帮助杭州XX新材料科技有限公司落地杭州市5G创新园，并申领导政府产业化配套资金扶持资金200万元。</p>
            </el-col>
            <el-col :span="6" class="success-text-sub">
              <p>崇科成功帮助脱膜剂技术对接落地湖州市德清千人计划产业园，给予创业创新领军人才项目产业化配套资金扶持，最高资助800万元，3-5年后退出。</p>
            </el-col>
            <el-col :span="6" class="success-text-sub">
              <p>崇科成功帮助上海XX新能源科技技术有限公司入驻上海新能源产业园区，创始人成功被认证为上海市嘉定区高层次B类人才。</p>
            </el-col>
            <el-col :span="6" class="success-text-sub">
              <p>崇科签约湖北省技术市场协会，助力国家中部技术转移，，积极发挥专业科技服务机构的主观能动作用，共同提升协会综合服务质量。</p>
            </el-col>
          </el-row>
        </div>
      </el-card>
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
      ],
      policy2: [
        {
          title: "2020年智能制造云和软件开发云上云补贴",
          content:
            "使用软件开发云的企业：对于上云费用在10万元及以下的部分按照60%予以补贴，10万元以上的部分按照40%给予补贴，每家企业每年最高20万；使用智能制造云的企业：对其上云费用的40%给予补贴，每家企业每年最高50万元。",
          image: "static/img/policy-1.jpg"
        },
        {
          title: "浙江省2020年度人工智能百项应用示范项目",
          content:
            "围绕经济社会发展重大需求，针对现实生产生活中的痛点难点，推动人工智能技术服务提供企业与行业应用单位开展“1+1”深度合作，提出有效的应用解决方案，打造形成人工智能应用示范项目。",
          image: "static/img/policy-2.jpg"
        },
        {
          title: "浙江省杭州市经济技术开发区2020年度高新技术企业认定",
          content:
            "（一）企业申请认定时须注册成立一年以上；（二）对企业主要产品（服务）发挥核心支持作用的技术属于《国家重点支持的高新技术领域目录》规定的范围；（三）在中国境内（不含港、澳、台地区）注册的企业，通过自主研发、受让、受赠、并购等方式，或通过5年以上的独占许可方式。",
          image: "static/img/policy-3.jpg"
        },
        {
          title: "2020年科学仪器设备资源共享优惠补贴",
          content:
            "根据《厦门市科学仪器设备资源共享管理办法》，现开展2019年科学仪器设备资源共享优惠补贴经费申报工作，单台（套）价值在30万元及以上的科学仪器设备，已经纳入厦门市科学仪器设备资源共享网，并对外提供共享服务。",
          image: "static/img/policy-4.jpg"
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
  height: 400px;
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
  height: 2700px;
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
    margin-top: 10px;
    margin-bottom: 15px;
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
        //border: 1px solid #e5e7e9;
      }
      .policy-content {
        height: 100%;
        padding: 10px;
        //border: 1px solid #e5e7e9;
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
  .service-1 {
    height: 150px;
    margin-top: 5px;
    margin-bottom: 5px;
    .service-image {
      height: 100%;
      // border: 1px solid #e5e7e9;
      padding-top: 30px;
      padding-left: 120px;
      padding-right: 120px;
    }
  }
  .service-2 {
    height: 100px;
    margin-top: 20px;
    margin-bottom: 5px;
    .service-content {
      text-indent: 2em;
      height: 100%;
      padding: 10px;
      //border: 1px solid #e5e7e9;
      text-align: left;
    }
  }
  .science-policy {
    margin-top: 50px;
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
      margin-top: 40px;
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 40px;
      .policy-search-title {
        float: left;
        margin-top: 5px;
        margin-bottom: 10px;
        text-align: left;
        font-weight: bold;
      }
      .policy-search-content {
        float: left;
        margin-top: 10px;
        margin-bottom: 5px;
        text-align: left;
      }
    }
  }
  .success {
    margin: 20px;
    .success-image {
      height: 220px;
      //border: 1px solid #e5e7e9;
      .success-image-sub {
        height: 100%;
        //border: 1px solid #e5e7e9;
      }
    }
    .success-text {
      margin-top: 20px;
      height: 150px;
      //border: 1px solid #e5e7e9;
      .success-text-sub {
        height: 100%;
        //border: 1px solid #e5e7e9;
        text-align: left;
        text-indent: 2em;
      }
    }
  }
  .intro-detail {
    height: 100%;
    .intro-detail-img {
      height: 55%;
      width: 55%;
      margin: 0 auto;
      position: relative;
      top: 15%;
      cursor: pointer;
    }
  }
}
</style>