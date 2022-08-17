<template>
  <div class="studio">
    <img class="s-qiu" src="../../assets/s-qiu.png">
    <img class="s-font" src="../../assets/s-font.png">
    <img class="s-xian" src="../../assets/s-xian.png">
    <div class="s_center">

    </div>
  </div>
</template>

<script>
export default {
  name: "studio"
}
</script>

<style lang="scss" scoped>

.studio{
  height: 100vh;
  height: 100vh; position: relative;
  background-image: url("../../assets/Studio.jpg");
  background-size:100% 100%; overflow: hidden;
}
.s-qiu{
  position: absolute;
  top: 37%; right: 3%;
  width: 24%; height: 11%;

  animation: Sqiu 5S infinite;
  -webkit-animation: Sqiu 5S infinite;
}

.s-font{
  position: absolute;
  top: 38%; right: 30%;
  width: 20%; height: 1.5%;
  animation: Sqiu 5S infinite;
  -webkit-animation: Sqiu 5S infinite;

  animation-delay: 1S;
}
.s-xian{
  position: absolute;
  bottom: 19%; left:19%;
  width: 28%; height: 2%;
  animation: Sqiu 5S infinite;
  -webkit-animation: Sqiu 5S infinite;

  animation-delay: 2.5S;
}

@keyframes Sqiu{
  0%{opacity: 1}
  10%{opacity: 0.5}
  20%{opacity: 0}
  30%{opacity: 0.5}

  40%{opacity: 0}
  60%{opacity: 1}
  70%{opacity: 0}
  80%{opacity: 0.5}
  100%{opacity: 1}

}

.s_center{

}

</style>