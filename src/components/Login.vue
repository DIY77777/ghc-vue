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
      // eslint-disable-next-line no-unused-vars
      // 1.点击登录按钮，向后端发送数据
      // 2.收到后端的code值，然后触发store中的login方法，把loginForm对象传递给store中的user对象
      var _this = this
      this.$axios.post('/login', {
        username: this.loginForm.username,
        password: this.loginForm.password
      }).then(successResponse => {
        if (successResponse.data.code === 200) {
          _this.$store.commit('login', _this.loginForm)
          // eslint-disable-next-line no-unused-vars
          // 得到保存的访问页面的值，不为空则跳转到该页面
          var path = this.$route.query.redirect
          this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
        } else {
          console.log('返回值不为200')
        }
      }).catch(failResponse => {
        console.log('未请求成功')
      })
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
