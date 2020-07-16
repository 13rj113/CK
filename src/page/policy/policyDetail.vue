<template>
  <div id="app">
    <!-- 头部导航 -->
    <header-tittle />
    <div class="main">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>政策解读</el-breadcrumb-item>
          <el-breadcrumb-item>政策详细页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="policy-page"></div>
      <div style="text-align:left;margin-left: 60px;">
        <P>政策来源：</P>
      </div>
      <div style="text-align:left;margin-left: 60px;">
        <P>附件下载：</P>
      </div>
    </div>
    <!-- 尾部导航 -->
    <end-of-page />
  </div>
</template>

<script>
import HeaderTittle from "@/components/HeaderTittle";
import EndOfPage from "@/components/EndOfPage";

export default {
  name: "policyDetail",
  components: { HeaderTittle, EndOfPage },
  data: function() {
    return {};
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
.main {
  height: 1000px;
  padding: 10px;
  .breadcrumb {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .policy-page {
    height: 70%;
    border: 1px solid #ccc;
    margin-left: 60px;
    margin-right: 60px;
    margin-top: 50px;
  }
}
</style>