<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" labelPosition="left" class="card-box login-form">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <!--<span class="svg-container"><i class="icon iconfont icon-yonghu"></i></span>-->
        <span class="svg-container"><icon-svg icon-class="yonghu"/></span>
        <el-input type="text" name="username" v-model="loginForm.username" autoComplete="on" placeholder="邮箱"/>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container"><icon-svg icon-class="mima"/></span>
        <el-input type="password" name="password" v-model="loginForm.password" @keyup.enter.native="handleLogin"
                  autoComplete="on" placeholder="密码"/>
      </el-form-item>
      <el-form-item prop="captcha">
        <span class="svg-container"><icon-svg icon-class="yanzhengma"/></span>
        <el-input type="text" name="captcha" v-model="loginForm.captcha" @keyup.enter.native="handleLogin" placeholder="验证码"/>
        <img class="captcha" :src="loginForm.imgUrl" @click.self="changeCaptcha">
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click.native.prevent="handleLogin" style="width: 100%">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {validEmail} from '../../utils/validate'

  export default {
    name: 'login',
    data() {
      const validateEmail = (rule, value, callback) => {
        if (!validEmail(value)) {
          callback(new Error('请输入正确的邮箱地址'));
        } else {
          callback();
        }
      }
      return {
        loginForm: {
          username: '',
          password: '',
          captcha: '',
          imgUrl: ''
        },
        loginRules: {
          username: [{required: true}],
          password: [{required: true, min: 6, message: '密码不能小于6位'}],
          captcha: [{required: true}]
        },
        loading: false
      }
    },
    methods: {
      changeCaptcha() {

      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true;
            this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
              this.loading = false;
              this.$router.push({path: '/'});
            }).catch(() => {
              this.loading = false;
            })
          } else {
            console.log('error submit!');
            return false;
          }
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'src/styles/mixin.scss';

  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container {
    @include relative;
    height: 100vh;
    background-color: $bg;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
    }
    .thirdparty-button{
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
    .captcha {
      width: 70px;
      height: 35px;
      position: absolute;
      right: 10px;
      top: 6px;
      cursor: pointer;
    }
  }
</style>
