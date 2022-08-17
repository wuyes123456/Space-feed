<template>
  <div class="EXchShow" @click="openClose()">

    <div class="ExchReserve">
      <div class="tit">输入预约金额</div>
      <div class="p">金额访问：1-100</div>
      <div class="tis">(预约金额为领养价值的10%)</div>

      <div class="from">
        <div class="inp"><input class="num" placeholder="请输入信息"></div>

        <div class="btn btn-red">确定</div>
      </div>
      <div class="btn btn-lan close" >取消</div>


    </div>

  </div>

</template>

<script>
export default {
  name: "ExchReserve",
  methods:{
    openClose(){
      this.$emit("close");
    }
  }
}
</script>

<style lang="scss" scoped>
    .EXchShow{
      position: fixed; z-index: 98;
      top: 0px; left: 0px;
      width: 100%; height: 100%;
      transform: scale(1);
      -webkit-animation: Show 0.5s linear 1; /* Chrome, Safari, Opera */
      animation: Show 0.5s linear 1;
    }
    @keyframes Show{
        0%{opacity: 0; transform:scale(1.2) }
        100%{opacity: 1; transform: scale(1)}
    }

    .ExchReserve{
      position: fixed; z-index: 99;
      top: 50%; left: 50%;
      transform: translate(-50% , -50%);
      background-image: url("../../../assets/open_bg.png") ;
      background-size: 100% 100%;
      min-height:200px;
      width: 320px;
      color: #FFF; text-align: center;
      padding: 30px; box-sizing: border-box;

    }

    .tit{font-size: 18px; margin-bottom: 10px;}
    .p{font-size: 15px}
    .tis{font-size: 12px; color: #EEE; }
    .from{
      display: flex; align-items: center;
      margin: 10px 20px;
      .inp{flex: 1;
        .num{width: 100%; line-height: 30px; text-align: center;border-radius: 3px; border: none; }
      }
      .btn{width: 80px; height: 40px;line-height: 45px; margin-left: 20px; }
    }

    .close{
      width: 120px; height: 40px;line-height: 45px;
      margin-top: 10px;
    }

</style>