<template>
  <div id="app">
    <!-- 头部导航 -->
    <header-tittle />
    <div class="header-image"></div>
    <div class="main">
      <div class="sub-title">
        <el-row class="show-headhunting">
          <i class="el-icon-view"></i>
          什么是技术猎头
        </el-row>
      </div>
      <div class="headhunting-image-1">
        <el-row class="headhunting-first">
          <el-col class="headhunting-first-1" :span="8">
            <div class="headhunting-first-technology">
              <p class="headhunting-sub-title">技术猎头</p>
              <p class="headhunting-sub-content">打破企业寻找高新技术困难的壁垒</p>
            </div>
          </el-col>
          <el-col class="headhunting-first-2" :span="8" :offset="8">
            <div class="headhunting-first-policy">
              <p class="headhunting-sub-title">政策解读</p>
              <p class="headhunting-sub-content">帮助科创企业争取到最大的政策扶持</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="headhunting-second"></el-row>
        <el-row class="headhunting-third">
          <el-col class="headhunting-third-1" :span="8">
            <div class="headhunting-third-service">
              <p class="headhunting-sub-title">园区服务</p>
              <p class="headhunting-sub-content">实现科创公司与政府科创园区之间的对接</p>
            </div>
          </el-col>
          <el-col class="headhunting-third-2" :span="8" :offset="8">
            <div class="headhunting-third-science">
              <p class="headhunting-sub-title">科技成果转化</p>
              <p class="headhunting-sub-content">实现科学研究与技术开发的进一步推广实践</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-divider></el-divider>
      <el-row class="process">
        <el-col class="process-text" :span="4"></el-col>
        <el-col class="process-tab" :span="1"></el-col>
        <el-col class="process-text" :span="4"></el-col>
        <el-col class="process-tab" :span="1"></el-col>
        <el-col class="process-text" :span="4"></el-col>
        <el-col class="process-tab" :span="1"></el-col>
        <el-col class="process-text" :span="4"></el-col>
        <el-col class="process-tab" :span="1"></el-col>
        <el-col class="process-text" :span="4"></el-col>
      </el-row>

      <div class="sub-title">
        <el-row class="show-headhunting">
          <i class="el-icon-data-line"></i>
          技术猎头的优势
        </el-row>
      </div>
      <div class="headhunting-image-2">
        <el-row class="headhunting-first">
          <el-col class="headhunting-first-1" :span="8">
            <div class="headhunting-first-technology">
              <p class="headhunting-sub-title">技术猎头</p>
              <p class="headhunting-sub-content">打破企业寻找高新技术困难的壁垒</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="headhunting-second">
          <el-col class="headhunting-second-1" :span="8" :offset="16">
            <div class="headhunting-second-service">
              <p class="headhunting-sub-title">政策解读</p>
              <p class="headhunting-sub-content">帮助科创企业争取到最大的政策扶持</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="headhunting-third">
          <el-col class="headhunting-third-1" :span="8">
            <div class="headhunting-third-service">
              <p class="headhunting-sub-title">园区服务</p>
              <p class="headhunting-sub-content">实现科创公司与政府科创园区之间的对接</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-divider></el-divider>

      <div class="sub-title">
        <el-row class="show-headhunting">
          <i class="el-icon-magic-stick"></i>
          崇科技术猎头的社会价值
        </el-row>
      </div>
      <el-row class="social-value" :gutter="50">
        <el-col class="social-value-col" :span="6"></el-col>
        <el-col class="social-value-col" :span="6"></el-col>
        <el-col class="social-value-col" :span="6"></el-col>
        <el-col class="social-value-col" :span="6"></el-col>
      </el-row>

      <div class="sub-title">
        <el-row class="show-headhunting">
          <i class="el-icon-tickets"></i>
          应用示意图
        </el-row>
      </div>
      <div class="application-text"></div>
      <div class="application-process"></div>

      <div class="sub-title">
        <el-row class="show-headhunting">
          <i class="el-icon-office-building"></i>
          成功案例
        </el-row>
      </div>
      <el-row class="success-img" :gutter="50">
        <el-col class="success-col" :span="6"></el-col>
        <el-col class="success-col" :span="6"></el-col>
        <el-col class="success-col" :span="6"></el-col>
        <el-col class="success-col" :span="6"></el-col>
      </el-row>
      <el-row class="success-text" :gutter="50">
        <el-col class="success-col" :span="6"></el-col>
        <el-col class="success-col" :span="6"></el-col>
        <el-col class="success-col" :span="6"></el-col>
        <el-col class="success-col" :span="6"></el-col>
      </el-row>
    </div>
    <!-- 尾部导航 -->
    <end-of-page />
  </div>
</template>

<script>
import HeaderTittle from "@/components/HeaderTittle";
import EndOfPage from "@/components/EndOfPage";

export default {
  name: "headhunting",
  components: { HeaderTittle, EndOfPage },
  data: function() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
body {
  margin: 0;
}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
}
.header-image {
  height: 400px;
  width: 100%;
  margin-top: 0px;
  background-image: url(/static/img/banner-headhunting.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  background-position: center;
  .header-select {
    line-height: 500px;
    // background-color: #1c2833;
  }
  .header-select input.el-input__inner {
    height: 80%;
    border-radius: 15px;
    opacity: 0.65;
  }
  .header-select .el-input--suffix {
    width: 30%;
    .el-input__icon {
      color: black;
      width: 50px;
    }
  }
}
.main {
  height: 2500px;
  padding: 20px;
  .sub-title {
    text-align: left;
    margin-top: 20px;
    margin-bottom: 10px;
    .show-headhunting {
      font-size: 25px;
      color: black;
    }
  }
  .headhunting-image-1 {
    height: 15%;
    width: 100%;
    border: 1px solid #e5e7e9;
    margin-top: 0px;
    background-image: url(/static/img/earth.png);
    background-repeat: no-repeat;
    background-size: 28% 100%;
    -moz-background-size: 100% 100%;
    background-position: center;
    .headhunting-sub-title {
      font-size: 20px;
      color: #3498db;
      margin-bottom: 0px;
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    }
    .headhunting-sub-content {
      font-size: 15px;
      margin-top: 10px;
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    }
    .headhunting-first {
      height: 40%;
      width: 100%;
      .headhunting-first-1 {
        height: 100%;
        .headhunting-first-technology {
          text-align: right;
          margin-top: 50px;
        }
      }
      .headhunting-first-2 {
        height: 100%;
        .headhunting-first-policy {
          text-align: left;
          margin-top: 50px;
        }
      }
    }
    .headhunting-second {
      height: 20%;
      width: 100%;
    }
    .headhunting-third {
      height: 40%;
      width: 100%;
      .headhunting-third-1 {
        height: 100%;
        .headhunting-third-service {
          text-align: right;
          margin-top: 0px;
        }
      }
      .headhunting-third-2 {
        height: 100%;
        .headhunting-third-science {
          text-align: left;
          margin-top: 0px;
        }
      }
    }
  }
  .process {
    margin-left: 60px;
    margin-right: 60px;
    height: 80px;
    border: 2px solid #e5e7e9;
    .process-text {
      height: 100%;
      border: 2px solid #e5e7e9;
    }
    .process-tab {
      height: 100%;
      border: 2px solid #e5e7e9;
    }
  }
  .headhunting-image-2 {
    height: 15%;
    width: 100%;
    border: 2px solid #e5e7e9;
    margin-top: 0px;
    background-image: url(/static/img/advantage.png);
    background-repeat: no-repeat;
    background-size: 30% 120%;
    -moz-background-size: 100% 100%;
    background-position: center;
    .headhunting-sub-title {
      font-size: 20px;
      color: #3498db;
      margin-bottom: 0px;
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    }
    .headhunting-sub-content {
      font-size: 15px;
      margin-top: 10px;
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    }
    .headhunting-first {
      height: 30%;
      width: 100%;
      margin-left: 100px;
      .headhunting-first-1 {
        height: 100%;
        .headhunting-first-technology {
          text-align: center;
          margin-top: 50px;
        }
      }
    }
    .headhunting-second {
      height: 30%;
      width: 100%;
      .headhunting-second-1 {
        height: 100%;
        .headhunting-second-service {
          text-align: center;
          margin-top: 0px;
        }
      }
    }
    .headhunting-third {
      height: 40%;
      width: 100%;
      .headhunting-third-2 {
        height: 100%;
        .headhunting-third-service {
          text-align: right;
          margin-top: 0px;
        }
      }
      .headhunting-third-2 {
        height: 100%;
        .headhunting-third-science {
          text-align: left;
          margin-top: 0px;
        }
      }
    }
  }
  .social-value {
    height: 10%;
    width: 100%;
    padding-left: 50px;
    .social-value-col {
      height: 100%;
      border: 2px solid #e5e7e9;
    }
  }
  .application-text {
    height: 10%;
    width: 100%;
    border: 2px solid #e5e7e9;
  }
  .application-process {
    height: 15%;
    width: 100%;
    border: 2px solid #e5e7e9;
  }
  .success-img {
    height: 8%;
    width: 100%;
    padding-left: 50px;
    .success-col {
      height: 100%;
      border: 2px solid #e5e7e9;
    }
  }
  .success-text {
    height: 8%;
    width: 100%;
    padding-left: 50px;
    .success-col {
      height: 100%;
      border: 2px solid #e5e7e9;
    }
  }
}
</style>