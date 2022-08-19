<template>
  <div class="EXchShow" :class="{'show' : show}"  @click="openClose()">

    <div class="ExchReserve window">
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
  data(){
    return{
      show:true,
    }
  },
  methods:{
    openClose(){
      this.show = false;
      setTimeout(()=>{
        this.$emit("close");
      },1000)
    }
  }
}
</script>

<style lang="scss" scoped>
    .ExchReserve{
      background-image: url("../../../assets/open_bg.png") ;
      background-size: 100% 100%;
      min-height:200px;
      width: 320px;
      color: #FFF; text-align: center;
      padding:40px 30px; box-sizing: border-box;
    }

    .tit{font-size: 18px; margin: 10px;}
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