<template>
  <div>
    <h2>{{message}} - {{$route.params.username}} - {{$route.params.age}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'Hi, I am Quincy!'
      }
    }
  }
</script>
