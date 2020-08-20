<template>
  <div id="platform">
    <header-tittle />
    <div class="head-image">
      <h1>科学技术成果展示平台</h1>
      <div class="head-search">
        <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
      </div>
      <div>热门搜索：石墨烯 芯片 机械手</div>
    </div>

    <el-divider></el-divider>

    <div class="filter-container">
      <div class="filter-type">
        <el-button plain>已关注</el-button>
        <el-button plain>热点推荐</el-button>
        <el-button plain>最新发布</el-button>
      </div>
      <el-divider></el-divider>
      <div class="filter-domain">
        <div class="filter-label">按照领域：</div>
        <div>
          <el-tag
            class="domain-tag"
            :effect="tag.effect"
            v-for="tag in domainTag"
            :key="tag.index"
            @click="changeTag(tag)"
          >{{tag.name}}</el-tag>
        </div>
      </div>

      <div class="filter-area">
        <div class="filter-label">按照地区：</div>
        <div>
          <el-tag
            class="area-tag"
            :effect="tag.effect"
            type="warning"
            v-for="tag in areaTag"
            :key="tag.index"
            @click="changeTag(tag)"
          >{{tag.name}}</el-tag>
        </div>
      </div>
    </div>

    <el-divider class="my-divider"></el-divider>

    <div class="main-wrapper">
      <div class="btn-container">
        <el-button class="time" type="primary">
          按照发布时间
          <i class="arrow-up el-icon-arrow-up"></i>
          <i class="arrow-down el-icon-arrow-down"></i>
        </el-button>
        <el-button type="primary">最热</el-button>
      </div>
      <div class="content-container">
        <div class="content-item" @click="goToDetail" v-for="item in items" :key="item.index">
          <h2 class="content-title">{{item.title}}</h2>
          <div class="content-main">
            <div class="content-image">
              <el-image style="width: 150px;height: 150px;" :src="item.image"></el-image>
            </div>
            <div class="content-text">
              <div class="content-para">{{item.text}}</div>
            </div>
          </div>
          <div class="content-tag">
            <div>
              需求领域：
              <span class="domain">{{item.tag}}</span>
            </div>
            <div>
              项目地区：
              <span class="deadline">{{item.area}}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="find-more-container" @click="findMore">
        <el-image class="find-more" src="static/img/icon/click2.png"></el-image>查看更多...
      </div>
    </div>
    <customer-service></customer-service>

    <end-of-page />
  </div>
</template>

<script>
import HeaderTittle from "@/components/HeaderTittle";
import EndOfPage from "@/components/EndOfPage";
import customerService from "@/components/customerService";

export default {
  name: "platform",
  components: { HeaderTittle, EndOfPage, customerService },
  data: function () {
    return {
      domainTag: [
        { name: "5G商用", effect: "plain" },
        {
          name: "新能源",
          effect: "plain",
        },
        { name: "化学化工", effect: "plain" },
        { name: "电气自动化", effect: "plain" },
        { name: "高分子材料", effect: "plain" },
        { name: "人工智能", effect: "plain" },
        { name: "生物医药", effect: "plain" },
        { name: "航空航天", effect: "plain" },
        { name: "信息技术", effect: "plain" },
        { name: "海洋开发", effect: "plain" },
        { name: "农林牧业", effect: "plain" },
        { name: "污水处理", effect: "plain" },
        { name: "仪器仪表", effect: "plain" },
      ],
      areaTag: [
        { name: "北京", effect: "plain" },
        { name: "天津", effect: "plain" },
        { name: "上海", effect: "plain" },
        { name: "重庆", effect: "plain" },
        { name: "河北", effect: "plain" },
        { name: "山西", effect: "plain" },
        { name: "辽宁", effect: "plain" },
        { name: "黑龙江", effect: "plain" },
        { name: "江苏", effect: "plain" },
        { name: "浙江", effect: "plain" },
        { name: "安徽", effect: "plain" },
        { name: "福建", effect: "plain" },
        { name: "山东", effect: "plain" },
        { name: "湖北", effect: "plain" },
        { name: "广东", effect: "plain" },
        { name: "海南", effect: "plain" },
        { name: "四川", effect: "plain" },
      ],
      items: [
        {
          title: "磁力研磨抛光、清洗及表面改性技术与设备",
          image: "static/img/technology-platform/technology-1.jpg",
          text:
            "磁力研磨抛光（MAP）技术取代了传统的劳动密集型、高能耗的化学机械方法，在技术性能、经济性和环境指标上都超过了传统的机械方法。该方法是在磁场影响下，铁磨料粉末工具形成一个原始的“弹性”刷子，然后启动并抛光产品表面.........",
          tag: "可批量生产",
          area: "杭州",
        },
        {
          title: "基于增强现实的长距离狭窄空间无人巡检系统",
          image: "static/img/technology-platform/technology-2.jpg",
          text:
            "项目研制了自动巡检设备并开发了配套的信息处理软件，完成了长距离狭窄空间结构安全精细化检测、可视化病害追溯和智能化诊断分析，形成了完整的地下通道结构安全综合体系，能够有效预防结构安全风险，确保城市安全...........",
          tag: "已完成样机/样品",
          area: "上海",
        },
        {
          title: "高效吸附环保材料",
          image: "static/img/technology-platform/technology-3.jpg",
          text:
            "一种新型的优质环保材料—SiO2纳米多孔气凝胶，经检测发现其对有毒有害的气体和液 体以及环境噪声都有明显的吸附效果。SiO2纳米多孔气凝胶作为一种吸附材料所具有的吸附 效率高、脱附方便、本身性能稳定，应用范围广的优点，将其与活性炭纤维、针织纤维、无 纺布、玻璃纤维布等结构材料进行复合，可形成具有高效吸附性的棉（毡）复合材料制品",
          tag: "已完成样机/样品",
          area: "上海",
        },
        {
          title: "高速精密永磁直线伺服电机系统研发",
          image: "static/img/technology-platform/technology-4.jpg",
          text:
            "永磁直线伺服电机与旋转电机相比，不需要中间转换装置，把电能直接转换为直线运动的机械能。大幅度降低设备的复杂度，同时由于采用磁极相互作用具有运动速度更快、加速度更快、出力更高等一系列优点，使其在自动化、半导体等行业获得了大量的应用。",
          tag: "已完成样机/样品",
          area: "江苏无锡",
        },
        {
          title: "重金属污染土壤与场地的洁净技术与重金属资源化",
          image: "static/img/technology-platform/technology-5.jpg",
          text:
            "这一技术可以广泛用于工业场地的修复和清洁过程，使得污染场地和土壤获得原有性能和价值，具有非常好的应用前景。本项目团队经过多年研究，实现了土壤和污染场地的重金属清洁和回收技术，采用生物可降解水溶性萃取剂，对于水溶性和碳酸盐结合态的铅、铬、镉、镍、汞、砷等污染，萃取效率达到 99%，并可以通过二次沉淀的方法完全回收获得高纯度的重金属离子，生物可降解萃取剂完全实现循环使用，对于土壤和地下水不存在二次污染问题，达到了清洗场地和回收重金属的双重目的",
          tag: "中试阶段",
          area: "上海",
        },
        {
          title: "先进医用电子内镜关键技术及设备",
          image: "static/img/technology-platform/technology-6.jpg",
          text:
            "200万像素高分辨率医用电子（上、下消化道）内镜及8万像素一次性医用电子（耳鼻喉科、泌尿科、妇科等）内镜。主要技术包括高性能CMOS成像器件、非球面镜头和窄带光谱成像技术。将高性能CMOS成像器件首次引入电子内镜，采用特殊的LED冷光源照明技术，弥补CMOS像质相对CCD的不足。",
          tag: "实验室阶段",
          area: "北京",
        },
      ],
    };
  },
  methods: {
    findMore() {
      this.items = this.items.concat(this.items);
    },
    changeTag(tag) {
      tag.effect = tag.effect == "plain" ? "dark" : "plain";
    },
    goToDetail() {
      this.$router.push("/technologyDetail");
    },
  },
};
</script>

<style lang="scss" scoped>
#platform {
  position: relative;
  .head-image {
    box-sizing: border-box;
    padding: 50px;
    height: 300px;
    background: url(../../../static/img/banner-technology.jpeg) no-repeat center
      center;
    background-size: 100% 100%;
    color: #fff;
    .head-search {
      margin: 0 auto;
      width: 300px;
      height: 50px;
    }
  }
  .filter-container {
    text-align: left;
    padding: 0 20px;
    .filter-domain {
      display: flex;
      margin-bottom: 10px;
      .domain-tag {
        margin: 5px;
        cursor: pointer;
      }
    }
    .filter-area {
      display: flex;
      .area-tag {
        margin: 5px;
        cursor: pointer;
      }
    }
    .filter-label {
      width: 90px;
      padding-top: 10px;
    }
  }
  // .my-divider {
  //   margin: 10px;
  // }
  .main-wrapper {
    padding-top: 10px;
    background: rgb(242, 243, 250);
    .btn-container {
      padding-left: 20px;
      text-align: left;
      .time {
        position: relative;
        .arrow-up {
          position: absolute;
          right: 5px;
          top: 5px;
        }
        .arrow-down {
          position: absolute;
          right: 5px;
          bottom: 5px;
        }
      }
    }
    .content-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .content-item {
        position: relative;
        margin-top: 10px;
        background: #fff;
        width: 30%;
        padding: 10px;
        padding-bottom: 60px;
        text-align: left;
        cursor: pointer;
        .content-title {
          text-align: center;
          font-size: 1.1rem;
        }
        .content-main {
          display: flex;
          .content-image {
            // float: left;
            margin-right: 10px;
          }
          .content-text {
            .content-para {
              text-indent: 2rem;
              font-size: 0.9rem;
              line-height: 1.5rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 6;
              -webkit-box-orient: vertical;
            }
          }
        }
        .content-tag {
          position: absolute;
          bottom: 10px;
          .domain {
            color: rgb(64, 158, 255);
          }
          .deadline {
            color: #ff9900;
          }
        }
      }
    }
    .find-more-container {
      margin: 10px 0;
      cursor: pointer;
      .find-more {
        vertical-align: middle;
      }
    }
  }
}
</style>