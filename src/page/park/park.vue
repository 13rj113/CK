<template>
  <div id="app">
    <!-- 头部导航 -->
    <header-tittle />
    <div class="header-image">
      <el-image style="width:100%;height:300px;" src=""></el-image>
    </div>
    <div class="government-service-container">
        <h1>政府服务</h1>
        <el-divider>助力政府构建城市/园区科技创新生态体系</el-divider>
        <el-row :gutter="60">
          <el-col :span="6">
            <div>
                <el-image src=""></el-image>
              <h2>区域技术市场</h2>
              <p>构建全维度、全流程、全纵深的技术转移服务体系</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
                <el-image src=""></el-image>
              <h2>产业大数据服务平台</h2>
              <p>洞悉区域产业情况、精准配置资源，提供产业创新发展专业化服务</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
                <el-image src=""></el-image>
              <h2>园区创新管家</h2>
              <p>为园区构建资源丰富、配置高效、两维服务、成效显著的创新体系</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
                <el-image src=""></el-image>
              <h2>高校技术转移营运中心</h2>
              <p>全新的产学研合作模式，提升高校地合作的效率和实效</p>
            </div>
          </el-col>
        </el-row>

      <el-row :gutter="60">
          <el-col :span="6">
            <div>
                <el-image src=""></el-image>
              <h3>区域技术市场</h3>
              <p>构建全维度、全流程、全纵深的技术转移服务体系</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
                <el-image src=""></el-image>
              <h3>产业大数据服务平台</h3>
              <p>洞悉区域产业情况、精准配置资源，提供产业创新发展专业化服务</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
                <el-image src=""></el-image>
              <h3>园区创新管家</h3>
              <p>为园区构建资源丰富、配置高效、两维服务、成效显著的创新体系</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
                <el-image src=""></el-image>
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
        <h2>LBS服务</h2>
        <p>崇科科技平台内部嵌入LBS地图，加入用户所在城市当中科创园区的位置定位以及该科创园区包含的高新项目，</p>
        <h2>以xx市经济开发区为例</h2>
        <el-image></el-image>
    </div>

    <el-divider></el-divider>

    <div class="conponents">
        <h2>合作园区</h2>
        <el-tabs tab-position="left" style="height: 200px;">
    <el-tab-pane label="杭州滨江金融科技小镇">用户管理</el-tab-pane>
    <el-tab-pane label="xx科技创业小镇">配置管理</el-tab-pane>
  </el-tabs>

  <div>
      <el-divider>园区规划咨询服务</el-divider>
      <p>为园区建设提供深度的咨询服务，助力产业园区准确定位，快速发展</p>
      <div>
          <div>园区科技创新能力建设规划</div>
          <div>园区高新技术产业发展规划</div>
          <div>科技园区规划、申报和评估</div>
          <div>国家特色产业基地规划与申报</div>
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
        <h2>路演信息</h2>
        按地区查询：<el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in areaOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <div>
  <el-tag v-for="tag in areaTags" :key="tag">{{tag}}</el-tag>
  </div>
    </div>
<el-divider></el-divider>
<p>杭州|浙江 杭州市江干区科技部部署实施，包括《科创板首次公开发行股票注册管理实行办法》（征求意见稿）等3份部门规章</p>
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
      areaTags: ['浙江', '江苏', '上海', '湖南'],
    };
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

/* 主内容区 */
main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 500px;
  border: solid 40px #e9ecf1;
  background-color: #fcfcfc;
}
main .main-left {
  text-align: center;
  width: 200px;
  float: left;
}
main .main-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #fff;
  padding: 50px 70px;
}
main .el-menu {
  background-color: transparent !important;
}
.intro-pic {
  height: 400px;
  width: 100%;
  padding-top: 10px;
  padding-left: 50px;
  padding-right: 100px;
  background-image: url(/static/img/service.png);
  background-repeat: no-repeat;
  background-size: 26% 100%;
  -moz-background-size: 100% 100%;
  background-position: center;
  .intro-sub-title {
    font-size: 20px;
    color: #3498db;
    margin-bottom: 0px;
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  }
  .intro-sub-content {
    font-size: 15px;
    margin-top: 10px;
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  }
  .intro-first {
    height: 45%;
    width: 100%;
    .intro-first-1 {
      height: 100%;
      .intro-first-technology {
        text-align: right;
        margin-top: 100px;
      }
    }
    .intro-first-2 {
      height: 100%;
      .intro-first-policy {
        text-align: left;
        margin-top: 100px;
      }
    }
  }
  .intro-second {
    height: 10%;
    width: 100%;
  }
  .intro-third {
    height: 45%;
    width: 100%;
    .intro-third-2 {
      height: 100%;
      .intro-third-service {
        text-align: right;
        margin-top: 0px;
      }
    }
    .intro-third-2 {
      height: 100%;
      .intro-third-science {
        text-align: left;
        margin-top: 0px;
      }
    }
  }
}
.intro-icon {
  padding-top: 30px;
  padding-left: 50px;
  padding-right: 100px;
}
.header-image {
  width: 100%;
}
.intro {
  height: 200px;
  //line-height: 200px;
  text-align: center;
  .intro-text {
    // display: inline-block;
    // width: 5rem;
    // height: 3rem;
    font-size: 1rem;
    color: #666;
    text-align: center;
    // border: 1px solid #666;
    // background-color: #eee;
  }
  .intro-text-top {
    // border-bottom: none;
  }
  .intro-detail {
    height: 200px;
    .intro-detail-idea {
      height: 43%;
      width: 90%;
      margin: 0 auto;
      position: relative;
      top: 22%;
      border: 2px solid #e5e7e9;
      border-radius: 20px;
      padding: 10px;
    }
    .intro-detail-arrow {
      height: 55%;
      width: 100%;
      margin: 0 auto;
      position: relative;
      top: 22%;
      border-radius: 20px;
    }
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
.technology-container {
  padding-left: 20px;
  padding-right: 30px;
  .technology-tab-container {
    .technology-item {
      padding: 5px;
      border-top: 1px solid #ccc;
      text-align: left;
      .technology-title {
        font-size: 1rem;
      }
      .technology-title-tag {
        margin: 5px;
      }
      .technology-tags {
        display: inline-block;
        margin: 5px;
        font-size: 0.8rem;
        padding: 5px;
        background: #f4f6f6;
        border: 1px solid #ddd;
        border-radius: 5px;
      }
      .technology-content {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .content-more {
        padding: 10px 0;
        text-align: center;
        font-family: "微软雅黑";
        cursor: pointer;
      }
    }
  }
  .el-tabs__item {
    font-size: 1rem;
  }
  .technology-find-more-container {
    border-top: 1px solid #ccc;
    padding-top: 20px;
    text-align: center;
    .technology-find-more {
      display: inline-block;
      background: #000;
      border-radius: 5px;
      padding: 5px 10px;
      color: #fff;
      cursor: pointer;
      .find-more-icon {
        vertical-align: middle;
      }
    }
  }
}
.bottom-container {
  margin: 60px 0;
  color: #f3c19b;
  .bottom-item {
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    width: 300px;
    height: 150px;
    font-size: 1rem;
    .item-text {
      margin-top: 10px;
    }
  }
}
.sub-title {
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 30px;
}
.policy {
  margin-top: 50px;
  margin-bottom: 50px;
  .policy-main {
    height: 480px;
    border: 1px solid #ccc;
    .left-title {
      font-size: 18px;
      color: brown;
      margin-top: 20px;
      margin-bottom: 5px;
      margin-left: 20px;
      margin-right: 20px;
      cursor: pointer;
    }
    .left-content {
      font-size: 15px;
      margin-top: 5px;
      margin-bottom: 0px;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
  .policy-title {
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .policy-text {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.search-area {
  float: left;
}
.policy-search-title {
  float: left;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: left;
}
.policy-search-content {
  float: left;
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: left;
}
</style>