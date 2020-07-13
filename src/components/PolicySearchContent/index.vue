<template>
  <div>
    <el-row style="height:100px;margin-bottom:20px" :gutter="20">
      <el-col :span="4" style="height:100px">
        <el-image style=" height: 100%" src="static/img/policy.jpg" fit="fill"></el-image>
      </el-col>
      <el-col :span="20" style="height:100px">
        <div class="policy-search-title">2020年度小微企业服务补贴券申领使用</div>
        <div
          class="policy-search-content"
        >小微企业在购买服务时可租住选择签约服务机构，根据签订的服务合同金额申请“专用券”或“ton通用券”服务补贴。每个企业年度申领服务补贴总额不超过30000元。</div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss">
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