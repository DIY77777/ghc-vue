<template>
  <body id="poster">
      <el-form class="login-container" label-position="left"
               label-width="0px">
          <h3 class="login-title">欢迎登录</h3>
          <el-form-item prop="username">
            <el-input type="text" placeholder="请输入账号" auto-complete="off" v-model="loginForm.username"/>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="请输入密码" auto-complete="off" v-model="loginForm.password"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
  </body>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      this.$axios.post('/login', {
        username: this.username,
        password: this.password
      }).then(successResponse => {
        if (successResponse.data.code === 200) {
          this.$router.replace({path: '/index'})
        }
      }).catch(failResponse => {})
    }
  }

}

</script>
<style scoped>
  body{
    margin: 0; padding: 0 ; border: 0;
  }
  .login-container{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 200px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login-title{
    text-align:center;
    margin:0 auto 40px auto;
    color: #505458;
  }

  #poster {
    background:url("../assets/eva.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
</style>
