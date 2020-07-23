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
          <!-- <el-input
            v-model="input"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            style="height:50px"
          >
          </el-input>-->
          &nbsp;
        </div>
      </el-col>
      <el-col :span="12">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#1C2833"
          text-color="#fff"
          active-text-color="#fff"
          :collapse-transition="true"
          style="height:60px"
        >
          <el-menu-item v-show="!loginFlag" index="1" style="float:right" @click="login">登录</el-menu-item>
          <el-submenu index="1" style="float:right" v-show="loginFlag">
            <template slot="title">{{username}}</template>
            <el-menu-item index="1-1" @click="logOut">退出登录</el-menu-item>
          </el-submenu>
          <el-submenu index="2" style="float:right">
            <template slot="title">服务</template>
            <el-menu-item index="2-1">技术猎头</el-menu-item>
            <el-menu-item index="2-2" @click="goTo('policy')">政策解读</el-menu-item>
            <el-menu-item index="2-3" @click="goTo('/park')">园区服务</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" style="float:right" @click="goTo('/platform')">需求库</el-menu-item>
          <el-menu-item index="4" style="float:right" @click="goTo('/platform')">技术库</el-menu-item>
          <el-menu-item index="5" style="float:right" @click="goTo('/index')">首页</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <!-- 登录 -->
    <el-dialog :visible.sync="dialogLoginVisible" width="30%">
      <el-form ref="loginForm" :model="loginForm" label-width="80px" style="padding-right: 50px">
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogLoginVisible: false,
      loginFlag: false,
      username: "",
      loginForm: {
        username: "",
        password: ""
      },
      activeIndex: "",
      input: ""
    };
  },
  created() {
    if (sessionStorage.getItem("username")) {
      this.loginFlag = true;
      this.username = sessionStorage.getItem("username");
    } else {
      this.loginFlag = false;
    }
  },
  methods: {
    login() {
      this.dialogLoginVisible = true;
    },
    onLogin() {
      if (
        this.loginForm.username === "admin" &&
        this.loginForm.password === "123456"
      ) {
        this.dialogLoginVisible = false;
        sessionStorage.setItem("username", this.loginForm.username);
        this.loginFlag = true;
        this.$router.push({
          name: "index"
        });
      } else {
        alert("账户或密码有误，请重新输入。");
      }
    },
    logOut() {
      this.loginFlag = false;
      sessionStorage.removeItem("username");
    },
    goTo(url) {
      this.$router.push(url);
    }
  }
};
</script>
<style lang="scss">
.header {
  height: 60px;
  .el-menu.el-menu--horizontal {
    border-bottom: solid 0px white;
  }
  .header-brand {
    font-size: 200%;
    color: #fff;
    line-height: 60px;
    background-color: #1c2833;
    text-align: left;
    padding-left: 15px;
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
}
</style>