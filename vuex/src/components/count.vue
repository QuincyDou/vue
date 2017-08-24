<template>
  <div>
    <h2>{{message}}</h2><hr>
    <p>{{count}}</p>
    <div>
      <!--<button @click="$store.commit('add', 5)">+</button>
      <button @click="$store.commit('reduce')">-</button>-->
      <button @click="add(5)">+</button>
      <button @click="reduce">-</button>
    </div>
    <div>
      <button @click="addAction">++</button>
      <button @click="reduceAction">--</button>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {
        message: 'Hello Vuex'
      }
    },
    /*computed: {
      count () {
        return this.$store.state.count
      }
    },*/
    /*computed: mapState({
      count:state => state.count
    }),*/
    computed: {
      ...mapState(['count']),
      /*count () {
        return this.$store.getters.count
      }*/
      ...mapGetters(['count'])
    },
    methods: {
      ...mapMutations(['add', 'reduce']),
      ...mapActions(['addAction', 'reduceAction'])
    },
    store
  }
</script>
