<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" labelPosition="left">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <span class="svg-container"><icon-svg icon-class="yonghuming"/></span>
        <el-input type="text" name="username" v-model="loginForm.username" autoComplete="on" placeholder="邮箱"/>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container"><icon-svg icon-class="mima"/></span>
        <el-input type="password" name="password" v-model="loginForm.password" @keyup.enter.native="handleLogin"
                  autoComplete="on" placeholder="密码"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {validEmail} from '@/utils/validate'

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
          password: ''
        },
        loginRules: {
          username: [{required: true, validator: validateEmail}],
          password: [{required: true, min: 6, message: '密码不能小于6位'}]
        }
      }
    },
    methods: {
      handleLogin() {

      }
    }
  }
</script>

<style>

</style>
