<template>
  <div id="main_page">
    <div class="top">
      <div class="btn btn-bg">说明</div>
      <div class="btn btn-bg">EN</div>
    </div>
    <div class="app-main">
      <div class="dong">
<!--        <img class="d1" src="../assets/h-d1.png">-->
        <img v-for="h2 in 10" :key="h2" class="d2" src="../assets/hd2.png">
      </div>
      <router-view />
    </div>

    <div class="tabBar">
      <div class="li tab1" @click="navTo('index')" ><span>主页</span> </div>
      <div class="li tab2" @click="navTo('order')"><span>订单</span></div>
      <div class="li tab3" @click="navTo('studio')"><span>养殖仓</span></div>
      <div class="li tab4" @click="navTo('my')"><span>我的</span></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "tabBar",
  methods:{
    navTo(url){
      this.$router.push({
        name: url
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  #main_page{
    height: 100vh;
    width: 100%;
    overflow-y: scroll; position: relative;

  }
  .app-main{
    //background-image: url("../assets/hone-bg.jpg");
    background-image: url("../assets/Home.jpg");
    background-size:100% 100%; overflow: hidden;
    height: 100vh;
    width: 100%;

    .dong{
      position: absolute;
      width: 100%;height: 100%;
      overflow:hidden;

      .d1{width: 100%; height: 100%; opacity: 0.3;
          animation: Dshan 3000ms infinite;
      }
      @keyframes Dshan {
        0%{transform: scale(1)}
        50%{transform: scale(2)}
        100%{transform: scale(1)}
      }
      .d2{
        position: absolute;
        top: 40%; left: 50%;
        transform: translate(-50%, -50%);
        width: 10%;
        animation: Dh2 10000ms infinite;
      }
      .d2:nth-child(1){ animation-delay: 1S;}
      .d2:nth-child(2){ animation-delay: 2S;}
      .d2:nth-child(3){ animation-delay: 3S;}
      .d2:nth-child(4){ animation-delay: 4S;}
      .d2:nth-child(5){ animation-delay: 5S;}
      .d2:nth-child(6){ animation-delay: 6S;}
      .d2:nth-child(7){ animation-delay: 7S;}
      .d2:nth-child(8){ animation-delay: 8S;}
      .d2:nth-child(9){ animation-delay: 9S;}
      .d2:nth-child(10){ animation-delay: 10S;}

      @keyframes Dh2 {
        0%{width: 10%; opacity: 1}
        100%{width: 300%; opacity: 0}

      }



    }


    & > div{height: 100vh; position: relative; z-index: 2; overflow-y: scroll}
  }

  .top{
    position: absolute; z-index: 9;
    top: 20px;left: 0px;
    width: 100%; color: #FFF;
    display: flex; justify-content: space-around;
    .btn{height:40px; line-height: 45px; width: 120px;  }

  }

  .tabBar{
    position: absolute; z-index: 9;
    bottom: 20px; left: 0px;
    width: 100%; padding: 0px 10px; box-sizing: border-box;
    display: flex; justify-content: space-around;

    .li{
      background-size: 65px 65px;
      background-repeat: no-repeat;
      background-position:center;
      height: 65px; min-width: 65px;
      display: flex;  align-items:flex-end;
      span{
        font-weight: 600; display: block;width: 100%;
        text-align: center; line-height: 30px; font-size: 14px;

      }
    }

    .tab1{background-image: url("../assets/tabBar1.png")}
    .tab2{background-image: url("../assets/tabBar2.png")}
    .tab3{background-image: url("../assets/tabBar3.png")}
    .tab4{background-image: url("../assets/tabBar4.png")}
  }
</style>