<template>
  <div id="main_page">
    <div class="top">
      <div class="btn btn-bg">说明</div>
      <div class="btn btn-bg">EN</div>
    </div>
    <div class="app-main">
      <router-view />
    </div>

    <div class="tabBar">
      <div class="li tab1"><span>主页</span> </div>
      <div class="li tab2"><span>订单</span></div>
      <div class="li tab3"><span>养殖仓</span></div>
      <div class="li tab4"><span>我的</span></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "tabBar"
}
</script>

<style lang="scss" scoped>
  #main_page{
    height: 100vh;
    width: 100%;
    overflow-y: scroll;
  }

  .top{
    position: absolute; z-index: 9;
    top: 20px;
    left: 0px;
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