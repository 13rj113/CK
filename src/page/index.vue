<template>
  <div id="app">
    <!-- 头部导航 -->
    <header-tittle />
    <div class="header-image">
      1
      <el-carousel height="150px">
        <el-carousel-item v-for="item in items" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <el-row class="intro" style="padding-top:10px;padding-left:50px;padding-right:100px">
        <el-col :span="4">
          <div style="line-height:200px">
            <el-tag
              type="info"
              line-height="200px"
              style="height:60px;width:150px;line-height:60px;font-size:18px"
            >企业理念</el-tag>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="intro-detail">
            <el-row style="height:100%" :gutter="20">
              <el-col :span="9" style="height:100%">
                <div class="intro-detail-idea">
                  <p style="padding: 5px;">政府以及产业链上游企业在平台上发布需求、相关政策以及路演活动</p>
                </div>
              </el-col>
              <el-col :span="6" style="height:100%">
                <div class="intro-detail-arrow">
                  <el-image
                    style=" height:100%;width:100%"
                    src="static/img/icon/Arrow.png"
                    fit="fill"
                  ></el-image>
                </div>
              </el-col>
              <el-col :span="9" style="height:100%">
                <div class="intro-detail-idea">
                  <div>
                    <p style="padding: 5px;">中小科创公司在平台上发布公司概况、产品介绍、技术支持以及合作模式</p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>

      <el-row class="intro" style="padding-top:0px;padding-left:50px;padding-right:100px">
        <el-col :span="4">
          <div style="line-height:200px">
            <el-tag
              type="info"
              line-height="200px"
              style="height:60px;width:150px;line-height:60px;font-size:18px"
            >聚焦领域</el-tag>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="intro-detail">
            <el-row style="height:100%">
              <el-col :span="4" style="height:100%">
                <div class="intro-detail-img">
                  <el-image style=" height: 70%" src="static/img/icon/AI.png" fit="fill"></el-image>
                  <div style="margin-top:15px">人工智能</div>
                  <div style="margin-top:10px;color:#ABB2B9">AI</div>
                </div>
              </el-col>
              <el-col :span="4" style="height:100%">
                <div class="intro-detail-img">
                  <el-image style=" height: 70%" src="static/img/icon/Internet.png" fit="fill"></el-image>
                  <div style="margin-top:15px">物联网</div>
                  <div style="margin-top:10px;color:#ABB2B9">IOT</div>
                </div>
              </el-col>
              <el-col :span="4" style="height:100%">
                <div class="intro-detail-img">
                  <el-image style=" height: 70%" src="static/img/icon/Manufacture.png" fit="fill"></el-image>
                  <div style="margin-top:15px">高端制造</div>
                  <div style="margin-top:10px;color:#ABB2B9">Advanced Manufacture</div>
                </div>
              </el-col>
              <el-col :span="4" style="height:100%">
                <div class="intro-detail-img">
                  <el-image style=" height: 70%" src="static/img/icon/Material.png" fit="fill"></el-image>
                  <div style="margin-top:15px">新材料</div>
                  <div style="margin-top:10px;color:#ABB2B9">New Meterial</div>
                </div>
              </el-col>
              <el-col :span="4" style="height:100%">
                <div class="intro-detail-img">
                  <el-image style=" height: 70%" src="static/img/icon/Medical.png" fit="fill"></el-image>
                  <div style="margin-top:15px">大健康</div>
                  <div style="margin-top:10px;color:#ABB2B9">Healthcare</div>
                </div>
              </el-col>
              <el-col :span="4" style="height:100%">
                <div class="intro-detail-img">
                  <el-image style=" height: 70%" src="static/img/icon/Car.png" fit="fill"></el-image>
                  <div style="margin-top:15px">车联网</div>
                  <div style="margin-top:10px;color:#ABB2B9">ICV</div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top:40px;margin-bottom:40px">
      <el-divider></el-divider>
    </div>
    <div class="technology-container">
      <el-row class="sub-title">
        <i class="el-icon-s-home"></i>
        技术项目库
      </el-row>
      <el-tabs tab-position="left">
        <el-tab-pane label="高端装备">
          <el-row class="technology-item" v-for="technology in technologies" :key="technology">
            <el-col :span="6">
              <div class="technology-title">{{technology.title}}</div>
              <span
                class="technology-title-tag"
                v-for="tag in technology.titleTag"
                :key="tag"
              >{{tag}}</span>
            </el-col>
            <el-col :span="3">
              <div class="technology-tags" v-for="tag in technology.tags" :key="tag">{{tag}}</div>
            </el-col>
            <el-col :span="15">
              <div class="technology-content">{{technology.content}}</div>
            </el-col>
          </el-row>
        </el-tab-pane>
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
      <el-row class="sub-title">
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
              <el-row
                style="height:100px;margin-bottom:20px"
                :gutter="20"
                v-for="policy in policy1"
                :key="policy"
              >
                <el-col :span="4" style="height:100px">
                  <el-image style=" height: 100%" :src="policy.image" fit="fill"></el-image>
                </el-col>
                <el-col :span="20" style="height:100px">
                  <div class="policy-search-title">{{policy.title}}</div>
                  <div class="policy-search-content">{{policy.content}}</div>
                </el-col>
              </el-row>
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
              <el-row
                style="height:100px;margin-bottom:20px"
                :gutter="20"
                v-for="policy in policy1"
                :key="policy"
              >
                <el-col :span="4" style="height:100px">
                  <el-image style=" height: 100%" :src="policy.image" fit="fill"></el-image>
                </el-col>
                <el-col :span="20" style="height:100px">
                  <div class="policy-search-title">{{policy.title}}</div>
                  <div class="policy-search-content">{{policy.content}}</div>
                </el-col>
              </el-row>
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
              <el-row
                style="height:100px;margin-bottom:20px"
                :gutter="20"
                v-for="policy in policy1"
                :key="policy"
              >
                <el-col :span="4" style="height:100px">
                  <el-image style=" height: 100%" :src="policy.image" fit="fill"></el-image>
                </el-col>
                <el-col :span="20" style="height:100px">
                  <div class="policy-search-title">{{policy.title}}</div>
                  <div class="policy-search-content">{{policy.content}}</div>
                </el-col>
              </el-row>
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
              <el-row
                style="height:100px;margin-bottom:20px"
                :gutter="20"
                v-for="policy in policy1"
                :key="policy"
              >
                <el-col :span="4" style="height:100px">
                  <el-image style=" height: 100%" :src="policy.image" fit="fill"></el-image>
                </el-col>
                <el-col :span="20" style="height:100px">
                  <div class="policy-search-title">{{policy.title}}</div>
                  <div class="policy-search-content">{{policy.content}}</div>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>

    <el-row style="height:100px;margin-top:60px">
      <el-col :span="8" style="height:100%;font-size:20px">
        <div style="height:100%">
          <p style="cursor: pointer;margin-top:0px">
            <i class="el-icon-platform-eleme"></i>
            海量政策采集分析
          </p>
        </div>
      </el-col>
      <el-col :span="8" style="height:100%;font-size:20px">
        <div style="height:100%">
          <p style="cursor: pointer;margin-top:0px">
            <i class="el-icon-s-flag"></i>
            政策精准匹配
          </p>
        </div>
      </el-col>
      <el-col :span="8" style="height:100%;font-size:20px">
        <div style="height:100%">
          <p style="cursor: pointer;margin-top:0px">
            <i class="el-icon-s-marketing"></i>
            数据公开可视化
          </p>
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
      policy1: [
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
      ],
      technologies: [
        {
          title: "钢结构、空间结构、码头船坞工程类产品",
          titleTag: ["高端制造", "海洋工程装备"],
          tags: ["大批量销售阶段", "地区：广东 深圳"],
          content:
            "公司制造高强度高耐候性建筑用锌-5%铝-混合稀土合金（Galfan）镀层拉索产品研制，单层索网结构点支式幕墙的索夹装置荣获2009年度东莞市专利优秀奖，建筑门窗多点锁闭五金系统荣获2010年东莞市科学技术进步三等奖，“高强度高耐候性建筑用锌-5%铝-混合稀土合金（Galfan）镀层拉索产品研制”项目荣获2013年度“中国钢结构协会科学技术奖”一等奖。"
        },
        {
          title: "车用可视化智动新风系统产品项目",
          titleTag: ["智能制造", "高端制造"],
          tags: ["研发阶段", "地区：江苏 南京"],
          content:
            "纤风物语™ 车内智动新风系统是一款集多功能显示器、滤芯传感器、纤风物语App、多功能定制滤芯为一体的车内空气可视化管理系统，是一款智能车内空气净化软件，通过手机绑定智能设备，实现随时随地检测车内外空气质量，及时更换滤芯，改善车内空气质量。"
        },
        {
          title: "量子点增强显示技术",
          titleTag: ["智能制造", "医疗设备与器械"],
          tags: ["测试验证阶段", "地区：日本"],
          content:
            "公司的量子点技术将打破国际垄断，成为中国市场上量子点显示材料与技术应用的引领者，为显示面板商、终端品牌商提供质优价廉的QLED 材料、技术解决方案，持续提高消费者的视觉体验。"
        },
        {
          title: "量子点增强显示技术",
          titleTag: ["智能制造", "医疗设备与器械"],
          tags: ["测试验证阶段", "地区：日本"],
          content:
            "公司的量子点技术将打破国际垄断，成为中国市场上量子点显示材料与技术应用的引领者，为显示面板商、终端品牌商提供质优价廉的QLED 材料、技术解决方案，持续提高消费者的视觉体验。"
        },
        {
          title: "量子点增强显示技术",
          titleTag: ["智能制造", "医疗设备与器械"],
          tags: ["测试验证阶段", "地区：日本"],
          content:
            "公司的量子点技术将打破国际垄断，成为中国市场上量子点显示材料与技术应用的引领者，为显示面板商、终端品牌商提供质优价廉的QLED 材料、技术解决方案，持续提高消费者的视觉体验。"
        },
        {
          title: "量子点增强显示技术",
          titleTag: ["智能制造", "医疗设备与器械"],
          tags: ["测试验证阶段", "地区：日本"],
          content:
            "公司的量子点技术将打破国际垄断，成为中国市场上量子点显示材料与技术应用的引领者，为显示面板商、终端品牌商提供质优价廉的QLED 材料、技术解决方案，持续提高消费者的视觉体验。"
        },
        {
          title: "量子点增强显示技术",
          titleTag: ["智能制造", "医疗设备与器械"],
          tags: ["测试验证阶段", "地区：日本"],
          content:
            "公司的量子点技术将打破国际垄断，成为中国市场上量子点显示材料与技术应用的引领者，为显示面板商、终端品牌商提供质优价廉的QLED 材料、技术解决方案，持续提高消费者的视觉体验。"
        },
        {
          title: "量子点增强显示技术",
          titleTag: ["智能制造", "医疗设备与器械"],
          tags: ["测试验证阶段", "地区：日本"],
          content:
            "公司的量子点技术将打破国际垄断，成为中国市场上量子点显示材料与技术应用的引领者，为显示面板商、终端品牌商提供质优价廉的QLED 材料、技术解决方案，持续提高消费者的视觉体验。"
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
    //overflow-x: unset;
  }
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
      height: 70%;
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
  .technology-item {
    padding: 10px;
    border-top: 1px solid #ccc;
    text-align: left;
    .technology-title {
      font-size: 1rem;
    }
    .technology-title-tag {
      display: inline-block;
      margin: 10px;
      font-size: 0.8rem;
      padding: 5px;
      background: rgb(230, 229, 221);
      border: 1px solid #ccc;
    }
    .technology-tags {
      display: inline-block;
      margin: 10px;
      font-size: 0.8rem;
      padding: 5px;
      background: rgb(235, 230, 223);
      border: 1px solid #eee;
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