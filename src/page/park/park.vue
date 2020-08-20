<template>
  <div class="park-container">
    <!-- 头部导航 -->
    <header-tittle />
    <div class="header-image">
      <el-image style="width:100%;height:400px;" src="static/img/banner-park.png"></el-image>
    </div>

    <el-card style="margin-top:20px">
      <div class="government-service-container">
        <h2>
          <el-image
            src="static/img/icon/public.png"
            style="width: 50px;height:50px;vertical-align:middle"
          ></el-image>政府服务
        </h2>
        <el-divider>助力政府构建城市/园区科技创新生态体系</el-divider>
        <el-row :gutter="60">
          <el-col :span="6">
            <div>
              <el-image
                src="static/img/park/service-1.png"
                style="width: 50px;height:50px;vertical-align:middle"
              ></el-image>
              <h3>区域技术市场</h3>
              <p>构建全维度、全流程、全纵深的技术转移服务体系</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-image
                src="static/img/park/service-2.png"
                style="width: 50px;height:50px;vertical-align:middle"
              ></el-image>
              <h3>产业大数据服务平台</h3>
              <p>洞悉区域产业情况、精准配置资源，提供产业创新发展专业化服务</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-image
                src="static/img/park/service-3.png"
                style="width: 50px;height:50px;vertical-align:middle"
              ></el-image>
              <h3>园区创新管家</h3>
              <p>为园区构建资源丰富、配置高效、两维服务、成效显著的创新体系</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-image
                src="static/img/park/service-4.png"
                style="width: 50px;height:50px;vertical-align:middle"
              ></el-image>
              <h3>高校技术转移营运中心</h3>
              <p>全新的产学研合作模式，提升高校地合作的效率和实效</p>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="60">
          <el-col :span="6">
            <div>
              <el-image
                src="static/img/park/service-5.png"
                style="width: 50px;height:50px;vertical-align:middle"
              ></el-image>
              <h3>企业创新能力分析系统</h3>
              <p>通过企业创新能力分析模型，帮助企业了解自身长板和短板，明确企业改进的方向</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-image
                src="static/img/park/service-6.png"
                style="width: 50px;height:50px;vertical-align:middle"
              ></el-image>
              <h3>政策指南针</h3>
              <p>用适配、推送、提醒，帮助政府轻松宣贯好政策</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-image
                src="static/img/park/service-7.png"
                style="width: 50px;height:50px;vertical-align:middle"
              ></el-image>
              <h3>高企测评系统</h3>
              <p>在线填写表单，系统自动生成评价结果，帮助企业了解自身与高企认定的评分差距</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-image
                src="static/img/park/service-8.png"
                style="width: 50px;height:50px;vertical-align:middle"
              ></el-image>
              <h3>政务外包</h3>
              <p>提供多样化科技创新服务，让科技政务更专业、高效</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>

    <el-card class="bgc-gray" style="margin-top:20px">
      <div class="lbs-container">
        <h2>
          <el-image
            src="static/img/icon/lbs.png"
            style="width: 50px;height:50px;vertical-align:middle"
          ></el-image>LBS服务
        </h2>
        <p>崇科科技平台内部嵌入LBS地图，加入用户所在城市当中科创园区的位置定位以及该科创园区包含的高新项目，基于海量现货地点(POI)数据，提供周边搜索，城市范围搜索，关键词输入提示，分类筛选等多种搜索能力，对于供需双方来说都可以做到一目了然。通过LBS，首先用户可利用定位技术确定自身的空间位置，然后用户可通过移动互联网来获取与位置相关资源和信息。</p>
        <div style="font-size: 1.2rem;">
          <i class="el-icon-caret-bottom"></i>以xx市经济开发区为例
          <i class="el-icon-caret-bottom"></i>
        </div>
        <div class="map-container" id="map"></div>
      </div>
    </el-card>

    <el-card style="margin-top:20px">
      <h2>
        <el-image
          src="static/img/icon/house.png"
          style="width: 50px;height:50px;vertical-align:middle"
        ></el-image>合作园区
      </h2>
      <el-tabs class="conponents-tab" tab-position="left">
        <el-tab-pane label="杭州滨江金融科技小镇">
          <p
            style="text-indent: 2rem;"
          >杭州滨江金融科技小镇位于滨江区中心位置，北至滨盛路，东至时代大道，西至东信大道，南至南环路，规划范围用地约4.4平方公里。小镇将形成“一心一带两点三区”的发展格局。</p>
          <div class="conponents-image">
            <el-image class="image-item" src="static/img/park/component-1.png"></el-image>
            <el-image class="image-item" src="static/img/park/component-2.png"></el-image>
            <el-image class="image-item" src="static/img/park/component-3.png"></el-image>
          </div>
          <p
            style="text-indent: 2rem;"
          >杭州滨江金融科技小镇是以金融科技产业中心作为小镇的发展核心，一带为江南大道为轴线打造产城融合发展带，两点为小镇公共服务节点和科技金融服务节点，三区为小镇核心区、产业孵化集聚区、产业发展潜力区。</p>
          <p>
            <span style="color: rgb(85,29,29);font-weight: bold;">运营优势：</span>20 余年线下实体经营产业集群基础 华北区最大的智能制造相关电子元器件交易市场 优越的地理位置和便利的交通环境 快速精准匹配商户及用户需求服务内容：
          </p>
          <div>
            <span style="color: rgb(85,29,29);font-weight: bold;">服务内容：</span>
            <p>（1）基础服务：可共享中心内展示空间、设备租借、培训场地、会议场地、商务接待场地。</p>
            <p>（2）交易服务：提供智能制造实物产品O2O一站式交易服务，囊括了集成电路IC、传感器、物性监测仪器、 制造通用设备 、仪器仪表、二极管、电源、电池、LED等品类。</p>
            <p>（3）增值服务：国内外资源嫁接、知产服务、营销服务、品牌推广、金融服务、人才服务等。</p>
          </div>
          <div class="sign-up-container">
            <el-image
              class="sign-up-image"
              style="width:30px;height:30px"
              src="static/img/icon/phone.png"
            ></el-image>
            <span class="sign-up">一键获取详细信息</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="梦想小镇">
          <p
            style="text-indent: 2rem;"
          >杭州梦想小镇位于杭州余杭区，规划面积3平方公里，是浙江省首批特色小镇创建对象，也是10个省级示范特色小镇之一。小镇定位信息产业，主攻互联网创新创业，努力成为众创空间的新榜样、信息经济的新增点。梦想小镇依托浙大、阿里、浙商优势，顺应“互联网+”的发展浪潮，抓住“大众创业、万众创新”的时代机遇，锁定人才和资本两大关键创新要素，确定了“资智融合”的发展路径，加快互联网创业和天使投资互促发展。</p>
          <div class="conponents-image">
            <el-image class="image-item" src="static/img/park/component-4.png"></el-image>
            <el-image class="image-item" src="static/img/park/component-5.png"></el-image>
            <el-image class="image-item" src="static/img/park/component-6.png"></el-image>
          </div>
          <p
            style="text-indent: 2rem;"
          >小镇启动建设以来，已经累计完成投资31亿元，完成“万兆进区域、千兆进楼宇、百兆到桌面、WIFI全覆盖”的网络基础设施建设；与浙大合作，共享浙大实验室和技术平台，共建健康医疗公共技术平台；引进科技文献查询系统和世界专利信息服务平台，购买阿里云服务，向小镇创客免费开放；建成互联网村、天使村和创业集市三个先导区块，完善居住、商业、社交配套功能；集聚金融机构420家，集聚管理资本1100多亿元，基本建成了一个低成本、全要素、开放式、便利化的创业社区。至今，梦想小镇已经吸引了来自全国乃至全世界的7000多名年轻人在创新创业，他们已创立了740多个项目，正在将各种奇思妙想付诸实践，把创意变成产品，把智慧变成财富。</p>
          <div class="sign-up-container">
            <el-image
              class="sign-up-image"
              style="width:30px;height:30px"
              src="static/img/icon/phone.png"
            ></el-image>
            <span class="sign-up">一键获取详细信息</span>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <el-card class="bgc-gray" style="margin-top:20px">
      <div class="park-container">
        <h2>园区规划咨询服务</h2>
        <p>为园区建设提供深度的咨询服务，助力产业园区准确定位，快速发展</p>
        <div class="park-design">
          <div class="column">
            <div class="item">园区科技创新能力建设规划</div>
            <div class="item">园区高新技术产业发展规划</div>
          </div>
          <div class="column">
            <div class="item">科技园区规划、申报和评估</div>
            <div class="item">国家特色产业基地规划与申报</div>
          </div>
        </div>
      </div>

      <div>
        <p>结合园区推广与精准招商，建设园区促投平台，推进园区招商引资工作开展</p>
        <el-row class="bottom-container" :gutter="30">
          <el-col :span="8">
            <div class="bottom-item">
              <el-image src="static/img/park/design-1.png" style="width: 60px;height:60px;"></el-image>
              <h3 class="item-text">建设园区促投展示区</h3>
              <p>展示园区概况、投资环境、招商项目等信息</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bottom-item">
              <el-image src="static/img/park/design-2.png" style="width: 60px;height:60px;"></el-image>
              <h3 class="item-text">建设园区产业生态区</h3>
              <p>数字化还原园区产业集群、产业空间布局、产业链生态、产业链创新生态等</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bottom-item">
              <el-image src="static/img/park/design-3.png" style="width: 60px;height:60px;"></el-image>
              <h3 class="item-text">建设产业促投平台</h3>
              <p>为园区招商人员精准配置产业招商资源，为实现产业精准招商</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>

    <el-card style="margin-top:20px">
      <div class="show-container">
        <h2>
          <el-image
            src="static/img/icon/speaker.png"
            style="width: 50px;height:50px;vertical-align:middle"
          ></el-image>路演信息
        </h2>按地区查询：
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in areaOptions"
            :key="item.index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <div>
          <el-tag class="tag" v-for="tag in areaTags" :key="tag.index">{{tag}}</el-tag>
        </div>

        <el-divider></el-divider>
        <p>科技部 科技部火炬中心关于优先启动第九届中国创新创业大赛新冠肺炎疫情防控技术创新创业专业赛（网上）的通知............2020-06-01</p>
        <p>西安|陕西 第九届中国创新创业大赛（陕西赛区)暨第七届陕西省科技创新创业大赛“云启动”的通知................... 2020-07-09</p>
        <p>苏州|江苏 江苏苏南科技金融路演中心与2020年7月18日举办科技金融合作创新示范区发展大会，具体围绕优化科技与金融的结合创新，推动区域经济高质量发展................ 2020-01-31</p>
        <p>杭州|浙江 杭州海外高层次人才创新创业大赛“创客天下 杭向未来”于2020年3月-11月在杭州举行，报名时间截止为............. 2020-01-31</p>
        <p>广州|广东 第二十二期广州开发区“融资汇”活动 —优质民营企业项目路演，为拓宽科技企业融资渠道，提高科技企业股权融资比例............. 2020-07-01</p>
        <div class="sign-up-container">
          <el-image
            class="sign-up-image"
            style="width:30px;height:30px"
            src="static/img/icon/phone.png"
          ></el-image>
          <span class="sign-up">一键报名</span>
        </div>
      </div>
    </el-card>

    <customer-service></customer-service>
    <el-row>
      <end-of-page />
    </el-row>
  </div>
</template>

<script>
import HeaderTittle from "@/components/HeaderTittle";
import EndOfPage from "@/components/EndOfPage";
import BMap from "BMap";
import customerService from "@/components/customerService";

export default {
  name: "park",
  components: { HeaderTittle, EndOfPage, customerService },
  data: function () {
    return {
      areaOptions: [
        {
          value: "1",
          label: "浙江省",
        },
        {
          value: "2",
          label: "江苏省",
        },
        {
          value: "3",
          label: "福建省",
        },
      ],
      areaTags: ["浙江", "江苏", "上海", "湖南"],
    };
  },
  mounted() {
    const map = new BMap.Map("map");
    // 创建地图实例
    const point = new BMap.Point(116.404, 39.915);
    // 创建点坐标
    map.centerAndZoom(point, 15);
    // 初始化地图，设置中心点坐标和地图级别
  },
};
</script>

<style lang="scss">
.park-container {
  position: relative;
  .lbs-container {
    padding: 10px 30px;
    text-align: left;
    h2 {
      text-align: center;
    }
    .map-container {
      margin-top: 10px;
      height: 300px;
    }
    p {
      text-indent: 2rem;
    }
  }
}

.conponents-tab {
  text-align: left;
}
.park-container {
  margin-bottom: 30px;
  .park-design {
    background: url(../../../static/img/park/design.png) no-repeat center center;
    background-size: 20%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .column {
      flex-basis: 100%;
      display: flex;
      justify-content: space-around;
      .item {
        margin: 10px;
        padding: 10px;
        width: 300px;
        height: 60px;
        line-height: 60px;
        // border: 1px solid #ccc;
        // box-shadow: 10px 10px 5px 2px #666;
        // background: rgb(244, 222, 222);
        background: url(../../../static/img/park/border.png) no-repeat center
          center;
        background-size: 100%;
      }
    }
  }
}
.conponents-image {
  display: flex;
  .image-item {
    margin-right: 20px;
    width: 30%;
  }
}

.show-container {
  padding: 0 20px;
  text-align: left;
  h2 {
    text-align: center;
  }
  .tag {
    margin: 5px;
    background: #fff;
    color: #000;
  }
}
.sign-up-container {
  margin: 30px auto;
  background: rgb(186, 226, 230);
  padding: 10px;
  width: 300px;
  text-align: center;
  cursor: pointer;
  .sign-up-image {
    vertical-align: middle;
  }
}
</style>