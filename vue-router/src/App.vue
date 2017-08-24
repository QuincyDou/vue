<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="go">前进</button>
      <button @click="goHome">返回首页</button><br>
      <router-link to="/">首页</router-link> |
      <router-link :to="{name:'Hi', params:{username:'quincy', age:'18'}}">Hi</router-link> |
      <router-link :to="{name:'Hi1', params:{username:'quincy', age:'19'}}">Hi-1</router-link> |
      <router-link :to="{name:'Hi2', params:{username:'quincy', age:'20'}}">Hi-2</router-link> |
      <router-link to="/params/zhangsan/mihua">Params</router-link> |
      <router-link to="/goHome">goHome</router-link> |
      <router-link to="/goParams/wangwu/sansi">goParams</router-link> |
      <router-link to="/quincy">quincy</router-link>
    </div>

    <p>{{$route.name}}</p>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="left" style="float: left; width: 50%; height: 180px; background-color: red"></router-view>
    <router-view name="right" style="float: left; width: 50%; height: 180px; background-color: green"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    go () {
      this.$router.go(1);
    },
    goHome () {
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition:opacity .5s;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  opacity: 0;
  transition:opacity .5s;
}
</style>
