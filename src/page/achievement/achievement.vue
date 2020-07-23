<template>
  <div class="achievement">
    <!-- 头部导航 -->
    <header-tittle />
    <div class="header-image"></div>

    <el-card shadow="always" style="margin-top:20px">
      <div class="intro-detail">
        <div class="intro-detail-img">
          <el-image style=" width: 50%" src="static/img/icon/AI.png" fit="fill"></el-image>
          <div style="margin-top:15px">科技成果评价</div>
        </div>

        <div class="intro-detail-img">
          <el-image style=" width: 50%" src="static/img/icon/5G.png" fit="fill"></el-image>
          <div style="margin-top:15px">诊断市场需求</div>
        </div>

        <div class="intro-detail-img">
          <el-image style=" width: 50%" src="static/img/icon/Internet.png" fit="fill"></el-image>
          <div style="margin-top:15px">精准匹配市场</div>
        </div>

        <div class="intro-detail-img">
          <el-image style=" width: 50%" src="static/img/icon/Manufacture.png" fit="fill"></el-image>
          <div style="margin-top:15px">科技成果转化</div>
        </div>

        <div class="intro-detail-img">
          <el-image style=" width: 50%" src="static/img/icon/Material.png" fit="fill"></el-image>
          <div style="margin-top:15px">优选匹配买家</div>
        </div>

        <div class="intro-detail-img">
          <el-image style=" width: 50%" src="static/img/icon/Medical.png" fit="fill"></el-image>
          <div style="margin-top:15px">适当规避风险</div>
        </div>
      </div>
    </el-card>
    <!-- 技术成果转化 -->
    <el-card class="transform" shadow="always" style="margin-top:20px">
      <h3>技术成果转化</h3>
      <p>崇科科技成果推广转化，是指为提高生产力水平而对科学研究与技术开发所产生的具有实用价值的科技成果所进行的后续试验、开发、应用、推广直至形成新产品、新工艺、新材料、发展新产业等活动。</p>
      <div class="transform-main">
        <div class="transform-main-left">
          <p>促进科技成果转化、加速科技成果产业化，已经成为世界各国科技政策的新趋势</p>
          <p>科技成果转化的途径，主要有直接和间接两种转化方式</p>
          <p>我国科技成果转化率不足30%，先进国家这一指标为60%至70%</p>
          <p>提高科技成果转化率才能转化出高附加值的产品</p>
        </div>
        <div class="transform-main-right">
          <div>
            <h3>技术转移平台</h3>
            <p>平台级服务，为成果转化保驾护航</p>
          </div>
          <div>
            <h3>技术通</h3>
            <p>会员级服务，成果推广转让更快捷</p>
          </div>
          <div>
            <h3>产学研活动</h3>
            <p>对接会、项目路演、创新企业院所行</p>
          </div>
          <div>
            <h3>成果-企业对点对点</h3>
            <p>精准匹配、意向确认、直接对接</p>
          </div>
        </div>
      </div>
    </el-card>
    <!-- 技术转移服务流程 -->
    <el-card class="step" shadow="always" style="margin-top:20px">
      <h3>技术转移服务流程</h3>
      <div class="step-detail">
        <div class="step-detail-item">
          <el-image style=" width: 30%" src="static/img/icon/AI.png" fit="fill"></el-image>
          <div style="margin-top:15px">成果项目推介</div>
        </div>
        <div class="step-detail-item">
          <el-image style=" width: 30%" src="static/img/icon/AI.png" fit="fill"></el-image>
          <div style="margin-top:15px">技术对接</div>
        </div>
        <div class="step-detail-item">
          <el-image style=" width: 30%" src="static/img/icon/AI.png" fit="fill"></el-image>
          <div style="margin-top:15px">技术定价</div>
        </div>
        <div class="step-detail-item">
          <el-image style=" width: 30%" src="static/img/icon/AI.png" fit="fill"></el-image>
          <div style="margin-top:15px">技术合同把关</div>
        </div>
        <div class="step-detail-item">
          <el-image style=" width: 30%" src="static/img/icon/AI.png" fit="fill"></el-image>
          <div style="margin-top:15px">商务谈判</div>
        </div>
        <div class="step-detail-item">
          <el-image style=" width: 30%" src="static/img/icon/AI.png" fit="fill"></el-image>
          <div style="margin-top:15px">指导交易签约</div>
        </div>
        <div class="step-detail-item">
          <el-image style=" width: 30%" src="static/img/icon/AI.png" fit="fill"></el-image>
          <div style="margin-top:15px">推动交易履行</div>
        </div>
        <div class="step-detail-item">
          <el-image style=" width: 30%" src="static/img/icon/AI.png" fit="fill"></el-image>
          <div style="margin-top:15px">项目产业化跟进</div>
        </div>
        <div class="step-detail-item">
          <el-image style=" width: 30%" src="static/img/icon/AI.png" fit="fill"></el-image>
          <div style="margin-top:15px">政策奖励申报</div>
        </div>
      </div>
      <div class="report">实时对接播报：</div>
    </el-card>

    <el-card shadow="always" style="margin-top:20px">
      <h3>专家咨询</h3>
      <div class="consult">
        <div class="consult-left">
          <div>
            <span>高分子化学领域</span>
            <span>新能源领域</span>
            <span>动力学领域</span>
            <span>更多 >></span>
          </div>
          <div class="expert-container">
            <div class="expert-item" v-for="expert in experts" :key="expert.index">
              <el-image :src="expert.avatar"></el-image>
              <div>{{expert.name}}</div>
              <div>领域: {{expert.domain}}</div>
              <div>任职于：{{expert.college}}</div>
              <div class="consulting">咨询</div>
            </div>
          </div>
        </div>
        <div class="consult-right">
          <h3>合作院校</h3>
          <div class="college-container">
            <div class="college-item" v-for="college in colleges" :key="college.index">
              <div>
                <el-image :src="college.avatar"></el-image>
              </div>
              <div>
                <div>{{college.name}}</div>
                <div>{{college.place}}</div>
                <div>重点学科：{{college.subjects}}</div>
              </div>
            </div>
          </div>
          <span>更多院校</span>
        </div>
      </div>
    </el-card>

    <el-card class="comments" shadow="always" style="margin-top:20px;margin-bottom:20px">
      <h3>科技成果评价</h3>
      <p>崇科网络科技有限公司按照委托者的要求，由具有评价资质的第三方专业机构聘请专家，坚持实事求是、科学民主、注重质量、讲求实效的原则，依照规定的程序和标准，对被评价科技成果进行审查与辨别，对其科学性、创造性、先进性、可行性和应用前景等进行评价并作出相应结论。</p>
      <h3 class="title">科技成果评价的重要性</h3>
      <p>国家科技成果等级和推荐国家科技奖励的重要佐证材料；</p>
      <p>有利减少技术交易中买卖双方的沟通和谈判成本，提高交易效率；</p>
      <p>有利于获取政府财政资金支持，国务院印发的《“十三五”国家科技创新规划的通知》种把第三方的评价结果作为财政科技经费支持的重要依据。</p>
    </el-card>

    <el-card shadow="always" style="margin-top:20px;margin-bottom:20px">
      <h3>科技成果评价的流程</h3>
      <div class="comment-step">
        <div class="step-item">
          <h3>咨询申请</h3>
          <p>委托方了解评价内容与流程，向崇科投研部提交申请</p>
        </div>
        <div class="step-item">
          <h3>初步审查</h3>
          <p>崇科评价机构对委托者的评价资料进行形式审查</p>
        </div>
        <div class="step-item">
          <h3>签订合同</h3>
          <p>接受委托后，双方商定评价时间和评价要求，并缴纳服务费用</p>
        </div>
        <div class="step-item">
          <h3>组织评价</h3>
          <p>崇科组织专业团队进行评价，方式有会议，网络和通讯评价等方式</p>
        </div>
        <div class="step-item">
          <h3>做出结论</h3>
          <p>按照科技部《科学技术评价方法》进行打分，综合所有专家意见做出结论</p>
        </div>
        <div class="step-item">
          <h3>交付报告</h3>
          <p>按照规定时间、方式和份数向评价委托方交付评价报告</p>
        </div>
      </div>
      <p>查看更多科技成果评价内容</p>
    </el-card>

    <el-card shadow="always" style="margin-top:20px;margin-bottom:20px">
      <div class="example">成功案例</div>
    </el-card>
    <el-row>
      <end-of-page />
    </el-row>
  </div>
</template>

<script>
import HeaderTittle from "@/components/HeaderTittle";
import EndOfPage from "@/components/EndOfPage";

export default {
  name: "index",
  components: { HeaderTittle, EndOfPage },
  data: function() {
    return {
      input1: "",
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
      experts: [
        {
          avatar: "",
          name: "大棍子",
          domain: "流体力学",
          college: "中科院"
        },
        {
          avatar: "",
          name: "大背头",
          domain: "流体力学",
          college: "中科院"
        },
        {
          avatar: "",
          name: "大喷子",
          domain: "流体力学",
          college: "中科院"
        }
      ],
      colleges: [
        {
          avatar: "",
          name: "浙江大学",
          place: "杭州市",
          subjects: "管理科学与工程"
        },
        {
          avatar: "",
          name: "浙江大学",
          place: "杭州市",
          subjects: "管理科学与工程"
        },
        {
          avatar: "",
          name: "浙江大学",
          place: "杭州市",
          subjects: "管理科学与工程"
        },
        {
          avatar: "",
          name: "浙江大学",
          place: "杭州市",
          subjects: "管理科学与工程"
        }
      ],
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
      imgList: [
        {
          name: "overview",
          src: "static/img/banner-overview.png",
          title: "崇科，做科技市场的捕猎人"
        }
      ],
      technologies: {
        device: [
          {
            title: "钢结构、空间结构、码头船坞工程类产品",
            titleTag: [
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "高端制造"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "海洋工程装备"
              }
            ],
            tags: ["大批量销售阶段", "地区：广东 深圳"],
            content:
              "公司制造高强度高耐候性建筑用锌-5%铝-混合稀土合金（Galfan）镀层拉索产品研制，单层索网结构点支式幕墙的索夹装置荣获2009年度东莞市专利优秀奖，建筑门窗多点锁闭五金系统荣获2010年东莞市科学技术进步三等奖，“高强度高耐候性建筑用锌-5%铝-混合稀土合金（Galfan）镀层拉索产品研制”项目荣获2013年度“中国钢结构协会科学技术奖”一等奖。"
          },
          {
            title: "车用可视化智动新风系统产品项目",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能制造"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "高端制造"
              }
            ],
            tags: ["研发阶段", "地区：江苏 南京"],
            content:
              "纤风物语™ 车内智动新风系统是一款集多功能显示器、滤芯传感器、纤风物语App、多功能定制滤芯为一体的车内空气可视化管理系统，是一款智能车内空气净化软件，通过手机绑定智能设备，实现随时随地检测车内外空气质量，及时更换滤芯，改善车内空气质量。"
          },
          {
            title: "量子点增强显示技术",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能制造"
              },
              {
                backgroundColor: "#fdedec",
                color: "#ec7063",
                name: "医疗设备与器械"
              }
            ],
            tags: ["测试验证阶段", "地区：日本"],
            content:
              "公司的量子点技术将打破国际垄断，成为中国市场上量子点显示材料与技术应用的引领者，为显示面板商、终端品牌商提供质优价廉的QLED 材料、技术解决方案，持续提高消费者的视觉体验。"
          },
          {
            title: "脉冲激光分子束外延装置",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能制造"
              },
              {
                backgroundColor: "#f2f4f4",
                color: "#99a3a4",
                name: " 高性能复合材料"
              }
            ],
            tags: ["市场推广阶段", "地区：辽宁 大连"],
            content:
              "成石英窗导入真空腔内照射到成膜靶上，靶被照射后吸收高密度能量而形成的羽辉（Plume）状等离子体，靶材升华后堆积到设在对面的基板上而成膜。"
          },
          {
            title: "流场测控",
            titleTag: [
              {
                backgroundColor: "#f5eef8",
                color: "#af7ac5",
                name: "航天航空"
              },
              {
                backgroundColor: "#ebedef",
                color: "#5d6d7e",
                name: "新型交通"
              }
            ],
            tags: ["研发阶段", "地区：浙江杭州"],
            content:
              "根据流场核心算法和独有的变马赫数三维非对向线性插值计算方法，可以完成复杂环境下的全区域三维气动流场的测试工作，数据的采集、处理、实时显示和存储同步完成，极大的提高了气动流场的测试性能和效率，降低了操作难度.主要应用于航空发动机行业、市政暖通行业、桥梁楼宇设计院所、车型机型船型设计行业和叶轮风机行业等，解决了国内测试成本高、售后服务困难等相关痛点。"
          }
        ],
        material: [
          {
            title: "电池阻燃发泡产品研发",
            titleTag: [
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "先进化工材料"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "智能制造"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "高性能复合材料"
              }
            ],
            tags: ["市场研发阶段", "地区：浙江嘉兴"],
            content:
              "阻燃高回弹泡棉（UEF系列）可以满足动力电池软包&方形电芯的热管理需求，提供优良的隔热、阻燃、鼓胀应力吸收等功能，帮助动力电池提升安全性能、延长循环寿命、提升振动耐受性。独有的导热胶-水冷板-隔热层一体成型方案可以同时满足客户对电池模组温度控制、轻量化及简化装配难度等需求。"
          },
          {
            title: "高透全义齿氧化锆陶瓷材料开发",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "先进无机非金属材料"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "智能制造"
              }
            ],
            tags: ["市场推广阶段", "地区：黑龙江哈尔滨"],
            content:
              "高透全义齿氧化锆瓷块具有高强度和良好的透光性，还有卓越的强度和水热稳定性；由于采用特殊的生产工艺，锆块的内部结构完全均质；锆块具有极佳的边缘稳定性和超强的抗裂强度，适用于高水平美学修复。 适用范围：内冠、内冠桥、全冠、全冠桥、种植等。"
          },
          {
            title: "铝合金新材料生产商",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "先进金属材料"
              },
              {
                backgroundColor: "#fdedec",
                color: "#ec7063",
                name: "先进化工材料"
              },
              {
                backgroundColor: "#fdedec",
                color: "#ec7063",
                name: "先进无机非金属材料"
              }
            ],
            tags: ["大批量销售阶段", "地区：上海"],
            content:
              "铝锭浇铸石墨定量器通过手轮顺时针或逆时针旋转调节固定在该调节螺纹一端的堵头固定架的高度,石墨堵头通过固定销固定在堵头固定架上。经改进后,利用石墨不粘铝的特性,选用石墨材质减少或杜绝因铝液粘连的氧化铝皮导致堵汤使铝液从定量器池漏出造成人员安全事故。"
          },
          {
            title: "磁性材料研发生产",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "先进金属材料"
              },
              {
                backgroundColor: "#f2f4f4",
                color: "#99a3a4",
                name: " 先进无机非金属材料"
              },
              {
                backgroundColor: "#f2f4f4",
                color: "#99a3a4",
                name: " 半导体/集成电路"
              }
            ],
            tags: ["市场推广阶段", "地区：江苏南京"],
            content:
              "烧结钕铁硼永磁材料压片成型机，可通过重量传感器设置预定重量值可以定量的对伸缩放料管内进行放入钕铁硼磁粉原料，通过伸缩放料管可以根据模具的位置来调节放料口的位置，让放料口的位置可以适配模具位置，通过倾斜设置的伸缩放料管可以让原料快速滑入下模腔内，结构简单，通用性强。"
          },
          {
            title: "高透全义齿氧化锆陶瓷材料开发",
            titleTag: [
              {
                backgroundColor: "#f5eef8",
                color: "#af7ac5",
                name: "先进无机非金属材料"
              }
            ],
            tags: ["市场推广阶段", "地区：浙江杭州"],
            content:
              "高透全义齿氧化锆瓷块具有高强度和良好的透光性，还有卓越的强度和水热稳定性；由于采用特殊的生产工艺，锆块的内部结构完全均质；锆块具有极佳的边缘稳定性和超强的抗裂强度，适用于高水平美学修复。 适用范围：内冠、内冠桥、全冠、全冠桥、种植等。"
          }
        ],
        biomedical: [
          {
            title: "量子点增强显示技术",
            titleTag: [
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "智能制造"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "医疗设备与器械"
              }
            ],
            tags: ["测试验证阶段", "地区：韩国"],
            content:
              "低成本QD粒子合成环境，仅用Ethanol洗涤QD 无水氧性阻隔膜，工艺制成简化一半，良率品质大幅提高 一次性连续制膜成型单线产能大幅提高 NTSC较OLED提高26%，达115%以上，较LCD提高47%，亮度提高16-21% CdSe方案达到欧盟0.01ppm镉含量RoHS标准，且亮度优于Samsung的InP无镉方案 能广泛应用于显示面板，医疗显影，节能照明，以及太阳能发电等领域。目前国内市场仍然处于材料研究的早期阶段。"
          },
          {
            title: "脑机接口通迅设备及控制器",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "通信网络"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "人工智能"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "医疗设备与器械"
              }
            ],
            tags: ["市场推广阶段", "地区：浙江杭州"],
            content:
              "脑电产品的通迅设备和控制器。产品能实现高速全数字脑电采集及实时脑电数据同步等功能。采样精度高、体积小、内置锂电池供电，便于在多场合实验场景的搭建。实时高速精确采集脑电信息，过滤后转化为数字信息，可用于神经科技、医疗、娱乐等行业。"
          },
          {
            title: "心脏三维标测手术系统",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "医疗设备与器械"
              },
              {
                backgroundColor: "#fdedec",
                color: "#ec7063",
                name: "人工智能"
              }
            ],
            tags: ["市场推广阶段", "地区：江苏南京"],
            content:
              "公司专注于心脏心律失常的创新介入治疗产品-心脏三维标测手术系统的研发工作，正在研发的三维标测手术系统旨在降低手术器械成本，努力实现打破国外公司目前对中国市场的技术和产品垄断，提升国产医疗器械技术含金量和技术自主程度。"
          },
          {
            title: "非侵入性的高血压管理技术",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "医疗设备与器械"
              },
              {
                backgroundColor: "#f2f4f4",
                color: "#99a3a4",
                name: " 人工智能"
              }
            ],
            // 缺少阶段
            tags: ["阶段", "地区：广东 深圳"],
            content:
              "PhysioCue 2.0 高血压降压器从外部刺激颈动脉压力受体（位于脖子内的颈动脉窦中）。 该 治疗设备为手持式，配套使用本公司研发的冷端设备。在精确的温度及期间内，低温刺激压力受 体能调节自律神经系统、刺激副交感神经系统、控制交感神经（因为交感神经能促进血管舒张以 及心率下降） 以上三种功效（调节、刺激及控制）能较快的降低（患者/用户）血压。"
          },
          {
            title: "病原微生物精准检测",
            titleTag: [
              {
                backgroundColor: "#f5eef8",
                color: "#af7ac5",
                name: "医疗设备与器械"
              },
              {
                backgroundColor: "#ebedef",
                color: "#5d6d7e",
                name: "人工智能"
              }
            ],
            tags: ["测试阶段", "地区：浙江杭州"],
            content:
              "自主研发双链RNA探针捕获二代技术，致力于病原微生物精准检测及血液肿瘤基因诊断相关服务，拥有自主研发的宏 基因组mNGS检测及靶向捕获技术平台，提供感染性相关疾病、血液病等领域 的伴随诊断检测服务。"
          }
        ],
        artIntel: [
          {
            title: "体温检测人脸识别一体机",
            titleTag: [
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "物联网"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "人工智能"
              }
            ],
            tags: ["市场推广阶段", "地区：杭州"],
            content:
              "专业AI体温检测人脸识别产品，智能测温、无需接触、开机即用、测温精准。误差正负0.5摄氏度，支持远距离测温，支持强逆光环境。百度算法，无接触测温，自动报警，口罩识别，活体检测。"
          },
          {
            title: "小型长航时电动垂直起降固定翼无人机",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "航天航空"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "新型交通"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "机器人"
              }
            ],
            tags: ["市场推广阶段", "地区：广东中山"],
            content:
              "E6电动垂直起降固定翼无人机采用独创的可收放式旋翼实现垂直起降的专利技术，具备大载重、长航时、5000米海拔高原垂直起降能力，挂载灵活，可携带可见光相机、倾斜摄影相机、多光谱相机、双光吊舱、激光雷达等载荷，垂起载重能力最大可达10公斤，最长航时超过4个小时，可同时携带多种载荷作业。"
          },
          {
            title: "非侵入性的高血压管理技术",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "医疗设备与器械"
              }
            ],
            tags: ["测试验证阶段", "地区：上海"],
            content:
              "PhysioCue 2.0 高血压降压器从外部刺激颈动脉压力受体（位于脖子内的颈动脉窦中）。 该 治疗设备为手持式，配套使用本公司研发的冷端设备。在精确的温度及期间内，低温刺激压力受 体能调节自律神经系统、刺激副交感神经系统、控制交感神经（因为交感神经能促进血管舒张以 及心率下降） 以上三种功效（调节、刺激及控制）能较快的降低（患者/用户）血压。"
          },
          {
            title: "孕妇外周血血浆游离 DNA 提取技术",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "生物医药"
              }
            ],
            tags: ["大批量销售阶段", "地区：广东深圳"],
            content:
              "孕妇外周血血浆游离 DNA 提取 富集及胎儿 DNA 富集试剂：  磁珠法孕妇血浆总 DNA 提取试剂 DNA 回收率和行业金标 凯杰试剂盒相 当  样本中胎儿 DNA 富集试剂： 可将样本中胎儿 DNA 的占比提高 60 120%  样本中总 DNA 富集试剂：对总 DNA 含量低（低至 0.1ng/ uL ）的样本进行总 DNA 等效富集（不改变目标染色体 参照染色体的比值） ），以满足数字 PCR 对总 DNA 含量要求。"
          },
          {
            title: "物联网应用系统+安防服务",
            titleTag: [
              {
                backgroundColor: "#f5eef8",
                color: "#af7ac5",
                name: "半导体/集成电路"
              }
            ],
            tags: ["研发阶段", "地区：上海"],
            content:
              "国内发展–国家和行业的推动，物联网需要更多大规模应用，报警器类产品在国外尤其是欧美市场C端普及率高，多国强制立法，报警器及监测类产品在欧美家庭环境安装数量多,出货规模仅此手机产品，全球窄带物联网进入商用阶段,电信运营商迫切需要更大规模应用产品。"
          }
        ],
        fifthG: [
          {
            title: "钢结构、空间结构、码头船坞工程类产品",
            titleTag: [
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "高端制造"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "海洋工程装备"
              }
            ],
            tags: ["大批量销售阶段", "地区：广东 深圳"],
            content:
              "公司制造高强度高耐候性建筑用锌-5%铝-混合稀土合金（Galfan）镀层拉索产品研制，单层索网结构点支式幕墙的索夹装置荣获2009年度东莞市专利优秀奖，建筑门窗多点锁闭五金系统荣获2010年东莞市科学技术进步三等奖，“高强度高耐候性建筑用锌-5%铝-混合稀土合金（Galfan）镀层拉索产品研制”项目荣获2013年度“中国钢结构协会科学技术奖”一等奖。"
          },
          {
            title: "车用可视化智动新风系统产品项目",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能制造"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "高端制造"
              }
            ],
            tags: ["研发阶段", "地区：江苏 南京"],
            content:
              "纤风物语™ 车内智动新风系统是一款集多功能显示器、滤芯传感器、纤风物语App、多功能定制滤芯为一体的车内空气可视化管理系统，是一款智能车内空气净化软件，通过手机绑定智能设备，实现随时随地检测车内外空气质量，及时更换滤芯，改善车内空气质量。"
          },
          {
            title: "量子点增强显示技术",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能制造"
              },
              {
                backgroundColor: "#fdedec",
                color: "#ec7063",
                name: "医疗设备与器械"
              }
            ],
            tags: ["测试验证阶段", "地区：日本"],
            content:
              "公司的量子点技术将打破国际垄断，成为中国市场上量子点显示材料与技术应用的引领者，为显示面板商、终端品牌商提供质优价廉的QLED 材料、技术解决方案，持续提高消费者的视觉体验。"
          },
          {
            title: "脉冲激光分子束外延装置",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能制造"
              },
              {
                backgroundColor: "#f2f4f4",
                color: "#99a3a4",
                name: " 高性能复合材料"
              }
            ],
            tags: ["市场推广阶段", "地区：辽宁 大连"],
            content:
              "成石英窗导入真空腔内照射到成膜靶上，靶被照射后吸收高密度能量而形成的羽辉（Plume）状等离子体，靶材升华后堆积到设在对面的基板上而成膜。"
          },
          {
            title: "流场测控",
            titleTag: [
              {
                backgroundColor: "#f5eef8",
                color: "#af7ac5",
                name: "航天航空"
              },
              {
                backgroundColor: "#ebedef",
                color: "#5d6d7e",
                name: "新型交通"
              }
            ],
            tags: ["研发阶段", "地区：浙江杭州"],
            content:
              "根据流场核心算法和独有的变马赫数三维非对向线性插值计算方法，可以完成复杂环境下的全区域三维气动流场的测试工作，数据的采集、处理、实时显示和存储同步完成，极大的提高了气动流场的测试性能和效率，降低了操作难度.主要应用于航空发动机行业、市政暖通行业、桥梁楼宇设计院所、车型机型船型设计行业和叶轮风机行业等，解决了国内测试成本高、售后服务困难等相关痛点。"
          }
        ],
        waterPollutionControl: [
          {
            title: "钢结构、空间结构、码头船坞工程类产品",
            titleTag: [
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "高端制造"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "海洋工程装备"
              }
            ],
            tags: ["大批量销售阶段", "地区：广东 深圳"],
            content:
              "公司制造高强度高耐候性建筑用锌-5%铝-混合稀土合金（Galfan）镀层拉索产品研制，单层索网结构点支式幕墙的索夹装置荣获2009年度东莞市专利优秀奖，建筑门窗多点锁闭五金系统荣获2010年东莞市科学技术进步三等奖，“高强度高耐候性建筑用锌-5%铝-混合稀土合金（Galfan）镀层拉索产品研制”项目荣获2013年度“中国钢结构协会科学技术奖”一等奖。"
          },
          {
            title: "车用可视化智动新风系统产品项目",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能制造"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "高端制造"
              }
            ],
            tags: ["研发阶段", "地区：江苏 南京"],
            content:
              "纤风物语™ 车内智动新风系统是一款集多功能显示器、滤芯传感器、纤风物语App、多功能定制滤芯为一体的车内空气可视化管理系统，是一款智能车内空气净化软件，通过手机绑定智能设备，实现随时随地检测车内外空气质量，及时更换滤芯，改善车内空气质量。"
          },
          {
            title: "量子点增强显示技术",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能制造"
              },
              {
                backgroundColor: "#fdedec",
                color: "#ec7063",
                name: "医疗设备与器械"
              }
            ],
            tags: ["测试验证阶段", "地区：日本"],
            content:
              "公司的量子点技术将打破国际垄断，成为中国市场上量子点显示材料与技术应用的引领者，为显示面板商、终端品牌商提供质优价廉的QLED 材料、技术解决方案，持续提高消费者的视觉体验。"
          },
          {
            title: "脉冲激光分子束外延装置",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能制造"
              },
              {
                backgroundColor: "#f2f4f4",
                color: "#99a3a4",
                name: " 高性能复合材料"
              }
            ],
            tags: ["市场推广阶段", "地区：辽宁 大连"],
            content:
              "成石英窗导入真空腔内照射到成膜靶上，靶被照射后吸收高密度能量而形成的羽辉（Plume）状等离子体，靶材升华后堆积到设在对面的基板上而成膜。"
          },
          {
            title: "流场测控",
            titleTag: [
              {
                backgroundColor: "#f5eef8",
                color: "#af7ac5",
                name: "航天航空"
              },
              {
                backgroundColor: "#ebedef",
                color: "#5d6d7e",
                name: "新型交通"
              }
            ],
            tags: ["研发阶段", "地区：浙江杭州"],
            content:
              "根据流场核心算法和独有的变马赫数三维非对向线性插值计算方法，可以完成复杂环境下的全区域三维气动流场的测试工作，数据的采集、处理、实时显示和存储同步完成，极大的提高了气动流场的测试性能和效率，降低了操作难度.主要应用于航空发动机行业、市政暖通行业、桥梁楼宇设计院所、车型机型船型设计行业和叶轮风机行业等，解决了国内测试成本高、售后服务困难等相关痛点。"
          }
        ],
        informationTech: [
          {
            title: "钢结构、空间结构、码头船坞工程类产品",
            titleTag: [
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "高端制造"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "海洋工程装备"
              }
            ],
            tags: ["大批量销售阶段", "地区：广东 深圳"],
            content:
              "公司制造高强度高耐候性建筑用锌-5%铝-混合稀土合金（Galfan）镀层拉索产品研制，单层索网结构点支式幕墙的索夹装置荣获2009年度东莞市专利优秀奖，建筑门窗多点锁闭五金系统荣获2010年东莞市科学技术进步三等奖，“高强度高耐候性建筑用锌-5%铝-混合稀土合金（Galfan）镀层拉索产品研制”项目荣获2013年度“中国钢结构协会科学技术奖”一等奖。"
          },
          {
            title: "车用可视化智动新风系统产品项目",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能制造"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "高端制造"
              }
            ],
            tags: ["研发阶段", "地区：江苏 南京"],
            content:
              "纤风物语™ 车内智动新风系统是一款集多功能显示器、滤芯传感器、纤风物语App、多功能定制滤芯为一体的车内空气可视化管理系统，是一款智能车内空气净化软件，通过手机绑定智能设备，实现随时随地检测车内外空气质量，及时更换滤芯，改善车内空气质量。"
          },
          {
            title: "量子点增强显示技术",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能制造"
              },
              {
                backgroundColor: "#fdedec",
                color: "#ec7063",
                name: "医疗设备与器械"
              }
            ],
            tags: ["测试验证阶段", "地区：日本"],
            content:
              "公司的量子点技术将打破国际垄断，成为中国市场上量子点显示材料与技术应用的引领者，为显示面板商、终端品牌商提供质优价廉的QLED 材料、技术解决方案，持续提高消费者的视觉体验。"
          },
          {
            title: "脉冲激光分子束外延装置",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能制造"
              },
              {
                backgroundColor: "#f2f4f4",
                color: "#99a3a4",
                name: " 高性能复合材料"
              }
            ],
            tags: ["市场推广阶段", "地区：辽宁 大连"],
            content:
              "成石英窗导入真空腔内照射到成膜靶上，靶被照射后吸收高密度能量而形成的羽辉（Plume）状等离子体，靶材升华后堆积到设在对面的基板上而成膜。"
          },
          {
            title: "流场测控",
            titleTag: [
              {
                backgroundColor: "#f5eef8",
                color: "#af7ac5",
                name: "航天航空"
              },
              {
                backgroundColor: "#ebedef",
                color: "#5d6d7e",
                name: "新型交通"
              }
            ],
            tags: ["研发阶段", "地区：浙江杭州"],
            content:
              "根据流场核心算法和独有的变马赫数三维非对向线性插值计算方法，可以完成复杂环境下的全区域三维气动流场的测试工作，数据的采集、处理、实时显示和存储同步完成，极大的提高了气动流场的测试性能和效率，降低了操作难度.主要应用于航空发动机行业、市政暖通行业、桥梁楼宇设计院所、车型机型船型设计行业和叶轮风机行业等，解决了国内测试成本高、售后服务困难等相关痛点。"
          }
        ],
        chemicalEnergy: [
          {
            title: "钢结构、空间结构、码头船坞工程类产品",
            titleTag: [
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "高端制造"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "海洋工程装备"
              }
            ],
            tags: ["大批量销售阶段", "地区：广东 深圳"],
            content:
              "公司制造高强度高耐候性建筑用锌-5%铝-混合稀土合金（Galfan）镀层拉索产品研制，单层索网结构点支式幕墙的索夹装置荣获2009年度东莞市专利优秀奖，建筑门窗多点锁闭五金系统荣获2010年东莞市科学技术进步三等奖，“高强度高耐候性建筑用锌-5%铝-混合稀土合金（Galfan）镀层拉索产品研制”项目荣获2013年度“中国钢结构协会科学技术奖”一等奖。"
          },
          {
            title: "车用可视化智动新风系统产品项目",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能制造"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "高端制造"
              }
            ],
            tags: ["研发阶段", "地区：江苏 南京"],
            content:
              "纤风物语™ 车内智动新风系统是一款集多功能显示器、滤芯传感器、纤风物语App、多功能定制滤芯为一体的车内空气可视化管理系统，是一款智能车内空气净化软件，通过手机绑定智能设备，实现随时随地检测车内外空气质量，及时更换滤芯，改善车内空气质量。"
          },
          {
            title: "量子点增强显示技术",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能制造"
              },
              {
                backgroundColor: "#fdedec",
                color: "#ec7063",
                name: "医疗设备与器械"
              }
            ],
            tags: ["测试验证阶段", "地区：日本"],
            content:
              "公司的量子点技术将打破国际垄断，成为中国市场上量子点显示材料与技术应用的引领者，为显示面板商、终端品牌商提供质优价廉的QLED 材料、技术解决方案，持续提高消费者的视觉体验。"
          },
          {
            title: "脉冲激光分子束外延装置",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能制造"
              },
              {
                backgroundColor: "#f2f4f4",
                color: "#99a3a4",
                name: " 高性能复合材料"
              }
            ],
            tags: ["市场推广阶段", "地区：辽宁 大连"],
            content:
              "成石英窗导入真空腔内照射到成膜靶上，靶被照射后吸收高密度能量而形成的羽辉（Plume）状等离子体，靶材升华后堆积到设在对面的基板上而成膜。"
          },
          {
            title: "流场测控",
            titleTag: [
              {
                backgroundColor: "#f5eef8",
                color: "#af7ac5",
                name: "航天航空"
              },
              {
                backgroundColor: "#ebedef",
                color: "#5d6d7e",
                name: "新型交通"
              }
            ],
            tags: ["研发阶段", "地区：浙江杭州"],
            content:
              "根据流场核心算法和独有的变马赫数三维非对向线性插值计算方法，可以完成复杂环境下的全区域三维气动流场的测试工作，数据的采集、处理、实时显示和存储同步完成，极大的提高了气动流场的测试性能和效率，降低了操作难度.主要应用于航空发动机行业、市政暖通行业、桥梁楼宇设计院所、车型机型船型设计行业和叶轮风机行业等，解决了国内测试成本高、售后服务困难等相关痛点。"
          }
        ]
      },
      demands: {
        newEnergy: [
          {
            title: "大面积新型弱光发电薄膜太阳能电池",
            titleTag: [
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "太阳能电池"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "柔性"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "期望解决时间：2020年底"
              }
            ],
            tags: ["大批量销售阶段", "地区：广东 深圳"],
            content:
              "团队从核心上完全掌握了染料敏化和有机钙钛矿太阳电池的制备工艺，通过对其工作电极半导体材料的研究，拓展了该电池在可见光区域的响应，并通过真空建筑玻璃封装技术的引入，制备了新型节能玻璃基薄膜太阳电池。"
          },
          {
            title: "寻求EVA(乙烯-乙酸乙烯共聚物）改性技术",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "乙烯-乙酸乙烯共聚物"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "新能源"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "期望解决时间：2020年底"
              }
            ],
            tags: ["研发阶段", "地区：江苏 南京"],
            content:
              "EVA热熔胶是护贝膜产品的主要原材料，目前市面上的EVA粘性一般，需要通过改性来增加其热熔时的粘性。在保证EVA热熔挤出时无晶点的前提下，通过对EVA胶粒进行改性，增强其热熔状态的粘性、而降低常温状态的自粘性。"
          },
          {
            title: "太阳能在烘干采暖方面的技术难题",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "太阳能"
              },
              {
                backgroundColor: "#fdedec",
                color: "#ec7063",
                name: "烘干采暖"
              }
            ],
            tags: ["测试验证阶段", "地区：日本"],
            content:
              "太阳能在烘干采暖方面的利用，目前太阳能产品大多局限于热转化这块，对于烘干、采暖功能开发使用的较少，公司目前自主研发了一些技术，想与高校有这块研究方向的老师合作对技术进行深入的研究开发，整体项目投入预算暂定50万，具体可详谈。"
          },
          {
            title: "高温蒸汽灭菌对精密医疗器械及锐器的损伤",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "高温蒸汽灭菌"
              },
              {
                backgroundColor: "#f2f4f4",
                color: "#99a3a4",
                name: " 医疗器械"
              }
            ],
            tags: ["市场推广阶段", "地区：辽宁 大连"],
            content:
              "公司主营非动力核技术民用化的应用与开发。高温蒸汽灭菌对精密医疗器械及锐器的损伤，没有一种检测设备，希望发明一种检测装置，能检测出高温蒸汽灭菌对精密医疗器械及锐器的损伤程度，出具检测报告。"
          },
          {
            title: "寻求热稳态效率光能量转换技术",
            titleTag: [
              {
                backgroundColor: "#f5eef8",
                color: "#af7ac5",
                name: "导热材料间匹配性问题"
              },
              {
                backgroundColor: "#ebedef",
                color: "#5d6d7e",
                name: "贴片式Vcsel激光"
              }
            ],
            tags: ["研发阶段", "地区：浙江杭州"],
            content:
              "寻求导热材料间匹配性问题引发的热稳态效率光能量转换技术，需解决问题：1、针对现有市场对材料降本方针，灯具一般采用散热材料塑包铝材质，这样继而引发灯具Ts温度过高（一般超过100度）； 2、灯具设计端开发考虑到高Ts温度、高光效要求，故把主要因素转嫁到封装企业，故封装企业的导热途径需做好工作。"
          }
        ],
        material: [
          {
            title: "铸钢丸成丸粒度分布控制技术",
            titleTag: [
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "钢铸丸"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "热处理"
              }
            ],
            tags: ["市场研发阶段", "地区：浙江嘉兴"],
            content:
              "离心法成丸粒度主要在S170-S660，经提高离心速度后粒度可向下偏移，但各规格占比基本在10%上下，而当前市场需求主要集中在S280以下，更大规格易造成库存，最终不得不破碎成铸钢砂，企业成本上升。 寻求新的铸钢丸成丸粒度控制方法，可使所需粒度钢丸成丸比率有较大提升，降低企业库存压力。"
          },
          {
            title: "可使吸附式干燥机压力露点稳定在-50℃以下的技术需求",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "压缩空气净化设备"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "吸附式干燥机"
              }
            ],
            tags: ["市场推广阶段", "地区：黑龙江哈尔滨"],
            content:
              "公司主要做专业型压缩空气净化设备，现主要问题是研究吸附剂的再生问题，再生温度、再生压力和再生流量的控制。目前低露点（压力露点-50以下）的领域，存在露点不达标，露点不稳定等问题，现征集可使吸附式干燥机压力露点稳定在-50℃以下的方案。"
          },
          {
            title: "橡胶过滤挤出机的机头清胶技术",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "电动葫芦"
              },
              {
                backgroundColor: "#fdedec",
                color: "#ec7063",
                name: "橡胶过滤"
              }
            ],
            tags: ["大批量销售阶段", "地区：上海"],
            content:
              "企业目已有专利技术的新型橡胶过滤挤出机成型产品，目前存在橡胶挤出后机头留存橡胶量较多，无法清空现象。现寻求能实现类似电动葫芦或自动机械手或蒸汽系统等的抓取技术，以解决过滤挤出机机头橡胶留存无法清空的技术难题。"
          },
          {
            title: "压住膜具降温技术难题",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "膜具降温"
              },
              {
                backgroundColor: "#f2f4f4",
                color: "#99a3a4",
                name: " 机械"
              },
              {
                backgroundColor: "#f2f4f4",
                color: "#99a3a4",
                name: " 期望解决时间：2021年底"
              }
            ],
            tags: ["市场推广阶段", "地区：江苏南京"],
            content:
              "企业主营制造研发电动转向机，现需求压铸模具内高效、性价比高的降温方法，减少成本，最好能使控制温度实现全自动或提供能控制温度的镶嵌式软件，意向与浙江就近周边的一些高校研究所合作。"
          },
          {
            title: "芯片焊接、组装、封装等工艺提升",
            titleTag: [
              {
                backgroundColor: "#f5eef8",
                color: "#af7ac5",
                name: "芯片焊接"
              },
              {
                backgroundColor: "#f5eef8",
                color: "#af7ac5",
                name: "电焊"
              },
              {
                backgroundColor: "#f5eef8",
                color: "#af7ac5",
                name: "期望解决时间：2021年底"
              }
            ],
            tags: ["市场推广阶段", "地区：浙江杭州"],
            content:
              "技术需求内容：能有效监控或防呆的治具、设备或其他的有效管控，保证端子端子壳完全适配。 封装 传统的封装：环氧树脂胶包封 灌封（其与线材特别是铁氟龙线的密着性较差，在潮湿环境中易进水） 技术需求内容：一种能与铁氟龙线材密着性好封装胶，能长期在潮湿或水中使用，不进水。"
          }
        ],
        infoTech: [
          {
            title: "线上支付结算系统技术需求",
            titleTag: [
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "线上支付结算"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "软件系统"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "期望解决时间：2021年底"
              }
            ],
            tags: ["测试验证阶段", "地区：韩国"],
            content:
              "该项目需求一套线上支付结算系统解决方案。在消费者和第三方商家之间搭建收款平台，所收货款后期结算给第三方商家，或者第三方商家提现。"
          },
          {
            title: "智能讲解系统技术需求",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "智能讲解"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "软件系统"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "期望解决时间：2021年底"
              }
            ],
            tags: ["市场推广阶段", "地区：浙江杭州"],
            content:
              "技术需求：智能讲解系统解决方案 项目需求设计一套智能讲解系统解决方案，通过移动式便携智能讲解设备（可支持多国语言）实现，该设备可以在游客自主游览景区景点时，实现给游客讲解景点功能。"
          },
          {
            title: "数字图像处理技术需求",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "数字图像处理"
              },
              {
                backgroundColor: "#fdedec",
                color: "#ec7063",
                name: "软件"
              },
              {
                backgroundColor: "#fdedec",
                color: "#ec7063",
                name: "期望解决时间：2021年底"
              }
            ],
            tags: ["市场推广阶段", "地区：江苏南京"],
            content:
              "核心技术是将图像处理应用于各个领域，包括：三维重建软件、人工智能传感器技术，智能立体停车系统、智能分类垃圾系统等领域。 本企业现在需求以下技术： 1、3D图像处理技术 2、人工智能传感器技术 3、人工智能红外线或激光技术 4、C  语言编译算法设计 5、集成电路设计，电路板设计 合作方式：技术买断。"
          },
          {
            title: "监测血糖变化技术需求",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "检测血糖"
              },
              {
                backgroundColor: "#f2f4f4",
                color: "#99a3a4",
                name: " 微电子"
              }
            ],
            // 缺少阶段
            tags: ["阶段", "地区：广东 深圳"],
            content:
              "公司拟定在智能穿戴上开发监测血糖功能，通过智能穿戴设备对收集到的心率信息处理，完成此项工作。 项目主要需求： 1、监测血糖的算法，可实现在智能穿戴设备（手环）上完成监测功能 2、研发周期一年。"
          },
          {
            title: "开发可用于固定型多维传感器",
            titleTag: [
              {
                backgroundColor: "#f5eef8",
                color: "#af7ac5",
                name: "传感器"
              },
              {
                backgroundColor: "#ebedef",
                color: "#5d6d7e",
                name: "电子信息"
              }
            ],
            tags: ["测试阶段", "地区：浙江杭州"],
            content:
              "公司目前正在进行高标准农田立体监测精准管控信息系统的研制，该产品应用于农业、水利领域和各地灌区管理处。 我公司目前正在攻克的技术难题是固定型多维传感器的研发，为了尽快解决技术难点，公司准备寻求技术合作，主要合作内容是：合作开发可用于固定型多维传感器。"
          }
        ],
        biomedical: [
          {
            title: "壳聚糖医用敷料",
            titleTag: [
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "医疗"
              },
              {
                backgroundColor: "#fef9e7",
                color: "#f4d03f",
                name: "壳聚糖"
              }
            ],
            tags: ["市场推广阶段", "地区：杭州"],
            content:
              "用壳聚糖为原料，1、生产医用伤口处理，产品的主要功效：长效灭菌，促进伤口愈合。2、医用面膜等其它医疗器械的生产。寻求能够提供帮助的高校研究所或者企业提供帮助。"
          },
          {
            title: "生物医药技术需求",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "中草药"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "生物医药"
              },
              {
                backgroundColor: "#ebf5fb",
                color: "#5dade2",
                name: "期望解决时间：2021年6月"
              }
            ],
            tags: ["市场推广阶段", "地区：广东中山"],
            content:
              "目前主要产品有：穿心莲内酯及穿心莲提取物、雷公藤甲素及雷公藤系列产品、黄芪甲苷及黄芪系列产品、柿叶提取物、两面针提取物、番石榴叶提取物罗汉果提取物、银杏叶提取物、熊果酸等十余种产品。    项目主要需求：    1.提高制备柱的装柱量，使之达到公斤级水平，回收率〉80%。    2.使用助溶技术，增加熊果酸醇溶性。"
          },
          {
            title: "寻求手术刀片、针灸针、电极片、金属注射针头生产技术",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "一次性使用无菌手术刀"
              },
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "一次性使用针灸针"
              },
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "一次性心电电极片"
              },
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "兽用金属注射针头"
              },
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "期望解决时间：2021年底"
              }
            ],
            tags: ["测试验证阶段", "地区：上海"],
            content:
              "现筹备一次性使用无菌手术刀片自动化生产线、一次性使用针灸针自动化生产线、一次性心电电极片自动化生产线、兽用金属注射针头自动化组装线。现面向全国自动化生产设备厂家求购以上生产线设备，有以上设备的生产企业或个人有专利技术请联系我。"
          },
          {
            title: "探究重组胶原蛋白对皮肤生理功能的影响及机制研究",
            titleTag: [
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "重组胶原蛋白"
              },
              {
                backgroundColor: "#eafaf1",
                color: "#58d68d",
                name: "生物医药"
              }
            ],
            tags: ["大批量销售阶段", "地区：广东深圳"],
            content:
              "主要技术需求如下：1、探究重组胶原蛋白对皮肤屏障功能的作用及机制研究；2、探究重组胶原蛋白对皮肤色素合成的影响；3、探究重组胶原蛋白对长波紫外线辐射的人皮肤成纤维细胞损伤的保护作用；4、探究重组胶原蛋白对角质形成细胞的炎症损伤的保护作用。"
          },
          {
            title: "骨化三醇软胶囊",
            titleTag: [
              {
                backgroundColor: "#f5eef8",
                color: "#af7ac5",
                name: "重组胶原蛋白"
              },
              {
                backgroundColor: "#f5eef8",
                color: "#af7ac5",
                name: "生物医药"
              }
            ],
            tags: ["研发阶段", "地区：上海"],
            content:
              "技术需求描述：因内容药液为油脂，且主药含量极低，无法检测溶出度。希望按化药仿制药开发骨化三醇软胶囊药品，制定产品质量标准并上报国家局注册申请。 技术需求缘由：制造工艺改进 意向解决方式：委托开发。"
          }
        ]
      },
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
      ]
    };
  },
  methods: {
    goTo(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}
.achievement {
  .intro-detail {
    display: flex;
    height: 150px;
    justify-content: center;
    .intro-detail-img {
      padding: 5px;
      //   border: 1px solid #ccc;
    }
  }
  .transform {
    text-align: left;
    .transform-main {
      display: flex;
      .transform-main-left {
        margin-right: 20px;
      }
    }
  }
  .step {
    .step-detail {
      display: flex;
    }
  }
  .consult {
    display: flex;
    .consult-left {
      flex: 1;
      text-align: left;
      .expert-container {
        display: flex;
        .expert-item {
          flex: 1;
          margin: 10px;
          padding: 10px;
          border: 1px solid #ccc;
        }
      }
      .consulting {
        margin-top: 10px;
        text-align: center;
        color: red;
        font-weight: bold;
      }
    }
    .consult-right {
      flex: 1;
      .college-container {
        display: flex;
        flex-wrap: wrap;
      }
      .college-item {
        width: 50%;
      }
    }
  }
  .comments {
    text-align: left;
    .title {
      text-align: center;
      color: red;
    }
  }
  .comment-step {
    display: flex;
    flex-wrap: wrap;
    .step-item {
      padding: 10px;
      margin: 20px;
      width: 25%;
      border: 1px solid #fff;
      border-radius: 100px;
      background: rgb(244, 222, 222);
    }
  }
  .example {
    text-align: left;
  }
}

.header-image {
  position: relative;
  height: 430px;
  width: 100%;
  margin-top: 0px;
  background-image: url(/static/img/banner-achievement.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  background-position: center;
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
  margin: 20px 0;
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
  margin-top: 10px;
  margin-bottom: 50px;
  .policy-main {
    height: 500px;
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
  font-weight: bold;
}
.policy-search-content {
  float: left;
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: left;
}
</style>
