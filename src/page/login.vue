<template>
  <div>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <table width="100%">
          <tr>
            <td>
              <el-input class="my_el-input__inner" v-model="user.username" placeholder="用户名"></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <el-input
                class="my_el-input__inner"
                v-model="user.password"
                placeholder="密码"
                @keydown.enter.native="doLogin"
                show-password
              ></el-input>
              <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
            </td>
          </tr>
          <tr>
            <!-- 占两行-->
            <td colspan="2">
              <el-button
                style="width: 100%;margin-top:10px"
                type="primary"
                @click="doLogin"
                round
              >登录</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    doLogin() {
      if (this.user.username === "admin" && this.user.password === "123456") {
        const { name, pwd, $router } = this;
        this.$router.push({
          name: "index",
          params: {
            username: this.name
          }
        });
      } else {
        alert("账户或密码有误，请重新输入。");
      }
      //alert(JSON.stringify(this.user)); //可以直接把this.user对象传给后端进行校验用户名和密码
    }
  }
};
</script>

<style type="text/css">
.my_el-input__inner {
  border-color: #4e5b85;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 0;
  color: #fff;
}
</style>

