<template>
  <div id="app">
    <!-- 头部导航 -->
    <header-tittle />
    <div class="header-image">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in items" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <el-row class="intro">
        <el-col :span="4">
          <span class="intro-text intro-text-top">企业理念</span>
        </el-col>
        <el-col :span="20">
          <div class="intro-detail">
            <el-row>
              <el-col :span="12">
                <div class="detail-left">政府</div>
              </el-col>
              <el-col :span="12">
                <div class="detail-right">中小</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>

      <el-row class="intro">
        <el-col :span="4">
          <span class="intro-text">聚焦领域</span>
        </el-col>
        <el-col :span="20">
          <div class="intro-detail">
            <el-row>
              <el-col :span="4">
                <div class="detail-left">人工智能</div>
              </el-col>
              <el-col :span="4">
                <div class="detail-right">人工智能</div>
              </el-col>
              <el-col :span="4">
                <div class="detail-left">人工智能</div>
              </el-col>
              <el-col :span="4">
                <div class="detail-right">人工智能</div>
              </el-col>
              <el-col :span="4">
                <div class="detail-left">人工智能</div>
              </el-col>
              <el-col :span="4">
                <div class="detail-right">人工智能</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-divider></el-divider>
    <div class="tab-table">
      <el-tabs tab-position="left" style="height: 200px;">
        <el-tab-pane label="5G商用"></el-tab-pane>
        <el-tab-pane label="高分子材料">配置管理</el-tab-pane>
        <el-tab-pane label="新能源">角色管理</el-tab-pane>
        <el-tab-pane label="生物医药">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <!-- 右侧主内容区 -->
    <!-- <div class="main-right"></div> -->
    <!-- </div> -->
    <el-divider></el-divider>
    <div class="policy">
      <el-row class="policy-title">
        <i class="el-icon-document-copy"></i>
        政策一览
      </el-row>
      <el-row class="policy-text">助力政府构建城市/园区科技创新生态体系</el-row>
      <el-row :gutter="20" style="margin-left:10px;margin-right:10px">
        <el-col :span="5">
          <div class="policy-main policy-left">
            <p class="left-title">区域技术市场</p>
            <p class="left-content">构建全流程、全维度、全纵深的技术转移服务体系</p>

            <p class="left-title">产业大数据服务平台</p>
            <p class="left-content">东西区域产业情况、精准配置资源，</p>
            <p class="left-content">提供产业创新发展专业化服务</p>

            <p class="left-title">园区创新管家</p>
            <p class="left-content">为园区构建资源丰富、配置成效显著的创新体系</p>

            <p class="left-title">高效技术转移管理运营中心</p>
            <p class="left-content">全新的产学研合作模式，</p>
            <p class="left-content">提升校地合作的效率和实效</p>

            <p class="left-title">崇科（国际）创新中心</p>
            <p class="left-content">高端服务聚集与科技平台赋能</p>
            <p class="left-content">的综合载体，主力城市发展</p>
          </div>
        </el-col>
        <el-col :span="19">
          <el-tabs type="border-card" style="height:480px;overflow-y:scroll">
            <el-tab-pane label="科技部">
              <el-row class="search-first" style="margin-bottom:15px">
                <el-col :span="8">
                  <div class="search-area">
                    按区域检索：
                    <el-select v-model="areaValue" placeholder="请选择">
                      <el-option
                        v-for="item in areaOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="search-area">
                    按领域检索：
                    <el-select v-model="fieldValue" placeholder="请选择">
                      <el-option
                        v-for="item in fieldOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-row>
              <el-row class="search-second" style="margin-bottom:0px">
                <el-col :span="24">
                  <div class="search-area">
                    政策时效性：
                    <el-button plain>不限</el-button>
                    <el-button plain>未开始</el-button>
                    <el-button plain>申报中</el-button>
                    <el-button plain>已过期</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <policy-search-content />
              <policy-search-content />
              <policy-search-content />
              <policy-search-content />
            </el-tab-pane>
            <el-tab-pane label="发改委">
              <el-row class="search-first" style="margin-bottom:15px">
                <el-col :span="8">
                  <div class="search-area">
                    按区域检索：
                    <el-select v-model="areaValue" placeholder="请选择">
                      <el-option
                        v-for="item in areaOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="search-area">
                    按领域检索：
                    <el-select v-model="fieldValue" placeholder="请选择">
                      <el-option
                        v-for="item in fieldOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-row>
              <el-row class="search-second" style="margin-bottom:0px">
                <el-col :span="24">
                  <div class="search-area">
                    政策时效性：
                    <el-button plain>不限</el-button>
                    <el-button plain>未开始</el-button>
                    <el-button plain>申报中</el-button>
                    <el-button plain>已过期</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <policy-search-content />
              <policy-search-content />
              <policy-search-content />
            </el-tab-pane>
            <el-tab-pane label="组织部">
              <el-row class="search-first" style="margin-bottom:15px">
                <el-col :span="8">
                  <div class="search-area">
                    按区域检索：
                    <el-select v-model="areaValue" placeholder="请选择">
                      <el-option
                        v-for="item in areaOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="search-area">
                    按领域检索：
                    <el-select v-model="fieldValue" placeholder="请选择">
                      <el-option
                        v-for="item in fieldOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-row>
              <el-row class="search-second" style="margin-bottom:0px">
                <el-col :span="24">
                  <div class="search-area">
                    政策时效性：
                    <el-button plain>不限</el-button>
                    <el-button plain>未开始</el-button>
                    <el-button plain>申报中</el-button>
                    <el-button plain>已过期</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <policy-search-content />
              <policy-search-content />
            </el-tab-pane>
            <el-tab-pane label="经信局">
              <el-row class="search-first" style="margin-bottom:15px">
                <el-col :span="8">
                  <div class="search-area">
                    按区域检索：
                    <el-select v-model="areaValue" placeholder="请选择">
                      <el-option
                        v-for="item in areaOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="search-area">
                    按领域检索：
                    <el-select v-model="fieldValue" placeholder="请选择">
                      <el-option
                        v-for="item in fieldOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-row>
              <el-row class="search-second" style="margin-bottom:0px">
                <el-col :span="24">
                  <div class="search-area">
                    政策时效性：
                    <el-button plain>不限</el-button>
                    <el-button plain>未开始</el-button>
                    <el-button plain>申报中</el-button>
                    <el-button plain>已过期</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <policy-search-content />
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>

    <el-row style="height:100px;margin-top:60px">
      <el-col :span="8" style="height:100%;font-size:20px">
        <div style="height:100%">
          <i class="el-icon-platform-eleme"></i>
          海量政策采集分析
        </div>
      </el-col>
      <el-col :span="8" style="height:100%;font-size:20px">
        <div style="height:100%">
          <i class="el-icon-s-flag"></i>
          政策精准匹配
        </div>
      </el-col>
      <el-col :span="8" style="height:100%;font-size:20px">
        <div style="height:100%">
          <i class="el-icon-s-marketing"></i>
          数据公开可视化
        </div>
      </el-col>
    </el-row>
    <el-row>
      <end-of-page />
    </el-row>
  </div>
</template>

<script>
import HeaderTittle from "@/components/HeaderTittle";
import EndOfPage from "@/components/EndOfPage";
import PolicySearchContent from "@/components/PolicySearchContent";

export default {
  name: "index",
  components: { HeaderTittle, EndOfPage, PolicySearchContent },
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
      areaValue: "",
      fieldOptions: [
        {
          value: "1",
          label: "各项补贴"
        },
        {
          value: "2",
          label: "经费申报"
        }
      ],
      fieldValue: "",
      active: true,
      items: [1, 2, 3, 4],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
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
.header-image {
  width: 100%;
  .el-carousel--horizontal {
    overflow-x: unset;
  }
}
.intro {
  height: 100px;
  line-height: 100px;
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