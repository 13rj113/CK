<template>
  <div id="platform">
    <header-tittle />
    <div class="head-image">
      <h1>产业上下游技术需求平台</h1>
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
        <div><el-tag class="domain-tag" :effect="tag.effect" v-for="tag in domainTag" :key="tag.index" @click="changeTag(tag)">{{tag.name}}</el-tag></div>
      </div>

      <div class="filter-area">
        <div class="filter-label">按照地区：</div>
        <div><el-tag class="area-tag" :effect="tag.effect" type="warning" v-for="tag in areaTag" :key="tag.index" @click="changeTag(tag)">{{tag.name}}</el-tag></div>
      </div>
    </div>

    <el-divider></el-divider>

    <div class="btn-container">
        <el-button class="time" type="info" plain>按照发布时间<i class="arrow-up el-icon-arrow-up"></i><i class="arrow-down el-icon-arrow-down"></i></el-button>
        <el-button type="info" plain>最热</el-button>
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
        <div>需求领域：{{item.tag}}</div>
        <div>期望解决时间：{{item.area}}</div>
        </div>
      </div>
    </div>

    <div class="find-more-container" @click="findMore">
      <el-image class="find-more" src="static/img/icon/click2.png"></el-image>查看更多...
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
  data: function() {
    return {
      domainTag: [
        {name: "5G商用",
        effect: 'plain'},
        {
        name: "新能源",
        effect: 'plain'},
        {name: "化学化工",
        effect: 'plain'},
        {name: "电气自动化",
        effect: 'plain'},
        {name: "高分子材料",
        effect: 'plain'},
        {name: "人工智能",
effect: 'plain'},
        {name:"生物医药",
        effect: 'plain'},
        {name: "航空航天",
          effect: 'plain'},
        {name: "信息技术",
        effect: 'plain'},
        {name: "海洋开发",
        effect: 'plain'},
        {name: "农林牧业",
        effect: 'plain'},
        {name: "污水处理",
        effect: 'plain'},
        {name: "仪器仪表",effect: 'plain'}
      ],
      areaTag: [
        {name: "北京",
        effect: 'plain'},
        {name: "天津",
        effect: 'plain'},
        {name: "上海",
        effect: 'plain'},
        {name: "重庆",
        effect: 'plain'},
        {name: "河北",
        effect: 'plain'},
        {name: "山西",
        effect: 'plain'},
        {name: "辽宁",
        effect: 'plain'},
        {name: "黑龙江",
        effect: 'plain'},
        {name: "江苏",
        effect: 'plain'},
        {name: "浙江",
        effect: 'plain'},
        {name: "安徽",
        effect: 'plain'},
        {name: "福建",
        effect: 'plain'},
        {name: "山东",
        effect: 'plain'},
        {name: "湖北",
        effect: 'plain'},
        {name: "广东",
        effect: 'plain'},
        {name :"海南",
        effect: 'plain'},
        {name: "四川",
        effect: 'plain'}
      ],
      items: [
        {
          title: "质谱仪温控系统开发",
          image: "static/img/demand/demand-1.png",
          text:
            "企业是一家集质谱仪研发、制造、生产、技术服务为一体的国家级火炬计划重点高新技术企业，工信部“专精特新”小巨人企业，年营业额3.5亿左右；过往温控模块采用的是市场上的通用产品，与仪器其他模块配合度不高，同时企业想在温控系统形成自己的知识产权，寻求专家可开发一款温控系统",
          tag: "电气设备/电气自动化设备/计量仪表",
          area: "2020年12月之前"
        },
        {
          title: "精细化工、染料、染料中间体先进项目引进",
          image: "static/img/demand/demand-2.png",
          text:
            "织物印染过程中需要用到固色剂、匀染剂、荧光增白剂等助剂来保证染料在织物上的固着效果以及织物的外观、光泽度、白度等。不过，这些助剂通常具有明显的毒性，且不易降解，从而对人体健康和自然环境造成危害。开发新型无醛固色剂、生物基匀染剂和改性的荧光增白剂，降低助剂中有毒物质含量，提高其生物可降解性，可以有效降低印染助剂对人体和环境的危害。",
          tag: "化学/化工制品/纺织化学用品",
          area: "2020年12月之前"
        },
        {
          title: "燃料电池催化剂研发及工艺改造",
          image: "static/img/demand/demand-3.png",
          text:
            "需要根据膜电极的工作原理对催化剂和质子膜的结构关系进行优化，研发、生产高性能铂催化剂，提高利用率，简化工艺，以及高性能MEA膜电极制备关键技术的研发与应用，降低燃料电池成本，提高性能。",
          tag: "新能源/新型电池",
          area: "2020年10月之前"
        },
        {
          title: "提高压电陶瓷叠堆致动器使用寿命",
          image: "static/img/demand/demand-4.png",
          text:
            "国内在压电陶瓷叠堆的使用可靠性研究方向上尚处于空白阶段；压电陶瓷叠堆致动器在精密制造市场上前景广阔，目前细分市场规模达千亿人民币。产品需要如何提高压电陶瓷叠堆致动器使用寿命，即使用寿命≥1010次。",
          tag: "电子/半导体材料",
          area: "2020年10月之前"
        },
        {
          title: "聚氨酯电梯门轮研发",
          image: "static/img/demand/demand-5.png",
          text:
            "开发塑料（PA66）外包聚氨酯皮电梯门轮产品(轴瓦材质为塑料，边界材料聚氨酯)。本项目寻找聚氨酯领域技术团队帮助企业开发聚氨酯材料配方,其中关键性技术难点在于：一、具备邵氏A硬度95°±3°聚氨酯配方；二、解决聚氨酯材料与塑料粘合问题，确保其附着力满足产品使用要求。",
          tag: "机械设备/通用设备",
          area: "2020年10月之前"
        },
        {
          title: "摩擦新材料研发及检测",
          image: "static/img/demand/demand-6.png",
          text:
            "产品新型摩擦材料的应用研究：以chase试验机摩擦系数及磨损为例，要求达到正常摩擦系数及高温摩擦系数0.5以上，重量磨损达到1-3%，体积磨损达到1-3%，经过路试后产品无明显龟裂及酥松现象。需要新型高性能制动刹车片的研制（自动除尘、环保、降噪等）。",
          tag: "汽车配件/制动系配件",
          area: "2020年12月之前"
        },
      ]
    };
  },
  methods: {
    findMore() {
      this.items = this.items.concat(this.items);
    },
    changeTag(tag) {
      tag.effect = tag.effect == 'plain' ? 'dark' : 'plain'
    },
    goToDetail() {
      this.$router.push('/demandDetail')
    }
  }
};
</script>

<style lang="scss" scoped>
#platform {
  background: rgb(240, 232, 232);
  position:relative;
  .head-image {
    box-sizing: border-box;
    padding: 50px;
    height: 300px;
    background: url(../../../static/img/banner-technology.jpeg) no-repeat center center;
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
    .filter-label{
        width: 90px;
        padding-top: 10px;
      }
  }
  .btn-container{
      padding-left: 20px;
      text-align: left;
      .time{
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
      margin: 10px;
      background: #fff;
      width: 28%;
      padding: 10px;
      padding-bottom: 60px;
      text-align: left;
      cursor: pointer;
      .content-title{
        text-align: center;
font-size: 1.2rem;
      }
      .content-main {
        display: flex;
        .content-image {
          // float: left;
          margin-right: 10px;
        }
        .content-text {
          .content-para{
            text-indent: 2rem;
            overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
          }
        }
      }
      .content-tag{
        position: absolute;
        bottom: 10px;
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
</style>