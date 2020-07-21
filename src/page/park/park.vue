<template>
  <div class="park-container">
    <!-- 头部导航 -->
    <header-tittle />
    <div class="header-image">
      <el-image style="width:100%;height:400px;" src="static/img/banner-park.png"></el-image>
    </div>
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
              src="static/img/icon/analyse.png"
              style="width: 50px;height:50px;vertical-align:middle"
            ></el-image>
            <h2>区域技术市场</h2>
            <p>构建全维度、全流程、全纵深的技术转移服务体系</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <el-image
              src="static/img/icon/analyse.png"
              style="width: 50px;height:50px;vertical-align:middle"
            ></el-image>
            <h2>产业大数据服务平台</h2>
            <p>洞悉区域产业情况、精准配置资源，提供产业创新发展专业化服务</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <el-image
              src="static/img/icon/analyse.png"
              style="width: 50px;height:50px;vertical-align:middle"
            ></el-image>
            <h2>园区创新管家</h2>
            <p>为园区构建资源丰富、配置高效、两维服务、成效显著的创新体系</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <el-image
              src="static/img/icon/analyse.png"
              style="width: 50px;height:50px;vertical-align:middle"
            ></el-image>
            <h2>高校技术转移营运中心</h2>
            <p>全新的产学研合作模式，提升高校地合作的效率和实效</p>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="60">
        <el-col :span="6">
          <div>
            <el-image
              src="static/img/icon/analyse.png"
              style="width: 50px;height:50px;vertical-align:middle"
            ></el-image>
            <h3>区域技术市场</h3>
            <p>构建全维度、全流程、全纵深的技术转移服务体系</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <el-image
              src="static/img/icon/analyse.png"
              style="width: 50px;height:50px;vertical-align:middle"
            ></el-image>
            <h3>产业大数据服务平台</h3>
            <p>洞悉区域产业情况、精准配置资源，提供产业创新发展专业化服务</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <el-image
              src="static/img/icon/analyse.png"
              style="width: 50px;height:50px;vertical-align:middle"
            ></el-image>
            <h3>园区创新管家</h3>
            <p>为园区构建资源丰富、配置高效、两维服务、成效显著的创新体系</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <el-image
              src="static/img/icon/analyse.png"
              style="width: 50px;height:50px;vertical-align:middle"
            ></el-image>
            <h3>高校技术转移营运中心</h3>
            <p>全新的产学研合作模式，提升高校地合作的效率和实效</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top:40px;margin-bottom:40px">
      <el-divider></el-divider>
    </div>
    <div class="lbs-container">
      <h2>
        <el-image
          src="static/img/icon/lbs.png"
          style="width: 50px;height:50px;vertical-align:middle"
        ></el-image>LBS服务
      </h2>
      <p>崇科科技平台内部嵌入LBS地图，加入用户所在城市当中科创园区的位置定位以及该科创园区包含的高新项目，基于海量现货地点(POI)数据，提供周边搜索，城市范围搜索，关键词输入提示，分类筛选等多种搜索能力，对于供需双方来说都可以做到一目了然。通过LBS，首先用户可利用定位技术确定自身的空间位置，然后用户可通过移动互联网来获取与位置相关资源和信息。</p>
      <h2>以xx市经济开发区为例</h2>
      <el-image></el-image>
    </div>

    <el-divider></el-divider>

    <div class="conponents">
      <h2>
        <el-image
          src="static/img/icon/house.png"
          style="width: 50px;height:50px;vertical-align:middle"
        ></el-image>合作园区
      </h2>
      <el-tabs tab-position="left" style="height: 200px;">
        <el-tab-pane label="杭州滨江金融科技小镇">杭州滨江金融科技小镇</el-tab-pane>
        <el-tab-pane label="xx科技创业小镇">xx科技创业小镇</el-tab-pane>
      </el-tabs>

      <div>
        <el-divider>园区规划咨询服务</el-divider>
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
        <el-divider>园区规划咨询服务</el-divider>
        <p>结合园区推广与精准招商，建设园区促投平台，推进园区招商引资工作开展</p>
        <el-row class="bottom-container">
          <el-col :span="8">
            <div class="bottom-item">
              <el-image src="static/img/icon/analyse.png" style="width: 100px;height:100px;"></el-image>
              <h3 class="item-text">建设园区促投展示区</h3>
              <p>展示园区概况、投资环境、招商项目等信息</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bottom-item">
              <el-image src="static/img/icon/match.png" style="width: 100px;height:100px;"></el-image>
              <h3 class="item-text">建设园区产业生态区</h3>
              <p>数字化还原园区产业集群、产业空间布局、产业链生态、产业链创新生态等</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bottom-item">
              <el-image src="static/img/icon/data.png" style="width: 100px;height:100px;"></el-image>
              <h3 class="item-text">建设产业促投平台</h3>
              <p>为园区招商人员精准配置产业招商资源，为实现产业精准招商</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <el-divider></el-divider>

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
      <p>杭州|浙江 杭州市江干区科技部部署实施，包括《科创板首次公开发行股票注册管理实行办法》（征求意见稿）等3份部门规章</p>
      <p>咸宁|上海 杭州市江干区科技部部署实施，包括《科创板首次公开发行股票注册管理实行办法》（征求意见稿）等3份部门规章</p>
      <p>北京|北京 杭州市江干区科技部部署实施，包括《科创板首次公开发行股票注册管理实行办法》（征求意见稿）等3份部门规章</p>
      <p>科技部 杭州市江干区科技部部署实施，包括《科创板首次公开发行股票注册管理实行办法》（征求意见稿）等3份部门规章</p>
      <p>杭州|浙江 杭州市江干区科技部部署实施，包括《科创板首次公开发行股票注册管理实行办法》（征求意见稿）等3份部门规章</p>
      <div class="sign-up-container">
        <el-image
          class="sign-up-image"
          style="width:30px;height:30px"
          src="static/img/icon/phone.png"
        ></el-image>
        <span class="sign-up">一键报名</span>
      </div>
    </div>
    <el-row>
      <end-of-page />
    </el-row>
  </div>
</template>

<script>
import HeaderTittle from "@/components/HeaderTittle";
import EndOfPage from "@/components/EndOfPage";

export default {
  name: "park",
  components: { HeaderTittle, EndOfPage },
  data: function() {
    return {
      areaOptions: [
        {
          value: "1",
          label: "浙江省"
        },
        {
          value: "2",
          label: "江苏省"
        },
        {
          value: "3",
          label: "福建省"
        }
      ],
      areaTags: ["浙江", "江苏", "上海", "湖南"]
    };
  }
};
</script>

<style lang="scss">
.park-container {
  .government-service-container {
    h2 {
      font-size: 1rem;
    }
  }
  .lbs-container {
    padding: 10px 30px;
  }
}
.conponents {
  .park-design {
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
        border: 1px solid #ccc;
        background: rgb(244, 222, 222);
      }
    }
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
  .sign-up-container {
    margin: 30px auto;
    background: rgb(186, 226, 230);
    padding: 10px;
    width: 300px;
    text-align: center;
    .sign-up-image {
      vertical-align: middle;
    }
  }
}
</style>