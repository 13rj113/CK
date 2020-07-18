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
        <span>已关注</span>
        <span>热点推荐</span>
        <span>最新发布</span>
      </div>
      <el-divider></el-divider>
      <div class="filter-domain">
        按照领域：
        <el-tag class="domain-tag" v-for="tag in domainTag" :key="tag">{{tag}}</el-tag>
      </div>

      <div class="filter-area">
        按照地区：
        <el-tag class="area-tag" type="warning" v-for="tag in domainTag" :key="tag">{{tag}}</el-tag>
      </div>
    </div>

    <el-divider></el-divider>

    <div class="content-container">
      <div class="content-item" v-for="item in items" :key="item">
        <div class="content-main">
          <div class="content-image">
            <el-image style="width: 150px;height: 200px;" :src="item.image"></el-image>
          </div>
          <div class="content-text">
            <h2>{{item.title}}</h2>
            <div>{{item.text}}</div>
          </div>
        </div>
        <div>服务标签：{{item.tag}}</div>
        <div>项目地区: {{item.area}}</div>
      </div>
    </div>

    <div class="find-more-container">
      <el-image class="find-more" src="static/img/icon/click2.png"></el-image>查看更多...
    </div>
    <end-of-page />
  </div>
</template>

<script>
import HeaderTittle from "@/components/HeaderTittle";
import EndOfPage from "@/components/EndOfPage";

export default {
  name: "platform",
  components: { HeaderTittle, EndOfPage },
  data: function() {
    return {
      domainTag: [
        "新能源",
        "化学化工",
        "新能源",
        "化学化工",
        "新能源",
        "化学化工",
        "新能源",
        "化学化工",
        "新能源",
        "化学化工"
      ],
      items: [
        {
          title: "简易表带式温度测温仪",
          image: "static/img/icon/AI.png",
          text: "巴拉巴拉",
          tag: "专利转让",
          area: "北京"
        },
        {
          title: "简易表带式温度测温仪",
          image: "static/img/icon/AI.png",
          text: "巴拉巴拉",
          tag: "专利转让",
          area: "北京"
        },
        {
          title: "简易表带式温度测温仪",
          image: "static/img/icon/AI.png",
          text: "巴拉巴拉",
          tag: "专利转让",
          area: "北京"
        },
        {
          title: "简易表带式温度测温仪",
          image: "static/img/icon/AI.png",
          text: "巴拉巴拉",
          tag: "专利转让",
          area: "北京"
        },
        {
          title: "简易表带式温度测温仪",
          image: "static/img/icon/AI.png",
          text: "巴拉巴拉",
          tag: "专利转让",
          area: "北京"
        },
        {
          title: "简易表带式温度测温仪",
          image: "static/img/icon/AI.png",
          text: "巴拉巴拉",
          tag: "专利转让",
          area: "北京"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#platform {
  background: rgb(240, 232, 232);
  .head-image {
    height: 200px;
    .head-search {
      margin: 0 auto;
      width: 300px;
      height: 50px;
    }
  }
  .filter-container {
    text-align: left;
    .filter-domain {
      margin-bottom: 10px;
      .domain-tag {
        margin-right: 10px;
      }
    }
    .filter-area {
      .area-tag {
        margin-right: 10px;
      }
    }
  }
  .content-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .content-item {
      margin: 10px;
      background: #fff;
      width: 400px;
      padding: 10px;
      text-align: left;
      .content-main {
        display: flex;
        .content-image {
          margin-right: 10px;
        }
        .content-text {
          h2 {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  .find-more-container {
    margin: 10px 0;
    .find-more {
      vertical-align: middle;
    }
  }
}
</style>