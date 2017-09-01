<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import {Navbar, Sidebar, AppMain} from '../layout'

  export default {
    name: 'layout',
    components: {
      Navbar,
      Sidebar,
      AppMain
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/styles/mixin.scss';

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    .sidebar-container {
      transition: width 0.28s ease-out;
      width: 180px;
      height: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
      overflow-y: auto;
    }
    .main-container {
      min-height: 100%;
      transition: margin-left 0.28s ease-out;
      margin-left: 180px;
    }
  }
</style>
