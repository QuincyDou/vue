<template>
  <el-menu class="navbar" mode="horizontal">
    <el-dropdown class="dropdown-container" trigger="click">
      <div class="option-wrapper">
        <span>选项</span>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item>设置</el-dropdown-item>
        <el-dropdown-item divided>
          <span>退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    .dropdown-container {
      height: 50px;
      display: inline-block;
      position: absolute;
      right: 35px;
      .option-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
      }
    }
  }
</style>
