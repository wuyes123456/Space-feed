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

.EXchShow{
  position: fixed; z-index: 98;
  top: 0px; left: 0px;
  width: 100%; height: 100%;
  transform: scale(1);
  -webkit-animation: Show 0.6s linear 1; /* Chrome, Safari, Opera */
  animation: Show 0.6s linear 1;

  opacity: 0; transform:scale(1.2);
  transition: all 1S;
}

.EXchShow.show{
  opacity: 1; transform:scale(1)
}
@keyframes Show{
  0%{opacity: 0; transform:scale(1.2) }
  100%{opacity: 1; transform: scale(1)}
}
.window{
  position: fixed; z-index: 99;
  top: 50%; left: 50%;
  transform: translate(-50% , -50%);
}

</style>
