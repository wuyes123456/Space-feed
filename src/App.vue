<template>
  <div id="app">
    <div class="view-page" >
      <router-view />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 15px;
}

.btn-bg{
  background-image: url("./assets/btn-bg.png");
  display: inline-block;
  background-size: 100% 100%;
}
.btn-red{
  background-image: url("./assets/btn-red.png");
  display: inline-block;
  background-size: 100% 100%;
}
.btn-lan{
  background-image: url("./assets/btn-lan.png");
  display: inline-block;
  background-size: 100% 100%;
}

</style>
