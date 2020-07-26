<template>
  <div class="technology-detail">
    <!-- 头部导航 -->
    <header-tittle />
    <div class="main">
      <el-card shadow="always" style="margin-top:20px">
        <el-row class="technology" :gutter="50">
          <el-col class="technology-image" :span="8">
            <el-image
              style="height: 90%;width:90%;margin-top:30px;"
              src="static/img/technology/technologyDetail/image-1.png"
              fit="fill"
            ></el-image>
          </el-col>
          <el-col class="technology-text" :span="16">
            <el-row class="technology-text-title-row">磁力研磨抛光、清洗及表面改性技术与设备</el-row>
            <el-row :gutter="20" class="technology-text-row">
              <el-col :span="12">技术领域：高新技术新材料/表面研磨/加工制造</el-col>
              <el-col :span="6">所在地：杭州</el-col>
              <el-col :span="6">研发经费：10万元</el-col>
            </el-row>
            <el-row :gutter="20" class="technology-text-row">
              <el-col :span="12">发布时间：2020-6-10</el-col>
              <el-col :span="12">技术阶段： 可批量生产</el-col>
            </el-row>
            <el-row :gutter="20" class="technology-text-row">
              <el-col :span="12">联系方式：通过崇科技术小帮手获取</el-col>
              <el-col :span="6">企业规模：中大型企业</el-col>
              <el-col :span="6">企业主营业务：表面改性</el-col>
            </el-row>
            <el-button
              class="technology-button"
              type="primary"
              icon="el-icon-message"
              round
              plain
            >一键获取详细信息</el-button>
          </el-col>
        </el-row>
      </el-card>
      <el-card shadow="always" style="margin-top:20px;margin-bottom:20px">
        <div class="sub-title">
          <el-row class="show-technology">
            <el-col :span="3">
              <a href="#technology">技术介绍</a>
            </el-col>
            <el-col :span="3">
              <a href="#application">应用情况</a>
            </el-col>
            <el-col :span="3">
              <a href="#market">市场前景</a>
            </el-col>
          </el-row>
        </div>
        <div class="technology-1">
          <el-row class="main-row-1" :gutter="50">
            <el-col :span="8" class="col-image">
              <el-row class="sub-row-image-1">
                <el-image
                  style=" height: 90%;width:90%;margin-top:30px;"
                  src="static/img/technology/technologyDetail/image-2.png"
                  fit="fill"
                ></el-image>
              </el-row>
              <el-row class="sub-row-image-2">
                <el-image
                  style=" height: 90%;width:90%;margin-top:55px"
                  src="static/img/technology/technologyDetail/image-3.png"
                  fit="fill"
                ></el-image>
              </el-row>
            </el-col>
            <el-col :span="16" class="col-text">
              <el-row class="sub-row-text-1">
                <div class="sub-title">
                  <div class="show-technology" id="technology">需求描述</div>
                </div>
                <p
                  class="text"
                >磁力研磨抛光（MAP）技术取代了传统的劳动密集型、高能耗的化学机械方法，在技术性能、经济性和环境指标上都超过了传统的机械方法。该方法是在磁场影响下，铁磨料粉末工具形成一个原始的“弹性”刷子，然后启动并抛光产品表面。</p>
                <p class="text">加工材料： 光学玻璃、单晶、陶瓷、金属和合金等多种材料。</p>
              </el-row>

              <el-divider style="margin-top:5px;margin-bottom:5px"></el-divider>

              <el-row class="sub-row-text-2">
                <div class="sub-title">
                  <div class="show-technology">技术目的</div>
                </div>
                <p class="text">•产品表面Ra&lt;1nm；抛光</p>
                <p class="text">•涂层前；表面处理</p>
                <p class="text">•焊接前的产品；边缘剥离</p>
                <p class="text">•增加耐腐蚀、磨损和机械损伤的能力；表面改性</p>
              </el-row>
              <el-divider></el-divider>
              <el-row class="sub-row-text-3">
                <div class="sub-title">
                  <div class="show-technology" id="application">产品应用场景</div>
                </div>
                <p class="text">•光学和激光器件有源元件高精度表面的超薄抛光；</p>
                <p class="text">•抛光各行业机械零件和设备的接触面和重载表面；</p>
                <p class="text">•涂装前零件表面抛光；</p>
                <p class="text">•在飞机和造船、核仪器工程和其他技术领域焊接前，剥离零件边缘。</p>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <el-divider></el-divider>
        <div class="technology-2">
          <div class="sub-title">
            <div class="show-technology">技术目的</div>
          </div>
          <div class="advantage">
            <p class="text">•与传统抛光技术相比，当前抛光成本降低1.5-3倍；</p>
            <p class="text">•MAP加工设备回收期为1.5-2年，生产环境友好；</p>
            <p class="text">•MAP中使用的含铁量约为80%的铁磨料复合粉末很容易作为金属废物处理；</p>
            <p class="text">•MAP工艺液体由水（99%）和无毒表面活性剂（1%）组成，改善员工工作条件；</p>
            <p class="text">•MAP设备操作方便，软件控制或自动化；</p>
            <p class="text">•普通员工培训后技能操作。</p>
            <p class="text">（2）实现加工高质量化</p>
            <p class="text">当在磁场影响下使用MAP时，表面层结构得到改善，实现表面纳米级加工。在MAP过程中，处理区温度不超过80ᴼC，并且不会在结构中形成不良的热缺陷。</p>
          </div>
          <el-divider></el-divider>
          <div class="sub-title">
            <div class="show-technology" id="market">市场前景</div>
          </div>
          <div class="market">
            <p class="text">超精密抛光技术在现代电子工业中所要完成的使命，不仅仅是平坦化不同的材料，而且要平坦化多层材料，没有超精密抛光不行，它是技术灵魂。</p>
            <p
              class="text"
            >如今的光电子信息产业水平，对作为光电子基片材料的蓝宝石、单晶硅等材料的平行度要求越来越精密，已经达到了纳米级。这就意味着，抛光工艺也已随之进入纳米级的超精密程度。超精密抛光工艺在现代制造业中有多重要，其应用的领域能够直接说明问题：医疗器械、汽车配件、数码配件、精密模具、航空航天。但顶级的抛光工艺只有美日等少数国家掌握，目前，美国日本等国际顶级的抛光工艺已经可以满足60英寸基片原材料的精密抛光要求（属超大尺寸），他们据此掌控着超精密抛光工艺的核心技术，牢牢把握了全球市场的主动权。而事实上，把握住这项技术，也就在很大程度上掌控了电子制造业的发展。</p>
            <p
              class="text"
            >日本产抛光机的研磨盘均为定制，不进行批量生产，直接限制了他国仿制；美国的抛光设备销往中国，价格一般都在1000万元以上，而且销售订单已经排至2019年年底，此前不接受任何订单。</p>
          </div>
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
  name: "technologyDetail",
  components: { HeaderTittle, EndOfPage, customerService },
  data: function () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}
.technology-detail {
  position: relative;
}
.main {
  //height: 1000px;
  //padding: 20px;
  .sub-title {
    text-align: left;
    margin-top: 0px;
    margin-bottom: 10px;
    .show-technology {
      font-size: 25px;
      color: black;
      .sub-title-button {
        font-size: 18px;
      }
    }
  }
  .technology {
    //border: 2px solid #e5e7e9;
    .technology-image {
      height: 100%;
      //border: 2px solid #e5e7e9;
    }
    .technology-text {
      height: 100%;
      //border: 2px solid #e5e7e9;
      .technology-text-title-row {
        font-size: 25px;
        font-weight: bold;
        margin-top: 30px;
        margin-bottom: 30px;
      }
      .technology-text-row {
        font-size: 18px;
        margin-top: 20px;
        margin-bottom: 15px;
        text-align: left;
      }
      .technology-button {
        height: 50px;
        width: 300px;
        font-size: 20px;
        margin-bottom: 15px;
        margin-top: 15px;
      }
    }
  }

  .technology-1 {
    height: 650px;
    //border: 2px solid #e5e7e9;
    .main-row-1 {
      height: 600px;
      //border: 2px solid #e5e7e9;
      .col-image {
        height: 100%;
        //border: 2px solid #e5e7e9;
        .sub-row-image-1 {
          height: 50%;
          //border: 2px solid #e5e7e9;
        }
        .sub-row-image-2 {
          height: 50%;
          //border: 2px solid #e5e7e9;
        }
      }
      .col-text {
        height: 100%;
        //border: 2px solid #e5e7e9;
        .text {
          text-align: left;
          text-indent: 2em;
        }
        .sub-row-text-1 {
          margin-top: 20px;
          height: 25%;
          //border: 2px solid #e5e7e9;
        }
        .sub-row-text-2 {
          height: 30%;
          //border: 2px solid #e5e7e9;
        }
        .sub-row-text-3 {
          height: 33%;
          //border: 2px solid #e5e7e9;
        }
      }
    }
  }
  .technology-2 {
    .text {
      text-align: left;
      text-indent: 2em;
    }
    .advantage {
      height: 300px;
      //border: 2px solid #e5e7e9;
    }
    .market {
      height: 230px;
      //border: 2px solid #e5e7e9;
    }
  }
}
</style>