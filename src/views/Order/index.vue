<template>
  <div class="Order">
    <div class="main-scroll" >

      <div>暂无订单</div>
    </div>

  </div>

</template>

<script>
export default {
  name: "Order"
}
</script>

<style lang="scss" scoped>
  .Order{
    height: 100vh;
    height: 100vh; position: relative;
    background-image: url("../../assets/hone-bg.jpg");
    background-size:100% 100%; overflow: hidden;
  }

  .main-scroll{
    width: 100%; box-sizing: border-box;
    height: calc(100% - 180px);
    margin-top: 80px;
  }

</style>