<template>
  <div class="studio">
    <img class="s-qiu" src="../../assets/s-qiu.png">
    <img class="s-font" src="../../assets/s-font.png">
    <img class="s-xian" src="../../assets/s-xian.png">
    <div class="s-quan">
      <div class="quan quan1"></div>
      <div class="quan quan2"></div>
      <div class="quan quan3"></div>

      <div class="guang g1"></div>
      <div class="guang g2"></div>
      <div class="guang g3"></div>
      <div class="guang g4"></div>

    </div>

    <div class="s_center">
      <div class="qiupao">
        <div class="qiu" v-for="(qiu , i) in 10" :key="i"></div>
      </div>


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

.s-quan{
  position: absolute;
  top: 41%; left: 47%;
  width:24%; height: 8%;
  //border-radius:50%;
  .quan{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%) rotate(-20deg);
    border: 1px solid #339ad9;
    border-radius:50%;
    height: 30%; width: 40%;

    animation: quan 3s linear infinite;
    -webkit-animation: quan 3s linear infinite;
    opacity: 0;

  }
  .quan2{height: 50%; width: 60%; animation-delay: 1S }
  .quan3{height: 70%; width: 80%;  animation-delay: 2S }

  .guang{
    position: absolute;
    left: 0%; top: 10%;
    height: 10%;width: 40%;
    background: #339ad9;
  }
  .g2{top: 30%;width: 20%; background: #42b983;}
  .g3{top: 50%;width: 50%;background: #eed740}
  .g4{top: 70%;width: 40%;background: blue}

}
@keyframes quan{
  0%{opacity: 0}
  30%{opacity: 0.5}
  60%{opacity: 1}
  100%{opacity: 1}
}

.s_center{
  position: absolute; z-index: 1;
  top: 16%; left: 20%;
  background-image: url("../../assets/s_center.png");
  background-size: 100% 100%;
  height: 53%; width: 61%;
  box-sizing: border-box;padding:5%;


  .qiupao{
    overflow: hidden; position: relative;
    width: 100%;height: 100%;
  }

  .qiu{
    position: absolute; z-index: -1;
    bottom: -100px; left: 10%;
    padding: 10px; border-radius: 50%;
    background: url("../../assets/s_qi1.png") no-repeat;
    background-size: 100% 100%;
    opacity: 1;

    animation: qipao 5s linear infinite;
    -webkit-animation: qipao 5s linear infinite;
  }
  .qiu:nth-child(1){left: 15%; animation-delay: 4514ms;}
  .qiu:nth-child(2){left: 21%; animation-delay: 5457ms;}
  .qiu:nth-child(3){left: 65%; animation-delay: 2323ms;}
  .qiu:nth-child(4){left: 78%; animation-delay: 657ms;}
  .qiu:nth-child(5){left: 43%; animation-delay: 6477ms;}
  .qiu:nth-child(6){left: 47%; animation-delay: 7554ms;}
  .qiu:nth-child(7){left: 54%; animation-delay: 3454ms;}
  .qiu:nth-child(8){left: 67%; animation-delay: 4571ms;}
  .qiu:nth-child(9){left: 79%; animation-delay: 3145ms;}
  .qiu:nth-child(10){left: 41%; animation-delay: 5121ms;}
}
@keyframes qipao{
  0%{transform: translateY(0px); opacity: 1;}
  50%{transform: translateY(-500px)}
  100%{ transform: translateY(-500px); opacity: 0.5;}
}



</style>