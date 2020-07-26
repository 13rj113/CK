<template>
  <div class="head-hunting">
    <!-- 头部导航 -->
    <header-tittle />
    <div class="header-image"></div>
    <div class="main">
      <div class="sub-title">
        <el-row class="show-headhunting">
          <i class="el-icon-view"></i>
          什么是技术猎头
        </el-row>
      </div>
      <el-card shadow="always" style="margin-top:20px">
        <div class="headhunting-image-1">
          <el-row class="headhunting-first">
            <el-col class="headhunting-first-1" :span="8">
              <div class="headhunting-first-technology">
                <p class="headhunting-sub-title">利用互联网进行数据整合</p>
                <p class="headhunting-sub-content">崇科技术猎头服务从市场角度出发，旨在将“互联网+”应用到技术转移领域</p>
              </div>
            </el-col>
            <el-col class="headhunting-first-2" :span="8" :offset="8">
              <div class="headhunting-first-policy">
                <p class="headhunting-sub-title">全方位技术服务支持</p>
                <p class="headhunting-sub-content">对缺少专业技术支撑的公司提供资源整合、对接、评估、交易、落地等全流程的技术转移服务支撑</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="headhunting-second"></el-row>
          <el-row class="headhunting-third">
            <el-col class="headhunting-third-1" :span="8">
              <div class="headhunting-third-service">
                <p class="headhunting-sub-title">产业链中搭建良性桥梁</p>
                <p class="headhunting-sub-content">在技术市场中整合上下游产业链，并且诊断市场现状和企业自身的需求，为合作搭建桥梁</p>
              </div>
            </el-col>
            <el-col class="headhunting-third-2" :span="8" :offset="8">
              <div class="headhunting-third-science">
                <p class="headhunting-sub-title">依托庞大的资源备案</p>
                <p class="headhunting-sub-content">依托强大的后台数据和各地政府、高校的合作背景，和大量的中小型公司的合作基础</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-card shadow="always" style="margin-top:20px">
        <el-row class="process">
          <el-col class="process-text" :span="4">资源整合</el-col>
          <el-col class="process-text" :span="1">>></el-col>
          <el-col class="process-text" :span="4">
            <div>撮合对接</div>
          </el-col>
          <el-col class="process-text" :span="1">>></el-col>
          <el-col class="process-text" :span="4">
            <div>技术评估</div>
          </el-col>
          <el-col class="process-text" :span="1">>></el-col>
          <el-col class="process-text" :span="4">
            <div>技术交易</div>
          </el-col>
          <el-col class="process-text" :span="1">>></el-col>
          <el-col class="process-text" :span="4">
            <div>项目落地</div>
          </el-col>
        </el-row>
      </el-card>

      <div class="sub-title">
        <el-row class="show-headhunting">
          <i class="el-icon-data-line"></i>
          技术猎头的优势
        </el-row>
      </div>
      <el-card shadow="always">
        <div class="headhunting-image-2">
          <el-row class="headhunting-first">
            <el-col class="headhunting-first-1" :span="8">
              <div class="headhunting-first-technology">
                <p class="headhunting-sub-title">拥有庞大的资源备案</p>
                <p
                  class="headhunting-sub-content"
                >崇科依托强大的后台数据和各地政府、高校的合作背景，和大量的中小型公司的合作基础，可以在线上线下迅速高效的为企业寻找匹配的技术或开发公司，促成合作。</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="headhunting-second">
            <el-col class="headhunting-second-1" :span="8" :offset="16">
              <div class="headhunting-second-service">
                <p class="headhunting-sub-title">专业的行业经验和技术支撑</p>
                <p
                  class="headhunting-sub-content"
                >崇科专业的分析团队能敏锐的在产业上下游中发现合作机会，对缺少专业技术支撑的公司提供资源整合、对接、评估、交易、落地等全流程的技术转移服务支撑，在技术市场中为上下游企业搭建桥梁。</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="headhunting-third">
            <el-col class="headhunting-third-1" :span="8">
              <div class="headhunting-third-service">
                <p class="headhunting-sub-title">国内首家技术猎头公司</p>
                <p
                  class="headhunting-sub-content"
                >崇科是国内首家将猎头概念引入科创市场的公司，此概念得到了科技部和市场的认可，是目前科创市场不可或缺的一种资源整合方式，也是第一家将“互联网+”思维应用到技术领域的企业。</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <el-divider></el-divider>

      <div class="sub-title">
        <el-row class="show-headhunting">
          <i class="el-icon-magic-stick"></i>
          崇科技术猎头的社会价值
        </el-row>
      </div>
      <el-row class="social-value" :gutter="50">
        <el-col class="social-value-col" :span="6" style="background-color:#F2F3F4">
          <p class="social-value-title">推动技术发展</p>
          <p class="social-value-text">为中小型企业构建技术转移绿色通道，从市场出发寻求技术突破口，推动科技成果转化为现实生产力，实现技术发展。</p>
        </el-col>
        <el-col class="social-value-col" :span="6" style="background-color:#FAE5D3">
          <p class="social-value-title">促进产业链整合</p>
          <p class="social-value-text">为中大型企业在产业上下游搭建桥梁，争取做科创市场的捕猎人，帮助企业攻破技术壁垒，实现技术创新。</p>
        </el-col>
        <el-col class="social-value-col" :span="6" style="background-color:#F2F3F4">
          <p class="social-value-title">发展新产业</p>
          <p class="social-value-text">发展以技术交易为核心内容的科技服务业行业，广泛服务于全国各地技术市场和各类技术交易主体。</p>
        </el-col>
        <el-col class="social-value-col" :span="6" style="background-color:#FAE5D3">
          <p class="social-value-title">助力科技进步</p>
          <p class="social-value-text">优化科技资源配置，助力国家产业升级及结构调整，构建公平、公正、安全、规范的全国性技术交易中心平台。</p>
        </el-col>
      </el-row>
      <el-divider></el-divider>

      <div class="sub-title">
        <el-row class="show-headhunting">
          <i class="el-icon-tickets"></i>
          应用示意图
        </el-row>
      </div>
      <div class="application-text">
        <el-card shadow="always">
          <p
            class="application-content"
          >崇科技术猎头平台是一个开放性的技术发掘与交易的服务体系，既可作为技术交易通道直接服务于各类市场主体，又可作为整体服务方案应用于区域、院校的科技技术交流，构建专属的技术交易服务中心。</p>
        </el-card>
      </div>
      <div class="application-process">
        <el-card shadow="always">
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
                <p class="flow-chart-content-text">联系崇科客服，详细了解技术猎头的服务方向、服务流程以及过往的成功案例</p>
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
                  <br />提交材料
                </p>
              </el-card>
              <div class="flow-chart-arrow-y">
                <i class="el-icon-download"></i>
              </div>
              <el-card class="flow-chart-content" shadow="always">
                <p class="flow-chart-content-text">在确定享受崇科科技猎头服务后，双方签订合同达成协议，接着客户提供公司或者产品的详细信息与自身需求</p>
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
                  精准匹配
                  <br />促成合作
                </p>
              </el-card>
              <div class="flow-chart-arrow-y">
                <i class="el-icon-download"></i>
              </div>
              <el-card class="flow-chart-content" shadow="always">
                <p class="flow-chart-content-text">技术经纪人在崇科的海量技术库中精准匹配出产业上下游之后，联系客户，三方交流促成合作</p>
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
                <p
                  class="flow-chart-content-text"
                >待项目落地后，崇科后台会持续为企业进行项目监控与行业需求更新（此为可选项目，可以选择在达成合作协议后退出）</p>
              </el-card>
            </el-col>
            <el-col :span="1" class="flow-chart-col-1"></el-col>
          </el-row>
        </el-card>
      </div>

      <div class="sub-title">
        <el-row class="show-headhunting">
          <i class="el-icon-office-building"></i>
          成功案例
        </el-row>
      </div>
      <el-card shadow="always">
        <el-row class="success-img" :gutter="50">
          <el-col class="success-col" :span="6">
            <el-image
              style="width:100%;height:100%"
              src="static/img/technology/headhunting/success-1.png"
            ></el-image>
          </el-col>
          <el-col class="success-col" :span="6">
            <el-image
              style="width:100%;height:100%"
              src="static/img/technology/headhunting/success-2.png"
            ></el-image>
          </el-col>
          <el-col class="success-col" :span="6">
            <el-image
              style="width:100%;height:100%"
              src="static/img/technology/headhunting/success-3.png"
            ></el-image>
          </el-col>
          <el-col class="success-col" :span="6">
            <el-image
              style="width:100%;height:100%"
              src="static/img/technology/headhunting/success-4.png"
            ></el-image>
          </el-col>
        </el-row>
        <el-row class="success-text" :gutter="50">
          <el-col class="success-col" :span="6">
            <p>帮助“奥视景”软件解决了一体化拍摄、编辑与制作、展示等难点，使得产品信息传递更为全面、用户体验更加自然，快速的将物品数字化，进而通过互联网在另一地点创建一个虚拟的物品，并提供直观、灵活的交互方式。</p>
          </el-col>
          <el-col class="success-col" :span="6">
            <p>成功对接太阳能光伏汽车玻璃技术，包括有作为衬底的钢化玻璃基层，设在该钢化玻璃基层上的薄膜光伏电池层，以及在薄膜电池层上、其与钢化玻璃基层相接触的相反面覆盖有透明树脂材料层。</p>
          </el-col>
          <el-col class="success-col" :span="6">
            <p>帮助高性能分布式驱动电动汽车实现参数辨识功能、驱动防滑功能、制动防抱死功能、复合制动功能、差动助力转向功能、转矩矢量控制功能以及电子稳定性控制功能等提高车辆主动安全和高效节能的高性能控制功能。</p>
          </el-col>
          <el-col class="success-col" :span="6">
            <p>成功将种遥感图像的主动谱聚类方法，首先选取典型类别目标的遥感图像构建训练集；接着从训练集中分别提取目标图像的尺度不变特征转换(简称“SIFT”)特征；然后利用谱聚类算法生成视觉词典。</p>
          </el-col>
        </el-row>
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
  name: "headhunting",
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
.head-hunting {
  position: relative;
}
.header-image {
  height: 400px;
  width: 100%;
  margin-top: 0px;
  background-image: url(/static/img/banner-headhunting.png);
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
  //padding: 20px;
  .sub-title {
    text-align: left;
    margin-top: 30px;
    margin-bottom: 20px;
    .show-headhunting {
      font-size: 25px;
      color: black;
    }
  }
  .headhunting-image-1 {
    height: 15%;
    width: 100%;
    //border: 1px solid #e5e7e9;
    margin-top: 0px;
    background-image: url(/static/img/earth.png);
    background-repeat: no-repeat;
    background-size: 25% 120%;
    -moz-background-size: 100% 100%;
    background-position: center;
    .headhunting-sub-title {
      font-size: 20px;
      color: #3498db;
      font-weight: bold;
      margin-bottom: 0px;
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    }
    .headhunting-sub-content {
      font-size: 15px;
      margin-top: 10px;
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    }
    .headhunting-first {
      height: 40%;
      width: 100%;
      .headhunting-first-1 {
        height: 100%;
        .headhunting-first-technology {
          text-align: right;
          margin-top: 50px;
        }
      }
      .headhunting-first-2 {
        height: 100%;
        .headhunting-first-policy {
          text-align: left;
          margin-top: 50px;
        }
      }
    }
    .headhunting-second {
      height: 20%;
      width: 100%;
    }
    .headhunting-third {
      height: 40%;
      width: 100%;
      .headhunting-third-1 {
        height: 100%;
        .headhunting-third-service {
          text-align: right;
          margin-top: 0px;
        }
      }
      .headhunting-third-2 {
        height: 100%;
        .headhunting-third-science {
          text-align: left;
          margin-top: 0px;
        }
      }
    }
  }
  .process {
    margin-left: 150px;
    margin-right: 150px;
    height: 80px;
    //border: 2px solid #e5e7e9;
    .process-text {
      height: 100%;
      // border: 2px solid #e5e7e9;
      line-height: 70px;
      font-size: 20px;
      color: #3498db;
      font-weight: bold;
    }
  }
  .headhunting-image-2 {
    height: 15%;
    width: 100%;
    //border: 2px solid #e5e7e9;
    margin-top: 0px;
    background-image: url(/static/img/advantage.png);
    background-repeat: no-repeat;
    background-size: 25% 100%;
    -moz-background-size: 100% 100%;
    background-position: center;
    .headhunting-sub-title {
      font-size: 20px;
      font-weight: bold;
      color: #3498db;
      margin-bottom: 0px;
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    }
    .headhunting-sub-content {
      font-size: 15px;
      margin: 10px;
      text-indent: 2em;
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    }
    .headhunting-first {
      height: 30%;
      width: 100%;
      margin-left: 100px;
      .headhunting-first-1 {
        height: 100%;
        .headhunting-first-technology {
          text-align: center;
          margin-top: 50px;
        }
      }
    }
    .headhunting-second {
      height: 30%;
      width: 100%;
      .headhunting-second-1 {
        height: 100%;
        .headhunting-second-service {
          text-align: center;
          margin-top: 0px;
        }
      }
    }
    .headhunting-third {
      height: 40%;
      width: 100%;
      .headhunting-third-2 {
        height: 100%;
        .headhunting-third-service {
          text-align: right;
          margin-top: 0px;
        }
      }
      .headhunting-third-2 {
        height: 100%;
        .headhunting-third-science {
          text-align: left;
          margin-top: 0px;
        }
      }
    }
  }
  .social-value {
    height: 7.5%;
    width: 100%;
    padding-left: 50px;
    .social-value-col {
      height: 100%;
      //border: 2px solid #e5e7e9;
      .social-value-title {
        font-weight: bold;
        font-size: 20px;
      }
      .social-value-text {
        text-indent: 2em;
      }
    }
  }
  .application-text {
    height: 5%;
    width: 100%;
    //border: 2px solid #e5e7e9;
    .application-content {
      text-align: left;
      text-indent: 2em;

      font-size: 18px;
    }
  }
  .application-process {
    height: 17%;
    width: 100%;
    //border: 2px solid #e5e7e9;
    .flow-chart-row {
      margin-top: 10px;
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
              margin-top: 0px;
              font-weight: bold;
              font-size: 20px;
              font-family: "Arial", "Microsoft YaHei", "黑体", "宋体",
                sans-serif;
            }
          }
        }
        .flow-chart-arrow-y {
          height: 15%;
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
          height: 40%;
          width: 100%;
          text-align: center;
          margin: 0 auto;
          background-color: #d6eaf8;
          .el-card__body {
            padding: 0px;
            .flow-chart-content-text {
              margin-left: 10px;
              margin-right: 10px;
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
  .success-img {
    height: 8%;
    width: 100%;
    padding-left: 50px;
    .success-col {
      height: 200px;
      // border: 2px solid #e5e7e9;
    }
  }
  .success-text {
    height: 8%;
    width: 100%;
    padding-left: 50px;
    .success-col {
      height: 100%;
      // border: 2px solid #e5e7e9;
      text-align: left;
      text-indent: 2em;
    }
  }
}
</style>