<template>
  <div>
    <h2>{{message}}</h2>
    <p>username: {{$route.params.username}}</p>
    <p>password: {{$route.params.password}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'Params Page'
      }
    },
    beforeRouteEnter: (to, from, next) => {
      next();
//      next(false);
    }
  }
</script>
