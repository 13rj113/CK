<template>
  <div>
    <el-row class="header">
      <el-col :span="6">
        <div class="header-brand">
          崇科
          <i class="el-icon-s-promotion"></i>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="header-select">
          <el-input
            v-model="input"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            style="height:50px"
          >
            <!-- <el-button slot="append" icon="el-icon-search"></el-button> -->
          </el-input>
        </div>
      </el-col>
      <el-col :span="12">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#1C2833"
          text-color="#fff"
          active-text-color="#fff"
          collapse-transition="true"
          style="height:60px"
        >
          <el-menu-item index="1" style="float:right">登录</el-menu-item>
          <el-submenu index="2" style="float:right">
            <template slot="title">服务</template>
            <el-menu-item index="2-1">技术猎头</el-menu-item>
            <el-menu-item index="2-2">政策解读</el-menu-item>
            <el-menu-item index="2-3">园区服务</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" style="float:right">需求库</el-menu-item>
          <el-menu-item index="4" style="float:right">技术库</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "",
      input: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.header {
  height: 60px;
}
.header-brand {
  font-size: 150%;
  color: #fff;
  line-height: 60px;
  background-color: #1c2833;
}
.header-select {
  line-height: 60px;
  background-color: #1c2833;
}
.header-select input.el-input__inner {
  height: 80%;
  border-radius: 20px;
}
.header-select .el-input--suffix {
  width: 80%;
}
</style>